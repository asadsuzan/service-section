import { __ } from "@wordpress/i18n";
import { PanelBody, } from "@wordpress/components";

import { ItemsPanel } from '../../../../../../bpl-tools-main/Components';
import CardItemsPanel from '../../itemsPanel/cardItemsPanel';

const General = ({ attributes, setAttributes }) => {

  const { activeCard } = attributes || {}


  return (
    <>

      <PanelBody
        className="bPlPanelBody"
        title={__("Cards", "b-blocks")}
        initialOpen={true} >

        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="cards"
          activeIndex={activeCard}
          newItem={{

            title: "Performance Optimization",
            description: "Optimize your website's speed and performance to ensure fast loading times and better search engine rankings.",
            icon: "icon"


          }}
          ItemSettings={CardItemsPanel}
          design="sortable"
          title='title'
        />
      </PanelBody>

    </>
  );
};

export default General;
