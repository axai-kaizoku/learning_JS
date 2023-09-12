// RecipeCard Component
import React from 'react';

const RecipeCard = ({ data, onSelected }) => {
	return (
		<>
			<div className="recipe-card">
				<img className="recipe-img" src="//picsum.photos/300/300" alt="straw" />
				<div className="details">
					<h2>Strawberry Cheesecake</h2>
					<h3>
						This strawberry cheesecake is the summer dessert dreams are made of.
					</h3>

					<div className="keywords">
						{data.map((e) => (
							<div className="keyword">{e}</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default RecipeCard;
