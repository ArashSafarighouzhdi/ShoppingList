"use client";
import Link from "next/link";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const SideBar = () => {
  const sideItems: string[] = ["Home", "About"];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        alignItems: "center",
        justifyContent: { xs: "space-around", md: "flex-start" },
        width: { xs: "100%", md: "240px" },
        bgcolor: "#1e3a8a",
        color: "white",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: { xs: "none", md: "block" },
          textAlign: "center",
          my: 2,
          fontWeight: "bold",
        }}
      >
        Shopping List
      </Typography>

      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: { xs: 1, md: 0 },
        }}
      >
        {sideItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: { xs: 0, md: 1 } }}>
            <ListItemButton
              component={Link}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              sx={{
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
