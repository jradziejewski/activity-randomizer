import { LocalDrink, MusicNote, Restaurant } from "@mui/icons-material";
import { ReactNode } from "react";

interface Option {
  name: string;
  icon: ReactNode;
}

export const optionsList: Option[] = [
  { name: "drink", icon: <LocalDrink /> },
  { name: "music", icon: <MusicNote /> },
  { name: "snack", icon: <Restaurant /> },
];
