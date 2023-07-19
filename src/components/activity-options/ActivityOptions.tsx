import { Grid } from "@mui/material";
import { ActivityOption } from "./ActivityOption";
import { optionsList } from "./optionsList";

export const ActivityOptions = () => {
  return (
    <Grid item container direction="column">
      <Grid item>Choose your activity options</Grid>
      <Grid item container direction="column">
        {optionsList.map((option) => (
          <Grid item sx={{ width: 200 }}>
            <ActivityOption
              name={option.name}
              icon={option.icon}
              key={option.name}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
