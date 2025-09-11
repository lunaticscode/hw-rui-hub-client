import useFetchGetApi from "@shared/api/useFetchGetApi";
import { COMPONENT_API_REGISTRY_PATH } from "../config/const";
import type { ComponentOperationStatusFields } from "../types";
import { API_BASE_URL } from "@shared/config/api";

const useGetComponentOperationStatus = () => {
  return useFetchGetApi<ComponentOperationStatusFields>(
    `${API_BASE_URL}${COMPONENT_API_REGISTRY_PATH}/operation-status.json`
  );
};
export default useGetComponentOperationStatus;
