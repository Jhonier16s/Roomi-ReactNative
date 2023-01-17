import * as React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import * as OpenAnything from "react-native-openanything";
const ghost = require("../../../assets/ghost.png");
import ButtonCustom from "../../components/ButtonCustom";
import ImagedCardView from "react-native-imaged-card-view";
//images
const book1 = require("../../../assets/book1.jpg");
const book2 = require("../../../assets/book2.jpg");
const book3 = require("../../../assets/book3.jpg");
const book4 = require("../../../assets/book4.jpg");
const book5 = require("../../../assets/book5.webp");
const book6 = require("../../../assets/book6.png");
const book7 = require("../../../assets/book7.jpg");
const book8 = require("../../../assets/book8.jpg");
export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container_books}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#c6daf1",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 15, color:"black" }}>
                Hola, te habla tu buen amigo Roomi
              </Text>
              <Image source={ghost} style={styles.image} />
            </View>
            <View style={{ margin: 15, display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: 15, color:"white" }}>¿Qué tal? ¿Cómo estás?</Text>
              <Text style={{ fontSize: 15, color:"white" }}>
                En este espacio podrás encontrar una serie de libros, de auto
                ayuda, motivación y crecimiento personal.
              </Text>
            </View>
            <View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book1}
                  ></Image>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    El caballero de la armadura oxidada
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                    Robert Fisher
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1Gc6N44x-AIShfcCctG2f-8L8WFYKb7Vr/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book4}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    Esencialismo
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                    Greg McKeown
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1G0_93U1iIC-p8RkAR6wv6M4Xo-ZHZ9V4/view?usp=sharing://drive.google.com/file/d/1Gc6N44x-AIShfcCctG2f-8L8WFYKb7Vr/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book3}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    Hábitos Atómicos
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                    James Clear
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1dEhZ9VLKujZrbiSYZITr__lSvzdHiBPs/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book2}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    Si lo crees, lo creas
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                  Brian Tracy
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1_3ushxk2BhG4r3Q8BamVRNKWHCYYbHZb/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book5}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    ¿Que pasaría si?
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                  Randall Munrde
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1Eo0GKbecqjLuioySKKGbuZ35sel115AI/view"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book6}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    El arte de vivir
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                  William Hart
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1ZgLAfsiZvGYsRvIGvsw3n5OfBeQ5yYSq/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book7}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8, color:"white" }}>
                    Padre Rico, Padre Pobre
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                  Robert T. Kiyosaki
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/1T_lMAdUpgYKWkjguvT8LPauMzfwgKtuO/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>
              <View style={styles.card_container}>
                <View>
                  <Image
                    style={{ width: 100, height: 150 }}
                    source={book8}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 8,color:"white" }}>
                  El hombre en busca de sentido 
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8, color:"white" }}>
                  Viktor Frankl
                  </Text>
                  <ButtonCustom
                    title="Abrir Libro"
                    onPress={() =>
                      OpenAnything.Pdf(
                        "https://drive.google.com/file/d/11pHUR-nTfrPYRgF1-4QhYnDVZwd5nhbG/view?usp=sharing"
                      )
                    }
                  />
                </View>
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  card_container: {
    elevation: 2,
    display: "flex",
    flexDirection: "row",
    borderColor: "#add8e6",
    borderWidth: 4,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    marginBottom: 8,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1d395d",
  },
  container_books: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  btn: {
    width: "90%",
    fontSize: 15,
    backgroundColor: "#0893FC",
  },
});
