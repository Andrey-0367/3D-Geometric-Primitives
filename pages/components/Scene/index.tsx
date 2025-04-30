import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls: ThreeOrbitControls })

const CustomOrbitControls = (props: any) => {
  const { camera, gl } = useThree()
  return (
    <orbitControls
      args={[camera, gl.domElement]}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      {...props}
    />
  )
}

type Primitive = {
  id: string
  type: 'box' | 'pyramid'
  position: [number, number, number]
  size: [number, number, number]
  color: string
  selected: boolean
}

const BoxPrimitive = ({ primitive }: { primitive: Primitive }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={primitive.position}
    >
      <boxGeometry args={primitive.size} />
      <meshBasicMaterial 
        color={primitive.color} 
        wireframe={primitive.selected}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const PyramidPrimitive = ({ primitive }: { primitive: Primitive }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [w, h, d] = primitive.size
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  const geometry = new THREE.BufferGeometry()
  const vertices = new Float32Array([
    0, 0, 0, w, 0, 0, w, 0, d, 0, 0, d, w/2, h, d/2
  ])
  
  const indices = [0,1,2, 0,2,3, 0,1,4, 1,2,4, 2,3,4, 3,0,4]

  geometry.setIndex(indices)
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geometry.computeVertexNormals()

  return (
    <mesh
      ref={meshRef}
      position={primitive.position}
      geometry={geometry}
    >
      <meshBasicMaterial 
        color={primitive.color}
        wireframe={primitive.selected}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export const Scene = ({ 
  primitives,
  onPrimitiveClick 
}: {
  primitives: Primitive[]
  onPrimitiveClick: (id: string) => void
}) => {
  return (
    <Canvas 
      camera={{ position: [5, 5, 5], fov: 75 }}
      onPointerMissed={() => onPrimitiveClick('')}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CustomOrbitControls />
      
      {primitives.map((primitive) => {
        const Component = primitive.type === 'box' ? BoxPrimitive : PyramidPrimitive
        return (
          <group 
            key={primitive.id} 
            onClick={(e) => {
              e.stopPropagation()
              onPrimitiveClick(primitive.id)
            }}
          >
            <Component primitive={primitive} />
          </group>
        )
      })}
    </Canvas>
  )
}