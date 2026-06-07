"use client";

import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

type AddItemsProps = {
  addNewItem: (name: string, quantity: string | number) => void;
};

const AddItems = ({ addNewItem }: AddItemsProps) => {
  const [itemName, setItemName] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<string | number>("");
  const handleButtonClick = () => {
    if (!itemName || !itemQuantity) return;

    addNewItem(itemName, itemQuantity);

    setItemName("");
    setItemQuantity("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 3,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <TextField
        label="Item Name"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <TextField
        label="Quantity / Weight"
        variant="outlined"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Add
      </Button>
    </Box>
  );
};
export default AddItems;
