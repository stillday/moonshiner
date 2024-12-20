Sure! Here's the English version:

# Moonshiner

A custom WordPress dashboard built with React.

## Project Overview
The goal of this project is to develop a tailored dashboard for WordPress, created using React. Emphasis was placed on integrating modern technologies such as SCSS and creating dynamic APIs to deliver a functional and visually appealing design.

## Features
- **React Integration in WordPress**: Implementation of React based on the Kinsta guide and @wordpress/script documentation.
- **Custom Design**: Unique styling for the header, footer, and dashboard components.
- **API Integration**: Dynamic URL queries and security features were implemented.
- **User-Friendly Interface**: Intuitive design with quick start points, user information, and additional functionalities.

## Development Progress

### React in WordPress
- Research on React integration in WordPress.
  - Guide found: [Kinsta](https://kinsta.com/blog/wordpress-react-theme/).
- Initial implementations based on the Kinsta guide and @wordpress/script documentation.
- Resolved issues related to page creation.
- Successfully integrated SCSS.
- Improved inclusion of `variables.scss` for reusability and consistency.
- Implemented basic styling for elements such as buttons and containers.

### Header and Footer
- Created new files for the header and footer.
- Fixed issues during file integration.
- Developed styling.
- Integrated into `App.js`.

### API
- Created an API based on a guide.
- Added dynamic URL queries.
- Integrated security features.

### Dashboard
- Created initial sketches of the idea.
- Identified and planned missing components.
- Structured files.
- Developed the design.
- Processed roles and user information.
- Implemented quick start points.
- Integrated fake data for posts and comments.
- Designed a lightweight and intuitive interface.
![sketch from the idea](/assets/idee.jpg)

## Resources

### Websites
1. **[Creating Custom WordPress Dashboard Widgets](https://pressengers.de/tipps/individuelle-wordpress-dashboard-widgets/)**  
   Guide for creating custom widgets.
2. **[How to Customize the WordPress Admin Dashboard (6 Tips)](https://www.wpbeginner.com/beginners-guide/how-to-customize-wordpress-admin-area-dashboard-for-beginners/)**  
   Guide for customizing the WordPress admin area.
3. **[How to Create a Custom WordPress Dashboard](https://kinsta.com/blog/custom-wordpress-dashboard/)**  
   Comprehensive guide for designing a custom dashboard.

### GitHub Repositories
1. **[WordPress Dashboard Topics](https://github.com/topics/wordpress-dashboard)**  
   Collection of repositories for developing and customizing dashboards.

### Videos
1. **[Create Your Own DASHBOARD WIDGETS in WORDPRESS (WITHOUT Plugin)](https://www.youtube.com/watch?v=auW5gaG6AUM)**  
   Video tutorial on creating custom widgets.

---

Planned implementation of preferred design (dark, light) using cookies:
  - When the page loads, it should check if a cookie named `theme-preference` exists.
  - If found, the saved theme (dark or light) should be applied.
  - Users should be able to manually change the theme, and their choice will be saved in the cookie.
  - Implementation will use JavaScript and the `document.cookie` API.
