import { Grid } from "@mui/material";
import { css } from "@mui/system";
import { ActivityOptions } from "./activity-options/ActivityOptions";
import { selectStage } from "@/store/selectors";
import { useSelector } from "react-redux";
import { ActivityAnswers } from "./activity-answers/ActivityAnswers";

const containerStyles = css({
  marginTop: "40%",
});

export const Content = () => {
  const stage = useSelector(selectStage);

  return (
    <Grid
      item
      container
      css={containerStyles}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>{stage == 0 ? <ActivityOptions /> : <ActivityAnswers />}</Grid>
    </Grid>
  );
};
