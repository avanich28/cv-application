import { CustomizeBox } from "./CustomizeBox.jsx";
import { Layout } from "./Layout.jsx";

export function LayoutLists({ customize, onCustomize }) {
  return (
    <CustomizeBox title="layout" className="layout">
      {["top", "left", "right"].map((pos, i) => (
        <Layout
          key={i}
          pos={pos}
          color={customize.color}
          onCustomize={onCustomize}
          isSelected={pos === customize.layout}
        />
      ))}
    </CustomizeBox>
  );
}
