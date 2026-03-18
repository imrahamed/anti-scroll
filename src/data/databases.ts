export const databasesData = [
    {
        "id": "databases-postgresql",
        "category": "Databases",
        "topic": "Relational Databases",
        "subtopic": "PostgreSQL",
        "shortInsight": "PostgreSQL: Powerful open-source relational database!",
        "teaching": "PostgreSQL is an advanced open-source RDBMS that supports SQL and JSON querying. It offers strong ACID compliance, complex queries, and features like views, stored procedures, and data integrity. It's known for reliability and extensibility.",
        "realLifeExample": "Think of PostgreSQL like a highly organized digital filing cabinet with many safety locks. It not only stores spreadsheets of data (tables) but also supports complex data like documents (JSON) all while keeping everything safe.",
        "quiz": {
            "question": "Which of the following is a feature of PostgreSQL?",
            "options": [
                "It only supports simple queries",
                "It has ACID compliance and supports JSON data",
                "It is not free",
                "It doesn't support transactions"
            ],
            "answer": "It has ACID compliance and supports JSON data"
        }
    },
    {
        "id": "databases-mysql",
        "category": "Databases",
        "topic": "Relational Databases",
        "subtopic": "MySQL",
        "shortInsight": "MySQL: Popular and reliable SQL database!",
        "teaching": "MySQL is a widely used open-source relational database known for its speed and simplicity. It enforces ACID properties for transactions and supports structured data queries using SQL. It's commonly used for web applications and has broad community support.",
        "realLifeExample": "Think of MySQL like a dependable accountant: it keeps structured ledgers of data and processes transactions reliably. It's been a go-to workhorse in many web apps for years.",
        "quiz": {
            "question": "Which SQL command is used to retrieve records from a MySQL database?",
            "options": [
                "INSERT",
                "SELECT",
                "UPDATE",
                "DELETE"
            ],
            "answer": "SELECT"
        }
    },
    {
        "id": "databases-mongodb",
        "category": "Databases",
        "topic": "NoSQL Databases",
        "subtopic": "MongoDB",
        "shortInsight": "MongoDB: Flexible document-oriented database!",
        "teaching": "MongoDB is a NoSQL database that stores data in JSON-like documents (BSON). This schema-less design allows you to store varied structures and scale easily. It's great for handling unstructured data and for applications that need fast iterations.",
        "realLifeExample": "Imagine MongoDB as a collection of labeled folders (collections) where each folder contains sheets (documents) that might have different layouts. You don't need every sheet to match, giving you flexibility.",
        "quiz": {
            "question": "What is a key characteristic of MongoDB compared to relational databases?",
            "options": [
                "It uses SQL for queries",
                "Data is stored in flexible JSON-like documents",
                "It requires a fixed schema for tables",
                "It cannot scale horizontally"
            ],
            "answer": "Data is stored in flexible JSON-like documents"
        }
    },
    {
        "id": "databases-redis",
        "category": "Databases",
        "topic": "NoSQL Databases",
        "subtopic": "Redis",
        "shortInsight": "Redis: Ultra-fast in-memory key-value store!",
        "teaching": "Redis is an in-memory data store used as a database, cache, and message broker. It supports simple key-value pairs, as well as complex data types (lists, sets, sorted sets). Being in-memory makes it extremely fast for real-time data access.",
        "realLifeExample": "Think of Redis as a super-speedy notepad in your computer's memory. You can quickly jot down data (keys and values) and read it back instantly — much faster than looking for it on disk.",
        "quiz": {
            "question": "Which data structure is NOT natively supported by Redis?",
            "options": [
                "Strings",
                "Queues",
                "Hashes",
                "Lists"
            ],
            "answer": "Queues"
        }
    },
    {
        "id": "databases-prisma",
        "category": "Databases",
        "topic": "ORMs and ODMs",
        "subtopic": "Prisma",
        "shortInsight": "Prisma: Next-gen type-safe ORM!",
        "teaching": "Prisma is an ORM (Object-Relational Mapper) that provides type-safe database access. You define your data models in a schema, and Prisma generates a client library with fully typed queries. It simplifies interacting with databases and avoids common errors.",
        "realLifeExample": "Think of Prisma like an intelligent translator between your code and database: it understands your data structure and helps you write queries with the right grammar and type safety.",
        "quiz": {
            "question": "What is the primary purpose of Prisma?",
            "options": [
                "It replaces SQL with a NoSQL alternative",
                "It maps database tables to code objects with type safety",
                "It is a database server",
                "It converts data to CSV files"
            ],
            "answer": "It maps database tables to code objects with type safety"
        }
    },
    {
        "id": "databases-mongoose",
        "category": "Databases",
        "topic": "ORMs and ODMs",
        "subtopic": "Mongoose",
        "shortInsight": "Mongoose: MongoDB object modeling for Node.js!",
        "teaching": "Mongoose is an ODM (Object Data Modeling) library for MongoDB. It lets you define schemas for your MongoDB collections and interact with data as JavaScript objects. It also provides validation, middleware, and more.",
        "realLifeExample": "Think of Mongoose as an architect for your MongoDB data: you draw blueprints (schemas) for how documents should look and then use those blueprints to build and validate the actual records.",
        "quiz": {
            "question": "Which database does Mongoose specifically work with?",
            "options": [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Redis"
            ],
            "answer": "MongoDB"
        }
    },
    {
        "id": "databases-typeorm",
        "category": "Databases",
        "topic": "ORMs and ODMs",
        "subtopic": "TypeORM",
        "shortInsight": "TypeORM: Full-featured ORM for TypeScript and Node!",
        "teaching": "TypeORM is an ORM that supports both TypeScript and JavaScript, and works with various databases (MySQL, PostgreSQL, SQLite, etc.). It uses decorators and entities to define models and can automatically generate database tables from them.",
        "realLifeExample": "Imagine TypeORM like a universal adapter for different databases: it lets you define your data models once and handle them similarly across many database systems.",
        "quiz": {
            "question": "Which is a key feature of TypeORM?",
            "options": [
                "It only works with MongoDB",
                "It uses decorators and supports multiple databases",
                "It replaces Node.js entirely",
                "It only works with SQL Server"
            ],
            "answer": "It uses decorators and supports multiple databases"
        }
    },
    {
        "id": "db-advanced-interview-n-plus-1",
        "category": "Databases",
        "topic": "Advanced Interview Questions",
        "subtopic": "The N+1 Query Problem",
        "shortInsight": "N+1 Problem: The silent performance killer in ORMs!",
        "teaching": "The N+1 problem occurs when an ORM executes 1 query to fetch a list of 'N' items, and then executes 'N' additional queries to fetch a related entity for each item (e.g., fetching 50 posts, then 50 separate queries for each author). This destroys performance. It's solved using JOINs or DataLoaders.",
        "realLifeExample": "It's like going to the grocery store to buy ingredients for a recipe, but instead of buying everything in one trip, you drive home after picking up each individual item.",
        "quiz": {
            "question": "How do you typically solve the N+1 query problem when fetching related data?",
            "options": ["By increasing the database server size", "By executing queries sequentially", "By using SQL JOINs or batching (e.g., DataLoader)", "By switching to a NoSQL database"],
            "answer": "By using SQL JOINs or batching (e.g., DataLoader)"
        },
        "isInterviewQuestion": true
    }
]