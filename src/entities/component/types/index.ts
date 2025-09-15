export type ComponentOperationStatusFields = {
  installable: Record<string, boolean>;
};

export type ComponentMetadata = {
  label: string;
  semantic_roles: string[];
  intents: string[];
  nlp_keywords: string[];
  layout_hint: string[];
};

export type ComponentPromptMetadataFields = {
  metadata: Record<string, ComponentMetadata>;
};
