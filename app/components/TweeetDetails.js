import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "./Screen";

function TweeetDetails(props) {
  return (
    <View style={styles.container}>
      <Screen>
        <Text>Tweet Details</Text>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TweeetDetails;
