import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

// import { Container } from './styles';
import Header from "../../components/Header";

export default function SharedWithMe() {
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <Header />
    </SafeAreaView>
  );
}
