import { Grid } from "@mui/material";
import { AppTitle } from "./AppTitle";
import { Content } from "./Content";
import { OptionButtons } from "./OptionButtons";

export default function MainContainer() {
  return (
    <Grid container spacing={3} direction="column" alignItems="center">
      <Grid item>
        <AppTitle />
      </Grid>
      <Grid item>
        <Content />
      </Grid>
      <Grid item>
        <OptionButtons />
      </Grid>
    </Grid>
  );
}
