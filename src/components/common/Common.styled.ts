import styled from "@emotion/styled";
import { Button, Link } from "@mui/material";

export const NavWrapper = styled.nav`
  height: 100%;
`;

const ButtonStyled = styled(Button)`
  background-color: #1a237e;
  &:hover {
    opacity: 0.8;
  }
` as typeof Button;

export default ButtonStyled;
