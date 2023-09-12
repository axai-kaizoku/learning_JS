import React from 'react';
import AddRecipe from './components/AddRecipe';
import Input from './components/Input';
import RecipeCard from './components/RecipeCard';
import Recipe from './components/Recipe';

const App = () => {
	const flag = 1;

	// 1 for home page
	// 0 for recipe
	// 2 for add recipe
	return (
		<>
			<div className="recipe-meister">
				<h1>Recipe Meister</h1>
				{/* {if (flag === 0)
       {<Recipe />
       } else if (flag === 1) 
       {<AddRecipe />}} */}
				{flag === 1 ? (
					<div>
						<Input label="FIND RECIPES" />
						<button className="btn btn-black">Add a Recipe</button>
						<RecipeCard data={['CAKES', 'DESSERT']} />
						<RecipeCard data={['CAKES', 'DESSERT']} />
					</div>
				) : flag === 2 ? (
					<AddRecipe />
				) : (
					<Recipe />
				)}
			</div>
		</>
	);
};

export default App;
