import { DetailTitle } from "./DetailTitle.jsx";

export function DetailTitleLists({ onAdd, data, onToggleHide, onEdit }) {
  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((obj) => (
            <DetailTitle
              key={obj.id}
              id={obj.id}
              type={obj.type}
              isHide={obj.isHide}
              onToggleHide={onToggleHide}
              onEdit={onEdit}
              // NOTE Open form when click edit
              onAdd={onAdd}
            >
              {obj[obj.type]}
            </DetailTitle>
          ))}
        <DetailTitle />
      </ul>
      <div className="block">
        <button className="add-btn" onClick={onAdd}>
          + Add
        </button>
      </div>
    </>
  );
}
