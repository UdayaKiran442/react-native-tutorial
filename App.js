import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/authNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import jwtDecode from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";

// const Tweets = ({ navigation }) => {
//   return (
//     <Screen>
//       <Text>Tweets</Text>
//       <Button
//         title="View Tweet"
//         onPress={() => {
//           navigation.navigate("TweetsDetails", {
//             id: 1,
//             name: "Tweet Details",
//           });
//         }}
//       />
//     </Screen>
//   );
// };

// const TweetDetails = ({ route }) => {
//   return (
//     <Screen>
//       <Text>Tweet Details {route.params.id} </Text>
//     </Screen>
//   );
// };
// const Account = ({ route }) => {
//   return (
//     <Screen>
//       <Text>Account </Text>
//     </Screen>
//   );
// };

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator initialRouteName="Tweets">
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetsDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.name })}
//     />
//   </Stack.Navigator>
// );
// const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const unsubscribe = NetInfo.addEventListener((netInfo) =>
    console.log(netInfo)
  );
  const netInfo = useNetInfo();
  const demo = async () => {
    try {
      AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
    } catch (error) {
      console.log(error);
    }
  };
  const restoreUser = async () => {
    const user = authStorage.getUser();
    if (!user) return;
    setUser(user);
  };
  if (!isReady) {
  }
  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* */}

        {/* <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "red",
          tabBarInactiveBackgroundColor: "#eee",
          tabBarInactiveTintColor: "black",
        }}
      >
      
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={25} color={color} />
            ),
          }}
          name="Feed"
          component={StackNavigator}
        />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator> */}
        {/* <AppNavigator /> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
