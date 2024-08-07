import { useEffect } from 'react';
// services..
import ProductsService from '../services/ProductsService';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../store/productSlice';
// components
import CardProduct from '../components/CardProduct';
import LoadingComponent from '../components/LoadingComponent';

function HomePage() {
	const { allProducts, loading } = useSelector(
		(state) => state.productStore
	);

	const dispatch = useDispatch();

	useEffect(() => {
		ProductsService.getAllProductsService()
			.then((res) =>
				dispatch(saveAllProductsAction(res.data.products))
			)
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='flex flex-wrap items-center justify-center mt-[50px]'>
			{loading ? (
				allProducts.map((product) => {
					return <CardProduct key={product.id} />;
				})
			) : (
				<LoadingComponent size={80}/>
			)}
		</div>
	);
}

export default HomePage;
