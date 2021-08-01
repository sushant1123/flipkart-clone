import { InputBase, List, ListItem, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProducts as listProducts } from "../../redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
	search: {
		borderRadius: 2,
		background: "#fff",
		marginLeft: 0,
		width: "38%",
		display: "flex",
	},
	searchIcon: {
		padding: 5,
		height: "100%",
		display: "flex",
		color: "blue",
	},
	inputRoot: {
		fontSize: "unset",
		width: "100%",
	},
	inputInput: {
		paddingLeft: 20,
	},
	list: {
		position: "absolute",
		backgroundColor: "#fff",
		marginTop: 36,
	},
	listItem: {
		color: "black",
	},
	productLink: {
		textDecoration: "none",
		color: "black",
	},
}));

const SearchBar = () => {
	const classes = useStyles();

	const [enteredText, setEnteredText] = useState("");
	const [isListVisible, setIsListVisible] = useState(true);

	const getProducts = useSelector((state) => state.getProducts);
	const { products } = getProducts;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	const handleSearchedInputChange = (e) => {
		const { value } = e.target;
		setEnteredText(value);
		setIsListVisible(false);
	};

	const handleListVisibility = () => {
		setIsListVisible(true);
	};

	//if (enteredText.length > 0) console.log(enteredText);

	return (
		<div className={classes.search}>
			<InputBase
				placeholder="Search for products, brands and more"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ "aria-label": "search" }}
				onChange={handleSearchedInputChange}
			/>
			<div className={classes.searchIcon}>
				<Search />
			</div>
			{enteredText && (
				<List className={classes.list} hidden={isListVisible}>
					{products
						.filter((item) =>
							item.title.longTitle
								.toLowerCase()
								.includes(enteredText.toLowerCase())
						)
						.map((product) => (
							<ListItem
								key={product.id}
								className={classes.listItem}
								onClick={handleListVisibility}
							>
								<Link
									to={`/product/${product.id}`}
									className={classes.productLink}
								>
									{product.title.longTitle}
								</Link>
							</ListItem>
						))}
				</List>
			)}
		</div>
	);
};

export default SearchBar;
