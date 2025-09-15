import useFetchApi from "@shared/api/useFetchApi";
import type { ComponentPromptMetadataFields } from "../types";
import { COMPONENT_API_REGISTRY_PATH } from "../config/const";
import { API_BASE_URL } from "@shared/config/api";

const useGetPromptMetadata = () => {
  return useFetchApi<ComponentPromptMetadataFields>(
    `${API_BASE_URL}${COMPONENT_API_REGISTRY_PATH}/prompt-metadata.json`
  );
};
export default useGetPromptMetadata;
