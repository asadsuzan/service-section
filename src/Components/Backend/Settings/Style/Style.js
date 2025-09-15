
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { ColorsControl } from "../../../../../../bpl-tools-main/Components";

const Style = ({ attributes, setAttributes }) => {
  const { colors } = attributes;
  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Purpose', 'q3q4')} initialOpen={false}>
        <ColorsControl
          value={colors}
          onChange={val => setAttributes({ colors: val })}
          defaults={{ color: 'black', bg: '#B1C5A4' }}
        />
      </PanelBody>
    </>
  )
}

export default Style