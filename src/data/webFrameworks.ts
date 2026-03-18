export const webFrameworksData = [
    {
        "id": "web-frameworks-routing",
        "category": "Web Frameworks",
        "topic": "Express.js",
        "subtopic": "Routing",
        "shortInsight": "Express Routing: Map URLs to code functions!",
        "teaching": "Routing in Express.js defines how your app responds to client requests (URLs and HTTP methods). You create route handlers (e.g., app.get('/path', handler)) to execute specific code when a user visits a certain endpoint.",
        "realLifeExample": "Think of routing like a post office: the URL is the address on a letter, and routing directs that letter to the correct handler function that delivers a response.",
        "quiz": {
            "question": "Which Express.js method would you use to handle GET requests to '/users'?",
            "options": [
                "app.route()",
                "app.listen()",
                "app.get('/users', ...)",
                "app.use('/users')"
            ],
            "answer": "app.get('/users', ...)"
        }
    },
    {
        "id": "web-frameworks-middleware",
        "category": "Web Frameworks",
        "topic": "Express.js",
        "subtopic": "Middleware",
        "shortInsight": "Express Middleware: Layers of request handling!",
        "teaching": "Middleware functions in Express run during request-response processing. They can read or modify the request and response objects, or end the request. Common uses include parsing JSON, logging, authentication, and more.",
        "realLifeExample": "Imagine middleware as assembly line workers: each one takes the request, does something (like checking authentication), and passes it to the next worker until the final response is prepared.",
        "quiz": {
            "question": "How do you add a middleware function to an Express app?",
            "options": [
                "app.use(middlewareFunction)",
                "app.add(middlewareFunction)",
                "app.handle(middlewareFunction)",
                "app.middleware(middlewareFunction)"
            ],
            "answer": "app.use(middlewareFunction)"
        }
    },
    {
        "id": "web-frameworks-express-error-handling",
        "category": "Web Frameworks",
        "topic": "Express.js",
        "subtopic": "Error Handling",
        "shortInsight": "Express Error Handling: Catch and manage errors gracefully!",
        "teaching": "Error handling middleware in Express has four arguments (err, req, res, next). You add it after other middleware/handlers to catch errors. It can log issues and send user-friendly error responses without crashing the app.",
        "realLifeExample": "Think of error-handling middleware like a safety net: if an earlier step trips (an error), the net catches it and handles it, allowing the process to complete without breaking everything.",
        "quiz": {
            "question": "What distinguishes an Express error-handling middleware function?",
            "options": [
                "It has four arguments, including err",
                "It runs before all routes",
                "It can't send a response",
                "It only logs errors"
            ],
            "answer": "It has four arguments, including err"
        }
    },
    {
        "id": "web-frameworks-fastify",
        "category": "Web Frameworks",
        "topic": "Modern Alternatives",
        "subtopic": "Fastify",
        "shortInsight": "Fastify: Lightning-fast Node.js framework!",
        "teaching": "Fastify is a web framework focused on speed and low overhead. It uses asynchronous architecture and schema-based validation to deliver high performance. It's a modern alternative to Express with a plugin system and developer-friendly tooling.",
        "realLifeExample": "Think of Fastify like a sports car version of Express: built for speed and efficiency, getting you to the destination (serving responses) faster with minimal drag.",
        "quiz": {
            "question": "What is a distinguishing feature of Fastify compared to Express?",
            "options": [
                "It uses synchronous request handling",
                "It focuses on high performance with async and low overhead",
                "It only supports HTTP/2",
                "It does not allow middleware"
            ],
            "answer": "It focuses on high performance with async and low overhead"
        }
    },
    {
        "id": "web-frameworks-nestjs",
        "category": "Web Frameworks",
        "topic": "Modern Alternatives",
        "subtopic": "NestJS",
        "shortInsight": "NestJS: A structured framework with TypeScript!",
        "teaching": "NestJS is a progressive Node framework that uses TypeScript and follows patterns like dependency injection and modular design. It provides an out-of-the-box application architecture inspired by Angular, making it suited for scalable enterprise apps.",
        "realLifeExample": "Think of NestJS like a well-organised Lego set: predefined blocks and guidelines help you build a robust, large project without chaos, especially when working in a team.",
        "quiz": {
            "question": "Which statement is true about NestJS?",
            "options": [
                "It is only for building microservices",
                "It uses TypeScript and a modular architecture",
                "It has no support for decorators",
                "It doesn't support Express under the hood"
            ],
            "answer": "It uses TypeScript and a modular architecture"
        }
    },
    {
        "id": "web-frameworks-koa.js",
        "category": "Web Frameworks",
        "topic": "Modern Alternatives",
        "subtopic": "Koa.js",
        "shortInsight": "Koa: Minimalist and modern Node framework!",
        "teaching": "Koa is a lightweight web framework created by the Express team. It provides a more minimal core, using async functions and generators for middleware. Koa doesn't bundle middleware, giving developers freedom to add just what they need.",
        "realLifeExample": "Think of Koa as a minimalist kitchen: you start with bare essentials and add only the appliances (middleware) you want, keeping the setup clean and customized.",
        "quiz": {
            "question": "What is unique about Koa's approach to middleware?",
            "options": [
                "It only uses callback functions",
                "It uses async/await (or generators) and contexts",
                "It has built-in templating",
                "It comes with a default ORM"
            ],
            "answer": "It uses async/await (or generators) and contexts"
        }
    },
    {
        "id": "web-frameworks-advanced-interview-middleware",
        "category": "Web Frameworks",
        "topic": "Advanced Interview Questions",
        "subtopic": "Express Middleware",
        "shortInsight": "Middleware Architecture: What happens if you forget to call `next()`?",
        "teaching": "If a middleware function does not call `next()` (or send a response using methods like `res.send`), the request will be left hanging, and the client will eventually time out. Express does not automatically move to the next middleware.",
        "realLifeExample": "Think of middleware as an assembly line. If a worker inspects the product but doesn't pass it to the next person (`next()`) or drop it in the shipping box (`res.send()`), the belt stops entirely.",
        "quiz": {
            "question": "What happens in Express if a middleware function neither ends the request-response cycle nor calls next()?",
            "options": [
                "Express automatically calls next() after 30 seconds",
                "The server crashes",
                "The request is left hanging and eventually times out",
                "It automatically sends a 404 response"
            ],
            "answer": "The request is left hanging and eventually times out"
        },
        "isInterviewQuestion": true
    }
]