import { Grid } from "@mui/material";
import { Box, css } from "@mui/system";
import { ActivityOptions } from "./activity-options/ActivityOptions";
import { selectActiveOptions } from "@/store/selectors";
import { useSelector } from "react-redux";

const containerStyles = css({
  height: "50%",
});

export const Content = () => {
  const activeOptions = useSelector(selectActiveOptions);
  console.log(activeOptions);
  return (
    <Grid item container css={containerStyles} direction="column">
      <Grid item>
        <Box>Choose your activity options:</Box>
      </Grid>
      <Grid item>
        <ActivityOptions />
      </Grid>
    </Grid>
  );
};
