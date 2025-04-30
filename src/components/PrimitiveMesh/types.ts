export type PrimitiveType = "box" | "pyramid";

export interface Primitive {
  id: string;
  type: PrimitiveType;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  selected: boolean;
}