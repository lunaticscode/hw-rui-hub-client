import Toggle from "@shared/ui/Toggle";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";

interface InstallableControllerProps {
  componentName: string;
  defaultActvie?: boolean;
}

const getDisplayComponentName = (name: string) => {
  if (!name) return "";
  return name.slice(0, 1).toUpperCase() + name.slice(1);
};

const InstallableController: FC<InstallableControllerProps> = (props) => {
  const { componentName, defaultActvie } = props;

  const { setValue } = useFormContext();
  const handleChangeToggle = ({
    id,
    checked,
  }: {
    id: string;
    checked: boolean;
  }) => {
    const formKey = `installable.${id}`;
    setValue(formKey, checked, { shouldDirty: true });
  };

  return (
    <div className="page-card">
      <div className={"component-page-installable-content"}>
        <div className="component-page-installable-component-name">
          {getDisplayComponentName(componentName)}
        </div>
        <div>
          <Toggle
            id={componentName}
            defaultChecked={defaultActvie}
            onChange={handleChangeToggle}
          />
        </div>
      </div>
    </div>
  );
};
export default InstallableController;
