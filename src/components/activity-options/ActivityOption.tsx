import { toggleActivityOption } from "@/store/features/activityOptions";
import { Grid, ToggleButton, css } from "@mui/material";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";

const toggleButtonStyles = css({
  width: "100%",
  height: 40,
});

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
    <ToggleButton
      color="primary"
      selected={isButtonSelected}
      css={toggleButtonStyles}
      onClick={onToggle}
      value={name}
    >
      <Grid item container justifyContent="center" gap={2}>
        <Grid item>{icon}</Grid>
        <Grid item>{name}</Grid>
      </Grid>
    </ToggleButton>
  );
};
