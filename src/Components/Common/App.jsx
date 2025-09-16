import React from 'react'
import ServiceCard from './ServiceCard'
import { Zap } from 'lucide-react'

const App = ({ attributes, isBackend = false, setAttributes = () => { } }) => {
    const { services } = attributes || {}

    return (
        <div className="q3q4_wrapper">
            <div className='cards-grid'>

                {
                    services?.map((service, index) => <ServiceCard isBackend={isBackend} key={index} icon={service?.icon} title={service?.title} description={service?.description} index={index} setAttributes={setAttributes} />)
                }

            </div>
        </div>
    )
}

export default App