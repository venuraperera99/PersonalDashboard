# React Personal Dashboard

This project is a personal dashboard application built using React.js. It displays a user's personal information, a to-do list, and the current weather in their city. 

## Project Structure

The project is structured as follows:

- `public`: Contains the public assets and `index.html` file.
- `src`:
  - `components`: Contains reusable components such as UserProfile, TodoList, and Weather.
  - `pages`: Contains Home and Dashboard pages.
  - `styles`: Contains CSS modules for styling.
  - `App.js`: Main component with routing.
  - `index.js`: Entry point of the application.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:venuraperera99/PersonalDashboard.git

2. Navigate to the project directory:

   ```bash
   cd PersonalDashboard

3. Install dependencies

   ```bash
   npm install

## Running the Application

Once the installation is complete, you can run the project:
  
```bash
npm start
```
This will start the development server. Open http://localhost:3000 to view the application in your browser.

## Design Decisions

The React Personal Dashboard project was designed with several key considerations in mind. Each feature of the dashboard, including UserProfile, TodoList, and Weather, was implemented as a separate component. This approach promotes modularity, scalability and reusability, making it easier to maintain and extend the application in the future. 

### File Structure
- **components**: Contains reusable components that can be easily integrated into different parts of the application.
- **pages**: Houses the main pages of the dashboard, such as the `Home` page and `Dashboard` page.
- **styles**: Contains CSS modules for styling components. The use of CSS modules provides scoped styles, preventing unintended style conflicts and enhancing maintainability.

For styling, CSS modules were used throughout the project. CSS modules provide scoped styles, ensuring that styles are applied only to specific components without affecting others. This approach also simplifies maintenance and prevents potential style conflicts.

In terms of state management, the project utilizes React's built-in `useState` hook within components. This decision was made to keep the project lightweight and avoid the complexity of integrating an external state management library. 

Lastly, the application was designed with a focus on responsiveness. It is built to work seamlessly on both desktop and mobile devices, ensuring a consistent user experience across different screen sizes.


## Features
User Profile: Displays user's name, email, profile picture, and about me section.

Todo List: Allows users to add, delete, and mark tasks as completed. Task items are displayed in a table format.

Weather: Displays the current weather in the user's location, including temperature, description, and icon. Users can select major cities in Canada from a dropdown menu.
