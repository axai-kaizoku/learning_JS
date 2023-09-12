// Recipe Component
import React from 'react';
import Icon from './Icon';

const Recipe = ({ recipeId, onExit, children }) => {
	return (
		<>
			<div className="recipe-detail">
				<h2>
					LET'S COOK<button className="btn small-btn">X</button>
				</h2>
				<img className="recipe-img" src="//picsum.photos/400/400" alt="straw" />
				<h1 className="recipe-title">Strawberry Cheesecake</h1>
				<p className="recipe-desc">This is strawberry recipe for dessert</p>
				<Icon />
				<div className="keywords">
					<div className="keyword">CAKES</div>
					<div className="keyword">DESSERT</div>
				</div>
				<div className="recipe-ingredients">
					<h3>Ingredients</h3>
					<ul>
						<li>sugar</li>
						<li>flour</li>
					</ul>
				</div>
				<div className="recipe-instructions">
					<h3>Instructions</h3>
					<p>1. Mix flour with sugar and vanilla essense</p>
				</div>
			</div>
		</>
	);
};

export default Recipe;
