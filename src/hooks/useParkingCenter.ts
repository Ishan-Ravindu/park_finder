import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import parkingCenterService ,{ParkingCenter} from "../services/parkingCenter-service"

const useParkingList = () => {
  const [parkingList, setParkingList] = useState<ParkingCenter[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = parkingCenterService.getAll<ParkingCenter>();
    request
      .then((res) => {
        setParkingList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { parkingList, error, isLoading, setParkingList, setError };
}

export default useParkingList;