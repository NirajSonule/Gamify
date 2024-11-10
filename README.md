# Gamify - Game Recommender

**Gamify** is a web application designed to help users discover new games based on their preferences and ratings. The platform allows users to rate games, track their favorites, and receive personalized game recommendations, making it easier to find your next gaming adventure.

---

## Features

### 1. **User Authentication**

- **Sign Up / Login**: Users can create an account or log in with their existing credentials.
- **Security**: Passwords are securely hashed for protection.
- **Session Management**: JSON Web Tokens (JWT) are used for secure user sessions.

### 2. **User Profiles**

- Users can create and update their profiles.
- Save favorite games and keep track of ratings.

### 3. **Game Database**

- A collection of games with key details such as title, genre, description, and rating.
- Integration with external APIs (e.g., RAWG or IGDB) to fetch up-to-date game data.

### 4. **Rating System**

- Users can rate games on a scale of 1-5 stars.
- Average ratings are displayed on the game cards to assist other users in making decisions.

### 5. **Search and Filter**

- **Search Functionality**: Find games by title, genre, or platform. /pending/
- **Filter Options**: Sort games by rating, release date, or popularity.

### 6. **Comment and Review Section**

- Users can leave reviews and comments on games.
- **Review Voting**: Upvote/downvote features for helpful reviews.

### 7. **Admin Panel**

- Admin users can manage game content (add, update, delete games).
- View user statistics, game ratings, and other insights.

---

## Tech Stack

### Client

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For handling navigation and routing in the application.
- **Port**: 5173

### Server

- **Node.js**: A runtime environment for building the server-side logic.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing user and game data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, used for defining data models and interactions.
- **Admin Secret**: Used for admin authentication.
- **Port**: Set to the desired port for the server to run.

---

## Installation

To run the **Gamify** application locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- A MongoDB instance (either local or hosted on a service like MongoDB Atlas).

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gamify.git
   cd gamify
   ```

2. Install dependencies for both client and server:

   **Client Setup:**

   ```bash
   cd client
   npm install
   ```

   **Server Setup:**

   ```bash
   cd server
   npm install
   ```

3. Configure your environment variables:

   - Create a `.env` file in the server directory.
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ADMIN_SECRET=your_admin_secret_key
     PORT=your_preferred_server_port
     ```

4. Start the development servers:

   **Client:**

   ```bash
   cd client
   npm start
   ```

   The client will run on [http://localhost:5173](http://localhost:5173).

   **Server:**

   ```bash
   cd server
   npm start
   ```

   The server will run on the port specified in your `.env` file.

5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## Contributing

Contributions are welcome! If you have suggestions, bug fixes, or improvements, feel free to submit a pull request or open an issue.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Submit a pull request.

---

Feel free to explore and enjoy discovering new games with **Gamify**! 🎮
