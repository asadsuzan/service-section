import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';


import ServiceCard from './Components/Common/ServiceCard';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-q3q4-services-cards');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<ServiceCard />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});