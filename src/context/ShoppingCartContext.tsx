import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
	children: ReactNode;
};

type ShoppingCartContext = {
	openCart: () => void;
	closeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartQuantity: number;
	cartItems: CartItem[];
};

type CartItem = {
	id: number;
	quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
	const context = useContext(ShoppingCartContext);

	if (context === undefined) {
		throw new Error(
			"useShoppingCart must be used within ShoppingCartContext"
		);
	}

	return context;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const [isOpen, setIsOpen] = useState(false);

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const openCart = () => setIsOpen(true);

	const closeCart = () => setIsOpen(false);

	function getItemQuantity(id: number) {
		return cartItems.find((item) => item.id == id)?.quantity || 0;
	}

	function increaseCartQuantity(id: number) {
		const found = cartItems.find((item) => item.id === id);

		if (found == undefined) {
			setCartItems((currentItems) => {
				return [...currentItems, { id, quantity: 1 }];
			});

			return;
		}

		const updatedCartItems = cartItems.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});

		setCartItems(updatedCartItems);
	}

	function decreaseCartQuantity(id: number) {
		const found = cartItems.find((item) => item.id === id)?.quantity === 1;

		if (found) {
			const updatedCartItems = cartItems.filter((item) => item.id !== id);
			setCartItems(updatedCartItems);
			return;
		}

		const updatedCartItems = cartItems.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity - 1 };
			} else {
				return item;
			}
		});

		setCartItems(updatedCartItems);
	}

	function removeFromCart(id: number) {
		const updatedCartItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCartItems);
	}

	const value = {
		openCart,
		closeCart,
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
		cartQuantity,
		cartItems,
	};

	return (
		<ShoppingCartContext.Provider value={value}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
