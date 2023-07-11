import { Grid, Theme } from "@mui/material";
import { ReactNode } from "react";

const outerContainerStyles = (theme: Theme) => ({
  height: "100vh",
  padding: theme.spacing(0, 2, 0, 2),
});

const innerContainerStyles = {
  backgroundColor: "lightpink",
  maxWidth: "500px",
  minHeight: "500px",
  borderRadius: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
};

export default function MainContainerWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={outerContainerStyles}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        sx={innerContainerStyles}
      >
        {children}
      </Grid>
    </Grid>
  );
}
