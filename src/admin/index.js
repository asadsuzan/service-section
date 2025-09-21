import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('DOMContentLoaded', function () {
    const adminRoot = document.getElementById('q3q4_admin_root');
    console.log(adminRoot);
    if (adminRoot) {
        const root = createRoot(adminRoot);
        root.render(<App></App>);
    }


})


