import useGetPromptMetadata from "@entities/component/api/useGetPromptMetadata";
import type { ComponentPromptMetadataFields } from "@entities/component/types";
import PromptMetadataEditForm from "@features/component/ui/PromptMetadataEditForm";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const PromptArgsControllerContainer = () => {
  const { data } = useGetPromptMetadata();
  const formValues = useForm<ComponentPromptMetadataFields["metadata"]>({
    defaultValues: {},
  });
  const handleClickComponentUpdate = (componentName: string) => {
    console.log(formValues.getValues());
    console.log({ componentName });
  };

  const handleClickComponentReset = (componentName: string) => {
    formValues.resetField(componentName);
  };

  useEffect(() => {
    if (data) {
      formValues.reset(data.metadata);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data && data.metadata]);
  return (
    <div className="component-page-prompt-metadata-edit_forms-wrapper">
      {data?.metadata && Object.keys(data.metadata) ? (
        <FormProvider {...formValues}>
          {Object.keys(data.metadata).map((componentId, index) => (
            <PromptMetadataEditForm
              key={`prompt-metadata-editform-key-${index}`}
              metadata={data.metadata[componentId]}
              onClickComponentUpdate={handleClickComponentUpdate}
              onClickComponentReset={handleClickComponentReset}
            />
          ))}
        </FormProvider>
      ) : null}
    </div>
  );
};
export default PromptArgsControllerContainer;
