import './styles/main.scss';
import { createRoot, createElement } from '@wordpress/element';
import App from './App';
import Dashboard from './Dashboard';

const rootElement = document.getElementById('app');
const isDashboard = rootElement && rootElement.dataset.context === 'dashboard';

if (rootElement) {
    const root = createRoot(rootElement);
    if (isDashboard) {
        root.render(createElement(Dashboard));
    } else {
        root.render(createElement(App));
    }
}
