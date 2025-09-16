import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';


const ServiceCard = ({ icon: Icon, title, description, variant }) => {
    const renderVerticalCard = () => (
        <div className="card-vertical">
            <div className="icon-wrapper">
                <Icon className="icon" />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );

    const renderHorizontalCard = () => (
        <div className="card-horizontal">
            <div className="icon-section">
                <Icon className="icon" />
            </div>
            <div className="content-section">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );

    const renderDiagonalCard = () => (
        <div className="card-diagonal">
            <div className="diagonal-bg"></div>
            <div className="icon-wrapper">
                <Icon className="icon" />
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