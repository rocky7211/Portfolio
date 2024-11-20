# Portfolio 2.0 (Development Version)

Welcome to the development version of my Portfolio 2.0, a dynamic showcase built with ReactJS and styled using Tailwind CSS. This portfolio is designed to present my projects and skills in a clean, modern interface. Explore the code or visit the live site to see my work in action.

[**Live Website Link**](https://jaredmcdowall.me/)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Fork or Clone the Repository:**
   - Fork the repository to your account or clone it directly using `git clone https://github.com/rocky7211/Portfolio.git`.

2. **Installation:**
   - Navigate to the project directory and run `npm install` to install the necessary dependencies.

3. **Running the Application:**
   - In the project directory, execute `npm start` to launch the app in development mode. Access it via [http://localhost:3000](http://localhost:3000).

## Development Status

This portfolio is actively being developed, which means regular updates and new features. 

## Automated Deployment

The project is configured with GitHub Actions for continuous integration and deployment. Commits pushed to the main branch trigger a build process and deploy the application to a specified custom domain, ensuring the live site is always up-to-date.

## Recent Changes

### Return to Top Arrow
- Added a "return to top" arrow that appears when the user scrolls down the page. Clicking the arrow smoothly scrolls the page back to the top.

### New Form Modal
- Implemented a modal dialog for the contact form submission. When the form is submitted, a modal appears with a success or error message, instead of redirecting to a different website.

### Developer Skills API
- Integrated a Developer Skills API to dynamically fetch and display skills. Users can interact with the API to get all skills, get a specific skill, add a new skill, decrement a skill, and remove a skill.