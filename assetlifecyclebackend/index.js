const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const port = 9002;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const assetSchema = new mongoose.Schema({
  AssetName: String,
  SerialNo: String,
  PurchaseDate: Date,
  Category: String,
  Cost: Number,
  Warranty: Date,
  MaintenanceDate: Date,
  Description: String,
});

const User = new mongoose.model("User", userSchema);
const Asset = new mongoose.model("Asset", assetSchema);

app.post("/register", async (req, res) => {
  const { uname, uemail, upassword } = req.body;
  try {
    const existinguser = await User.findOne({ email: uemail });
    if (existinguser) {
      res.send({ message: "user already exists" });
    }

    const user = new User({
      name: uname,
      email: uemail,
      password: upassword,
    });

    const savedUser = await user.save();
    res.send({ message: "succesfully registered" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/login", async (req, res) => {
  const { uemail, upassword } = req.body;
  try {
    const existuser = await User.findOne({ email: uemail });
    if (existuser) {
      if (upassword === existuser.password) {
        res.send({ message: "login succesful", existuser });
      } else {
        res.send({ message: "password incoorect" });
      }
    } else {
      res.send({ message: "User doesn't exist" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/saveasset", async (req, res) => {
  const {
    assetname,
    serialno,
    purchasedate,
    category,
    Cost,
    warranty,
    maintenancedate,
    description,
  } = req.body;
  try {
    const existasset = await Asset.findOne({ serialNo: serialno });
    if (existasset) {
      res.send({ message: "Asset with same serialNo. exists" });
    } else {
      const asset = new Asset({
        AssetName: assetname,
        SerialNo: serialno,
        PurchaseDate: purchasedate,
        Category: category,
        Cost: Cost,
        MaintenanceDate: maintenancedate,
        Warranty: warranty,
        Description: description,
      });
      await asset.save();
      res.send({ message: "asset saved succesfully" });
    }
  } catch (err) {
    res.send(err);
  }
});

app.delete("/assetdelete", async (req, res) => {
  try {
    const { serialno } = req.body;
    const result = await Asset.findOneAndDelete({ SerialNo: serialno });
    if (!result) res.send({ message: "Asset not found" });
    else res.send({ message: "asset deleted succesfully" });
  } catch (err) {
    res.send(err);
  }
});

app.post("/viewasset", async (req, res) => {
  const { serialno } = req.body;
  try {
    const existviewasset = await Asset.findOne({ SerialNo: serialno });
    if (existviewasset) {
      res.send({ existviewasset });
    } else {
      res.send({ message: "Asset doesn't exist" });
    }
  } catch (err) {
    res.send(err);
  }
});

app.put("/assetedit", async (req, res) => {
  const updatedData = req.body;
  try {
    const result = await Asset.findOneAndUpdate(
      { SerialNo: updatedData.serialno },
      {
        $set: {
          MaintenanceDate: updatedData.maintenancedate,
        },
      },
      { new: true }
    );
    if (!result) res.send({ message: "Asset not found" });
    else res.send({ message: "Updated" });
  } catch (err) {
    res.send(err);
  }
});
async function getupcomingmaintenance() {
  const CurrentDate = new Date();
  const NextMontDate = new Date();
  NextMontDate.setMonth(CurrentDate.getMonth() + 1);
  try {
    const upcomingmaintenanceassets = Asset.find({
      MaintenanceDate: { $gte: CurrentDate, $lte: NextMontDate },
    });
    return upcomingmaintenanceassets;
  } catch (err) {
    throw err;
  }
}
async function getExpiredMaintenanceAssets() {
  const currentDate = new Date();

  try {
    const expiredMaintenanceAssets = await Asset.find({
      MaintenanceDate: { $lt: currentDate },
    });

    return expiredMaintenanceAssets;
  } catch (err) {
    throw err;
  }
}
app.get("/data", async (req, res) => {
  try {
    const count = await Asset.countDocuments();
    const sumResult = await Asset.aggregate([
      {
        $group: {
          _id: null,
          totalSum: { $sum: "$Cost" },
        },
      },
    ]);
    const totalCost = sumResult.length > 0 ? sumResult[0].totalSum : 0;
    const totalCategory = await Asset.aggregate([
      {
        $group: {
          _id: "$Category",
          categoryCount: { $sum: 1 },
        },
      },
    ]);
    const upcomingmaintenanceassets = await getupcomingmaintenance();
    const ExpiredMaintenanceAssets = await getExpiredMaintenanceAssets();
    res.json({
      totalCost,
      count,
      totalCategory,
      upcomingmaintenanceassets,
      ExpiredMaintenanceAssets,
    });
  } catch (err) {
    res.send(err);
  }
});

app.get("/maintenance", async (req, res) => {
  try {
    const upcomingmaintenanceassets = await getupcomingmaintenance();
    const ExpiredMaintenanceAssets = await getExpiredMaintenanceAssets();
    res.json({ upcomingmaintenanceassets, ExpiredMaintenanceAssets });
  } catch (err) {
    res.send(err);
  }
});
app.get("/report" , async (req , res)=>{
  try
  {
    const ReportData = await Asset.find({});
    res.json({ReportData});
  }
  catch(err)
  {
    res.send(err);
  }
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
