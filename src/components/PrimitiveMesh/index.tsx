import { BoxGeometry, MeshBasicMaterial, BufferGeometry, BufferAttribute } from "three";
import { Primitive } from "./types";


const PrimitiveMesh = ({ primitive, onClick }: { primitive: Primitive; onClick: () => void }) => {
  let geometry;
  
  if (primitive.type === "box") {
    geometry = new BoxGeometry(...primitive.size);
  } else {
    geometry = new BufferGeometry();
    const vertices = new Float32Array([
      0, 0, 0, primitive.size[0], 0, 0, primitive.size[0], 0, primitive.size[2], 0, 0, primitive.size[2],
      primitive.size[0]/2, primitive.size[1], primitive.size[2]/2
    ]);
    const indices = [0,1,2, 0,2,3, 0,1,4, 1,2,4, 2,3,4, 3,0,4];
    geometry.setIndex(indices);
    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
  }

  const material = new MeshBasicMaterial({ 
    color: primitive.color,
    wireframe: primitive.selected,
    side: 2 
  });

  return (
    <mesh
      geometry={geometry}
      material={material}
      position={primitive.position}
      onClick={onClick}
    />
  );
};
export default PrimitiveMesh