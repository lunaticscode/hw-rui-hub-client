import useFetchGetApi from "@shared/api/useFetchGetApi";
import { FOUNDATION_API_REGISTRY_PATH } from "../config/const";

const useGetFoundationBaseColor = () => {
  return useFetchGetApi<Record<string, Record<string, string>>>(
    `${FOUNDATION_API_REGISTRY_PATH}/base-color.json`
  );
};

export default useGetFoundationBaseColor;
