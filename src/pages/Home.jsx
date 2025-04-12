import { useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'

export default function Home() {
  const [name, setName] = useState('')

  return (
    <div>
      <Input value={name} onChange={setName} />
      <Button text={`Hello ${name || 'World'}`} onClick={() => alert(`Hi, ${name || 'World'}!`)} />
    </div>
  )
}
