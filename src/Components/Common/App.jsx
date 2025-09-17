import React from 'react'
import ServiceCard from './ServiceCard'


const App = ({ attributes, isBackend = false, setAttributes = () => { } }) => {
    const { services, theme, styles } = attributes || {}

    return (
        <div className="q3q4_wrapper">
            <div className='cards-grid'>

                {
                    services?.map((service, index) => <ServiceCard isBackend={isBackend} key={index} icon={service?.icon} title={service?.title} description={service?.description} index={index} setAttributes={setAttributes} variant={theme} styles={styles} />)
                }

            </div>
        </div>
    )
}

export default App