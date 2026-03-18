export const apiDevelopmentData = [
    {
        "id": "api-development-rest-principles",
        "category": "API Development",
        "topic": "RESTful APIs",
        "subtopic": "REST Principles",
        "shortInsight": "REST Principles: Design APIs by simple rules!",
        "teaching": "REST (Representational State Transfer) is an architectural style for APIs. Its principles include stateless interactions, structured resource URIs, and using HTTP methods (GET, POST, PUT, DELETE) to operate on resources. It emphasizes uniform interfaces and separation of concerns.",
        "realLifeExample": "Think of a REST API like a library catalog: each book has a unique reference number (URI). You can 'GET' the book to read, 'PUT' to change details, or 'DELETE' it. Each action is well-defined and stateless.",
        "quiz": {
            "question": "Which of the following is NOT a core REST principle?",
            "options": [
                "Statelessness",
                "Uniform resource identification",
                "Client-server architecture",
                "Storing session state on the server"
            ],
            "answer": "Storing session state on the server"
        }
    },
    {
        "id": "api-development-status-codes",
        "category": "API Development",
        "topic": "RESTful APIs",
        "subtopic": "Status Codes",
        "shortInsight": "HTTP Status Codes: Servers talking in numbers!",
        "teaching": "HTTP status codes are three-digit responses that indicate the result of an HTTP request. 2xx codes mean success, 3xx for redirects, 4xx for client errors, and 5xx for server errors. Using the right code helps clients understand what happened.",
        "realLifeExample": "Think of status codes like traffic signals: 200 (green light) means go/no issues, 404 (red light) means stop/not found, 500 (danger) means something broke on the server.",
        "quiz": {
            "question": "What does the HTTP status code 404 indicate?",
            "options": [
                "Success",
                "Redirect",
                "Not Found",
                "Server Error"
            ],
            "answer": "Not Found"
        }
    },
    {
        "id": "api-development-queries-mutations",
        "category": "API Development",
        "topic": "GraphQL",
        "subtopic": "Queries & Mutations",
        "shortInsight": "GraphQL Queries & Mutations: Read vs Change data!",
        "teaching": "In GraphQL, a 'Query' fetches (reads) data, and a 'Mutation' modifies (writes) data. Both allow clients to specify exactly what fields they want. Queries should not have side effects, while Mutations do by altering the underlying data.",
        "realLifeExample": "Think of GraphQL like a restaurant menu: asking for a Query is like ordering a dish you want, and a Mutation is like ordering a custom order that changes the inventory (e.g., adding a new dish to the menu).",
        "quiz": {
            "question": "Which GraphQL operation should you use to modify server-side data?",
            "options": [
                "Query",
                "Mutation",
                "Subscription",
                "Schema"
            ],
            "answer": "Mutation"
        }
    },
    {
        "id": "api-development-resolvers",
        "category": "API Development",
        "topic": "GraphQL",
        "subtopic": "Resolvers",
        "shortInsight": "GraphQL Resolvers: Functions powering each field!",
        "teaching": "Resolvers are functions in GraphQL that fetch or compute the data for each field in a query. When a client requests fields, GraphQL calls the corresponding resolver for each field to determine the output, allowing complex data retrieval.",
        "realLifeExample": "Think of resolvers like chefs in a restaurant: each menu item (field) has a chef (resolver) who knows how to prepare that item. When a dish is ordered, the chef (resolver) delivers the final result for that part of the order.",
        "quiz": {
            "question": "What is a resolver in GraphQL?",
            "options": [
                "A function that fetches and returns the data for a field in a schema",
                "A type of database",
                "A client-side query library",
                "An authentication token"
            ],
            "answer": "A function that fetches and returns the data for a field in a schema"
        }
    },
    {
        "id": "api-development-websockets",
        "category": "API Development",
        "topic": "Real-time Communication",
        "subtopic": "WebSockets",
        "shortInsight": "WebSockets: Real-time two-way communication!",
        "teaching": "WebSockets is a protocol that provides full-duplex communication channels over a single TCP connection. It allows a persistent connection so servers can push updates to clients in real time, and clients can send messages to servers without new HTTP requests.",
        "realLifeExample": "Think of WebSockets like a phone call between browser and server: once connected, either side can speak at any time instantly, unlike traditional HTTP which is a one-way pattern.",
        "quiz": {
            "question": "What is a key difference between WebSockets and regular HTTP requests?",
            "options": [
                "WebSockets only work over UDP",
                "WebSockets provide a persistent two-way connection",
                "HTTP can push data to clients anytime",
                "WebSockets cannot send data from client to server"
            ],
            "answer": "WebSockets provide a persistent two-way connection"
        }
    },
    {
        "id": "api-development-socket.io",
        "category": "API Development",
        "topic": "Real-time Communication",
        "subtopic": "Socket.io",
        "shortInsight": "Socket.io: Simplify real-time in Node.js!",
        "teaching": "Socket.io is a library that enables real-time, bi-directional communication between clients and server. It abstracts WebSockets and provides fallbacks (like polling) if needed, plus handy features like rooms and automatic reconnection.",
        "realLifeExample": "Imagine Socket.io as a translator on a multi-network phone call: it tries the best connection (WebSocket) but will switch to another method seamlessly if needed, keeping the conversation live.",
        "quiz": {
            "question": "Which of these is a feature of Socket.io?",
            "options": [
                "Automatic reconnection and fallback to polling",
                "Purely RESTful architecture",
                "Database integration by default",
                "Synchronous request handling"
            ],
            "answer": "Automatic reconnection and fallback to polling"
        }
    },
    {
        "id": "api-development-protocol-buffers",
        "category": "API Development",
        "topic": "gRPC",
        "subtopic": "Protocol Buffers",
        "shortInsight": "Protocol Buffers: Compact binary format for gRPC!",
        "teaching": "Protocol Buffers (protobuf) are a language-neutral, platform-neutral way of serializing structured data, used by gRPC. They define message schemas in .proto files and compile to efficient binary, which is faster and smaller than JSON.",
        "realLifeExample": "Think of Protocol Buffers as an efficient packing format: instead of a verbose letter (JSON text), you compress your data into a tight, pre-agreed structure (binary), saving space and time to send.",
        "quiz": {
            "question": "What is the advantage of using Protocol Buffers over JSON?",
            "options": [
                "They are human-readable without tools",
                "They use a compact binary format, making them faster and smaller",
                "They require no schema",
                "They are a SQL alternative"
            ],
            "answer": "They use a compact binary format, making them faster and smaller"
        }
    },
    {
        "id": "api-advanced-interview-idempotency",
        "category": "API Development",
        "topic": "Advanced Interview Questions",
        "subtopic": "Idempotency",
        "shortInsight": "Idempotency: Safe retries without double charging!",
        "teaching": "An API request is idempotent if making it once has the exact same effect as making it multiple times. GET, PUT, and DELETE are idempotent by definition. POST is not. To make POST idempotent (like charging a credit card), you attach an 'Idempotency-Key' header that the server tracks.",
        "realLifeExample": "An elevator button is idempotent. Pressing it once calls the elevator. Pressing it 50 times angrily does not summon 50 elevators—the result is identical to pressing it once.",
        "quiz": {
            "question": "Which HTTP method is typically NOT idempotent, meaning multiple identical requests might create multiple resources?",
            "options": ["GET", "PUT", "DELETE", "POST"],
            "answer": "POST"
        },
        "isInterviewQuestion": true
    }
]