import { toggleActivityOption } from "@/store/features/activityOptions";
import { Grid, ToggleButton } from "@mui/material";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";

export const ActivityOption = ({
  name,
  icon,
}: {
  name: string;
  icon: ReactNode;
}) => {
  const [isButtonSelected, setIsButtonSelected] = useState(false);
  const dispatch = useDispatch();

  function onToggle() {
    setIsButtonSelected(!isButtonSelected);
    dispatch(toggleActivityOption(name));
  }

  return (
    <ToggleButton selected={isButtonSelected} onClick={onToggle} value={name}>
      <Grid item container>
        <Grid item>{name}</Grid>
        <Grid item>{icon}</Grid>
      </Grid>
    </ToggleButton>
  );
};
