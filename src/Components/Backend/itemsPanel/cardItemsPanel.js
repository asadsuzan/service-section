
import { CheckboxControl, Flex, FlexItem, PanelRow, TextareaControl, TextControl, ToggleControl } from "@wordpress/components";
import { updateData } from '../../../../../bpl-tools-main/utils/functions';
import { IconLibrary } from '../../../../../bpl-tools-main/Components';
const CardItemsPanel = ({ attributes, index, setAttributes }) => {


    const { cards, theme } = attributes;
    console.log(cards, theme);


    return (
        <>

            <TextControl
                label="Title"
                value={cards[index]?.title}
                onChange={v => setAttributes({ cards: updateData(cards, v, index, 'title') })}

            />
            <TextareaControl
                label="Description"
                value={cards[index]?.description}
                onChange={v => setAttributes({ cards: updateData(cards, v, index, 'description') })}

            />


            <IconLibrary
                className='mt20'
                label="Icon"
                onChange={(v) =>
                    setAttributes({
                        cards: updateData(
                            cards,
                            v,
                            index,
                            "icon"
                        )
                    })
                }
            />


        </>
    );
};

export default CardItemsPanel;

