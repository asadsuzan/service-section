import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'services-card') },
	{ name: 'style', title: __('Style', 'services-card') },
];
export const purposeTypeOptions = [
	{ label: 'Default', value: 'default' },
	{ label: 'Primary', value: 'primary' },
];

export const themeOptions = [
	{ value: 'default', label: __('Vertical', 'services-card') },
	{ value: 'horizontal', label: __('Horizontal', 'services-card') },
	{ value: 'diagonal', label: __('Diagonal', 'services-card') },
];
