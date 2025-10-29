# Vehicle Movement on a Map 🗺️

## Project Overview  
This is a frontend-only web application built as part of a Frontend Developer Intern assignment.  
It simulates a vehicle moving along a predefined route on a map, visualises its live position, draws the route path, and provides basic controls and metadata.

## 🔗 Live Demo  
Check out the live deployment here: [https://vehicle-tracker-app-sooty.vercel.app](https://vehicle-tracker-app-sooty.vercel.app)


## Objectives  
- Display a map view centred on a predefined route.  
- Draw the full route path using dummy location data.  
- Simulate real-time movement of a vehicle marker along the route.  
- Provide Play / Pause (and optionally Reset) controls.  
- Display metadata such as current coordinates, timestamp, and speed.  
- Ensure responsive UI (desktop + mobile) and clean, readable code.

## Tech Stack  
| Category     | Technology                                | Purpose                                      |
|--------------|-------------------------------------------|----------------------------------------------|
| Frontend     | React.js                                  | Component-based UI and state management      |
| Mapping      | React-Leaflet (Leaflet)                   | Interactive map integration                  |
| Styling      | Tailwind CSS                              | Utility-first styling and responsiveness     |
| Data Format  | JSON                                      | Dummy route data for simulation              |

## Dummy Data Format

[
  { "latitude": 17.361431, "longitude": 78.474533, "timestamp": "2024-07-20T10:00:00Z" },
  { "latitude": 17.382330, "longitude": 78.401604, "timestamp": "2024-07-20T10:00:00Z" },
  { "latitude": 17.423880, "longitude": 78.473824, "timestamp": "2024-07-20T10:00:00Z" },
  { "latitude": 17.406164, "longitude": 78.469048, "timestamp": "2024-07-20T10:00:00Z" },
  { "latitude": 17.371545, "longitude": 78.480241, "timestamp": "2024-07-20T10:00:00Z" },
  ...
]

## Preview

<img width="1366" height="683" alt="Screenshot 2025-10-29 192938" src="https://github.com/user-attachments/assets/3cafc339-480b-4eae-bd8d-eda2caf44d9e" />

<img width="547" height="683" alt="Screenshot 2025-10-29 194756" src="https://github.com/user-attachments/assets/458f926b-7bdb-44fd-aa9c-714c222bcbeb" />



https://github.com/user-attachments/assets/ca162dd3-4d29-42aa-83a9-07cb3fc3913b


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Author
Aditya Ammu - FullStack Developer Intern Candidate
