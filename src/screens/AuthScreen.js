import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
const myImage = require("../../assets/1.png");
const hand = require("../../assets/handshake.png");
import * as Animatable from "react-native-animatable";
const fire = require("../../assets/fire.png");
const ghost = require("../../assets/ghost.png");
const initiative = require("../../assets/initiative.png");

export default function Auth({ onAuthenticate }) {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Animatable.Image
            source={ghost}
            style={styles.image}
            animation="pulse"
            iterationCount="infinite"
          />
        </View>
        <Text style={styles.title}>Roomi</Text>
        <Text style={styles.description}>
          Roomi es una aplicación móvil que te ayuda a sentirte mejor y expresar lo que sientes.
        </Text>
        
        <Animatable.View animation="fadeInUpBig">
          <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.auth}>
          Manejamos autenticación local, para que te estés a gusto expresando lo
          que sientes.{" "}
        </Text>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: "#1d395d",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#5a98d6",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    marginVertical: 30,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50,
  },
  auth: {
    marginTop:20,
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 50,
  }
});
