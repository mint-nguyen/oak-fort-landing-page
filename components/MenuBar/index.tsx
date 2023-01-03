import { useState } from "react";

const menuItems = [
	{
		id: "women",
		mainItem: "WOMEN'S",
		subItems: [
			{
				categories: `ALL CLOTHINGS`,
				subSubItems: ["OUTERWEAR", "SWEATSHIRT"],
			},
			{
				categories: `ACCESSORIES`,
				subSubItems: ["BAGS", "SHOES"],
			},
		],
	},
	{
		id: "men",
		mainItem: "MEN'S",
		subItems: [
			{
				categories: `ALL CLOTHINGS`,
				subSubItems: ["OUTERWEAR", "SWEATSHIRT"],
			},
			{
				categories: `ACCESSORIES`,
				subSubItems: ["BAGS MEN", "SHOES MEN"],
			},
		],
	},
	{
		id: "new",
		mainItem: "NEW",
		subItems: [],
	},
];

const MenuBar = () => {
	const [isSubMenuShown, setIsSubMenuShown] = useState(false);
	const [menuIdShown, setMenuIdShown] = useState("");

	const handleOnMouseEnterMenuItem = (item: any) => {
		setIsSubMenuShown(true);
		setMenuIdShown(item.id);
	};

	const handleOnMouseLeaveMenuItem = () => {
		setIsSubMenuShown(false);
		setMenuIdShown("");
	};

	const hoveredItem = menuItems.filter((item) => item.id === menuIdShown);

	return (
		<nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			<div className="container flex flex-wrap items-center justify-center mx-auto">
				<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{menuItems.map((menuItem) => {
							return (
								<li key={menuItem.id}>
									<button
										onMouseEnter={() => handleOnMouseEnterMenuItem(menuItem)}
										className="block py-2 pl-3 pr-4 text-black-500 rounded hover:text-gray-500 ">
										{menuItem.mainItem}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{isSubMenuShown && hoveredItem && hoveredItem[0].subItems && (
				<div
					onMouseEnter={() => handleOnMouseEnterMenuItem(hoveredItem[0])}
					onMouseLeave={() => handleOnMouseLeaveMenuItem()}
					className={`container flex flex-wrap items-center justify-center mx-auto column-${hoveredItem[0].subItems.length}`}>
					{hoveredItem[0].subItems.map((item) => {
						return (
							<div key={item.categories}>
								<a href="#">
									<p className="p-4 text-black-500 font-medium hover:underline">
										{item.categories}
									</p>
								</a>
								{item.subSubItems.map((subItem) => {
									return (
										<a key={subItem} href="#">
											<p className="pl-4 p-2 text-xs hover:underline">
												{subItem}
											</p>
										</a>
									);
								})}
							</div>
						);
					})}
				</div>
			)}
		</nav>
	);
};

export default MenuBar;
