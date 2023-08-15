import { Box, Grid, IconButton, Modal, css, Theme } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";
import { modalMessage } from "./modalMessage";

const appTitleStyles = css({
  position: "absolute",
  top: "20px",
  textWrap: "nowrap",
});

const modalStyles = (theme: Theme) =>
  css({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    minWidth: 200,
    padding: theme.spacing(2),
  });

export const AppTitle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        css={appTitleStyles}
        gap={1}
      >
        <Grid item>
          <h1>Activity Randomizer</h1>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setIsModalOpen(true)}>
            <HelpOutline />
          </IconButton>
        </Grid>
      </Grid>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box css={modalStyles}>{modalMessage}</Box>
      </Modal>
    </>
  );
};
