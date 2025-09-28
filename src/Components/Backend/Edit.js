import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import App from '../Common/App';
import { withSelect } from '@wordpress/data';
import ClipBoard from '../../shortcode/clipBoard';
import { usePremiumInEditor } from '../../../../bpl-tools/hooks';

const Edit = (props) => {
	const { attributes, setAttributes, clientId, device, postType, postId } = props;

	const { isPremium, isLoading } = usePremiumInEditor("scbUtils", "scbPremiumChecker");

	console.log(postType);

	return (
		<>
			<Settings {...{ attributes, setAttributes, clientId, device, isPremium }} />

			<div {...useBlockProps()}>
				<Style
					attributes={attributes}
					id={`block-${clientId}`}
					device={device}
				/>

				{postType == 'services_card' && (
					<ClipBoard
						shortcode={`[services_card id=${postId}]`}
					/>
				)}
				<App
					{...{ attributes }}
					isBackend={true}
					setAttributes={setAttributes}
				/>
			</div>
		</>
	);
};

export default withSelect((select) => {
	const { getDeviceType, getCurrentPostId, getCurrentPostType } =
		select('core/editor');
	return {
		device: getDeviceType()?.toLowerCase(),
		postType: getCurrentPostType(),
		postId: getCurrentPostId(),
	};
})(Edit);
