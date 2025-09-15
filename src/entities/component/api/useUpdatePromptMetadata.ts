import useMutateApi from "@shared/api/useMutateApi";
import type { ComponentPromptMetadataFields } from "../types";
import { PROMPT_METADATA_API_PATH } from "../config/const";

const useUpdateOperationStatus = () => {
  return useMutateApi<{ isError: boolean }, ComponentPromptMetadataFields>(
    `${PROMPT_METADATA_API_PATH}`,
    "PUT"
  );
};

export default useUpdateOperationStatus;
