# Car Management System - CRUD Application

This project is a **Car Management System** built with **React** and **Redux** on the frontend and a **JSON Server** as a mock backend. It allows users to manage car data such as brand and year, with full support for CRUD operations (Create, Read, Update, Delete).


## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing app state.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **React-Redux**: Official Redux bindings for React.
- **Axios**: A promise-based HTTP client for communicating with the JSON server.

### Backend:
- **JSON Server**: A simple mock REST API used to perform backend operations with JSON data.

## How to Run the Project

### Prerequisites:
Ensure you have the following installed:
- **Node.js**: Download and install from [Node.js](https://nodejs.org/)
- **npm** or **yarn**: A package manager (npm is included with Node.js)

### Setup Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PopovEva/redux-crud-json-server.git
   cd redux-crud-json-server   
2. **Install dependencies**:  
    ```bash
    npm install

3. **Start the JSON server: Run the following command to start the JSON server using db.json as the data source:**  
    ```bash
    npx json-server --watch db.json --port 5000

4. **Start the React application: In a new terminal, run:**
    ```bash
    npm start
    ```
    The React app should now be running at http://localhost:3000, while the JSON server will be running at http://localhost:5000.   

### Available Scripts

In the project directory, you can run:

- `npm start`: Starts the development server.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Removes the single build dependency from your project.

### CRUD Functionality

- **Create**: Add a new car using the form in the UI.
- **Read**: View the list of all cars from the database.
- **Update**: Edit the details of an existing car.
- **Delete**: Remove a car from the list.

### Data Sample

Here is a sample from `db.json` which contains the mock data for the JSON server:

```json
{
  "cars": [
    { "id": "1", "brand": "mazda", "year": 2020 },
    { "id": "2", "brand": "kia", "year": 1990 },
    { "id": "6247", "brand": "fort", "year": "1999" }
  ]
}



