import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { dashboardInfo } from './utils/data';
import './dashboard.scss'

document.addEventListener('DOMContentLoaded', function () {
    const adminRoot = document.getElementById('q3q4_admin_root');

    const info = {
        version: "1.0.0",
        isPremium: false,
        hasPro: false
    }
    if (adminRoot) {
        const root = createRoot(adminRoot);
        root.render(<App {...dashboardInfo(info)}></App>);
    }


})




