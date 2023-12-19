import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  try {
    const [location, setLocation] = useState();
    const getLocation = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };
    useEffect(() => {
      getLocation();
    }, []);
    return location;
  } catch (error) {
    console.log(error);
  }
};

export default useLocation;
