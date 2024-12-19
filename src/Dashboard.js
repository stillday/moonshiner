import { createElement, Component } from "@wordpress/element";
import ContentCreateArea from "./components/ContentCreateArea";
import DashboardWidgets from "./components/DashboardWidgets";
import DashboardWelcome from "./components/DashboardWelcome";

class Dashboard extends Component {
    state = {
        darkTheme: true,
    };

    toggleTheme = () => {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme,
        }));
    };

    render() {
        const { darkTheme } = this.state;

        return createElement(
            "div",
            { className: `dashboard ${darkTheme ? "dark" : "light"}` },
            createElement(DashboardWelcome, { darkTheme }),
            createElement(
                "main",
                { className: `dashboard-main ${darkTheme ? "dark" : "light"}` },
                createElement(ContentCreateArea, { darkTheme }),
                createElement(DashboardWidgets, { darkTheme }),
            ),
        );
    }
}

export default Dashboard;