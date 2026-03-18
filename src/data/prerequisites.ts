export const prerequisitesData = [
    {
        "id": "prerequisites-es6-syntax",
        "category": "Prerequisites",
        "topic": "JavaScript Fundamentals",
        "subtopic": "ES6+ Syntax",
        "shortInsight": "ES6+ Syntax: Unlock powerful new JavaScript!",
        "teaching": "ES6 (ECMAScript 2015 and later) introduced modern JavaScript syntax like arrow functions, classes, template literals, and destructuring. These features allow writing cleaner, more expressive code and can improve performance and maintainability compared to old-style syntax.",
        "realLifeExample": "Think of ES6 as upgrading from a basic toolbox to a power tool kit: you get smarter tools (like template strings and arrow functions) that make coding tasks faster and simpler.",
        "quiz": {
            "question": "Which of these is NOT a feature introduced in ES6?",
            "options": [
                "Arrow functions",
                "Template literals",
                "Classes",
                "Var declarations"
            ],
            "answer": "Var declarations"
        }
    },
    {
        "id": "prerequisites-variables-data-types-and-operators",
        "category": "Prerequisites",
        "topic": "JavaScript Fundamentals",
        "subtopic": "Variables, Data Types, and Operators",
        "shortInsight": "Variables and data types: the DNA of your program!",
        "teaching": "Variables store values (strings, numbers, booleans, objects, etc.) under a name. Operators (like +, -, ===) let you combine or compare these values. JavaScript is dynamically typed, so a variable's type can change, and operators behave differently based on the types of their operands.",
        "realLifeExample": "Imagine variables as labeled containers holding items (data). Operators are like actions you perform on these containers: you can combine, compare, or modify the items inside, just like mixing ingredients in a recipe based on their type.",
        "quiz": {
            "question": "Which of the following is a primitive data type in JavaScript?",
            "options": [
                "Array",
                "String",
                "Function",
                "Object"
            ],
            "answer": "String"
        }
    },
    {
        "id": "prerequisites-functions-and-scope",
        "category": "Prerequisites",
        "topic": "JavaScript Fundamentals",
        "subtopic": "Functions and Scope",
        "shortInsight": "Functions: Code's reusable building blocks with their own space!",
        "teaching": "A function is a block of code that can be called by name. Scope determines where variables are accessible: global (anywhere in your code) or local to a function. Each time a function runs, it has its own local scope, keeping inner variables separate from outer ones.",
        "realLifeExample": "Think of a function like a recipe: ingredients (variables) inside the recipe are only used within that recipe and don't affect other recipes. Each function has its own kitchen, so the same ingredient name in different kitchens won't get mixed up.",
        "quiz": {
            "question": "What is true about function scope in JavaScript?",
            "options": [
                "Variables declared inside a function are global",
                "Variables inside a function are local to that function",
                "Functions cannot have local variables",
                "Scope and closure are the same"
            ],
            "answer": "Variables inside a function are local to that function"
        }
    },
    {
        "id": "prerequisites-callbacks",
        "category": "Prerequisites",
        "topic": "JavaScript Fundamentals",
        "subtopic": "Callbacks",
        "shortInsight": "Callbacks: Schedule code to run later!",
        "teaching": "A callback is a function passed to another function to be executed after a task is done, especially for asynchronous operations. This lets JavaScript handle tasks like fetching data or reading files by calling your function at the right time, instead of blocking execution.",
        "realLifeExample": "Imagine calling a friend and asking them to text you back when they finish a task. The callback is like giving your friend instructions to notify you later — your code keeps running until the callback is triggered.",
        "quiz": {
            "question": "What is a callback in JavaScript?",
            "options": [
                "A function passed into another function to be called later",
                "A variable that stores a function name",
                "A loop that executes tasks sequentially",
                "A promise to do something in the future"
            ],
            "answer": "A function passed into another function to be called later"
        }
    },
    {
        "id": "prerequisites-closures",
        "category": "Prerequisites",
        "topic": "JavaScript Fundamentals",
        "subtopic": "Closures",
        "shortInsight": "Closures: Functions that remember their surroundings!",
        "teaching": "A closure happens when an inner function keeps access to variables from its outer function even after the outer function has finished running. The inner function retains a reference to those variables, allowing the data to persist.",
        "realLifeExample": "Think of a closure like a backpack: an inner function carries the outer function's variables inside its backpack. Even after the outer function is done, the inner function still has those items in its backpack.",
        "quiz": {
            "question": "What defines a closure in JavaScript?",
            "options": [
                "An inner function that has access to variables of an outer function",
                "A function without a name",
                "A global variable with local scope",
                "A method that immediately invokes itself"
            ],
            "answer": "An inner function that has access to variables of an outer function"
        }
    },
    {
        "id": "prerequisites-event-loop-basics",
        "category": "Prerequisites",
        "topic": "Asynchronous Programming",
        "subtopic": "Event Loop Basics",
        "shortInsight": "Event Loop: JavaScript's multitasking wizardry!",
        "teaching": "The event loop is Node.js's mechanism to handle asynchronous operations. It continuously checks a queue of events and executes callback functions when tasks complete, all while running on a single thread. This allows JavaScript to handle operations like reading files or network requests without stopping the main program.",
        "realLifeExample": "Imagine a waiter (the event loop) who takes orders (tasks) and continues serving customers without delay. When a task is done (like food ready), the waiter brings it to the right table (callback) while still handling other orders in the meantime.",
        "quiz": {
            "question": "Which statement about the JavaScript event loop is correct?",
            "options": [
                "It allows JavaScript to perform non-blocking operations on a single thread",
                "It uses multiple threads for each async operation",
                "It stops executing code until an async operation finishes",
                "It only handles synchronous code"
            ],
            "answer": "It allows JavaScript to perform non-blocking operations on a single thread"
        }
    },
    {
        "id": "prerequisites-promises",
        "category": "Prerequisites",
        "topic": "Asynchronous Programming",
        "subtopic": "Promises",
        "shortInsight": "Promises: Clean up async code with guaranteed results!",
        "teaching": "A Promise represents a future result of an asynchronous operation. It can be pending, resolved (fulfilled), or rejected. Instead of nesting callbacks, you attach .then() and .catch() handlers to promises to process results or handle errors when the async task completes.",
        "realLifeExample": "Think of a promise like ordering a package: you get a tracking number (the Promise), and it will eventually either arrive (fulfilled) or show a failed delivery (rejected). You can plan actions (like opening the package) for when it arrives.",
        "quiz": {
            "question": "What is the state of a Promise when the asynchronous task has completed successfully?",
            "options": [
                "Pending",
                "Fulfilled (Resolved)",
                "Rejected",
                "Cancelled"
            ],
            "answer": "Fulfilled (Resolved)"
        }
    },
    {
        "id": "prerequisites-async-await",
        "category": "Prerequisites",
        "topic": "Asynchronous Programming",
        "subtopic": "Async/Await",
        "shortInsight": "Async/Await: Write asynchronous code like it's synchronous!",
        "teaching": "async/await is syntax sugar over Promises in JavaScript. An async function returns a Promise. Inside it, await pauses execution until a Promise resolves, making asynchronous code read like sequential code. This improves readability and simplifies error handling.",
        "realLifeExample": "Imagine following a recipe: you write down each step and wait (await) for the cake to bake before moving on to the next step. Async/await lets you write your steps sequentially, even if some steps (like baking) take time behind the scenes.",
        "quiz": {
            "question": "What does the 'await' keyword do inside an async function?",
            "options": [
                "Pauses the function execution until a Promise resolves",
                "Creates a new Promise",
                "Runs the code in parallel threads",
                "Declares a function as asynchronous"
            ],
            "answer": "Pauses the function execution until a Promise resolves"
        }
    },
    {
        "id": "prerequisites-error-handling",
        "category": "Prerequisites",
        "topic": "Asynchronous Programming",
        "subtopic": "Error Handling",
        "shortInsight": "Error handling: Keeping your code safe and sound!",
        "teaching": "In Node.js, handle errors using try/catch blocks or .catch() on Promises. For async/await, wrap code in try/catch to catch errors. Proper error handling ensures your app doesn't crash and can respond appropriately when something goes wrong.",
        "realLifeExample": "Think of error handling like having a safety net: if a tightrope walker (your code) falls, a net (try/catch) catches them, allowing the show to continue without disaster.",
        "quiz": {
            "question": "How do you catch errors in an async function using async/await?",
            "options": [
                "Using a .catch() on the async function",
                "Wrapping the await calls in try/catch blocks",
                "Using throw inside a promise",
                "Async/await cannot catch errors"
            ],
            "answer": "Wrapping the await calls in try/catch blocks"
        }
    },
    {
        "id": "prerequisites-http-https-protocols",
        "category": "Prerequisites",
        "topic": "Basic Networking Concepts",
        "subtopic": "HTTP/HTTPS Protocols",
        "shortInsight": "HTTP vs HTTPS: The web's communication lanes!",
        "teaching": "HTTP is the basic protocol for transferring data over the web. HTTPS is the secure version, encrypting data via TLS/SSL for safety. Using HTTPS protects data in transit from eavesdropping or tampering by requiring encryption.",
        "realLifeExample": "Think of HTTP as sending a postcard through the mail (anyone can read it), while HTTPS is like sending a sealed, locked box with a private key — only the intended recipient can open and read it.",
        "quiz": {
            "question": "What is the key difference between HTTP and HTTPS?",
            "options": [
                "HTTPS is just faster than HTTP",
                "HTTPS encrypts data while HTTP does not",
                "HTTP uses port 443 by default",
                "HTTP is only for secure sites"
            ],
            "answer": "HTTPS encrypts data while HTTP does not"
        }
    },
    {
        "id": "prerequisites-dns",
        "category": "Prerequisites",
        "topic": "Basic Networking Concepts",
        "subtopic": "DNS",
        "shortInsight": "DNS: The Internet's phonebook!",
        "teaching": "DNS (Domain Name System) translates human-readable domain names (like example.com) into IP addresses that computers use to locate each other. When you enter a URL, DNS servers resolve it to the actual numeric IP address of the web server.",
        "realLifeExample": "Think of DNS as looking up a person's phone number by their name in a directory. You search for 'Alice', get her number, and then dial it. Similarly, DNS looks up 'example.com' and returns an IP address to connect to.",
        "quiz": {
            "question": "What is the primary purpose of DNS?",
            "options": [
                "To encrypt web traffic",
                "To resolve domain names to IP addresses",
                "To speed up a website",
                "To host DNS records only on the local computer"
            ],
            "answer": "To resolve domain names to IP addresses"
        }
    },
    {
        "id": "prerequisites-browsers-vs-servers",
        "category": "Prerequisites",
        "topic": "Basic Networking Concepts",
        "subtopic": "Browsers vs Servers",
        "shortInsight": "Browsers vs Servers: Who does what on the web?",
        "teaching": "A browser (client) requests web content and renders HTML/CSS/JS for the user. A server stores content and responds to browser requests over HTTP. The browser is the front-end interface, while the server is the backend provider of data and logic.",
        "realLifeExample": "Imagine a restaurant: the browser is the customer placing an order (HTTP request) from the menu (HTML), and the server is the kitchen preparing and sending out the meal (response).",
        "quiz": {
            "question": "Which of these is true about web browsers and servers?",
            "options": [
                "Browsers handle data storage, servers render HTML",
                "Browsers request content, servers respond with content",
                "Servers and browsers are the same thing",
                "Browsers can only make HTTP requests to local files"
            ],
            "answer": "Browsers request content, servers respond with content"
        }
    },
    {
        "id": "prerequisites-basic-terminal-commands",
        "category": "Prerequisites",
        "topic": "Command Line & Git",
        "subtopic": "Basic Terminal Commands",
        "shortInsight": "Terminal Commands: Your code's secret control panel!",
        "teaching": "Basic terminal commands let you navigate and manage files. For example, cd changes directories, ls lists files, mkdir makes directories, and rm deletes files. Mastering these lets you work efficiently without a graphical interface.",
        "realLifeExample": "Think of the terminal as using a map and tools to manage files by typing commands. It's like driving a car with steering and pedals (commands) instead of clicking around with a mouse.",
        "quiz": {
            "question": "Which command would you use to list the files in the current directory?",
            "options": [
                "ls",
                "cd",
                "mkdir",
                "rm"
            ],
            "answer": "ls"
        }
    },
    {
        "id": "prerequisites-git-version-control",
        "category": "Prerequisites",
        "topic": "Command Line & Git",
        "subtopic": "Git Version Control",
        "shortInsight": "Git: Time travel for your code!",
        "teaching": "Git is a distributed version control system that tracks changes in your code. You can commit snapshots of your project, branch to try new features, and merge changes. It lets multiple developers collaborate safely without losing history.",
        "realLifeExample": "Imagine writing a document and saving snapshots at each step. You can go back to any snapshot or merge different drafts. Git does this for code, so you never lose earlier work and can collaborate smoothly.",
        "quiz": {
            "question": "What does the 'git commit' command do?",
            "options": [
                "Downloads changes from a remote",
                "Creates a snapshot of your current changes",
                "Publishes your code to a live server",
                "Deletes the current branch"
            ],
            "answer": "Creates a snapshot of your current changes"
        }
    },
    {
        "id": "prerequisites-github-gitlab",
        "category": "Prerequisites",
        "topic": "Command Line & Git",
        "subtopic": "GitHub / GitLab",
        "shortInsight": "GitHub/GitLab: Cloud homes for your code!",
        "teaching": "GitHub and GitLab are platforms that host Git repositories online. They let you push your code to remote repositories, collaborate with others through pull/merge requests, and track issues. They also integrate tools for CI/CD and project management.",
        "realLifeExample": "Think of GitHub/GitLab as cloud storage lockers for your code that teams share. Anyone with access can update the code, suggest changes, and manage versions, like multiple chefs collaborating on the same recipe book.",
        "quiz": {
            "question": "What is a primary use of GitHub or GitLab?",
            "options": [
                "Running JavaScript code",
                "Hosting and collaborating on Git repositories",
                "Only for Continuous Integration",
                "Designing websites"
            ],
            "answer": "Hosting and collaborating on Git repositories"
        }
    },
    {
        "id": "prereq-interview-hoisting",
        "category": "Prerequisites",
        "topic": "Advanced Interview Questions",
        "subtopic": "Hoisting & TDZ",
        "shortInsight": "JavaScript 'hoists' variable declarations, but let and const have a Temporal Dead Zone!",
        "teaching": "Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. Variables declared with `let` and `const` are also hoisted, but they remain uninitialized in the 'Temporal Dead Zone' (TDZ) until their definition is evaluated. Accessing them before initialization throws a ReferenceError.",
        "realLifeExample": "It's like booking a flight (`hoisting`). With `var`, you get a standby ticket (`undefined`) instantly. With `let/const`, your name is on the list, but if you try to board before you actually pay (initialization), security stops you (ReferenceError).",
        "quiz": {
            "question": "What happens if you try to access a `let` variable before it is declared in the code?",
            "options": ["It returns undefined", "It returns null", "It throws a ReferenceError", "It creates a global variable"],
            "answer": "It throws a ReferenceError"
        },
        "isInterviewQuestion": true
    }
]