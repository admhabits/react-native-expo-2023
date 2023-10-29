//import liraries
import { toscaColor } from "~/components/configs/Colors";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Layout from "~/components/Layout/General";
import { textPrimary } from "~/components/configs/Colors";
import { Image } from "react-native";
import { LinearBackground } from "~/components/configs/LinearBackground";
import { orangeColor } from "~/components/configs/Colors";

// create a component
const { width } = Dimensions.get("window");
const Sidoel = ({ navigation }) => {
  return (
    <Layout
      statusBar={toscaColor}
      navigation={navigation}
      titlePage={"SI DOEL"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 20,
            gap: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "Roboto",
              fontSize: 16,
              color: textPrimary,
              fontWeight: "bold",
            }}
          >
            LAYANAN INFORMASI PUBLIK ONLINE PPID PELAKSANA DIREKTORAT JENDERAL
            PERHUBUNGAN LAUT
          </Text>
          <View>
            <Image
              source={require("~/assets/images/sidoel/sidoel-img-2x.png")}
              style={{ width: "100%", height: 280, resizeMode: "contain" }}
            />
          </View>
          <LinearBackground
            colors={[toscaColor, "#15224E"]}
            style={{ width: 180, padding: 8, borderRadius: 15 }}
          >
            <Text style={styles.text}>Jadwal Pelayanan</Text>
          </LinearBackground>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ color: toscaColor, fontSize: 18, width: 100 }}>
              Senin - Kamis
            </Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>
              08.00 - 16.00
            </Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>Istirahat</Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>
              12.00 - 13.00
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ color: toscaColor, fontSize: 18, width: 100 }}>
              Jum'at
            </Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>
              08.00 - 16.30
            </Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>Istirahat</Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>
              11.30 - 12.30
            </Text>
          </View>
          <LinearBackground
            colors={[toscaColor, "#15224E"]}
            style={{ width: 180, padding: 8, borderRadius: 15 }}
          >
            <Text style={styles.text}>Layanan Online</Text>
          </LinearBackground>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ color: toscaColor, fontSize: 18, width: 100 }}>
              Logo
            </Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>
              {"https://hubla.dephub.go.id"}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ color: toscaColor, fontSize: 18, width: 100 }}>
              Logo
            </Text>
            <Text style={{ color: textPrimary, fontSize: 18 }}>
              {"0811-9620-9634 (whatsapp only)"}
            </Text>
          </View>
          <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
              <View
                style={{
                  backgroundColor: orangeColor,
                  padding: 15,
                  borderRadius: 10,
                  marginVertical: 15
                }}
              >
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 20,
                    textTransform: "uppercase",
                  }}
                >
                  Login PPID
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

//make this component available to the app
export default Sidoel;
