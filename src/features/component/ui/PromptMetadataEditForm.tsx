import type { ComponentMetadata } from "@entities/component/types";
import type { FC } from "react";
// import { useFormContext, useWatch } from "react-hook-form";

interface PromptMetadataEditFormProps {
  metadata: ComponentMetadata;
}
const PromptMetadataEditForm: FC<PromptMetadataEditFormProps> = (props) => {
  const { metadata } = props;
  //   const { setValue, control } = useFormContext();
  //   const {} = useWatch({control, name: metadata.label})
  return (
    <div className="component-page-prompt-metadata-edit_form">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={"component-page-prompt-metadata-edit_form-title"}>
          {metadata.label}
        </div>
        <div>
          <button
            disabled={true}
            className="component-page-prompt-metadata-edit_form-update-button"
          >
            UPDATE
          </button>
        </div>
      </div>
      <div className="component-page-prompt-metadata-edit_form-label">
        Intent
      </div>
      <div>
        {metadata.intents.map((intent, index) => (
          <input
            className={"component-page-prompt-metadata-edit_form-input inline"}
            defaultValue={intent}
            key={`form-intent-key-${index}`}
          />
        ))}
      </div>

      <div className="component-page-prompt-metadata-edit_form-label">
        Semantic Role
      </div>
      <div>
        {metadata.semantic_roles.map((semanticRole, index) => (
          <input
            className={"component-page-prompt-metadata-edit_form-input inline"}
            defaultValue={semanticRole}
            key={`form-semantic_role-key-${index}`}
          />
        ))}
      </div>

      <div className="component-page-prompt-metadata-edit_form-label">
        Layout Hint
      </div>
      <div>
        {metadata.layout_hint.map((hint, index) => (
          <input
            className={"component-page-prompt-metadata-edit_form-input inline"}
            defaultValue={hint}
            key={`form-semantic_role-key-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default PromptMetadataEditForm;
