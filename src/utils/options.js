import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __( 'General', 'services-card-block' ) },
	{ name: 'style', title: __( 'Style', 'services-card-block' ) },
];
export const purposeTypeOptions = [
	{ label: 'Default', value: 'default' },
	{ label: 'Primary', value: 'primary' },
];

export const themeOptions = [
	{ value: 'vertical', label: __( 'Vertical', 'services-card-block' ) },
	{ value: 'horizontal', label: __( 'Horizontal', 'services-card-block' ) },
	{ value: 'diagonal', label: __( 'Diagonal', 'services-card-block' ) },
];
