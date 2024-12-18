import { Component } from "@wordpress/element";

class Header extends Component {
    render() {
        const { toggleTheme, darkTheme } = this.props;

        const headerClass = darkTheme ? 'header dark' : 'header light';

        return (
            <header className={headerClass}>
                <div>Moonshiner Theme</div>
                <button onClick={toggleTheme}>{darkTheme ? 'Light Mode' : 'Dark Mode'}</button>
            </header>
        );
    }
}

export default Header;