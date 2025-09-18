import React from 'react';
import { addSvgAttrs } from '../../../utils/functions';

const VerticalCard = ( { icon, title, description, styles } ) => {
	return (
		<div className="card-vertical services-card-block-service">
			<div className="icon-wrapper">
				<span
					className="icon"
					dangerouslySetInnerHTML={ {
						__html: addSvgAttrs( icon, {
							stroke: 'currentColor',
							fill: 'currentColor',
							strokeWidth: 0,
							height: `${ styles?.icon?.size }%`,
							width: `${ styles?.icon?.size }%`,
							color: `${ styles?.icon?.color }`,
						} ),
					} }
				></span>
			</div>
			<h3 className="card-title">{ title }</h3>
			<p className="card-description">{ description }</p>
		</div>
	);
};

export default VerticalCard;
