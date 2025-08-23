'use client'

import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { TextureLoader } from 'three'
import * as THREE from 'three'

function Fallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl flex items-center justify-center">
      <div className="text-6xl animate-pulse">⚡</div>
    </div>
  )
}

interface QuantumModelProps {
  className?: string
}

function Model() {
  const meshRef = useRef<THREE.Group>(null)
  
  // Load OBJ model
  const obj = useLoader(OBJLoader, './asset/cube/base.obj')
  
  // Load PBR textures
  const diffuseTexture = useLoader(TextureLoader, './asset/cube/texture_diffuse.png')
  const normalTexture = useLoader(TextureLoader, './asset/cube/texture_normal.png')
  const metallicTexture = useLoader(TextureLoader, './asset/cube/texture_metallic.png')
  const roughnessTexture = useLoader(TextureLoader, './asset/cube/texture_roughness.png')
  
  useEffect(() => {
    if (obj) {
      // Apply PBR material to all meshes
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: diffuseTexture,
            normalMap: normalTexture,
            metalnessMap: metallicTexture,
            roughnessMap: roughnessTexture,
            metalness: 0.8,
            roughness: 0.2,
          })
          
          child.material.needsUpdate = true
        }
      })
      
      // Scale and position the model
      obj.scale.setScalar(2.2)
      obj.position.set(0, -1.0, 0)
    }
  }, [obj, diffuseTexture, normalTexture, metallicTexture, roughnessTexture])

  // Subtle animation - only when not being interacted with
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation centered around -1.0
      meshRef.current.position.y = -1.0 + Math.sin(state.clock.elapsedTime * 0.6) * 0.05
      
      // Subtle auto-rotation when not being controlled
      const controls = state.controls as any
      if (!controls?.enabled || controls?.autoRotate) {
        meshRef.current.rotation.y += 0.001
      }
    }
  })

  return (
    <group ref={meshRef}>
      <primitive object={obj} />
    </group>
  )
}

export const QuantumModel: React.FC<QuantumModelProps> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          {/* Lighting setup for PBR */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1} 
            color="#ffffff"
            castShadow
          />
          <pointLight 
            position={[-5, 5, 5]} 
            intensity={0.5} 
            color="#ff00ff"
          />
          <pointLight 
            position={[0, -5, 3]} 
            intensity={0.3} 
            color="#ffff00"
          />
          
          {/* Model */}
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          
          {/* Interactive Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minDistance={4}
            maxDistance={10}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 4}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}