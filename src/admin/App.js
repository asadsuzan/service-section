import React from 'react'
import ThemeOneImg from './themes/vertical.png'
import ThemeTwoImg from './themes/horizontal.png'
import ThemeThreeImg from './themes/diagonal.png'
import './style.scss'
const App = () => {
    return (
        <div className="about-page">
            <h1>About Services Section Block</h1>
            <p>
                The <strong>Services Section Block</strong> is a custom Gutenberg block
                that lets you display your services in multiple layouts.
                You can easily switch themes to match your site design.
            </p>

            <h2>Available Themes</h2>
            <div className="themes-grid">
                <div className="theme-card">
                    <img src={ThemeOneImg} alt="Vertical theme" />
                    <p><strong>Vertical Layout</strong> – Best for listing services in columns.</p>
                </div>
                <div className="theme-card">
                    <img src={ThemeTwoImg} alt="Horizontal theme" />
                    <p><strong>Horizontal Layout</strong> – Great for showcasing services side by side.</p>
                </div>
                <div className="theme-card">
                    <img src={ThemeThreeImg} alt="Diagonal theme" />
                    <p><strong>Diagonal Layout</strong> – Stylish design for creative sites.</p>
                </div>
            </div>

            <h2>How to Use</h2>
            <ul>
                <li>Add the block in the WordPress block editor.</li>
                <li>Choose a theme from the sidebar settings.</li>
                <li>Enter your service details (title, description, icon, etc.).</li>
                <li>Save and preview your page to see the layout in action.</li>
            </ul>
        </div>
    )
}

export default App