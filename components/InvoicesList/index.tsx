"use client";

import { Box, Typography } from "@mui/material";
import SavedInvoice from "@/components/SaveInvoice";
import { SavedInvoice as SavedInvoiceType } from "@/app/page";

type InvoicesListProps = {
  invoices: SavedInvoiceType[];
};

const InvoicesList = ({ invoices }: InvoicesListProps) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, color: "success.main" }}
      >
        Saved Purchases (History)
      </Typography>

      {invoices.map((inv) => (
        <SavedInvoice key={inv.id} invoice={inv} />
      ))}
    </Box>
  );
};

export default InvoicesList;
