import { nextStage } from "@/store/features/stage";
import { selectStage } from "@/store/selectors";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const OptionButtons = () => {
  const dispatch = useDispatch();
  const stage = useSelector(selectStage);

  function handleNextButtonClick() {
    dispatch(nextStage());
  }

  return (
    <Grid item container alignItems="center" justifyContent="center" gap={2}>
      <Grid item>
        {stage == 0 ? (
          <Button variant="contained" onClick={handleNextButtonClick}>
            Next
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
