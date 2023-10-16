import { BoxInput } from "./BoxInput.jsx";
import { FormLayout } from "./FormLayout.jsx";
import { Input } from "./Input.jsx";
import { TextArea } from "./TextArea.jsx";

export function ExperienceBox({ defaultProp, exp, onExp, experiences }) {
  return (
    <BoxInput
      title="experience"
      icon="briefcase"
      dataIndex={2}
      defaultProp={defaultProp}
      data={experiences}
    >
      <ExperienceForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        exp={exp}
        onExp={onExp}
      />
    </BoxInput>
  );
}

function ExperienceForm({ onDelete, onCancel, onSave, exp, onExp }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={exp.id}
      type={exp.type}
    >
      <Input name="company" value={exp.company} onChange={onExp}>
        Company Name
      </Input>
      <Input name="position" value={exp.position} onChange={onExp}>
        Position
      </Input>
      <div className="input-date">
        <Input name="startDate" value={exp.startDate} onChange={onExp}>
          Start Date
        </Input>
        <Input name="endDate" value={exp.endDate} onChange={onExp}>
          End Date
        </Input>
      </div>
      <Input name="location" value={exp.location} onChange={onExp}>
        Location
      </Input>
      <TextArea name="description" value={exp.description} onChange={onExp}>
        Description
      </TextArea>
    </FormLayout>
  );
}
