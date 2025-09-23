import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import {
	Background,
	BButtonGroup,
	BoxControl,
	ColorControl,
	ColorsControl,
	Device,
	Label,
	ShadowControl,
	Typography,
} from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../../../bpl-tools/utils/functions';
import { BorderControl } from '../../../../../../bpl-tools/Components/Deprecated';

const Style = ({ attributes = {}, setAttributes, device }) => {
	const { styles = {}, theme, options } = attributes;
	const { columns, body, title, description, icon, diagonal } = styles;


	return (
		<>
			{ /* grid settings  */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Layout', 'services-card')}
				initialOpen
			>
				<PanelRow>
					<Label>Row</Label>
					<Device />
				</PanelRow>
				<RangeControl
					value={columns[device]}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'columns', device),
						})
					}
					max={12}
					min={1}
				/>
			</PanelBody>



			{/* container settings  */}

			<PanelBody
				className="bPlPanelBody"
				title={__('Container', 'services-card')}
				initialOpen={false}
			>
				{ /* text align  */}

				<BButtonGroup
					className="mt10"
					label={__('Text Align', 'services-card')}
					options={[
						{ label: __('Left', 'services-card'), value: 'left' },
						{ label: __('Center', 'services-card'), value: 'center' },
						{ label: __('Right', 'services-card'), value: 'right' },
					]}
					value={body?.align}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'body', 'align'),
						})
					}
					activeBg="#007cba"
					inactiveColor="#555"
					activeColor="#fff"
					borderRadius="4px"
					paddingX="12px"
					paddingY="6px"
					fontSize="13px"
					fontWeight={500}
				/>
				{ /* background  */}
				<Background
					className="mt10"
					value={body?.bg}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'body', 'bg'),
						})
					}
				/>

				{ /* padding  */}

				<PanelRow>
					<Label className="">Padding</Label> <Device />{' '}
				</PanelRow>
				<BoxControl
					className="mt10"
					values={body?.padding?.[device]}
					resetValues={{
						top: '32px',
						right: '24px',
						bottom: '32px',
						left: '24px',
					}}
					onChange={(v) => {
						setAttributes({
							styles: updateData(
								styles,
								v,
								'body',
								'padding',
								device
							),
						});
					}}
				/>

				{ /* box shadow  */}
				<ShadowControl
					label={__('Shadow', 'services-card')}
					value={body?.shadow}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'body', 'shadow'),
						})
					}
				/>
				{ /* hover box shadow  */}
				<ShadowControl
					label={__('Hover Shadow', 'services-card')}
					value={body?.hover?.shadow}
					onChange={(v) =>
						setAttributes({
							styles: updateData(
								styles,
								v,
								'body',
								'hover',
								'shadow'
							),
						})
					}
				/>

				{ /* border  */}

				<BorderControl
					label="Border"
					value={body?.border}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'body', 'border'),
						})
					}
				/>

			</PanelBody>

			{/* icon settings  */}
			{
				options?.showIcon ? <PanelBody
					className='bPlPanelBody '
					title={__('Icon', 'services-card')}
					initialOpen={false}

				>
					{ /* icon wrapper background  */}
					<Background
						className="mt10"
						label="Wrapper Background"
						value={icon?.bg}
						onChange={(v) =>
							setAttributes({
								styles: updateData(styles, v, 'icon', 'bg'),
							})
						}
					/>

					{theme === 'horizontal' ? (
						<Background
							className="mt10"
							label="Skew Background"
							value={icon?.bar?.bg}
							onChange={(v) =>
								setAttributes({
									styles: updateData(
										styles,
										v,
										'icon',
										'bar',
										'bg'
									),
								})
							}
						/>
					) : null}
					{theme === 'diagonal' ? (
						<Background
							className="mt10"
							label="Diagonal Shape Background"
							value={diagonal?.bg}
							onChange={(v) =>
								setAttributes({
									styles: updateData(
										styles,
										v,
										'diagonal',
										'bg'
									),
								})
							}
						/>
					) : null}

					{ /* icon color  */}

					<ColorControl
						className="mt20"
						label="Color"
						value={icon?.color}
						onChange={(v) =>
							setAttributes({
								styles: updateData(styles, v, 'icon', 'color'),
							})
						}
					/>
					{ /* icon size  */}

					<RangeControl
						className="mt20"
						label="Size"
						value={icon?.size}
						onChange={(v) =>
							setAttributes({
								styles: updateData(styles, v, 'icon', 'size'),
							})
						}
						max={100}
						min={1}
					/>
				</PanelBody> : null
			}


			{/* title settings   */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Title', 'services-card')}
				initialOpen={false}
			>
				{ /* title typo  */}

				<Typography
					className="mt10"
					label={__('Typo', 'services-card')}
					value={title?.typo}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'title', 'typo'),
						})
					}
				/>

				{ /* title colors  */}

				<ColorsControl
					label="Colors"
					value={title?.colors}
					onChange={(v) =>
						setAttributes({
							styles: updateData(styles, v, 'title', 'colors'),
						})
					}
				/>

				<BoxControl
					className='mt20'
					label={__('Padding', 'services-card')}
					values={title?.padding?.[device]}
					defaultValues={{
						top: "0px",
						right: "0px",
						bottom: "0px",
						left: "0px"
					}}
					resetValues={{
						top: "0px",
						right: "0px",
						bottom: "0px",
						left: "0px"
					}}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'title', 'padding', device) })}
				/>

			</PanelBody>

			{/* description settings  */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Description ', 'services-card')}
				initialOpen={false}
			>

				<Typography
					className="mt10"
					label={__('Typo', 'services-card')}
					value={description?.typo}
					onChange={(v) =>
						setAttributes({
							styles: updateData(
								styles,
								v,
								'description',
								'typo'
							),
						})
					}
				/>

				{ /* description colors  */}

				<ColorsControl
					label="Colors"
					value={description?.colors}
					onChange={(v) =>
						setAttributes({
							styles: updateData(
								styles,
								v,
								'description',
								'colors'
							),
						})
					}
				/>


				<BoxControl
					className='mt20'
					label={__('Padding', 'services-card')}
					values={description?.padding?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'description', 'padding', device) })}
				/>

			</PanelBody>
		</>

	);
};

export default Style;
