import { Grid } from "@mui/material";
import { Box, css } from "@mui/system";
import { ActivityOptions } from "./activity-options/ActivityOptions";
import { selectActiveOptions, selectStage } from "@/store/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import activityOptions from "@/store/features/activityOptions";
import { ActivityAnswers } from "./activity-answers/ActivityAnswers";

const containerStyles = css({
  height: "50%",
});

export const Content = () => {
  const stage = useSelector(selectStage);

  return (
    <Grid item container css={containerStyles} direction="column">
      <Grid item>{stage == 0 ? <ActivityOptions /> : <ActivityAnswers />}</Grid>
    </Grid>
  );
};
