"use client";
import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

type InvoiceFormProps = {
  checkedCount: number;
  onSave: (store: string, price: string | number) => void;
};

const InvoiceForm = ({ checkedCount, onSave }: InvoiceFormProps) => {
  const [storeName, setStoreName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const handleBtnClick = () => {
    if (!storeName || !totalPrice) return;
    onSave(storeName, totalPrice);
    setStoreName("");
    setTotalPrice("");
  };

  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderTop: "2px dashed #ccc",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 2, color: "primary.main" }}>
        Save Selected Items ({checkedCount} selected)
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          label="Store Name"
          size="small"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        <TextField
          label="Total Price"
          size="small"
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={handleBtnClick}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default InvoiceForm;
