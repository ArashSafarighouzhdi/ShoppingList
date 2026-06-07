"use client";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { ShoppingItem as ShoppingItemType } from "@/app/page";

type ItemRowProps = {
  item: ShoppingItemType;
  onToggle: (id: string) => void;
};

const ShoppingItems = ({ item, onToggle }: ItemRowProps) => {
  return (
    <ListItem
      divider
      disablePadding
      secondaryAction={
        <Checkbox
          edge="end"
          checked={item.ischecked}
          onChange={(e) => {
            e.stopPropagation();
            onToggle(item.id);
          }}
        />
      }
    >
      <ListItemButton
        onClick={() => onToggle(item.id)}
        sx={{
          textDecoration: item.ischecked ? "line-through" : "none",
          opacity: item.ischecked ? 0.6 : 1,
        }}
      >
        <ListItemText
          primary={item.name}
          secondary={`Quantity: ${item.quantity}`}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ShoppingItems;
