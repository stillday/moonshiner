import { createElement, Component } from "@wordpress/element";

const actions = {
    administrator: [
        { id: "1", label: "Beitrag erstellen", url: "/wp-admin/post-new.php" },
        { id: "2", label: "Seiten erstellen", url: "/wp-admin/post-new.php?post_type=page" },
        { id: "3", label: "Medien hinzufügen", url: "/wp-admin/media-new.php" },
        { id: "4", label: "Benutzer hinzufügen", url: "/wp-admin/user-new.php" },
        { id: "5", label: "Kommentare", url: "/wp-admin/edit-comments.php" },
        { id: "6", label: "Alle Beiträge", url: "/wp-admin/edit.php" },
        { id: "7", label: "Themes", url: "/wp-admin/themes.php" },
        { id: "8", label: "Anpassen", url: "/wp-admin/customize.php" },
        { id: "9", label: "Plugins", url: "/wp-admin/plugins.php" },
        { id: "10", label: "Einstellungen", url: "/wp-admin/options-general.php" },
    ],

    editor: [
        { id: "1", label: "Beitrag erstellen", url: "/wp-admin/post-new.php" },
        { id: "2", label: "Seiten erstellen", url: "/wp-admin/post-new.php?post_type=page" },
        { id: "3", label: "Medien hinzufügen", url: "/wp-admin/media-new.php" },
        { id: "4", label: "Kommentare", url: "/wp-admin/edit-comments.php" },
        { id: "5", label: "Alle Beiträge", url: "/wp-admin/edit.php" },
    ],

    guest: [
        { id: "1", label: "Anmelden", url: "/wp-login.php" },
        { id: "2", label: "Registrieren", url: "/wp-login.php?action=register" },
        { id: "3", label: "Passwort vergessen?", url: "/wp-login.php?action=lostpassword" },
    ],
};

class ContentCreateArea extends Component {

    getHostUrl = (path) => {
        const baseUrl = window?.wpApiSettings?.root || '';
        const cleanPath = baseUrl.replace(/wp-json\/$/, "").replace(/\/$/, "");
        return `${cleanPath}${path}`;
    };

    render() {
        console.log('props', this.props);
        console.log('user?', window?.wpApiSettings?.roles);
        const userRole = window?.wpApiSettings?.roles;
        console.log(userRole);

        const userActions = actions[userRole] || actions.guest;

        return createElement(
            'div',
            { className: 'content-create-area' },
            createElement(
                'h2',
                { className: 'content-title' },
                'Was möchtest du tun?'
            ),
            createElement(
                'ul',
                { className: 'content-list' },
                userActions.map(action =>
                    createElement(
                        'li',
                        { className: 'content-item', key: action.id },
                        createElement(
                            'a',
                            { 
                                href: this.getHostUrl(action.url),
                                className: 'content-button',
                            },
                            action.label
                        )
                    )
                )
            )
        );
    }
}

export default ContentCreateArea;