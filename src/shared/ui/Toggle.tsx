import { useId, useState, type ChangeEvent, type FC } from "react";

interface ToggleProps {
  id?: string;
  onChange?: ({ id, checked }: { id: string; checked: boolean }) => void;
  defaultChecked?: boolean;
}
const Toggle: FC<ToggleProps> = ({ id, onChange, defaultChecked }) => {
  const defaultToggleId = useId();
  const [checked, setChecked] = useState<boolean>(defaultChecked ?? false);
  const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const _checked = e.target.checked;
    setChecked(_checked);
    onChange?.({ id: id ?? defaultToggleId, checked: _checked });
  };
  return (
    <div className="toggle">
      <input
        id={id ?? defaultToggleId}
        className="toggle-input"
        type="checkbox"
        role="switch"
        aria-checked="false"
        onChange={handleChangeToggle}
        checked={checked}
      />
      <label className="toggle-label" htmlFor={id ?? defaultToggleId}>
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-thumb"></span>
        </span>
        <span className="toggle-text on">On</span>
        <span className="toggle-text off">Off</span>
      </label>
    </div>
  );
};
export default Toggle;
