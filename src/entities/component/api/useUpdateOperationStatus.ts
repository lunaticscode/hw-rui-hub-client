import useMutateApi from "@shared/api/useMutateApi";
import type { ComponentOperationStatusFields } from "../types";
import { OPERATION_STATUS_API_PATH } from "../config/const";

const useUpdateOperationStatus = () => {
  return useMutateApi<{ isError: boolean }, ComponentOperationStatusFields>(
    `${OPERATION_STATUS_API_PATH}`,
    "PATCH"
  );
};

export default useUpdateOperationStatus;
