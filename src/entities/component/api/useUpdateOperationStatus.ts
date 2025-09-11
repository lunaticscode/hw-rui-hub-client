import useFetchPatchApi from "@shared/api/useFetchPatchApi";
import type { ComponentOperationStatusFields } from "../types";
import { OPERATION_STATUS_API_PATH } from "../config/const";

const useUpdateOperationStatus = () => {
  console.log(OPERATION_STATUS_API_PATH);
  return useFetchPatchApi<{ isError: boolean }, ComponentOperationStatusFields>(
    `${OPERATION_STATUS_API_PATH}`
  );
};

export default useUpdateOperationStatus;
