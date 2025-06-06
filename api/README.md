# API Documentation

This is a Deno-based REST API built using the Oak framework.

## Project Structure

```files
api/
├── middleware/     # Custom middleware functions
├── mocks/         # Mock data for development
├── routes/        # API route definitions
├── types/         # TypeScript type definitions
├── server.ts      # Main application entry point
├── deno.json      # Deno configuration
└── deno.lock      # Dependency lock file
```

## Getting Started

### Prerequisites

- [Deno](https://deno.land/) installed on your system

### Running the Server

```bash
deno task dev
```

The server will start on `http://localhost:8000`

## Features

- Built with [Oak](https://oakserver.github.io/oak/) framework
- TypeScript support
- Custom middleware for logging and error handling
- RESTful API architecture

## Development

### Adding New Routes

1. Create your route handler in the `routes/` directory
2. Import and register the route in `routes/index.ts`

### Middleware

The API includes two main middleware components:

- Logger: Handles request logging
- Error Handler: Centralized error handling

## API Endpoints

### API Documentation

- `GET /` - List all available endpoints with descriptions

### Health Check
- `GET /health` - Check API health status


### Shows

- `GET /shows` - List all shows
- `GET /shows/:id` - Get show details

### Tours

- `GET /tours` - List all tours with show information
- `GET /tours/:id` - Get tour details
- `GET /tours/:id/performances` - List all performances for a tour

### Performances

- `GET /performances` - List all performances
- `GET /performances/:id` - Get performance details

### Dashboard

- `GET /dashboard` - Get dashboard metrics
