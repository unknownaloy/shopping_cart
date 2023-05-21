import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
	return (
		<div className="flex flex-col">
			<h1>Store</h1>

			<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[16px]">
				{storeItems.map((item) => (
					<div key={item.id}>{<StoreItem {...item} />}</div>
				))}
			</div>
		</div>
	);
};

export default Store;
