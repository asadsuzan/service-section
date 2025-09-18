import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import serviceItemsPanel from '../../itemsPanel/serviceItemsPanel';
import { themeSwitch } from '../../../../utils/functions';
import { themeOptions } from '../../../../utils/options';

const General = ( { attributes, setAttributes } ) => {
	const { activeCard, theme } = attributes || {};

	return (
		<>
			{ /* theme switcher  */ }
			<PanelBody
				className="bPlPanelBody"
				title={ __( 'Themes', 'b-blocks' ) }
				initialOpen={ true }
			>
				<SelectControl
					value={ theme }
					options={ themeOptions }
					onChange={ ( value ) =>
						setAttributes( themeSwitch( value, attributes ) )
					}
				/>
			</PanelBody>

			<PanelBody
				className="bPlPanelBody"
				title={ __( 'Services', 'b-blocks' ) }
				initialOpen={ true }
			>
				<ItemsPanel
					{ ...{ attributes, setAttributes } }
					arrKey="services"
					activeIndex={ activeCard }
					newItem={ {
						title: 'Performance Optimization',
						description:
							"Optimize your website's speed and performance to ensure fast loading times and better search engine rankings.",
						icon: 'icon',
					} }
					ItemSettings={ serviceItemsPanel }
					design="sortable"
					title="title"
					itemLabel="Service"
				/>
			</PanelBody>
		</>
	);
};

export default General;
