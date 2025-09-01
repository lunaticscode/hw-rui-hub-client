import useGetFoundationBaseColor from "@entities/foundation/api/useGetFoundationBaseColor";
import BaseColorEditForm from "@features/foundation/ui/BaseColorEditForm";
import { useEffect, type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface BaseColorFormContainerProps {
  children?: React.ReactNode;
}
const BaseColorFormContainer: FC<BaseColorFormContainerProps> = (props) => {
  const { children } = props;
  const { data: baseColor } = useGetFoundationBaseColor();
  const form = useForm({
    defaultValues: {
      baseColor,
    },
  });

  useEffect(() => {
    if (baseColor) {
      form.reset(baseColor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseColor]);

  if (!baseColor) {
    return null;
  }

  const handleClickSubmit = () => {
    console.log(form.getValues());
  };
  return (
    <FormProvider {...form}>
      {children}
      <div className={"foundation-base_color-forms-wrapper"}>
        {Object.keys(baseColor).map((colorGroup) =>
          Object.keys(baseColor[colorGroup]).map((colorTokenKey) => (
            <BaseColorEditForm
              group={colorGroup}
              tokenKey={colorTokenKey}
              tokenValue={baseColor[colorGroup][colorTokenKey]}
            />
          ))
        )}
      </div>
      <button
        className={"foundation-base_color-forms-submit-button"}
        onClick={handleClickSubmit}
      >
        submit
      </button>
    </FormProvider>
  );
};
export default BaseColorFormContainer;
