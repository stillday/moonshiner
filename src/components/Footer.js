import { Component } from "@wordpress/element";

class Footer extends Component {
    render() {
        const { darkTheme } = this.props;
        const footerClass = darkTheme ? 'header dark' : 'header light';

        return (
            <footer className={footerClass}>
                @ {new Date().getFullYear()} JDD Theme
            </footer>
        );
    }
}

export default Footer;