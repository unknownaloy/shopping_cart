import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";
import items from "../data/items.json";

const ShoppingCart = () => {
	const { isOpen, closeCart, cartItems } = useShoppingCart();

	return (
		<div
			id="slideover-container"
			className={`fixed inset-0 z-10 h-full w-full ${
				isOpen === false && "invisible"
			}`}>
			<div
				onClick={closeCart}
				id="slideover-bg"
				className={`absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 ease-out ${
					isOpen ? "opacity-50" : "opacity-0"
				}`}></div>

			<div
				id="slideover"
				className={`absolute right-0 top-0 h-full w-[500px] cursor-default bg-white px-[16px] py-[8px] text-[32px] transition-all duration-300 ease-out ${
					isOpen === false && "translate-x-full"
				}`}>
				{/* Heading and close button */}

				<div className="mb-[48px] flex justify-between">
					<div>Cart</div>
					<div onClick={closeCart}>&times;</div>
				</div>

				<div className="flex h-full flex-col overflow-y-auto">
					{cartItems.map(item => (
						<CartItem
							key={item.id}
							{...item}
						/>
					))}

					<div className="flex justify-end text-[24px] font-semibold mt-[32px]">
						Total:
						{formatCurrency(
							cartItems.reduce((total, cartItem) => {
								const item = items.find(data => data.id === cartItem.id);

								return total + (item?.price || 0) * cartItem.quantity;
							}, 0)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
