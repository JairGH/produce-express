import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
