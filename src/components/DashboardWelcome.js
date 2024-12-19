import { createElement, Component } from "@wordpress/element";

class DashboardWelcome extends Component {
    render() {
        const { darkTheme } = this.props;

        const welcomeClass = darkTheme ? 'welcome dark' : 'welcome light';

        return createElement(
            'section',
            { className: welcomeClass },
            createElement('h2', null, 'Welcome to the Dashboard'),
            createElement('p', null, 'This is the dashboard area for the Moonshiner theme.'),
        );
    }
}

export default DashboardWelcome;