import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import ButtonCustom from "../../components/ButtonCustom";
const equis = require("../../../assets/letterx_83737.png");
import * as Animatable from "react-native-animatable";

const ghost = require("../../../assets/ghost.png");

const happy = require("../../../assets/happy.png");
const happy2 = require("../../../assets/happy2.png");
const happy3 = require("../../../assets/happy3.png");
const happy4 = require("../../../assets/happy4.png");
const happy5 = require("../../../assets/happy5.png");
const happy6 = require("../../../assets/happy6.png");
const happy7 = require("../../../assets/happy7.png");
const happy8 = require("../../../assets/happy8.png");
const happy9 = require("../../../assets/happy9.png");
const happy10 = require("../../../assets/happy10.png");
 
export const ModalCard = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      setShowModal(false);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};
export default function MotivationScreen() {
  const images = [
    happy,
    happy2,
    happy3,
    happy4,
    happy5,
    happy6,
    happy7,
    happy8,
    happy9,
    happy10,
  ];
  const MotivationMessage = [
    "??No te rindas! ??Sigue intentando!",
    "Vas por el buen camino, ??sigue as??!",
    "El unico modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "A la cima no se llega superando a los dem??s, sino super??ndose a uno mismo. - William Shakespeare",
    "Yo s?? que todo lo que vivo me da la oportunidad de volverme m??s fuerte.",
    "Lo que plantees ahora, lo cosechar??s ma??ana. - Proverbio chino",
    "Haz que cada d??a cuente.",
    "Puedes m??s de lo que te imaginas, vales m??s de lo que crees.",
    "Si la monta??a que subes parece cada vez m??s imponente, es que la cima est?? cada vez m??s cerca.",
    " Si no puedes volar, corre; si no puedes correr, camina; si no puedes caminar, arr??strate; pero por lo menos sigue movi??ndote hacia adelante. - Martin Luther King",
    "S?? la mejor versi??n de ti mismo.",
    "Insistir, persistir, resistir y nunca desistir.",
    "Siempre te parecer?? imposible hasta que se hace.",
    "Si el plan no funciona, cambia el plan, pero no cambies la meta.",
    "No todas las tormentas vienen para perturbar tu vida. Algunas llegan para limpiarte el camino.",
    "No dejes que el temor supere tu talento.",
    "No dejes que el miedo te detenga.",
    "Haz que la felicidad sea tu mejor h??bito.",
    "Por si lo necesitas??? Yo s?? creo que vas a conseguirlo.",
    "Lo que conduce y mueve al mundo no son las m??quinas, sino las ideas.",
    "Para empezar un gran proyecto hace falta valent??a, para terminar un gran proyecto hace falta perseverancia.",
    "La pasi??n es eso que te hace tener cara de viernes todos los d??as.",
    "No intentes ser el mejor de tu equipo, intenta que tu equipo sea el mejor.",
    "Tu mente es tu mayor poder. ??sala bien.",
    "Cree en ti y todo ser?? posible.",
    "El universo entero trabaja a tu favor, t?? solo debes creerlo.",
    "Superar aquello que te asusta es lo que m??s te fortalecer??.",
    "Nadie encuentra su camino sin haberse perdido varias veces.",
    "Nunca es tarde para llegar a ser aquello que siempre so??aste.",
    "Tus sue??os no tienen fecha de caducidad, respira hondo y sigue adelante.",
    "Nunca es demasiado tarde para so??ar, nunca es tarde para intentarlo.",
    "La confianza en ti mismo es el primer secreto del ??xito.",
    "Los caminos dificiles conducen a destinos maravillosos.",
    "El secreto para salir adelante es comenzar.",
    "Nadie encuentra su camino sin haberse perdido varias veces.",
    "Confia en ti, tienes el control de tu vida.",
    "Cree en tus habilidades, no en tus limitaciones.",
  ];

  const [message, setMessage] = React.useState("");
  const [number, setNumber] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const randomNumber = Math.floor(Math.random() * MotivationMessage.length);
  const ramdomImage = Math.floor(Math.random() * 10);


  return (
    <View style={styles.container}>
      <ModalCard visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image source={equis} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>
              {MotivationMessage[randomNumber]}
            </Text>
            <Image
              style={{ height: 240, width: 230 }}
              source={images[ramdomImage]}
            />
          </View>
        </View>
      </ModalCard>
      <View>
        <View style={styles.containerImage}>
          <Animatable.Image
            source={ghost}
            style={styles.image}
            animation="fadeInDownBig"
          />
        </View>
        <Animatable.View
        animation="fadeInUpBig"
        >
          <ButtonCustom
            title="Leer motivaci??n del d??a"
            onPress={() => setVisible(true)}
          ></ButtonCustom>
        </Animatable.View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  containerImage: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1d395d",
    justifyContent: "center",
  },
  container_books: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  header: {
    width: "100%",
    height: 30,
    paddingBottom: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
