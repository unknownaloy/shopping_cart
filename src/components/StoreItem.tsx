import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	return (
		<div className="flex flex-col">
			<img src={imgUrl} className="h-[200px] object-cover mb-[16px]" />

			<div className="flex justify-between items-center">
				<p>{name}</p>
				<p>{formatCurrency(price)}</p>
			</div>
		</div>
	);
};

export default StoreItem;
