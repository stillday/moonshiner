import { Component } from "@wordpress/element";
import '/style.css';
console.log('ich werde geladen');
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Wello, WordPress and React</h1>
            </div>
        );
    }
}