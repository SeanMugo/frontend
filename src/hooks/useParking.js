import { useEffect, useState } from "react";
import { getParkingSlots } from "../services/parkingService";

export default function useParking() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSlots() {
      try {
        const data = await getParkingSlots();
        setSlots(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSlots();
  }, []);

  return {
    slots,
    loading,
  };
}