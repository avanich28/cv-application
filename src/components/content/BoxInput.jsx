import { DetailTitleLists } from "./DetailTitleLists.jsx";
import { Topic } from "./Topic.jsx";

export function BoxInput({
  title,
  icon,
  dataIndex,
  data,
  defaultProp,
  children,
}) {
  return (
    <div className="box">
      <Topic
        title={title}
        icon={icon}
        dataIndex={dataIndex}
        selected={defaultProp.selected}
        onSelected={defaultProp.onSelected}
      />

      {defaultProp.isAdd && defaultProp.selected === dataIndex && children}
      {!defaultProp.isAdd && defaultProp.selected === dataIndex && (
        <DetailTitleLists
          data={data}
          onAdd={defaultProp.onAdd}
          onToggleHide={defaultProp.onToggleHide}
          onEdit={defaultProp.onEdit}
        />
      )}
    </div>
  );
}
