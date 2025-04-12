export default function Input({ value, onChange }) {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />
  }
  