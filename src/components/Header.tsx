import { Box, Fade, Popper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import notification from "../assets/notification.svg";
import StringAvatar from "./StringAvatar";

const DOLAR_VALUE = "0,938748";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <Grid
      container
      alignItems="center"
      sx={{ borderBottom: "1px solid #C7C7C7" }}
      justifyContent="between"
      px="1.5rem"
    >
      <Grid xs={12} lg={6}>
        <p>1 USD = {DOLAR_VALUE} EUR</p>
      </Grid>
      <Grid
        xs={12}
        lg={6}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <p>May 10, 2022</p>
        <img style={{ margin: "15px" }} src={notification} alt="notification" />
        <div
          aria-describedby={id}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <StringAvatar name="Carlos Mata" size="medium" />
        </div>

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          sx={{ minWidth: "100px" }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box
                sx={{ border: 1, p: 1, ml: -3, bgcolor: "background.paper" }}
              >
                <p>Edit profile</p>
                <p>Logout</p>
              </Box>
            </Fade>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default Header;
