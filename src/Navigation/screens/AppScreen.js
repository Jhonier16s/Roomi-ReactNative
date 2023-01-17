import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
const ghost = require("../../../assets/ghost.png");
const image1 = require("../../../assets/Image1.jpg");
const image2 = require("../../../assets/Image2.jpg");
export default function AppScreen({ setIsAuthenticated }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Roomi está contigo 🍃</Text>
      <Text style={{ color: "#fff" }}>
        Roomi es una aplicación creada para apoyar. Usamos la tecnología para
        ayudar a las personas a sentirse mejor.
      </Text>
      <View style={styles.containerImage}>
        <Animatable.Image
          source={ghost}
          style={styles.image}
          animation="pulse"
          iterationCount="infinite"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#c6daf1",
          padding: 5,
          borderRadius: 50,
          borderColor: "#fff",
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            color: "#000000",
            paddingVertical: 10,
            paddingHorizontal: 10,
            fontSize: 15,
          }}
        >
          Punto informativo by Roomi:
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#ffffff", fontSize: 16 }}>Depresión:</Text>
          <Text style={{ color: "#ffffff" }}>
            La depresión es un trastorno mental caracterizado fundamentalmente
            por un bajo estado de ánimo y sentimientos de tristeza, asociados a
            alteraciones del comportamiento, del grado de actividad y del
            pensamiento. Supone una de las patologías más frecuentes en Atención
            Primaria y es la primera causa de atención psiquiátrica y de
            discapacidad derivada de problemas mentales.
          </Text>
          <Text style={{ color: "#ffffff", fontSize: 16 }}>
            Los factores que pueden influir incluyen:
          </Text>
          <Text style={{ color: "#ffffff" }}>-Características genéticas</Text>
          <Text style={{ color: "#ffffff" }}>
            -Cambios en los niveles de neurotransmisores del cerebro
          </Text>
          <Text style={{ color: "#ffffff" }}>-Factores ambientales</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#ffffff" }}>
              -Factores psicológicos y sociales.
            </Text>
            <Text style={{ color: "#c6daf1", marginLeft: 5, fontSize: 12 }}>
              Desliza para ver más
            </Text>
          </View>
        </View>
        {/* Ansiedad */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#ffffff", fontSize: 16 }}>Ansiedad:</Text>
          <Text style={{ color: "#ffffff" }}>
            La ansiedad es un sentimiento de miedo, temor e inquietud. Puede
            hacer que sude, se sienta inquieto y tenso, y tener palpitaciones.
            Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse
            ansioso cuando se enfrenta a un problema difícil en el trabajo,
            antes de tomar un examen o antes de tomar una decisión importante.
          </Text>
          <Text style={{ color: "#ffffff", fontSize: 16 }}>
            ¿Qué causa los trastornos de ansiedad?
          </Text>
          <Text style={{ color: "#ffffff" }}>
            -No se conoce la causa de la ansiedad.
          </Text>
          <Text style={{ color: "#ffffff" }}>-Factores como la genética</Text>
          <Text style={{ color: "#ffffff" }}>-la Biología</Text>
          <Text style={{ color: "#ffffff" }}>
            -Y química del cerebro, el estrés y su entorno pueden tener un rol.
          </Text>
        </View>
        {/* estres */}
        <View style={{ marginTop: 20, paddingBottom: 20 }}>
          <Text style={{ color: "#ffffff", fontSize: 16 }}>Estrés:</Text>
          <Text style={{ color: "#ffffff" }}>
            El estrés puede ser descrito como una situación de sobrecarga o de
            presión que afecta a una persona y que depende tanto de las demandas
            de la situación, como de los recursos de la persona para afrontarla.
            Así, se trata de un sentimiento de tensión física o emocional que se
            produce de manera automática y natural ante situaciones o
            pensamientos que nos resultan amenazadores, frustrantes o
            desafiantes.
          </Text>
          <Text style={{ color: "#ffffff", fontSize: 16 }}>
          Mantener el estrés bajo control
          </Text>
          <Text style={{ color: "#ffffff" }}>
            -Asegúrate de no sobrecargarte de actividades.
          </Text>
          <Text style={{ color: "#ffffff" }}>-Sé realista.</Text>
          <Text style={{ color: "#ffffff" }}>-Descansa bien por la noche.</Text>
          <Text style={{ color: "#ffffff" }}>
           -Hazte un tiempo para divertirte.
          </Text>
          <Text style={{ color: "#ffffff" }}>
           -Resuelve los pequeños problemas.
          </Text>
          <Text style={{ color: "#ffffff" }}>
           -Construye relaciones positivas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d395d",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    backgroundColor: "#225996",
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    borderColor: "#fff",
    borderWidth: 1,
  },
  container_img: {
    flex: 1,
  },
  imageScroll: {
    width: 200,
    height: 450,
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
  },
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 15,
    paddingBottom: 20,
    color: "#fff",
    paddingTop: 40,
  },
});
