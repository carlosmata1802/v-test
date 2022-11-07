import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { NavWrapper } from "./Navigation.styled";
import LogoHeader from "../LogoHeader";
import { clients, dashboard, invoice, money, settings } from "../../assets";
import { useState } from "react";

const NAVIGATION_ITEMS = [
  {
    url: "/",
    name: "Dashboard",
    icon: dashboard,
  },
  {
    url: "/invoices",
    name: "New Invoice",
    icon: invoice,
  },
  {
    url: "/receivables",
    name: "Receivables",
    icon: money,
  },
  {
    url: "/payables",
    name: "Payables",
    icon: money,
  },
  {
    url: "/clients",
    name: "Clients",
    icon: clients,
  },
  {
    url: "/settings",
    name: "Settings",
    icon: settings,
  },
];

const LINK_STYLES = {
  textDecoration: "none",
  width: "100%",
  color: "black",
  fontSize: "14px",
};

const LINK_ACTIVE_STYLES = {
  ...LINK_STYLES,
  background: "#EBF3FA",
};

const Navigation = () => {
  const [linkActive, setLinkActive] = useState<String>("Dashboard");
  return (
    <NavWrapper>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100%",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            padding: "0 0 1rem 0",
            width: "100%",
            position: "relative",
          },
        }}
        open
      >
        <LogoHeader />
        <List sx={{ padding: 0 }}>
          {NAVIGATION_ITEMS.map((item) => (
            <ListItem key={item.url} disablePadding>
              <NavLink
                style={({ isActive }) => {
                  isActive && setLinkActive(item.name);
                  return isActive ? LINK_ACTIVE_STYLES : LINK_STYLES;
                }}
                to={item.url}
              >
                <ListItemButton sx={{ width: "100%" }}>
                  <img
                    style={
                      linkActive !== item.name ? { opacity: "0.4" } : undefined
                    }
                    src={item.icon}
                    alt={`icon-${item.name}`}
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "body1",
                      fontSize: "14px",
                      padding: ".5rem 1rem",
                    }}
                    primary={item.name}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </NavWrapper>
  );
};

export default Navigation;
