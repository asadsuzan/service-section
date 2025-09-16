
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, Device, Label, ShadowControl } from "../../../../../../bpl-tools-main/Components";
import { updateData } from '../../../../../../bpl-tools-main/utils/functions';
import { BorderControl } from '../../../../../../bpl-tools-main/Components/Deprecated';

const Style = ({ attributes = {}, setAttributes, device }) => {
  const { styles = {} } = attributes;
  const { columns, body } = styles
  console.log(body?.border);
  return (
    <>
      {/* grid settings  */}
      <PanelBody className='bPlPanelBody' title={__('Layout', 'q3q4')} initialOpen>
        <PanelRow>
          <Label>Row</Label>
          <Device />
        </PanelRow>
        <RangeControl
          value={columns[device]}
          onChange={(v) => setAttributes({ styles: updateData(styles, v, 'columns', device) })}
          max={12}
          min={1}
        />

      </PanelBody>


      {/* card  */}


      <PanelBody className='bPlPanelBody' title={__('Service', 'q3q4')}
        initialOpen>

        {/* text align  */}

        <BButtonGroup
          className="mt10"
          label={__('Text Align', 'b-blocks')}
          options={[
            { label: __('Left', 'b-blocks'), value: 'left' },
            { label: __('Center', 'b-blocks'), value: 'center' },
            { label: __('Right', 'b-blocks'), value: 'right' },
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
        {/* background  */}
        <Background
          className="mt10"
          value={body?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'body', 'bg')
            })
          }
        />


        {/* padding  */}

        <PanelRow><Label className=''>Padding</Label> <Device /> </PanelRow>
        <BoxControl
          className="mt10"
          values={body?.padding?.[device]}
          resetValues={{
            "top": "32px",
            "right": "24px",
            "bottom": "32px",
            "left": "24px"
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, 'body', 'padding', device)
            })
          }}

        />

        {/* box shadow  */}
        <ShadowControl
          label={__('Shadow', 'q3q4')}
          value={body?.shadow}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'body', 'shadow')
            })
          }
        />
        {/* hover box shadow  */}
        <ShadowControl
          label={__('On Hover Shadow', 'q3q4')}
          value={body?.hover?.shadow}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'body', 'hover', 'shadow')
            })
          }
        />

        {/* border  */}

        <BorderControl
          label="Border"
          value={body?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, 'body', 'border')
            })
          }
        />



      </PanelBody>






    </>
  )
}

export default Style