import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import App from './Components/Common/App';

document.addEventListener( 'DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll(
		'.wp-block-services-card-block-services-cards'
	);
	blockNameEls.forEach( ( blockNameEl ) => {
		const attributes = JSON.parse( blockNameEl.dataset.attributes );

		createRoot( blockNameEl ).render(
			<>
				<Style attributes={ attributes } id={ blockNameEl.id } />

				<App { ...{ attributes } } isBackend={ false } />
			</>
		);

		blockNameEl?.removeAttribute( 'data-attributes' );
	} );
} );
