import useFetchApi from "@shared/api/useFetchApi";
import { COMPONENT_API_REGISTRY_PATH } from "../config/const";
import type { ComponentOperationStatusFields } from "../types";
import { API_BASE_URL } from "@shared/config/api";

const useGetComponentOperationStatus = () => {
  return useFetchApi<ComponentOperationStatusFields>(
    `${API_BASE_URL}${COMPONENT_API_REGISTRY_PATH}/operation-status.json`
  );
};
export default useGetComponentOperationStatus;
