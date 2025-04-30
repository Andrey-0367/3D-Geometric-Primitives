import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  DoubleSide,
  BufferAttribute,
} from "three";
import { OrbitControls } from "@react-three/drei";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import { Add, Clear } from "@mui/icons-material";
import React from "react";

type PrimitiveType = "box" | "pyramid";

interface Primitive {
  id: string;
  type: PrimitiveType;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  faceColors?: string[];
  selected: boolean;
}

const PyramidGeometry = () => {
  const geometry = new BufferGeometry();
  const vertices = new Float32Array([
    // Base
    0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1,
    // Apex
    0.5, 1, 0.5,
  ]);
  const indices = [
    // Base
    0, 1, 2, 0, 2, 3,
    // Sides
    0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4,
  ];
  geometry.setIndex(indices);
  geometry.setAttribute("position", new BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  return geometry;
};

const PrimitiveMesh = ({
  primitive,
  onClick,
}: {
  primitive: Primitive;
  onClick: () => void;
}) => {
  const meshRef = useRef<Mesh>(null);
  const geometry =
    primitive.type === "box"
      ? new BoxGeometry(...primitive.size)
      : PyramidGeometry();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  if (primitive.type === "box" && primitive.faceColors) {
    const materials = primitive.faceColors.map(
      (color) =>
        new MeshBasicMaterial({
          color,
          side: DoubleSide,
          wireframe: primitive.selected,
          wireframeLinewidth: 2,
        })
    );
    return (
      <mesh
        ref={meshRef}
        position={primitive.position}
        geometry={geometry}
        material={materials}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      />
    );
  }

  return (
    <mesh
      ref={meshRef}
      position={primitive.position}
      geometry={geometry}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <meshBasicMaterial
        color={primitive.color}
        wireframe={primitive.selected}
        wireframeLinewidth={2}
      />
    </mesh>
  );
};

const Scene = ({
  primitives,
  onPrimitiveClick,
}: {
  primitives: Primitive[];
  onPrimitiveClick: (id: string) => void;
}) => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {primitives.map((primitive) => (
        <PrimitiveMesh
          key={primitive.id}
          primitive={primitive}
          onClick={() => onPrimitiveClick(primitive.id)}
        />
      ))}
    </Canvas>
  );
};

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
const getRandomPosition = () =>
  [Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3] as [
    number,
    number,
    number
  ];

export default function PrimitiveViewer() {
  const [primitives, setPrimitives] = useState<Primitive[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPrimitive, setSelectedPrimitive] = useState<string | null>(
    null
  );
  const [primitiveType, setPrimitiveType] = useState<PrimitiveType>("box");
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(1);
  const [count, setCount] = useState(1);
  const [randomFaceColors, setRandomFaceColors] = useState(false);

  const handleAddPrimitives = () => {
    const newPrimitives: Primitive[] = [];

    for (let i = 0; i < count; i++) {
      const id = `${primitiveType}-${Date.now()}-${i}`;
      const color = getRandomColor();
      const position = getRandomPosition();
      const size: [number, number, number] = [width, height, depth];

      let faceColors: string[] | undefined;
      if (randomFaceColors) {
        faceColors = Array(primitiveType === "box" ? 6 : 5)
          .fill(0)
          .map(() => getRandomColor());
      }

      newPrimitives.push({
        id,
        type: primitiveType,
        position,
        size,
        color,
        faceColors,
        selected: false,
      });
    }

    setPrimitives([...primitives, ...newPrimitives]);
    setOpenDialog(false);
  };

  const handleClear = () => {
    setPrimitives([]);
    setSelectedPrimitive(null);
  };

  const handlePrimitiveClick = (id: string) => {
    setPrimitives(
      primitives.map((p) => ({
        ...p,
        selected: p.id === id,
      }))
    );
    setSelectedPrimitive(id);
  };

  const handleListItemClick = (id: string) => {
    handlePrimitiveClick(id);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "300px",
          padding: "16px",
          borderRight: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Geometric Primitives
        </Typography>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenDialog(true)}
          fullWidth
          sx={{ mb: 2 }}
        >
          Add Primitives
        </Button>

        <Button
          variant="outlined"
          startIcon={<Clear />}
          onClick={handleClear}
          fullWidth
          sx={{ mb: 2 }}
        >
          Clear All
        </Button>

        <Paper sx={{ height: "calc(100% - 120px)", overflow: "auto" }}>
          <List>
            {primitives.map((primitive) => (
              <ListItem
                key={primitive.id}
                onClick={() => handleListItemClick(primitive.id)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  backgroundColor:
                    primitive.id === selectedPrimitive
                      ? "action.selected"
                      : undefined,
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: primitive.color }} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${primitive.type} (${primitive.size.join(" x ")})`}
                  secondary={`Position: [${primitive.position
                    .map((p) => p.toFixed(2))
                    .join(", ")}]`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>

      <div style={{ flex: 1 }}>
        <Scene
          primitives={primitives}
          onPrimitiveClick={handlePrimitiveClick}
        />
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Primitives</DialogTitle>
        <DialogContent>
          <Select
            value={primitiveType}
            onChange={(e) => setPrimitiveType(e.target.value as PrimitiveType)}
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="box">Box</MenuItem>
            <MenuItem value="pyramid">Pyramid</MenuItem>
          </Select>

          <TextField
            label="Width"
            type="number"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Height"
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Depth"
            type="number"
            value={depth}
            onChange={(e) => setDepth(parseFloat(e.target.value))}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Count"
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            fullWidth
            sx={{ mb: 2 }}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              id="randomFaceColors"
              checked={randomFaceColors}
              onChange={(e) => setRandomFaceColors(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            <label htmlFor="randomFaceColors">
              Random colors for each face
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddPrimitives} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
