import {useEffect, useState} from 'react';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

const useLocation = () => {
  const [location, setLocation] = useState<GeolocationResponse>();

  useEffect(() => {
    handleGetLocation();
  }, []);

  const handleGetLocation = () => {
    Geolocation.getCurrentPosition(info => setLocation(info));
  };

  return {location, setLocation, handleGetLocation};
};

export default useLocation;
