import { cloneElement, Component, createElement } from "@wordpress/element";

class DashboardWidgets extends Component {
    render() {
        const userRole = window?.moonshinerUSer?.role || 'guest';

        const adminWidget = createElement(
            'div', 
            { className: 'widget' }, 
            createElement('h2', null, 'Admin Panel'),
            createElement('p', null, 'Nur für Administratoren zugänglich.'),
        );

        const editorWidget = createElement(
            'div', 
            { className: 'widget' }, 
            createElement('h2', null, 'Editor Panel'),
            createElement('p', null, 'Nur für Editoren zugänglich.'),
        );

        const generalWidget = createElement(
            "div",
            { className: "widget" },
            createElement("h2", null, "General Panel"),
            createElement("p", null, "Für alle Benutzer zugänglich."),
        );

        return createElement(
            "div",
            { className: "dashboard-widgets" },
            generalWidget,
            userRole === 'administrator' && adminWidget,
            userRole === 'editor' && editorWidget,
        );
    }
}

export default DashboardWidgets;