import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	const quantity = 1;

	return (
		<div className="flex flex-col">
			<img src={imgUrl} className="h-[200px] object-cover mb-[16px]" />

			<div className="flex justify-between items-center mb-[24px]">
				<p>{name}</p>
				<p>{formatCurrency(price)}</p>
			</div>

			<div className="flex justify-center items-center">
				{quantity === 0 ? (
					<button className="bg-blue-600 p-[8px] rounded-sm w-full">
						+ Add to Cart
					</button>
				) : (
					<div className="flex flex-col">
						<div className="flex justify-center items-center space-x-[8px] mb-[24px]">
							<button className="bg-blue-600 py-[8px] px-[16px] rounded-[8px]">
								-
							</button>
							<span>{quantity} in cart</span>
							<button className="bg-blue-600 py-[8px] px-[16px] rounded-[8px]">
								+
							</button>
						</div>

						<button className="bg-red-600 rounded-[8px] py-[4px] px-[8px]">
							Remove
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default StoreItem;
