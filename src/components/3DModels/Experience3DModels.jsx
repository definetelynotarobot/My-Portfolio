import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import './styles/Experience3DModels.css'

useGLTF.preload('/models/low-poly-mercedes.glb')


// 1. MERCEDES FRONTEND – Car with Color Switch
export default function MercedesCar({ color = 'red' }) {
    const { scene } = useGLTF('/models/low-poly-mercedes.glb')
    const targetColor = useRef(new THREE.Color(color))
    const carParts = useRef([])
  
    // Store the actual meshes once on mount
    useEffect(() => {
      const targetNames = ['Object_4', 'Object_24', 'Object_37', 'Object_51']
      carParts.current = []
  
      scene.traverse((child) => {
        if (child.isMesh && targetNames.includes(child.name)) {
          child.material = child.material.clone()
          if (child.material.map) child.material.map = null
          carParts.current.push(child)
        }
      })
    }, [scene])
  
    // Whenever prop `color` changes, update targetColor
    useEffect(() => {
      targetColor.current.set(color)
    }, [color])
  
    // Animate the transition smoothly
    useFrame(() => {
      carParts.current.forEach((mesh) => {
        mesh.material.color.lerp(targetColor.current, 0.1)
      })
    })
  
    return <primitive object={scene} scale={2} position={[0, -0.8, 0]} />
}
  

export function MercedesFrontend() {
  const [color, setColor] = useState('red')
  return (
    <div className="experience-3d-wrapper">
      <div className="experience-3d-canvas">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <MercedesCar color={color} />
          <OrbitControls />
        </Canvas>
      </div>

      <div className="experience-3d-buttons">
        <button className='experience-btn' onClick={() => setColor('red')}></button>
        <button className='experience-btn' onClick={() => setColor('blue')}></button>
        <button className='experience-btn' onClick={() => setColor('black')}></button>
      </div>
    </div>
  )
}

// 2. MERCEDES QA – Speed reacts to hover
function MovingCar() {
  const { scene } = useGLTF('/models/mercedes.glb')
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * (hovered ? 3 : 0.3)
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.5}
      position={[0, -1, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  )
}

export function MercedesQA() {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <MovingCar />
      <OrbitControls />
    </Canvas>
  )
}

// 3. BORUSAN – Ship that shakes + drops a container on scroll
function BorusanShip() {
  const group = useRef()
  const container = useRef()
  const { scene } = useGLTF('/models/container-ship.glb')
  const [dropped, setDropped] = useState(false)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.05
    }
    if (container.current && dropped) {
      container.current.position.y -= 0.05
    }
  })

  useEffect(() => {
    const onScroll = () => {
      const triggerY = window.innerHeight * 0.8
      const shipTop = group.current?.parentElement?.getBoundingClientRect().top
      if (shipTop && shipTop < triggerY) {
        setDropped(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.4} position={[0, -1.5, 0]} />
      <mesh ref={container} position={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  )
}

export function BorusanShipScene() {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <BorusanShip />
      <OrbitControls />
    </Canvas>
  )
}