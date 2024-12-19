import { createElement, Component } from "@wordpress/element";

class DashboardWelcome extends Component {
    render() {
        const { darkTheme } = this.props;

        const userName = window?.wpApiSettings?.userName || 'Guest';
        const userProfilImage = window?.wpApiSettings?.user?.avatar || 'https://www.gravatar.com/avatar/';

        const welcomeClass = darkTheme ? 'welcome dark' : 'welcome light';

        return createElement(
            'section',
            { className: 'welcome-class' },
            createElement('div', { className: 'user-profile' },
                createElement('h2', null, 'Welcome, ${userName}'),
                createElement('img', { src: userProfilImage, alt: '${userName} Profile Image' },
                ),
                createElement('p', null, 'This is the dashboard area for the Moonshiner theme.'),
            ),
        );
    }
}

export default DashboardWelcome;