import { BoxInput } from "./BoxInput.jsx";
import { FormLayout } from "./FormLayout.jsx";
import { Input } from "./Input.jsx";
import { TextArea } from "./TextArea.jsx";

export function CertificateBox({ defaultProp, cert, onCert, certificates }) {
  return (
    <BoxInput
      title="certificate"
      icon="certificate"
      dataIndex={5}
      defaultProp={defaultProp}
      data={certificates}
    >
      <CertificateForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        cert={cert}
        onCert={onCert}
      />
    </BoxInput>
  );
}

function CertificateForm({ onDelete, onCancel, onSave, cert, onCert }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={cert.id}
      type={cert.type}
    >
      <Input name="certificate" value={cert.certificate} onChange={onCert}>
        Certificate Name
      </Input>
      <Input name="year" value={cert.year} onChange={onCert}>
        Year
      </Input>
      <TextArea name="description" value={cert.description} onChange={onCert}>
        Description
      </TextArea>
    </FormLayout>
  );
}
