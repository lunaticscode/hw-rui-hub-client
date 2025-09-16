import type { ComponentMetadata } from "@entities/component/types";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";

interface PromptMetadataEditFormProps {
  metadata: ComponentMetadata;
  onClickComponentUpdate: (component: string) => void;
}
const PromptMetadataEditForm: FC<PromptMetadataEditFormProps> = (props) => {
  const { metadata, onClickComponentUpdate } = props;
  const { register, formState } = useFormContext();

  const isDirtyForm =
    formState.dirtyFields?.[metadata.label.toLocaleLowerCase()] ?? null;

  const handleClickUpdate = () => {
    onClickComponentUpdate(metadata.label.toLowerCase());
  };

  return (
    <div className="component-page-prompt-metadata-edit_form">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={"component-page-prompt-metadata-edit_form-title"}>
          {metadata.label}
        </div>
        <div>
          <button
            disabled={!isDirtyForm}
            className="component-page-prompt-metadata-edit_form-update-button"
            onClick={handleClickUpdate}
          >
            UPDATE
          </button>
        </div>
      </div>
      <div className="component-page-prompt-metadata-edit_form-label">
        Intent
      </div>
      <div className="component-page-prompt-metadata-edit_form-inputs-wrapper">
        {metadata.intents.map((_, index) => (
          <input
            className={"component-page-prompt-metadata-edit_form-input inline"}
            {...register(`${metadata.label.toLowerCase()}.intents.${index}`)}
            data-isdirty={
              formState.dirtyFields?.[metadata.label.toLowerCase()]?.[
                "intents"
              ]?.[index]
            }
            key={`form-intent-key-${index}`}
          />
        ))}
      </div>

      <div className="component-page-prompt-metadata-edit_form-label">
        Semantic Role
      </div>
      <div className="component-page-prompt-metadata-edit_form-inputs-wrapper">
        {metadata.semantic_roles.map((_, index) => (
          <input
            className={"component-page-prompt-metadata-edit_form-input inline"}
            {...register(
              `${metadata.label.toLowerCase()}.semantic_roles.${index}`
            )}
            data-isdirty={
              formState.dirtyFields?.[metadata.label.toLowerCase()]?.[
                "semantic_roles"
              ]?.[index]
            }
            key={`form-semantic_role-key-${index}`}
          />
        ))}
      </div>

      <div className="component-page-prompt-metadata-edit_form-label">
        Layout Hint
      </div>
      <div className="component-page-prompt-metadata-edit_form-inputs-wrapper">
        {metadata.layout_hint.map((_, index) => (
          <input
            className={"component-page-prompt-metadata-edit_form-input inline"}
            {...register(
              `${metadata.label.toLowerCase()}.layout_hint.${index}`
            )}
            data-isdirty={
              formState.dirtyFields?.[metadata.label.toLowerCase()]?.[
                "layout_hint"
              ]?.[index]
            }
            key={`form-layout_hint-key-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default PromptMetadataEditForm;
