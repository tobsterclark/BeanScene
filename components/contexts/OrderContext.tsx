import React from "react";
import { foodItem } from "../types/Types";

export const OrderContext = React.createContext<OrderContextProps>({
	items: [],
	addItems: (item: foodItem) => {},
	updateItem: (index: number, text: string) => {},
	deleteItems: (index: number) => {},
	orderNotes: { notes: "", setNotes: (newNote: string) => {} },
});

interface OrderContextProps {
	items: foodItem[];
	addItems: (item: foodItem) => void;
	updateItem: (index: number, text: string) => void;
	deleteItems: (index: number) => void;
	orderNotes: { notes: string; setNotes: (newNote: string) => void };
}
