import { DialogTitle, Drawer, DrawerProps, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

interface DetailDrawerProps extends DrawerProps {
  onClose: () => void;
  title?: string;
}

const DetailDrawer = ({
  children,
  onClose,
  title,
  ...props
}: DetailDrawerProps) => {
  const matches = useMediaQuery("(min-width:600px)");
  const width = matches ? "40%" : "100%";

  return (
    <Drawer
      {...props}
      onClose={onClose}
      variant="temporary"
      anchor="right"
      PaperProps={{
        sx: {
          width,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: !title ? "flex-end" : "space-between",
          alignItems: "center",
        }}
        bgcolor="#FBFCFF"
        className="drawerTitle"
      >
        {title && title}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Container sx={{ padding: "1rem" }}>{children}</Container>
    </Drawer>
  );
};

export default DetailDrawer;
