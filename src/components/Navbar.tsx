import { NavLink } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
	const { openCart, cartQuantity } = useShoppingCart();

	return (
		<>
			<ShoppingCart />
			<div className="drop-shadow-sm bg-white mb-[24px] p-[16px] flex justify-between items-center sticky top-0">
				<div className="flex space-x-[16px]">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/store">Store</NavLink>
					<NavLink to="/about">About</NavLink>
				</div>

				{cartQuantity > 0 && (
					<div
						className="rounded-full border-blue-600 border-2 p-[8px] relative"
						onClick={openCart}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 96 960 960"
							width="24">
							<path d="M180 976q-24 0-42-18t-18-42V386q0-24 18-42t42-18h110q0-79 53-134.5T475 136q79 0 137 55.575T670 326h110q24 0 42 18t18 42v530q0 24-18 42t-42 18H180Zm0-60h600V386H180v530Zm300-290q79 0 137-58t58-137h-60q0 55-40 95t-95 40q-55 0-95-40t-40-95h-60q0 79 58 137t137 58ZM350 326h260q0-55-37.5-92.5T480 196q-55 0-92.5 37.5T350 326ZM180 916V386v530Z" />
						</svg>
						<div className="flex justify-center items-center rounded-full bg-red-500 p-[2px] absolute right-[-2px] bottom-[-8px] text-white font-semibold text-[10px] h-[18px] w-[18px]">
							{cartQuantity}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;
