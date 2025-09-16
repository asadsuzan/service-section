import React from 'react'
import ServiceCard from './ServiceCard'
import { Zap } from 'lucide-react'

const App = ({ attributes }) => {
    const { cards } = attributes || {}

    return (
        <div className="q3q4_wrapper">
            <div className='cards-grid'>

                {
                    cards?.map((card, index) => <ServiceCard key={index} icon={card?.icon} title={card?.title} description={card?.description} />)
                }

            </div>
        </div>
    )
}

export default App