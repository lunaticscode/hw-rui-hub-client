import type { FC } from "react";
import { useFormContext } from "react-hook-form";

interface BaseColorEditFormProps {
  color: string;
}

const BaseColorEditForm: FC<BaseColorEditFormProps> = () => {
  const formValues = useFormContext();
  console.log(formValues);
  return <></>;
};
export default BaseColorEditForm;
