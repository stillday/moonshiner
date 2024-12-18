import { Component, createElement } from "@wordpress/element";

class Footer extends Component {
    render() {
        const { darkTheme } = this.props;
        const footerClass = darkTheme ? 'footer dark' : 'footer light';

        return createElement(
            'footer',
            { className: footerClass },
            `@ ${new Date().getFullYear()} JDD Theme`
        );
    }
}

export default Footer;