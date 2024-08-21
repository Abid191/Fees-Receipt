import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import "./App.css";

const styles = StyleSheet.create({
  page: {
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    position: "relative",
  },
  TopHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
  },
  pageNumber: {
    fontSize: 8,
    marginTop: 3,
  },
  pageNumberOne: {
    fontSize: 6,
    marginTop: 3,
  },
  printDateTime: {
    fontSize: 8,
    marginTop: 3,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  Image: {
    width: 40,
    marginTop: 3,
  },
  Text: {
    fontSize: 15,
    marginTop: 6,
  },
  Fees: {
    borderWidth: 1,
    backgroundColor: "#A7A7A7",
    marginTop: 3,
  },
  FeesOne: {
    marginTop: 3,
  },
  TextOne: {
    fontSize: 10,
    textAlign: "center",
    padding: 5,
  },
  TextTwo: {
    fontSize: 10,
    textAlign: "center",
  },
  TextThree: {
    fontSize: 8.5,
    textAlign: "center",
  },
  Table: {
    display: "table",
    marginTop: 10,
  },
  Row: {
    flexDirection: "row",
  },
  Col: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: "#A7A7A7",
    height: "auto",
    padding: 5,
  },
  ColOne: {
    width: "30%",
    borderStyle: "solid",
    backgroundColor: "#A7A7A7",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    height: "auto",
    padding: 5,
  },
  ColTwo: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    height: "auto",
    padding: 5,
  },
  ColThree: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    height: "auto",
    padding: 5,
  },
  TextFour: {
    fontSize: 6,
    textAlign: "center",
  },
  TextFive: {
    fontSize: 7,
  },
  Note: {
    marginTop: 5,
  },
  divider: {
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: "grey",
    borderBottomStyle: "dashed",
  },
});

const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  );
};
const MyDocument = () => {
  return (
    <Document title="Fees-Receipt">
      <Page size="A4" style={styles.page}>
        <View>
          {/* Top Header */}
          <View style={styles.TopHeader}>
            <Text style={styles.printDateTime}>8 July 2024 11: 57: 44 AM</Text>
            <Text style={styles.pageNumber}>About Bank</Text>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                ` ${"# Page Number : " + pageNumber} / ${totalPages}`
              }
            />
          </View>

          {/* Header */}

          <View>
            <View style={styles.Header}>
              <View style={styles.Image}>
                <Image src="../src/assets/one.jpg"></Image>
              </View>
              <View style={styles.Details}>
                <Text style={styles.pageNumberOne}>25 Kings Street,CA</Text>
                <Text style={styles.pageNumberOne}>Phone : 018xxxxxxxx</Text>
                <Text style={styles.pageNumberOne}>Email : Abid@gmail.com</Text>
                <Text style={styles.pageNumberOne}>http://localhost:5173/</Text>
              </View>
            </View>

            {/* SChool Name */}
            <View>
              <Text style={styles.Text}> Your School Name Here </Text>
            </View>

            <View style={styles.Fees}>
              {" "}
              <Text style={styles.TextOne}>Fees Receipt</Text>
            </View>
            <View style={styles.FeesOne}>
              {" "}
              <Text style={styles.TextTwo}>Office Copy</Text>
            </View>

            {/* Details */}

            <View style={styles.Header}>
              <View>
                <Text style={styles.TextThree}> Scarlett Kennedy</Text>
                <Text style={styles.TextThree}> Father Name </Text>
                <Text style={styles.TextThree}> Class : Class 4(A)</Text>
              </View>
              <View>
                <Text style={styles.TextThree}> Date : 8 July 2024 </Text>
                <Text style={styles.TextThree}> Payment ID : </Text>
                <Text style={styles.TextThree}>
                  {" "}
                  Collected By : James Decker
                </Text>
              </View>
            </View>

            {/* Table */}

            <View style={styles.Table}>
              <View style={styles.Row}>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Date </Text>
                </View>
                <View style={styles.ColOne}>
                  <Text style={styles.TextThree}> Free Group </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Fees Code </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Mode </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Amount </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Discount </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Fine </Text>
                </View>
              </View>

              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
            </View>

            {/* Note */}

            <View style={styles.Note}>
              <Text style={styles.TextFive}>
                {" "}
                Note : This receipt is computer generated hence no signature is
                required
              </Text>
            </View>

            {/* Divider  */}

            <View style={styles.divider} />
          </View>
          <View>
            <View style={styles.Header}>
              <View style={styles.Image}>
                <Image src="../src/assets/one.jpg"></Image>
              </View>
              <View style={styles.Details}>
                <Text style={styles.pageNumberOne}>25 Kings Street,CA</Text>
                <Text style={styles.pageNumberOne}>Phone : 018xxxxxxxx</Text>
                <Text style={styles.pageNumberOne}>Email : Abid@gmail.com</Text>
                <Text style={styles.pageNumberOne}>http://localhost:5173/</Text>
              </View>
            </View>

            {/* SChool Name */}
            <View>
              <Text style={styles.Text}> Your School Name Here </Text>
            </View>

            <View style={styles.Fees}>
              {" "}
              <Text style={styles.TextOne}>Fees Receipt</Text>
            </View>
            <View style={styles.FeesOne}>
              {" "}
              <Text style={styles.TextTwo}>Office Copy</Text>
            </View>

            {/* Details */}

            <View style={styles.Header}>
              <View>
                <Text style={styles.TextThree}> Scarlett Kennedy</Text>
                <Text style={styles.TextThree}> Father Name </Text>
                <Text style={styles.TextThree}> Class : Class 4(A)</Text>
              </View>
              <View>
                <Text style={styles.TextThree}> Date : 8 July 2024 </Text>
                <Text style={styles.TextThree}> Payment ID : </Text>
                <Text style={styles.TextThree}>
                  {" "}
                  Collected By : James Decker
                </Text>
              </View>
            </View>

            {/* Table */}

            <View style={styles.Table}>
              <View style={styles.Row}>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Date </Text>
                </View>
                <View style={styles.ColOne}>
                  <Text style={styles.TextThree}> Free Group </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Fees Code </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Mode </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Amount </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Discount </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Fine </Text>
                </View>
              </View>

              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
            </View>

            {/* Note */}

            <View style={styles.Note}>
              <Text style={styles.TextFive}>
                {" "}
                Note : This receipt is computer generated hence no signature is
                required
              </Text>
            </View>

            {/* Divider  */}

            <View style={styles.divider} />
          </View>
          <View>
            <View style={styles.Header}>
              <View style={styles.Image}>
                <Image src="../src/assets/one.jpg"></Image>
              </View>
              <View style={styles.Details}>
                <Text style={styles.pageNumberOne}>25 Kings Street,CA</Text>
                <Text style={styles.pageNumberOne}>Phone : 018xxxxxxxx</Text>
                <Text style={styles.pageNumberOne}>Email : Abid@gmail.com</Text>
                <Text style={styles.pageNumberOne}>http://localhost:5173/</Text>
              </View>
            </View>

            {/* SChool Name */}
            <View>
              <Text style={styles.Text}> Your School Name Here </Text>
            </View>

            <View style={styles.Fees}>
              {" "}
              <Text style={styles.TextOne}>Fees Receipt</Text>
            </View>
            <View style={styles.FeesOne}>
              {" "}
              <Text style={styles.TextTwo}>Office Copy</Text>
            </View>

            {/* Details */}

            <View style={styles.Header}>
              <View>
                <Text style={styles.TextThree}> Scarlett Kennedy</Text>
                <Text style={styles.TextThree}> Father Name </Text>
                <Text style={styles.TextThree}> Class : Class 4(A)</Text>
              </View>
              <View>
                <Text style={styles.TextThree}> Date : 8 July 2024 </Text>
                <Text style={styles.TextThree}> Payment ID : </Text>
                <Text style={styles.TextThree}>
                  {" "}
                  Collected By : James Decker
                </Text>
              </View>
            </View>

            {/* Table */}

            <View style={styles.Table}>
              <View style={styles.Row}>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Date </Text>
                </View>
                <View style={styles.ColOne}>
                  <Text style={styles.TextThree}> Free Group </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Fees Code </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Mode </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Amount </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Discount </Text>
                </View>
                <View style={styles.Col}>
                  <Text style={styles.TextThree}> Fine </Text>
                </View>
              </View>

              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
              <View style={styles.Row}>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> 21-08-24 </Text>
                </View>
                <View style={styles.ColThree}>
                  <Text style={styles.TextFour}>
                    {" "}
                    class 4 general (April month fees){" "}
                  </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> apr month fees </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> cash </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $150.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
                <View style={styles.ColTwo}>
                  <Text style={styles.TextFour}> $0.00 </Text>
                </View>
              </View>
            </View>

            {/* Note */}

            <View style={styles.Note}>
              <Text style={styles.TextFive}>
                {" "}
                Note : This receipt is computer generated hence no signature is
                required
              </Text>
            </View>

            {/* Divider  */}

            <View style={styles.divider} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyApp;
