import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';


const ServiceCard = ({ icon, title, description, variant, isBackend, index, setAttributes }) => {

    const handleActiveCArd = (idx) => {

        if (!isBackend) return;

        setAttributes({ activeCard: idx })

    }

    const renderVerticalCard = () => (
        <div className="card-vertical" onClick={() => handleActiveCArd(index)}>
            <div className="icon-wrapper">
                <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>

            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );

    const renderHorizontalCard = () => (
        <div className="card-horizontal" onClick={() => handleActiveCArd(index)}>
            <div className="icon-section">
                <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
            <div className="content-section">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );

    const renderDiagonalCard = () => (
        <div className="card-diagonal" onClick={() => handleActiveCArd(index)}>
            <div className="diagonal-bg"></div>
            <div className="icon-wrapper">
                <span className='icon' dangerouslySetInnerHTML={{ __html: icon }}></span>
            </div>
            <div className="content-area">
                <div className="accent-line"></div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );

    switch (variant) {
        case 'vertical':
            return renderVerticalCard();
        case 'horizontal':
            return renderHorizontalCard();
        case 'diagonal':
            return renderDiagonalCard();
        default:
            return renderVerticalCard();
    }
};

export default ServiceCard;