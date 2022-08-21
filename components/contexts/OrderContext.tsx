import React from "react";
import { foodItem } from "../types/Types";

export const OrderContext = React.createContext<OrderContextProps>({ items: [], updateItems: (item: foodItem) => {}, orderNotes: { notes: "", setNotes: (newNote: string) => {} } });

interface OrderContextProps {
	items: foodItem[];
	updateItems: (item: foodItem) => void;
	orderNotes: { notes: string; setNotes: (newNote: string) => void };
}
