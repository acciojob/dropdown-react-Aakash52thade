import React from 'react';

function Card({ name, description, type }) {
	return (
		<div className="card">
			<div id={`${type}-name`}>{name}</div>
			<div id={`${type}-description`}>{description}</div>
		</div>
	);
}

export default Card;