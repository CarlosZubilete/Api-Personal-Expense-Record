# Personal Expense Record API

A RESTful API for managing personal expenses built with Node.js, Express, and MongoDB.

## Features

- 🔐 User Authentication (Register/Login/Logout)
- 💰 Expense Management
- 🔒 JWT Token-based Authorization
- ✅ Input Validation
- 📝 CRUD Operations for Purchases

## Project Structure

```
src/
├── config/          # Configuration files
├── features/        # Feature modules
│   ├── auth/        # Authentication feature
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── validators/
│   └── purchases/   # Purchases feature
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── services/
├── app.js          # Express app setup
└── server.js       # Server entry point
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/CarlosZubilete/Api-Personal-Expense-Record.git
cd Api-Personal-Expense-Record
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory and add:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server

```bash
npm start
```

## API Endpoints

### Authentication

- POST `/auth/register` - Register a new user
- POST `/auth/login` - User login
- POST `/auth/logout` - User logout

### Purchases

- POST `/purchases/new` - Create a new purchase
- GET `/purchases` - Get all purchases (requires authentication)
- GET `/purchases/:id` - Get a specific purchase
- PATCH `/purchases/:id` - Update a purchase
- DELETE `/purchases/:id` - Delete a purchase

## Architecture

The project follows a modular architecture with separate concerns:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic
- **Models**: Define data schemas
- **Routes**: Define API endpoints
- **Middlewares**: Handle authentication and validation
- **Validators**: Input validation schemas

## Security Features

- Password hashing
- JWT token authentication
- Input validation
- Token invalidation on logout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
