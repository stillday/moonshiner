import { Component, createElement } from "@wordpress/element";

class Header extends Component {
    render() {
        const { toggleTheme, darkTheme } = this.props;

        const headerClass = darkTheme ? 'header dark' : 'header light';

        return createElement(
            'header',
            { className: headerClass },
            createElement('div', null, 'Moonshiner Theme'),
            createElement(
                'button',
                { onClick: toggleTheme },
                darkTheme ? 'Light Mode' : 'Dark Mode'
            )
        );
    }
}

export default Header;