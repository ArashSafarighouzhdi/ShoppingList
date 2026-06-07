"use client";
import { Box, Paper, Typography, Chip } from "@mui/material";
import { SavedInvoice as SavedInvoiceType } from "@/app/page";

type CardProps = {
  invoice: SavedInvoiceType;
};

const SavedInvoice = ({ invoice }: CardProps) => {
  return (
    <Paper elevation={1} sx={{ p: 2, mb: 2, borderLeft: "5px solid #2e7d32" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
          mb: 2,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>
            Shop: {invoice.storeName}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", display: "block" }}
          >
            Date: {invoice.date || "-"}
          </Typography>
        </Box>

        <Typography sx={{ color: "success.dark", fontWeight: "medium" }}>
          Total: {invoice.totalPrice} SEK
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {invoice.savedItems.map((item) => (
          <Chip
            key={item.id}
            label={`${item.name} (${item.quantity})`}
            size="small"
          />
        ))}
      </Box>
    </Paper>
  );
};

export default SavedInvoice;
