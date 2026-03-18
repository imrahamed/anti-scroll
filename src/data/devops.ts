export const devopsData = [
    {
        "id": "devops-deployment-docker-basics",
        "category": "DevOps & Deployment",
        "topic": "Containerization",
        "subtopic": "Docker Basics",
        "shortInsight": "Docker: Package apps in lightweight containers!",
        "teaching": "Docker is a platform that uses OS-level virtualization to run applications in containers. A container includes your application and its dependencies, isolating it from other processes. Docker images define the app environment consistently.",
        "realLifeExample": "Think of Docker like packing your application in a shipping container: it carries everything needed (code, libraries, etc.) so it can run anywhere, just like standardized shipping containers go on any ship or truck.",
        "quiz": {
            "question": "What is a Docker image?",
            "options": [
                "An executable cloud function",
                "A lightweight, standalone, and executable package of software",
                "A hardware device",
                "A programming language"
            ],
            "answer": "A lightweight, standalone, and executable package of software"
        }
    },
    {
        "id": "devops-deployment-docker-compose",
        "category": "DevOps & Deployment",
        "topic": "Containerization",
        "subtopic": "Docker Compose",
        "shortInsight": "Docker Compose: Define multi-container apps!",
        "teaching": "Docker Compose uses a YAML file to define and run multi-container Docker applications. You list your services, networks, and volumes in docker-compose.yml, and with a single command you can create or start all the services together.",
        "realLifeExample": "Think of Docker Compose as a blueprint for a microservices village: it tells Docker how to set up and connect multiple containers (like houses, factories, etc.) so they work together as an app.",
        "quiz": {
            "question": "What file does Docker Compose use to configure services?",
            "options": [
                "app.json",
                "docker-compose.yml",
                "package.json",
                "compose.txt"
            ],
            "answer": "docker-compose.yml"
        }
    },
    {
        "id": "devops-deployment-github-actions",
        "category": "DevOps & Deployment",
        "topic": "CI/CD",
        "subtopic": "GitHub Actions",
        "shortInsight": "GitHub Actions: Automate your workflows!",
        "teaching": "GitHub Actions is a CI/CD and automation platform built into GitHub. You define workflows in YAML files that can run on events (like pushes). Actions can build, test, or deploy your code automatically whenever changes occur.",
        "realLifeExample": "Think of GitHub Actions like a robot chef: whenever you push new code (a new recipe), the chef automatically tests and cooks (builds/tests) it for you, and can even serve (deploy) it when ready.",
        "quiz": {
            "question": "Which file format is used to define GitHub Actions workflows?",
            "options": [
                ".yml or .yaml",
                ".json",
                ".xml",
                ".git"
            ],
            "answer": ".yml or .yaml"
        }
    },
    {
        "id": "devops-deployment-paas-heroku",
        "category": "DevOps & Deployment",
        "topic": "Hosting & Cloud",
        "subtopic": "PaaS (Render/Heroku)",
        "shortInsight": "PaaS: Deploy apps without managing servers!",
        "teaching": "Platform as a Service (PaaS) like Heroku or Render provides ready-to-use environments to host apps. You push your code, and they handle servers, scaling, and runtime. This lets developers focus on code, not infrastructure management.",
        "realLifeExample": "Think of PaaS as renting a fully equipped restaurant kitchen: you just bring your recipe, and the provider gives you everything (ovens, stoves, staff) so you can start cooking immediately.",
        "quiz": {
            "question": "What is a key benefit of using a PaaS like Heroku?",
            "options": [
                "You must manage the virtual servers yourself",
                "It abstracts server management, focusing on deployment",
                "It only works for static websites",
                "It replaces your database"
            ],
            "answer": "It abstracts server management, focusing on deployment"
        }
    },
    {
        "id": "devops-deployment-aws",
        "category": "DevOps & Deployment",
        "topic": "Hosting & Cloud",
        "subtopic": "AWS",
        "shortInsight": "AWS: Cloud computing powerhouse!",
        "teaching": "AWS (Amazon Web Services) is a comprehensive cloud platform offering services like compute (EC2), storage (S3), databases (RDS), and more. It provides scalable infrastructure to build and deploy applications globally.",
        "realLifeExample": "Think of AWS like a huge hardware store full of tools: you can pick servers, databases, and services on demand instead of building them from scratch, paying only for what you use.",
        "quiz": {
            "question": "What does AWS S3 provide?",
            "options": [
                "Relational database service",
                "Object storage for files and data",
                "Authentication service",
                "Serverless function execution"
            ],
            "answer": "Object storage for files and data"
        }
    },
    {
        "id": "devops-deployment-serverless",
        "category": "DevOps & Deployment",
        "topic": "Hosting & Cloud",
        "subtopic": "Serverless",
        "shortInsight": "Serverless: Focus on code, not servers!",
        "teaching": "Serverless computing (e.g. AWS Lambda, Netlify Functions) lets you run code without managing servers. You write functions and deploy them; the cloud provider handles scaling and execution. You typically pay only for the compute time your functions use.",
        "realLifeExample": "Think of serverless like ordering a taxi: you just call (invoke) a function and pay for the ride (execution time). You don't own a car (server); the service provides it on demand.",
        "quiz": {
            "question": "What is a benefit of serverless architecture?",
            "options": [
                "You manage all servers manually",
                "Automatic scaling and you pay per execution",
                "Always-on dedicated servers",
                "Requires long-running processes"
            ],
            "answer": "Automatic scaling and you pay per execution"
        }
    },
    {
        "id": "devops-deployment-logging",
        "category": "DevOps & Deployment",
        "topic": "Monitoring & Observability",
        "subtopic": "Logging (Winston)",
        "shortInsight": "Winston: Flexible logging in Node.js!",
        "teaching": "Winston is a popular logging library for Node.js. It allows you to log messages with different levels (info, error, debug) and send them to multiple transports (console, files, databases). It's highly configurable for formatting and filtering logs.",
        "realLifeExample": "Think of Winston as a multi-channel recorder: it writes down important events in your app, choosing where to store them (like a notebook, a screen, or a remote server), so you can review what happened later.",
        "quiz": {
            "question": "What is a feature of Winston logger?",
            "options": [
                "It only logs to the console",
                "It supports multiple transports and log levels",
                "It is built into Node.js core",
                "It automatically fixes errors"
            ],
            "answer": "It supports multiple transports and log levels"
        }
    },
    {
        "id": "devops-deployment-pm2",
        "category": "DevOps & Deployment",
        "topic": "Monitoring & Observability",
        "subtopic": "PM2",
        "shortInsight": "PM2: Advanced process manager for Node.js!",
        "teaching": "PM2 is a production process manager for Node.js apps. It keeps apps alive (auto-restarts if they crash), allows running multiple instances, and provides monitoring features (CPU/memory usage). It also can load balance between instances.",
        "realLifeExample": "Think of PM2 like a supervisor overseeing workers: if one worker (Node process) falls asleep (crashes), PM2 wakes it up and can even duplicate tasks across multiple workers for efficiency.",
        "quiz": {
            "question": "What is one function of PM2?",
            "options": [
                "It packages Node apps into Docker images",
                "It monitors and restarts Node processes automatically",
                "It optimizes images in your web app",
                "It serves static files"
            ],
            "answer": "It monitors and restarts Node processes automatically"
        }
    },
    {
        "id": "devops-deployment-apm",
        "category": "DevOps & Deployment",
        "topic": "Monitoring & Observability",
        "subtopic": "APM",
        "shortInsight": "APM: Monitor your app's performance in real time!",
        "teaching": "APM stands for Application Performance Monitoring. Tools like New Relic, Datadog APM, or AppDynamics track metrics (response times, error rates, resource usage) and help you find bottlenecks in production.",
        "realLifeExample": "Think of APM like a health monitor for your app: it continuously checks vital signs (like speed of operations and errors) and alerts you if something is off.",
        "quiz": {
            "question": "What does APM typically provide?",
            "options": [
                "Detailed source code editor",
                "Performance metrics and tracing for live apps",
                "Static code analysis",
                "A way to minify JavaScript"
            ],
            "answer": "Performance metrics and tracing for live apps"
        }
    },
    {
        "id": "devops-advanced-interview-loadbalancing",
        "category": "DevOps & Deployment",
        "topic": "Advanced Interview Questions",
        "subtopic": "Load Balancing",
        "shortInsight": "DevOps Deep Dive: Node is single threaded, so how do you use 8 CPU cores?",
        "teaching": "Since a Node.js process runs on a single thread, deploying it raw on an 8-core server wastes 7 cores. A process manager (like PM2) or a Load Balancer (like Nginx) spins up 8 separate Node instances and routes traffic evenly among them to maximize hardware efficiency.",
        "realLifeExample": "Imagine a supermarket with 8 registers but only 1 cashier. PM2 hires 7 more cashiers and Nginx stands at the front, directing customers to whichever register is free.",
        "quiz": {
            "question": "What is the primary function of a reverse proxy like Nginx or a process manager like PM2 in a Node.js architecture?",
            "options": ["To compile JavaScript faster", "To distribute incoming network traffic across multiple Node.js processes", "To act as a secondary database cache", "To encrypt user passwords instantly"],
            "answer": "To distribute incoming network traffic across multiple Node.js processes"
        },
        "isInterviewQuestion": true
    }
]