import useGetPromptMetadata from "@entities/component/api/useGetPromptMetadata";
import PromptMetadataEditForm from "@features/component/ui/PromptMetadataEditForm";

const PromptArgsControllerContainer = () => {
  const { data } = useGetPromptMetadata();

  return (
    <div className="component-page-prompt-metadata-edit_forms-wrapper">
      {data?.metadata && Object.keys(data.metadata)
        ? Object.keys(data.metadata).map((componentId, index) => (
            <PromptMetadataEditForm
              key={`prompt-metadata-editform-key-${index}`}
              metadata={data.metadata[componentId]}
            />
          ))
        : null}
    </div>
  );
};
export default PromptArgsControllerContainer;
