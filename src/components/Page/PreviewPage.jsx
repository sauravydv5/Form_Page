import Preview from "../../components/Form/Preview";

export default function PreviewPage({ data, onEdit, onSave }) {
  return <Preview data={data} onEdit={onEdit} onSave={onSave} />;
}
