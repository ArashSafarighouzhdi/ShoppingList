"use client";
import { List, Paper, Typography } from "@mui/material";
import ShoppingItems from "@/components/ShoppingItems";
import InvoiceForm from "@/components/InvoiceForm";
import { ShoppingItem as ShoppingItemType } from "@/app/page";

type ShoppingListProps = {
  items: ShoppingItemType[];
  onToggleCheck: (id: string) => void;
  onSaveInvoice: (storeName: string, totalPrice: string | number) => void;
};

const ShoppingList = ({
  items,
  onToggleCheck,
  onSaveInvoice,
}: ShoppingListProps) => {
  const checkedItems = items.filter((item) => item.ischecked);

  return (
    <Paper elevation={2} sx={{ mt: 4, p: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Items to Buy
      </Typography>

      <List>
        {items.map((item) => (
          <ShoppingItems key={item.id} item={item} onToggle={onToggleCheck} />
        ))}
      </List>

      {checkedItems.length > 0 && (
        <InvoiceForm
          checkedCount={checkedItems.length}
          onSave={onSaveInvoice}
        />
      )}
    </Paper>
  );
};

export default ShoppingList;
