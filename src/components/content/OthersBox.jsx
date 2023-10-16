import { Topic } from "./Topic.jsx";
import { TextArea } from "./TextArea.jsx";

export function OthersBox({ others, onOthers }) {
  return (
    <div className="box">
      <Topic title="others" icon="square-plus" dataIndex={7} />
      <OthersForm others={others} onOthers={onOthers} />
    </div>
  );
}

function OthersForm({ others, onOthers }) {
  return (
    <form>
      <TextArea name="others" value={others} onChange={onOthers}></TextArea>
    </form>
  );
}
