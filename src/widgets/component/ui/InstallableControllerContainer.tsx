import useGetOperationStatus from "@entities/component/api/useGetOperationStatus";
import useUpdateOperationStatus from "@entities/component/api/useUpdateOperationStatus";
import type { ComponentOperationStatusFields } from "@entities/component/types";
import InstallableController from "@features/component/ui/InstallableController";
import { useEffect, useMemo, type FC, type ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface InstallableControllerContainerProps {
  children?: ReactNode;
}
const InstallableControllerContainer: FC<
  InstallableControllerContainerProps
> = ({ children }) => {
  const { data, refetch, isLoading: getLoading } = useGetOperationStatus();
  const { patch, isLoading: patchLoading } = useUpdateOperationStatus();
  const form = useForm<ComponentOperationStatusFields>({
    defaultValues: { ...data },
  });

  useEffect(() => {
    if (data) {
      form.reset(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const buttonDisabled = useMemo(
    () => getLoading || patchLoading || !form.formState.isDirty,
    [getLoading, patchLoading, form.formState.isDirty]
  );

  const handleClickUpdate = async () => {
    const formValue = form.getValues();
    const updateResult = await patch(formValue);
    if (updateResult?.isError) {
      alert("Occured error, Please try again later.");
    } else {
      refetch();
    }
  };

  return (
    <FormProvider {...form}>
      {children}
      <div className="component-page-installable-update-button-wrapper">
        <button
          disabled={buttonDisabled}
          className="component-page-installable-update-button"
          onClick={handleClickUpdate}
        >
          UPDATE
        </button>
      </div>
      <div className="component-page-installable-controllers-wrapper">
        {data
          ? Object.keys(data.installable).map((componentName, index) => (
              <InstallableController
                componentName={componentName}
                defaultActvie={data.installable[componentName]}
                key={`component-card-key-${index}`}
              />
            ))
          : null}
      </div>
    </FormProvider>
  );
};
export default InstallableControllerContainer;
