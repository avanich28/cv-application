import { Topic } from "./Topic.jsx";
import { TextArea } from "./TextArea.jsx";

export function TechnologyBox({ tech, onTech }) {
  return (
    <div className="box">
      <Topic title="technology" icon="microchip" dataIndex={4} />
      <TechnologyForm tech={tech} onTech={onTech} />
    </div>
  );
}

function TechnologyForm({ tech, onTech }) {
  return (
    <form>
      <TextArea name="tech" value={tech} onChange={onTech}>
        Tools
      </TextArea>
    </form>
  );
}
