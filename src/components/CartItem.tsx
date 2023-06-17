import { useShoppingCart } from "../context/ShoppingCartContext";
import items from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
	id: number;
	quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
	const { removeFromCart } = useShoppingCart();

	const item = items.find(data => data.id === id);

	if (item == null) return null;

	return (
		<div className="mb-[16px] flex items-center justify-between">
			<div className="flex space-x-[8px]">
				<img
					className="h-[75px] w-[125px] object-cover"
					src={item.imgUrl}
				/>

				<div className="flex flex-col justify-center space-y-[4px]">
					<p className="text-[16px]">
						{item.name} {quantity > 1 && <span>x${quantity}</span>}
					</p>
					<p className="text-[14px]">{formatCurrency(item.price)}</p>
				</div>
			</div>

			<div className="flex items-center justify-center space-x-[8px]">
				<div className="text-[16px]">
					{formatCurrency(item.price * quantity)}
				</div>
				<button
					onClick={() => removeFromCart(id)}
					className="rounded-[8px] border px-[8px] py-[2px] text-[16px]">
					&times;
				</button>
			</div>
		</div>
	);
};

export default CartItem;
