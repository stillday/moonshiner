import { createElement, Component } from "@wordpress/element";

class DashboardWelcome extends Component {
    render() {
        const { darkTheme } = this.props;

        const userName = window?.wpApiSettings?.user?.name || 'Guest';
        const userProfilImage = window?.wpApiSettings?.user?.avatar || 'https://www.gravatar.com/avatar/';

        const welcomeClass = darkTheme ? 'welcome dark' : 'welcome light';

        return createElement(
            'section',
            { className: welcomeClass },
            createElement(
                'div',
                { className: 'welcome-header' },
                createElement('h1', { className: 'welcome-title' }, 'Welcome to the Moonshiner Theme'),
            ),
            createElement('div', { className: 'welcome-user' },
                createElement('h2', { className: 'welcome-message' } , 'Welcome, ', userName),
                createElement('img', { src: userProfilImage, alt: `${userName} Profile Image`, className: 'welcome-avatar' },
                ),
            ),
            createElement('p', { className: 'welcome-intro'}, 'This is the dashboard area for the Moonshiner theme.'),
        );
    }
}

export default DashboardWelcome;