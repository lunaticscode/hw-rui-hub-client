import { useMemo, useState, type FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { type ColorResult, Chrome } from "@uiw/react-color";
interface BaseColorEditFormProps {
  group: string;
  tokenKey: string;
  tokenValue: string;
}

const BaseColorEditForm: FC<BaseColorEditFormProps> = (props) => {
  const { group, tokenKey } = props;
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const { register, control, setValue } = useFormContext();
  const formKey = useMemo(() => `${group}.${tokenKey}`, [group, tokenKey]);
  const currentColor = useWatch({ control, name: formKey });

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleChangeColorPicker = ({ hex }: ColorResult) => {
    setValue(formKey, hex);
  };
  const handleBlurColorPicker = () => {
    console.log("blur");
  };

  return (
    <div className="foundation-base_color-form">
      <div
        className="foundation-base_color-form-color-display"
        style={{ backgroundColor: currentColor }}
      />
      <input
        className={"foundation-base_color-form-input"}
        onClick={toggleColorPicker}
        {...register(formKey)}
      />
      {showColorPicker && (
        <Chrome
          color={currentColor}
          onChange={handleChangeColorPicker}
          onBlur={handleBlurColorPicker}
        />
      )}
    </div>
  );
};
export default BaseColorEditForm;
