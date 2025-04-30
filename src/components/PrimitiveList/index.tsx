import { useState } from "react";
import { Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper } from "@mui/material";
import { Add, Clear } from "@mui/icons-material";
import { Primitive } from "../PrimitiveMesh/types";
import { AddPrimitiveDialog } from "./AddPrimitiveDialog";


const PrimitiveList = ({ 
  primitives,
  selectedId,
  onAddPrimitives,
  onClearAll,
  onSelectPrimitive
}: {
  primitives: Primitive[];
  selectedId: string | null;
  onAddPrimitives: (primitives: Primitive[]) => void;
  onClearAll: () => void;
  onSelectPrimitive: (id: string) => void;
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div style={{ width: "300px", padding: "16px", borderRight: "1px solid #ddd" }}>
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
        onClick={onClearAll}
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
              onClick={() => onSelectPrimitive(primitive.id)}
              sx={{
                cursor: "pointer",
                backgroundColor: primitive.id === selectedId ? "#e0e0e0" : "inherit",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: primitive.color }} />
              </ListItemAvatar>
              <ListItemText
                primary={`${primitive.type} (${primitive.size.join(" × ")})`}
                secondary={`Position: [${primitive.position
                  .map((p) => p.toFixed(1))
                  .join(", ")}]`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <AddPrimitiveDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onAddPrimitives={onAddPrimitives}
      />
    </div>
  );
};

export default PrimitiveList