import { useState } from "react";
import { Primitive } from "./components/PrimitiveMesh/types";
import { PrimitiveList } from "./components/PrimitiveList";
import { Scene } from "./components/Scene";


export default function PrimitiveViewer() {
  const [primitives, setPrimitives] = useState<Primitive[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

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