"use client";

import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Header from "@/components/Header";
import AddItems from "@/components/AddItems";
import ShoppingList from "@/components/ShoppingList";
import InvoicesList from "@/components/InvoicesList";

export type ShoppingItem = {
  id: string;
  name: string;
  quantity: string | number;
  ischecked: boolean;
};

export type SavedInvoice = {
  id: string;
  storeName: string;
  totalPrice: string | number;
  savedItems: ShoppingItem[];
  date: string;
};

export default function ShoppingListPage() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [savedInvoices, setSavedInvoices] = useState<SavedInvoice[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const localItems = localStorage.getItem("shopping_items");
    const localInvoices = localStorage.getItem("saved_invoices");
    if (localItems) setItems(JSON.parse(localItems));
    if (localInvoices) setSavedInvoices(JSON.parse(localInvoices));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("shopping_items", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("saved_invoices", JSON.stringify(savedInvoices));
    }
  }, [savedInvoices, isLoaded]);

  const handleAddNewItem = (name: string, quantity: string | number) => {
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 11);

    setItems([...items, { id, name, quantity, ischecked: false }]);
  };

  const handleToggleCheck = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, ischecked: !item.ischecked } : item,
      ),
    );
  };

  const handleSaveInvoice = (
    storeName: string,
    totalPrice: string | number,
  ) => {
    const checkedItems = items.filter((item) => item.ischecked);

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 11);

    setSavedInvoices([
      ...savedInvoices,
      {
        id,
        storeName,
        totalPrice,
        savedItems: checkedItems,
        date: new Date().toLocaleDateString("en-US"),
      },
    ]);

    setItems(items.filter((item) => !item.ischecked));
  };

  if (!isLoaded) return null;

  return (
    <Container maxWidth="md" disableGutters>
      <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 0 } }}>
        <Header />

        <AddItems addNewItem={handleAddNewItem} />

        {items.length > 0 && (
          <ShoppingList
            items={items}
            onToggleCheck={handleToggleCheck}
            onSaveInvoice={handleSaveInvoice}
          />
        )}

        {savedInvoices.length > 0 && <InvoicesList invoices={savedInvoices} />}
      </Box>
    </Container>
  );
}
