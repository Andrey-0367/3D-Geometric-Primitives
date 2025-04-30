import { useState } from 'react'
import { Primitive } from '../src/components/PrimitiveMesh/types';
import PrimitiveList from '../src/components/PrimitiveList';
import Scene from '../src/components/Scene';


export default function HomePage() {
  const [primitives, setPrimitives] = useState<Primitive[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleAddPrimitives = (newPrimitives: Primitive[]) => {
    setPrimitives([...primitives, ...newPrimitives]);
  };

  const handleClearAll = () => {
    setPrimitives([]);
    setSelectedId(null);
  };

  const handleSelectPrimitive = (id: string) => {
    setSelectedId(id);
    setPrimitives(primitives.map(p => ({
      ...p,
      selected: p.id === id
    })));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <PrimitiveList
        primitives={primitives}
        selectedId={selectedId}
        onAddPrimitives={handleAddPrimitives}
        onClearAll={handleClearAll}
        onSelectPrimitive={handleSelectPrimitive}
      />
      
      <div style={{ flex: 1 }}>
        <Scene 
          primitives={primitives}
          onPrimitiveClick={handleSelectPrimitive}
        />
      </div>
    </div>
  );
}