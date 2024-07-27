# DALL.E Prompt Generator API

Introducing an Express.js API designed to deliver random prompts seamlessly. With Prisma as the ORM for efficient database interaction, this API comes equipped with dedicated routes for convenient retrieval.

## Features

- Obtain a random prompt
- Manage prompts using RESTful routes
- Set up a basic server with Express.js
- Support for environment variables with dotenv
- Enable Cross-Origin Resource Sharing (CORS)

## Technologies

- Express.js: A web application framework for Node.js designed to build RESTful APIs.
- Xata: A serverless database utilized for data storage.
- Prisma: An ORM (Object-Relational Mapping) tool for interacting with databases.
- OpenAI: Provides an API for generating images based on textual prompts.

## Environment variables

Create a `.env` file in the root of the project and add the following variables:

```bash
OPENAI_API_KEY="Your OpenAI key"
DATABASE_URL="postgresql://<YOUR_WORKSPACE_ID>:<YOUR_API_KEY>@<YOUR_REGION>.sql.xata.sh:5432/<YOUR_DATABASE_NAME>:<YOUR_BRANCH_NAME>?sslmode=require"
SHADOW_DATABASE_URL="postgresql://<YOUR_WORKSPACE_ID>:<YOUR_API_KEY>@<YOUR_REGION>.sql.xata.sh:5432/<YOUR_DATABASE_NAME>:<YOUR_BRANCH_NAME>?sslmode=require"
```

To set up [Prisma with Xata's Postgres service](https://xata.io/blog/prisma-postgres-xata-integration)

Feel free to modify the content as per your specific project details and preferences.

## Learn more

- [Prisma documentation](https://www.prisma.io/docs)

- [Get started with Xata](https://xata.io/docs)

[CLIENT CODE](https://github.com/Terieyenike/imagen-pxcc-client)
