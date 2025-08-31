import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { updateLocation } from "../snapshots/location.snapshot";

const useUpdateLocation = () => {
  const location = useLocation();
  useEffect(() => {
    updateLocation(location.pathname);
  }, [location.pathname]);
};
export default useUpdateLocation;
