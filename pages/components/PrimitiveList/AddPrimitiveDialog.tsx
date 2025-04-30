import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, Button } from "@mui/material";
import { Primitive, PrimitiveType } from "../PrimitiveMesh/types";

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

export const AddPrimitiveDialog = ({
  open,
  onClose,
  onAddPrimitives
}: {
  open: boolean;
  onClose: () => void;
  onAddPrimitives: (primitives: Primitive[]) => void;
}) => {
  const [type, setType] = useState<PrimitiveType>("box");
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(1);
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    const newPrimitives = Array(count)
      .fill(0)
      .map((_, i) => ({
        id: `${type}-${Date.now()}-${i}`,
        type,
        position: getRandomPosition(),
        size: [width, height, depth] as [number, number, number],
        color: getRandomColor(),
        selected: false,
      }));

    onAddPrimitives(newPrimitives);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Primitives</DialogTitle>
      <DialogContent>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value as PrimitiveType)}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};