import { createElement, Component } from "@wordpress/element";
import '/style.css';
export default class App extends Component {
    render() {
        return createElement (
            'div',
            null,
            createElement('h1', null, 'Wello, WordPress and React')
        );
    }
}