import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar, } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { BplBlockPreview } from '../../../../../bpl-tools/Components';
import { themes } from '../../../utils/themes';
import { AboutProModal } from "../../../../../bpl-tools/ProControls";
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

const Settings = ({ attributes, setAttributes, device, clientId, isPremium, siteUrl }) => {
	const { alignment, theme } = attributes;
	const [isProModalOpen, setIsProModalOpen] = useState(false);
	const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=services_card&page=demo_page#/pricing`;

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="bPlTabPanel wp-block-services-card-services-cards"
					activeClass="activeTab"
					tabs={generalStyleTabs}
					onSelect={tabController}
				>
					{(tab) => (
						<>
							{'general' === tab.name && (
								<General {...{ attributes, setAttributes, device, isPremium, setIsProModalOpen }} />
							)}

							{'style' === tab.name && (
								<Style{...{ attributes, setAttributes, device, isPremium, setIsProModalOpen }} />
							)}
						</>
					)}
				</TabPanel>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(val) => setAttributes({ alignment: val })}
					describedBy={__('Block Name Alignment')}
					alignmentControls={[
						{
							title: __('Block Name in left', 'textdomain'),
							align: 'left',
							icon: 'align-left',
						},
						{
							title: __('Block Name in center', 'textdomain'),
							align: 'center',
							icon: 'align-center',
						},
						{
							title: __('Block Name in right', 'textdomain'),
							align: 'right',
							icon: 'align-right',
						},
					]}
				/>

				<BplBlockPreview
					blocks={themes()}
					clientId={clientId}
					value={theme}
				/>
			</BlockControls>



			<AboutProModal
				isProModalOpen={isProModalOpen}
				setIsProModalOpen={setIsProModalOpen}
				link={siteLocation}
			>
				<li>
					<strong>
						{__("aaaa: ", "services-card")}
					</strong>
					{__("gfgfgfgngs.", "services-card")}
				</li>
			</AboutProModal>
		</>
	);
};



export default compose(
	withSelect((select) => {
		return {
			siteUrl: select('core').getSite()?.url,
		};
	})
)(Settings);
