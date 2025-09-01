const REGISTRY_DIRNAME = "registry";

export const FOUNDATION_API_REGISTRY_PATH = import.meta.env.PROD
  ? `/${REGISTRY_DIRNAME}/foundations/base-color.json`
  : "/foundations/base-color.json";
