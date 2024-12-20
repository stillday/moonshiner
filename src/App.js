import { createElement, Component } from "@wordpress/element";
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './api/Posts';

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
                { className: `main ${darkTheme ? 'dark' : 'light'}`,},
                createElement('h1', { className: 'main-title' }, 'Hello, Wordpress and React'),
                createElement('p', { className: 'main-text'}, 'Main Content Goes Here'),
                createElement(Posts, { className: 'posts'}),
            ),
            createElement(Footer, { darkTheme })
        );
    }
}