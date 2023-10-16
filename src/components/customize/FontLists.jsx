import { CustomizeBox } from "./CustomizeBox.jsx";
import { Font } from "./Font.jsx";

export function FontLists({ customize, onCustomize }) {
  return (
    <CustomizeBox title="font" className="font">
      {[
        ["'Noto Sans', sans-serif", "sans"],
        ["serif", "serif"],
        ["monospace", "mono"],
      ].map((font, i) => (
        <Font
          key={i}
          font={font[0]}
          abbreviation={font[1]}
          onCustomize={onCustomize}
          isSelected={font[0] === customize.font}
        />
      ))}
    </CustomizeBox>
  );
}
