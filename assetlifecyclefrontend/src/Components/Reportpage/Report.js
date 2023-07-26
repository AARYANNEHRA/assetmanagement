import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Report.css";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  Text: {
    fontSize: 12,
    marginLeft: 15,
  },
  box: {
    margin: 5,
  },
});

function Report() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/report").then((res) => {
      setData(res.data.ReportData);
    });
  }, []);
  return (
    <div className="report">
      <div className="inside">
        <PDFDownloadLink
          className="button3"
          document={
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  {Data.map((item) => (
                    <View key={item._id} style={styles.box}>
                      <Text style={styles.Text}>Name : {item.AssetName}</Text>
                      <Text style={styles.Text}>
                        SerialNo : {item.SerialNo}
                      </Text>
                      <Text style={styles.Text}>
                        Purchase Date : {item.PurchaseDate.slice(0, 10)}
                      </Text>
                      <Text style={styles.Text}>
                        Category : {item.Category}
                      </Text>
                      <Text style={styles.Text}>Cost : {item.Cost}</Text>
                      <Text style={styles.Text}>
                        Warranty : {item.Warranty.slice(0, 10)}
                      </Text>
                      <Text style={styles.Text}>
                        Maintenance Date : {item.MaintenanceDate.slice(0, 10)}
                      </Text>
                      <Text style={styles.Text}>
                        Description : {item.Description}
                      </Text>
                      <Text style={styles.Text}>&nbsp;</Text>
                    </View>
                  ))}
                </View>
              </Page>
            </Document>
          }
          fileName="report_data.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Report"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default Report;
