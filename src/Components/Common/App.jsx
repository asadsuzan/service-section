import React from 'react'
import ServiceCard from './ServiceCard'
import { Zap } from 'lucide-react'

const App = ({ attributes, isBackend = false, setAttributes = () => { } }) => {
    const { cards } = attributes || {}

    return (
        <div className="q3q4_wrapper">
            <div className='cards-grid'>

                {
                    cards?.map((card, index) => <ServiceCard isBackend={isBackend} key={index} icon={card?.icon} title={card?.title} description={card?.description} index={index} setAttributes={setAttributes} />)
                }

            </div>
        </div>
    )
}

export default App