import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/apiListings";
import AppText from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve listings</AppText>
          <Button title="Retry" onPress={loadListingsFunction} />
        </>
      )}
      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
