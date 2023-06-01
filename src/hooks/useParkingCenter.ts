import {useEffect, useState} from 'react';
import {CanceledError} from '../services/api-client';
import parkingCenterService, {
  ParkingCenter,
  ParkingCenterRequestBody,
} from '../services/parkingCenter-service';
import useLocation from './useLocation';

const useParkingList = () => {
  const [parkingList, setParkingList] = useState<ParkingCenter[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {location} = useLocation();

  useEffect(() => {
    fetchParkingList();
  }, []);

  const fetchParkingList = () => {
    setLoading(true);
    const {request, cancel} = parkingCenterService.getAll<
      ParkingCenter,
      ParkingCenterRequestBody
    >({
      latitude: location?.coords.latitude || 0,
      longitude: location?.coords.longitude || 0,
    });
    request
      .then(res => {
        setParkingList(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  };

  return {
    parkingList,
    error,
    isLoading,
    setParkingList,
    setError,
    fetchParkingList,
  };
};

export default useParkingList;
