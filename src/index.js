import './styles/main.scss';
import { createRoot, createElement } from '@wordpress/element';
import App from './App';

console.log('index.js');

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(createElement(App));
}
