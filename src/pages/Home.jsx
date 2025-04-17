import { useState } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Hero from '../components/sections/Hero'
import Contact from '../components/sections/Contact'
import ExperienceSteps from '../components/sections/ExperienceSteps'
import SkillsSection from '../components/sections/SkillsSection'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import {MercedesFrontend, MercedesQA, BorusanShipScene, } from '../components/3DModels/Experience3DModels'


export default function Home() {
  /*const [name, setName] = useState('')
  const navigate = useNavigate() 
  const { currentUser,logout } = useAppContext()*/
  const mercedesScene = <MercedesFrontend/>
  return (
    <div>
    <Header/>
    <Hero/>
    <ExperienceSteps
  title="Frontend Developer – Mercedes-Benz"
  description="Optimized Angular components and styled with SCSS.
  Optimized Angular components and styled with SCSS.
  Optimized Angular components and styled with SCSS.
  Optimized Angular components and styled with SCSS.
  Optimized Angular components and styled with SCSS."
  svg={mercedesScene} 
    />
{/**}
<ExperienceSteps
  title="QA Intern – Mercedes-Benz"
  description="Manual + API testing in international agile team."
  svg={<MercedesQA />}
/>

<ExperienceSteps
  title="Full Stack Developer – Borusan Lojistik"
  description="Built inventory tracking system for container operations."
  svg={<BorusanShipScene />}
/>


<ExperienceSteps
  title="Digital Transformation – Coşkunöz Metal Form"
  description="• Automated HR and CRM workflows using UiPath.
  • Built internal bots to improve productivity.
  • Delivered process efficiency across departments."
  image="/assets/coskunöz.png"
  reverse
/>*/}

<SkillsSection></SkillsSection>
<Footer/>
    {/** 
      <Input value={name} onChange={setName} />
      <Button text={`Hello ${name || 'World'}`} onClick={() => alert(`Hi, ${name || 'World'}!`)} />
      <Button
        text={currentUser ? 'Already Logged In' : 'Login / Signup'}
        onClick={() => navigate('/login')}
        disabled={!!currentUser}
      />
      <Button text={'Logout'} onClick={logout}/>*/}
    </div>
  )
}
