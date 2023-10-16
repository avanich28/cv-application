import { BoxInput } from "./BoxInput.jsx";
import { FormLayout } from "./FormLayout.jsx";
import { Input } from "./Input.jsx";

export function LanguageBox({ defaultProp, lang, onLang, languages }) {
  return (
    <BoxInput
      title="language"
      icon="language"
      dataIndex={6}
      defaultProp={defaultProp}
      data={languages}
    >
      <LanguageForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        lang={lang}
        onLang={onLang}
      />
    </BoxInput>
  );
}

function LanguageForm({ onDelete, onCancel, onSave, lang, onLang }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={lang.id}
      type={lang.type}
    >
      <Input name="langTest" value={lang.langTest} onChange={onLang}>
        Language Test
      </Input>
      <Input name="scores" value={lang.scores} onChange={onLang}>
        Scores
      </Input>
    </FormLayout>
  );
}
