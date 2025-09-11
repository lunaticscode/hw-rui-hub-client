const REGISTRY_DIRNAME = "registry";

export const COMPONENT_API_REGISTRY_PATH = import.meta.env.PROD
  ? `/${REGISTRY_DIRNAME}/components`
  : "/components";
