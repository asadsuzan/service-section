import React from 'react';
import ServiceCard from './ServiceCard';

const App = ( { attributes, isBackend = false, setAttributes = () => {} } ) => {
	const { services, theme, styles ,options} = attributes || {};

	return (
		<div className="q3q4_wrapper">
			<div className="cards-grid">
				{ services?.map( ( service, index ) => (
					<ServiceCard
						isBackend={ isBackend }
						key={ index }
						icon={ service?.icon }
						title={ service?.title }
						description={ service?.description }
						index={ index }
						setAttributes={ setAttributes }
						variant={ theme }
						styles={ styles }
						showIcon={options?.showIcon ?? true}
						showAccentLine={options?.showAccentLine ?? false}
					/>
				) ) }
			</div>
		</div>
	);
};

export default App;
