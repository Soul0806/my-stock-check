import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🚀 Vercel x React Native Web 測試成功!</Text>
      <Text style={styles.subText}>
        如果你在 iPhone 4G 看到這行，代表環境通了。
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  subText: { color: "#888", marginTop: 10 },
});
