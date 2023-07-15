import { Button, Grid } from "@mui/material";

export const OptionButtons = () => {
  return (
    <Grid item container gap={2}>
      <Grid item>
        <Button variant="contained">Next</Button>
      </Grid>
    </Grid>
  );
};
