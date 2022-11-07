import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import ButtonStyled from "./Common.styled";

interface AuthorizeCreditModalProps extends DialogProps {
  onClose: () => void;
  creditName?: string;
}

const AuthorizeCreditModal = ({
  onClose,
  open,
  creditName,
}: AuthorizeCreditModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{`Authorize ${creditName}`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonStyled variant="contained" onClick={onClose} autoFocus>
          Agree
        </ButtonStyled>
      </DialogActions>
    </Dialog>
  );
};

export default AuthorizeCreditModal;
