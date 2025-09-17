import React from 'react'
import { addSvgAttrs } from '../../../utils/functions'

const DiagonalCard = ({ icon, title, description, styles }) => {
    return (
        <div className="card-diagonal q3q4-service" >
            <div className="diagonal-bg"></div>
            <div className="icon-wrapper">
                <span className='icon' dangerouslySetInnerHTML={{
                    __html: addSvgAttrs(icon, {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: 0,
                        height: `${styles?.icon?.size}%`,
                        width: `${styles?.icon?.size}%`,
                        color: `${styles?.icon?.color}`,
                    }),
                }}></span>
            </div>
            <div className="content-area">
                <div className="accent-line"></div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default DiagonalCard