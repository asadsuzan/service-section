import { addSvgAttrs } from '../../utils/functions';

const ServiceCard = ( {
	icon,
	title,
	description,
	variant,
	isBackend,
	index,
	setAttributes,
	styles,
} ) => {
	const handleActiveCArd = ( idx ) => {
		if ( ! isBackend ) return;

		setAttributes( { activeCard: idx } );
	};

	const renderVerticalCard = () => (
		<div
			className="card-vertical services-card-block-service"
			onClick={ () => handleActiveCArd( index ) }
		>
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

	const renderHorizontalCard = () => (
		<div
			className="card-horizontal services-card-block-service"
			onClick={ () => handleActiveCArd( index ) }
		>
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
			<div className="content-section">
				<h3 className="card-title">{ title }</h3>
				<p className="card-description">{ description }</p>
			</div>
		</div>
	);

	const renderDiagonalCard = () => (
		<div
			className="card-diagonal services-card-block-service"
			onClick={ () => handleActiveCArd( index ) }
		>
			<div className="diagonal-bg"></div>
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
			<div className="content-area">
				<div className="accent-line"></div>
				<h3 className="card-title">{ title }</h3>
				<p className="card-description">{ description }</p>
			</div>
		</div>
	);

	switch ( variant ) {
		case 'vertical':
			return renderVerticalCard();
		case 'horizontal':
			return renderHorizontalCard();
		case 'diagonal':
			return renderDiagonalCard();
		default:
			return renderVerticalCard();
	}
};

export default ServiceCard;
