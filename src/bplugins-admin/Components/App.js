import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ListDemos from '../../../../bpl-tools/Admin/Demos/ListDemos';
import Pricing from '../../../../bpl-tools/Admin/Pricing/Pricing';
import FeatureCompare from '../../../../bpl-tools/Admin/FeatureCompare/FeatureCompare';

import Layout from './Layout';
import { demoInfo, pricingInfo, featureCompareInfo } from '../utils/data';
import Welcome from './Welcome';

const App = (props) => {
	const { isPremium } = props;

	return <Router>
		<Routes>
			<Route path='/' element={<Layout {...props} />}>
				<Route index element={<Welcome {...props} />} />

				<Route path='welcome' element={<Welcome {...props} />} />


				<Route path='demos' element={<ListDemos demoInfo={demoInfo} {...props}>
					{!isPremium &&
						<button
							type='button'
							className='bPlButton variant-primary'
							onClick={(e) => {
								e.preventDefault();
								window.location.hash = '#/pricing';
							}}
						>Buy Now</button>
					}
				</ListDemos>} />


				{!isPremium && <Route path='pricing' element={<Pricing pricingInfo={pricingInfo} options={{}} {...props} />} />}


				{!isPremium && <Route path='feature-comparison' element={<FeatureCompare featureCompareInfo={featureCompareInfo} {...props} />} />}


				<Route path='*' element={<Navigate to='/welcome' replace />} />
			</Route>
		</Routes>
	</Router>
}
export default App;