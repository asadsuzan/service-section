
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { ColorsControl, Device, Label } from "../../../../../../bpl-tools-main/Components";
import { updateData } from '../../../../../../bpl-tools-main/utils/functions';

const Style = ({ attributes = {}, setAttributes, device }) => {
  const { styles = {} } = attributes;
  const { columns = 'desktop' } = styles

  return (
    <>
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



    </>
  )
}

export default Style