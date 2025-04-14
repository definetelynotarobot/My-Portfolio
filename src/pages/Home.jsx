import { useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'



export default function Home() {
  const [name, setName] = useState('')
  const navigate = useNavigate() 
  const { currentUser } = useAppContext()

  return (
    <div>
      <Input value={name} onChange={setName} />
      <Button text={`Hello ${name || 'World'}`} onClick={() => alert(`Hi, ${name || 'World'}!`)} />
      <Button text={'Login / Signup'} onClick={() => navigate('/login')} disabled={!!currentUser}/> 
    </div>
  )
}
