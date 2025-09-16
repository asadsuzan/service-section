import { __ } from "@wordpress/i18n";
import { PanelBody, } from "@wordpress/components";
import { ItemsPanel } from '../../../../../../bpl-tools-main/Components';
import serviceItemsPanel from '../../itemsPanel/serviceItemsPanel';

const General = ({ attributes, setAttributes }) => {

  const { activeCard } = attributes || {}


  return (
    <>

      <PanelBody
        className="bPlPanelBody"
        title={__("Services", "b-blocks")}
        initialOpen={true} >

        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="services"
          activeIndex={activeCard}
          newItem={{

            title: "Performance Optimization",
            description: "Optimize your website's speed and performance to ensure fast loading times and better search engine rankings.",
            icon: "icon"


          }}
          ItemSettings={serviceItemsPanel}
          design="sortable"
          title='title'
          itemLabel='Service'
        />
      </PanelBody>

    </>
  );
};

export default General;
