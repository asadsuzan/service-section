import React from 'react'
import ServiceCard from './ServiceCard'
import { Zap } from 'lucide-react'

const App = () => {
    return (
        <div className="q3q4_wrapper">
            <div className='cards-grid'>
                <ServiceCard
                    icon={Zap}
                    title="Performance Optimization"
                    description="Optimize your website's speed and performance to ensure fast loading times and better search engine rankings."
                    variant="vertical"
                />
                <ServiceCard
                    icon={Zap}
                    title="Performance Optimization"
                    description="Optimize your website's speed and performance to ensure fast loading times and better search engine rankings."
                    variant="horizontal"
                />
                <ServiceCard
                    icon={Zap}
                    title="Performance Optimization"
                    description="Optimize your website's speed and performance to ensure fast loading times and better search engine rankings."
                    variant="diagonal"
                />
            </div>
        </div>
    )
}

export default App