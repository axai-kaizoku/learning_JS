// AddRecipe Component
import React from 'react';
import Input from './Input';
import InputTags from './InputTags';
import Select from './Select';
import List from './List';
import Text from './Text';

const AddRecipe = () => {
	return (
		<>
			<div className="add-recipe">
				<h2>Add a Recipe</h2>
				<Input label="Title" />
				<Input label="Description" />

				<InputTags label="Keywords" />
				<Select
					label="Type"
					options={['Vegetarian', 'Vegan', 'Meat', 'Poultry', 'Seafood']}
				/>
				<Input label="Vegan" />
				<List label="Ingredients" value={['S', 'A']} />
				<Text label="Instructions" value="1. Set a Large" />
				<div className="buttons">
					<button className="btn small-btn">Save</button>
					<button className="btn btn-black small-btn">Exit</button>
				</div>
			</div>
		</>
	);
};

export default AddRecipe;
