import { useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import {Hero} from '../components/sections/Hero'
import {Contact} from '../components/sections/Contact'
import {ExperienceSteps} from '../components/sections/ExperienceSteps'
import {SkillsSection} from '../components/sections/SkillsSection'



export default function Home() {
  const [name, setName] = useState('')
  const navigate = useNavigate() 
  const { currentUser,logout } = useAppContext()

  return (
    <div>
      <Hero />
      <ExperienceSteps></ExperienceSteps>
      <ExperienceSteps></ExperienceSteps>
      <ExperienceSteps></ExperienceSteps>
      <SkillsSection></SkillsSection>
      <Contact></Contact>
      <Input value={name} onChange={setName} />
      <Button text={`Hello ${name || 'World'}`} onClick={() => alert(`Hi, ${name || 'World'}!`)} />
      <Button
        text={currentUser ? 'Already Logged In' : 'Login / Signup'}
        onClick={() => navigate('/login')}
        disabled={!!currentUser}
      />
      <Button text={'Logout'} onClick={logout}/>
    </div>
  )
}
