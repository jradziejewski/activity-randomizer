import { nextStage } from "@/store/features/stage";
import { selectStage } from "@/store/selectors";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const OptionButtons = () => {
  const dispatch = useDispatch();
  const stage = useSelector(selectStage);

  return (
    <Grid item container gap={2}>
      <Grid item>
        {stage == 0 ? (
          <Button variant="contained" onClick={() => dispatch(nextStage())}>
            Next
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
