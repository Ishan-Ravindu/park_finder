import {useEffect, useState} from 'react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const useLocationEnabler = () => {
  const [isLocationEnable, setIsLocationEnable] = useState(false);

  useEffect(() => {
    handleLocationEnabler();
  }, []);

  const handleLocationEnabler = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        if (data === 'enabled') setIsLocationEnable(true);
        if (data === 'already-enabled') setIsLocationEnable(true);
      })
      .catch(err => {
        setIsLocationEnable(false);
      });
  };

  return {isLocationEnable, setIsLocationEnable, handleLocationEnabler};
};

export default useLocationEnabler;
