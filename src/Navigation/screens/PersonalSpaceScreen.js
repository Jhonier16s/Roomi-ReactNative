import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  TextIn,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalCard } from "./MotivationScreen";
const equis = require("../../../assets/letterx_83737.png");
const close = require("../../../assets/close.png");
const check = require("../../../assets/check.png");
import * as Animatable from "react-native-animatable";
const ghost = require("../../../assets/ghost.png");
const deleteI = require("../../../assets/delete.png");
const confused = require("../../../assets/confused.png");

export default function PersonalSpaceScreen() {
  const [visible, setVisible] = React.useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [value, setValue] = useState("");
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const saveValue = () => {
    if (textInputValue) {
      AsyncStorage.setItem("myValue", textInputValue);
      setTextInputValue("");
      setVisible(true);
    } else {
      setVisible2(true);
    }
  };
  const getValue = async () => {
    AsyncStorage.getItem("myValue").then((value) => {
      setValue(value);
    });
  };
  const deleteValue = () => {
    AsyncStorage.removeItem("myValue");
    setValue("");
    if (value) {
      setVisible3(true);
    } else {
      setVisible4(true);
    }
  }
  useEffect(() => {
    getValue();
  }, [textInputValue]);

  return (
    <View style={styles.container}>
      <Image source={ghost} style={styles.image} />
      <Text style={{ fontSize: 20, color: "#fff" }}>
        Roomi quiere saber como te sientes
      </Text>
      <TextInput
        placeholder="Hola, en este espacio puedes desahogarte"
        value={textInputValue}
        onChangeText={(text) => setTextInputValue(text)}
        style={styles.textInput}
        underlineColorAndroid="transparent"
        multiline
        maxLength={650}
        numberOfLines={14}
      ></TextInput>
      <ModalCard visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image source={equis} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Animatable.Image
            source={check}
            style={{ height: 120, width: 120 }}
            animation="pulse"
            iterationCount="infinite"
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
            !Bien hecho! Desahogo guardado correctamente :D
          </Text>
        </View>
      </ModalCard>
      <ModalCard visible={visible2}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header2}>
            <TouchableOpacity onPress={() => setVisible2(false)}>
              <Image source={equis} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Animatable.Image
              source={close}
              style={{ height: 120, width: 120 }}
              animation="pulse"
              iterationCount="infinite"
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              Error, por favor ingrese un texto válido
            </Text>
          </View>
        </View>
      </ModalCard>
      <ModalCard visible={visible3}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header2}>
            <TouchableOpacity onPress={() => setVisible3(false)}>
              <Image source={close} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Animatable.Image
              source={deleteI}
              style={{ height: 120, width: 120 }}
              animation="pulse"
              iterationCount="infinite"
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              Desahogo eliminado correctamente :D
            </Text>
          </View>
        </View>
      </ModalCard>
      <ModalCard visible={visible4}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header2}>
            <TouchableOpacity onPress={() => setVisible4(false)}>
              <Image source={close} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Animatable.Image
              source={confused}
              style={{ height: 120, width: 120 }}
              animation="pulse"
              iterationCount="infinite"
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              Error, no hay desahogos guardados jejeje :P
            </Text>
          </View>
        </View>
      </ModalCard>
      <View style={{display:"flex", flexDirection: "row"}}>
      <TouchableOpacity style={styles.button} onPress={saveValue}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDelete} onPress={ deleteValue}>
        <Text style={styles.buttonText}>Borrar</Text>
      </TouchableOpacity>
      </View>

      <View style={{ display: "flex", alignItems: "center", width: "90%" }}>
        <Text style={styles.text1}>Tu desahogo:</Text>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  button: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#c6daf1",
  },
  buttonDelete:{
    marginLeft: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#F44336",
  },
  image: {
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000000",
  },
  textInput: {
    flex: 1,
    width: "90%",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    backgroundColor: "#225996",
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: 20,
    borderColor: "#fff",
    borderWidth: 1,
    textAlign: "center",
    minHeight: 260,
  },
  header: {
    width: "100%",
    height: 30,
    paddingBottom: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  header2: {
    width: "100%",
    height: 30,
    paddingBottom: 10,
    alignItems: "flex-end",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "#fff",
    paddingBottom: 10,
  },
  text1: {
    fontSize: 20,
    color: "#fff",
  },
});
