import { Grid, Theme, css } from "@mui/material";
import { AppTitle } from "./AppTitle";
import { Content } from "./Content";
import { OptionButtons } from "./OptionButtons";

const containerStyles = (theme: Theme) =>
  css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    minHeight: "500px",
    border: `4px solid ${theme.palette.primary.dark}`,
    borderRadius: "25px",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
  });

export default function MainContainerWrapper() {
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      css={containerStyles}
    >
      <AppTitle />
      <Content />
      <OptionButtons />
    </Grid>
  );
}
