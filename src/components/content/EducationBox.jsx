import { BoxInput } from "./BoxInput.jsx";
import { FormLayout } from "./FormLayout.jsx";
import { Input } from "./Input.jsx";

export function EducationBox({ defaultProp, educ, onEduc, educations }) {
  return (
    <BoxInput
      title="education"
      icon="graduation-cap"
      dataIndex={1}
      defaultProp={defaultProp}
      data={educations}
    >
      <EducationForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        educ={educ}
        onEduc={onEduc}
      />
    </BoxInput>
  );
}

function EducationForm({ onDelete, onCancel, onSave, educ, onEduc }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={educ.id}
      type={educ.type}
    >
      <Input name="school" value={educ.school} onChange={onEduc}>
        School
      </Input>
      <Input name="degree" value={educ.degree} onChange={onEduc}>
        Degree
      </Input>
      <Input name="major" value={educ.major} onChange={onEduc}>
        Major
      </Input>
      <Input name="minor" value={educ.minor} onChange={onEduc}>
        Minor
      </Input>
      <Input name="gpa" value={educ.gpa} onChange={onEduc}>
        GPA
      </Input>
      <div className="input-date">
        <Input name="startDate" value={educ.startDate} onChange={onEduc}>
          Start Date
        </Input>
        <Input name="endDate" value={educ.endDate} onChange={onEduc}>
          End Date
        </Input>
      </div>
      <Input name="location" value={educ.location} onChange={onEduc}>
        Location
      </Input>
    </FormLayout>
  );
}
