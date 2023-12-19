import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "./Screen";

function Tweets(props) {
  return (
    <View style={styles.container}>
      <Screen>
        <Text>Tweets</Text>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Tweets;
