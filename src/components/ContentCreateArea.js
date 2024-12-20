import { createElement, Component } from "@wordpress/element";

const actions = {
    administrator: [
        { id: "1", label: "Beitrag erstellen", url: "/wp-admin/post-new.php", icon: "dashicons-edit" },
        { id: "2", label: "Seiten erstellen", url: "/wp-admin/post-new.php?post_type=page", icon: "dashicons-admin-page" },
        { id: "3", label: "Medien hinzufügen", url: "/wp-admin/media-new.php", icon: "dashicons-admin-media" },
        { id: "4", label: "Benutzer hinzufügen", url: "/wp-admin/user-new.php", icon: "dashicons-admin-users" },
        { id: "5", label: "Kommentare", url: "/wp-admin/edit-comments.php", icon: "dashicons-admin-comments" },
        { id: "6", label: "Alle Beiträge", url: "/wp-admin/edit.php", icon: "dashicons-admin-post" },
        { id: "7", label: "Themes", url: "/wp-admin/themes.php", icon: "dashicons-admin-appearance" },
        { id: "8", label: "Anpassen", url: "/wp-admin/customize.php", icon: "dashicons-admin-customizer" },
        { id: "9", label: "Plugins", url: "/wp-admin/plugins.php", icon: "dashicons-admin-plugins" },
        { id: "10", label: "Einstellungen", url: "/wp-admin/options-general.php", icon: "dashicons-admin-settings" },
    ],

    editor: [
        { id: "1", label: "Beitrag erstellen", url: "/wp-admin/post-new.php", icon: "dashicons-edit" },
        { id: "2", label: "Seiten erstellen", url: "/wp-admin/post-new.php?post_type=page", icon: "dashicons-admin-page" },
        { id: "3", label: "Medien hinzufügen", url: "/wp-admin/media-new.php", icon: "dashicons-admin-media" },
        { id: "4", label: "Kommentare", url: "/wp-admin/edit-comments.php", icon: "dashicons-admin-comments" },
        { id: "5", label: "Alle Beiträge", url: "/wp-admin/edit.php", icon: "dashicons-admin-post" },
    ],

    guest: [
        { id: "1", label: "Anmelden", url: "/wp-login.php", icon: "dashicons-lock" },
        { id: "2", label: "Registrieren", url: "/wp-login.php?action=register", icon: "dashicons-admin-users" },
        { id: "3", label: "Passwort vergessen?", url: "/wp-login.php?action=lostpassword", icon: "dashicons-editor-help" },
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
                            'span',
                            { className: `content-icon dashicons ${action.icon}` }
                        ),
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