import { Grid } from "@mui/material";
import { Box, css } from "@mui/system";
import { ActivityOptions } from "./activity-options/ActivityOptions";
import { selectActiveOptions, selectStage } from "@/store/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import activityOptions from "@/store/features/activityOptions";

const containerStyles = css({
  height: "50%",
});

export const Content = () => {
  const stage = useSelector(selectStage);
  const activeOptions = useSelector(selectActiveOptions);

  return (
    <Grid item container css={containerStyles} direction="column">
      <Grid item>
        <Box>Choose your activity options:</Box>
      </Grid>
      <Grid item>{stage == 0 ? <ActivityOptions /> : `${activeOptions}`}</Grid>
    </Grid>
  );
};
