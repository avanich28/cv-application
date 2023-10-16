import { CustomizeBox } from "./CustomizeBox.jsx";

export function Color({ customize, onCustomize }) {
  return (
    <CustomizeBox title="color" className="color">
      <li>
        <input
          name="color"
          type="color"
          value={customize.color}
          onChange={(e) => onCustomize(e.target.name, e.target.value)}
        />
      </li>
    </CustomizeBox>
  );
}
