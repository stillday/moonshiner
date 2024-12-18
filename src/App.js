import { createElement, Component } from "@wordpress/element";
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
    state = {
        darkTheme: true,
    }
    toggleTheme = () => {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme,
        }));
    };
    render() {
        const { darkTheme } = this.state;

        return createElement (
            'div',
            null,
            createElement(Header, { darkTheme, toggleTheme: this.toggleTheme }),
            createElement(
                'main',
                { className: `app-main ${darkTheme ? 'dark' : 'light'}`,},
                createElement('h1', { className: 'main-tiotle' }, 'Hello, Wordpress and React'),
                createElement('p', null, 'Main Content Goes Here'),
            ),
            createElement(Footer, { darkTheme })
        );
    }
}