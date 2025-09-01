import useFetchGetApi from "@shared/api/useFetchGetApi";
import { FOUNDATION_API_REGISTRY_PATH } from "../config/const";

const useGetFoundationBaseColor = () => {
  return useFetchGetApi(FOUNDATION_API_REGISTRY_PATH);
};

export default useGetFoundationBaseColor;
