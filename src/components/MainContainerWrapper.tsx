import { Grid, Theme, css } from "@mui/material";
import { ReactNode } from "react";

const outerContainerStyles = (theme: Theme) => ({
  height: "100vh",
  padding: theme.spacing(0, 2, 0, 2),
});

const innerContainerStyles = (theme: Theme) =>
  css({
    backgroundColor: theme.palette.secondary.main,
    maxWidth: "500px",
    minHeight: "500px",
    border: `4px solid ${theme.palette.primary.dark}`,
    borderRadius: "25px",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
  });

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
        css={innerContainerStyles}
      >
        {children}
      </Grid>
    </Grid>
  );
}
