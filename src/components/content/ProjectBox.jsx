import { BoxInput } from "./BoxInput.jsx";
import { FormLayout } from "./FormLayout.jsx";
import { Input } from "./Input.jsx";
import { TextArea } from "./TextArea.jsx";

export function ProjectBox({ defaultProp, project, onProject, projects }) {
  return (
    <BoxInput
      title="project"
      icon="gear"
      dataIndex={3}
      defaultProp={defaultProp}
      data={projects}
    >
      <ProjectForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        project={project}
        onProject={onProject}
      />
    </BoxInput>
  );
}

function ProjectForm({ onDelete, onCancel, onSave, project, onProject }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={project.id}
      type={project.type}
    >
      <Input name="project" value={project.project} onChange={onProject}>
        Project Name
      </Input>
      <TextArea
        name="description"
        value={project.description}
        onChange={onProject}
      >
        Description
      </TextArea>
    </FormLayout>
  );
}
