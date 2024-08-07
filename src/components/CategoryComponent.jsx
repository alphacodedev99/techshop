import { useEffect, useState } from 'react';
// Services(req/res)
import CategoryService from '../services/CategoryService';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { saveAllCategoryAction } from '../store/categorySlice';
import LoadingComponent from './LoadingComponent';

function CategoryComponent() {
	const [toggleCategory, setToggleCategory] = useState(false);

	const { allCategory, categoryLoader } = useSelector(
		(state) => state.categoryStore
	);

	const dispatch = useDispatch();

	useEffect(() => {
		CategoryService.getAllCategoryService()
			.then((res) => dispatch(saveAllCategoryAction(res.data)))
			.catch((err) => console.log(err));
	}, []);

	function handleToggleCategory() {
		setToggleCategory(!toggleCategory);
	}

	return (
		<div className=' bg-lightGrayColor p-[10px]'>
			<div className='container mx-auto flex items-center flex-col gap-[20px] lg:flex-row'>
				<button
					className='bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[15px]'
					onClick={handleToggleCategory}>
					{toggleCategory ? 'Close Category' : 'Show Category'}
				</button>

				{toggleCategory && (
					<ul className='flex flex-wrap items-center justify-center gap-[10px] w-full'>
						{categoryLoader ? (
							allCategory.map((cat, index) => {
								return (
									<li
										key={index}
										className='w-[250px] bg-mainBlue text-whiteColor text-center rounded-[10px] p-[5px] hover:bg-mainYellow cursor-pointer duration-300'>
										{cat}
									</li>
								);
							})
						) : (
							<div className=' w-full flex items-center justify-center'>
								<LoadingComponent size={40}/>
							</div>
						)}
					</ul>
				)}
			</div>
		</div>
	);
}

export default CategoryComponent;
