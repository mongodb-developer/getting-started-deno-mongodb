# Deno 2.0 & MongoDB CRUD Application

This repository contains a simple CRUD (Create, Read, Update, Delete) application built with Deno 2.0 and MongoDB. It demonstrates how to set up a basic HTTP server with routing capabilities and interact with a MongoDB database using the official MongoDB driver.

## Resources

- [Written Tutorial](https://www.mongodb.com/developer/languages/javascript/getting-started-deno-mongodb/)
- [Video Tutorial](https://www.youtube.com/watch?v=xOgicDUXnrE)

## Prerequisites

- Basic TypeScript knowledge
- Understanding of MongoDB concepts
- Familiarity with RESTful APIs
- [Deno 2.0](https://deno.land/#installation) installed
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account (or a local MongoDB instance)

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/mongodb-developer/getting-started-deno-mongodb.git
   cd getting-started-deno-mongodb
   ```

2. Create a `.env` file in the root directory with your MongoDB connection string:

   ```
   MONGODB_URI="your_mongodb_connection_string"
   DB_NAME="todo_db"
   ```

## Running the Application

Start the server with the following command:

```bash
deno -ERNS --env server.ts
```

## Accessing the API

You can access the API at `http://localhost:3000`.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions to this repository. If you find a bug or have an idea for an improvement, please open an issue or submit a pull request.
