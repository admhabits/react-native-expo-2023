//import liraries
import Layout from "~/components/Layout/General";
import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { toscaColor } from "~/components/configs/Colors";
import { textPrimary } from "~/components/configs/Colors";

// create a component
const VisiMisi = ({ navigation }) => {
  return (
    <Layout
      statusBar={toscaColor}
      navigation={navigation}
      titlePage={"Visi Misi"}
    >
      <ScrollView
        style={{ padding: 5, margin: 15 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headline}>
          Visi Direktorat Jendral Perhubungan Laut
        </Text>
        <Text style={styles.normal}>
          Visi Direktorat Jenderal Perhubungan Laut sebagaimana dinyatakan dalam
          Undang-Undang Nomor 17 Tahun 2008 tentang Pelayaran adalah:
        </Text>
        <Text style={styles.normal}>
          Terwujudnya penyelenggaraan transportasi laut nasional yang efektif,
          efisien dan berdaya saing serta memberikan nilai tambah sebagai
          infrastruktur dan tulang punggung kehidupan berbangsa dan bernegara.
        </Text>
        <View style={{ marginVertical: 8 }}></View>
        <Text style={styles.headline}>
          Misi Direktorat Jenderal Perhubungan Laut
        </Text>
        <Text style={styles.normal}>
          Menyelenggarakan kegiatan angkutan di perairan dalam rangka
          memperlancar arus perpindahan orang/dan atau barang melalui perairan
          dengan selamat, aman, cepat, lancar, tertib dan teratur, nyaman dan
          berdaya guna. Menyelenggarakan kegiatan kepelabuhanan yang andal dan
          berkemampuan tinggi, menjamin efisiensi dan mempunyai daya saing
          global untuk menunjang pembangunan nasional dan daerah yang berwawasan
          nusantara. Menyelenggarakan keselamatan dan kemanan angkutan perairan
          dan pelabuhan. Menyelenggarakan perlindungan lingkungan maritim di
          perairan nusantara.
        </Text>
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
  headline: {
    color: textPrimary,
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: 10,
  },
  normal: {
    color: textPrimary,
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "justify",
    marginVertical: 2,
    lineHeight: 26,
  },
});

//make this component available to the app
export default VisiMisi;
