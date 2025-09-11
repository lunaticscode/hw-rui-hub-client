import useFetchGetApi from "@shared/api/useFetchGetApi";
import { COMPONENT_API_REGISTRY_PATH } from "../config/const";

const useGetComponentOperationStatus = () => {
  return useFetchGetApi<Record<string, Record<string, string>>>(
    `${COMPONENT_API_REGISTRY_PATH}/operation-status.json`
  );
};
export default useGetComponentOperationStatus;
