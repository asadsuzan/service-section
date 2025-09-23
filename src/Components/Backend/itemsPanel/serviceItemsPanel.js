import { TextareaControl, TextControl } from '@wordpress/components';
import { updateData } from '../../../../../bpl-tools/utils/functions';
import { IconLibrary } from '../../../../../bpl-tools/Components';


const serviceItemsPanel = ({ attributes, index, setAttributes }) => {
	const { services, options } = attributes;
	const currentService = services[index] || {};

	return (
		<>
			<TextControl
				label="Title"
				value={currentService?.title}
				onChange={(v) =>
					setAttributes({
						services: updateData(services, v, index, 'title'),
					})
				}
			/>
			<TextareaControl
				label="Description"
				value={currentService?.description}
				onChange={(v) =>
					setAttributes({
						services: updateData(services, v, index, 'description'),
					})
				}
			/>



			{options?.showIcon && (
				<>
					<IconLibrary
						className="mt20"
						label="Icon"
						value={currentService?.icon}
						onChange={(v) =>
							setAttributes({
								services: updateData(services, v, index, 'icon'),
							})
						}
					/>

					{/* Preview of Selected Icon */}
					{/* {currentService?.icon && (
						<div className="mt10">
							<strong>Preview:</strong>
							<div style={{ fontSize: '5px', marginTop: '6px' }} dangerouslySetInnerHTML={{ __html: currentService.icon }}>

							</div>
						</div>
					)} */}
				</>
			)}
		</>
	);
};

export default serviceItemsPanel;
