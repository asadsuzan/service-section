import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import App from '../Common/App';
import { withSelect } from '@wordpress/data';
import ClipBoard from '../../shortcode/clipBoard';

const Edit = ( props ) => {
	const { attributes, setAttributes, clientId, device, postType, postId } =
		props;

	return (
		<>
			<Settings { ...{ attributes, setAttributes, clientId, device } } />

			<div { ...useBlockProps() }>
				<Style
					attributes={ attributes }
					id={ `block-${ clientId }` }
					device={ device }
				/>

				{ postType == 'q3q4_service_card' && (
					<ClipBoard
						shortcode={ `[q3q4_service_card id=${ postId }]` }
					/>
				) }
				<App
					{ ...{ attributes } }
					isBackend={ true }
					setAttributes={ setAttributes }
				/>
			</div>
		</>
	);
};

export default withSelect( ( select ) => {
	const { getDeviceType, getCurrentPostId, getCurrentPostType } =
		select( 'core/editor' );
	return {
		device: getDeviceType()?.toLowerCase(),
		postType: getCurrentPostType(),
		postId: getCurrentPostId(),
	};
} )( Edit );
