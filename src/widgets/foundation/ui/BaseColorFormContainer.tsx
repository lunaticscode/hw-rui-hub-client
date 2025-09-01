import useGetFoundationBaseColor from "@entities/foundation/api/useGetFoundationBaseColor";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface BaseColorFormContainerProps {
  children?: React.ReactNode;
}
const BaseColorFormContainer: FC<BaseColorFormContainerProps> = (props) => {
  const { children } = props;
  const { data: baseColor } = useGetFoundationBaseColor();
  console.log(baseColor);
  const form = useForm({
    defaultValues: {
      baseColor,
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};
export default BaseColorFormContainer;
