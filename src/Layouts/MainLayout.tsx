import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Grid container sx={{ width: "100%" }} minHeight="calc(100vh - 60px)">
      <Grid xs={12} lg={2}>
        <Navigation />
      </Grid>
      <Grid xs={12} lg={10}>
        <Header />
        <Container
          sx={{
            height: "calc(100vh - 56px)",
            backgroundColor: "#FBFCFF",
            overflow: "scroll",
            paddingTop: "2rem",
          }}
        >
          {children}
        </Container>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
