
import { TextareaControl, TextControl, } from "@wordpress/components";
import { updateData } from '../../../../../bpl-tools-main/utils/functions';
import { IconLibrary } from '../../../../../bpl-tools-main/Components';
const serviceItemsPanel = ({ attributes, index, setAttributes }) => {


    const { services } = attributes;



    return (
        <>

            <TextControl
                label="Title"
                value={services[index]?.title}
                onChange={v => setAttributes({ services: updateData(services, v, index, 'title') })}

            />
            <TextareaControl
                label="Description"
                value={services[index]?.description}
                onChange={v => setAttributes({ services: updateData(services, v, index, 'description') })}

            />


            <IconLibrary
                className='mt20'
                label="Icon"
                onChange={(v) =>
                    setAttributes({
                        services: updateData(
                            services,
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

export default serviceItemsPanel;

