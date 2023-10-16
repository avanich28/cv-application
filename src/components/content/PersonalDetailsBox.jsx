import { Topic } from "./Topic.jsx";
import { Input } from "./Input.jsx";
import { TextArea } from "./TextArea.jsx";

export function PersonalDetailsBox({ personal, onPersonal }) {
  return (
    <div className="box">
      <Topic title="personal details" icon="user" dataIndex={0} />
      <PersonalDetailsForm personal={personal} onPersonal={onPersonal} />
    </div>
  );
}

function PersonalDetailsForm({ personal, onPersonal }) {
  return (
    <form>
      <Input name="firstName" value={personal.firstName} onChange={onPersonal}>
        First Name
      </Input>
      <Input name="lastName" value={personal.lastName} onChange={onPersonal}>
        Last Name
      </Input>
      <Input name="email" value={personal.email} onChange={onPersonal}>
        Email
      </Input>
      <Input name="phone" value={personal.phone} onChange={onPersonal}>
        Phone Number
      </Input>
      <Input name="address" value={personal.address} onChange={onPersonal}>
        Address
      </Input>
      <TextArea name="intro" value={personal.intro} onChange={onPersonal}>
        Introduction
      </TextArea>
    </form>
  );
}
