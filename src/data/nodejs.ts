export const nodejsData = [
    {
        "id": "nodejs-basics-what-is-node.js",
        "category": "Node.js Basics",
        "topic": "Introduction",
        "subtopic": "What is Node.js?",
        "shortInsight": "Node.js: JavaScript outside the browser!",
        "teaching": "Node.js is a runtime environment that lets you run JavaScript on the server (outside the browser). It uses Google's V8 engine and provides APIs for handling file systems, networking, and more, turning JS into a versatile backend language.",
        "realLifeExample": "If JavaScript in the browser is like cooking on a stovetop, Node.js is like giving that same recipe a professional kitchen to work with — you can use powerful tools (like file systems, networks) you can't use in a browser.",
        "quiz": {
            "question": "Which best describes Node.js?",
            "options": [
                "A database system",
                "A server-side JavaScript runtime",
                "A front-end UI framework",
                "A version of JavaScript for databases"
            ],
            "answer": "A server-side JavaScript runtime"
        }
    },
    {
        "id": "nodejs-basics-v8-javascript-engine",
        "category": "Node.js Basics",
        "topic": "Introduction",
        "subtopic": "V8 JavaScript Engine",
        "shortInsight": "V8: The high-speed engine powering Node.js!",
        "teaching": "V8 is Google's open-source JavaScript engine used by Chrome and Node.js. It compiles JavaScript directly to machine code, which makes code execution very fast. Node.js leverages V8 to run JavaScript on servers efficiently.",
        "realLifeExample": "Think of V8 like a high-performance car engine: it takes your code (fuel) and converts it into power (machine instructions) that make your Node.js app run fast.",
        "quiz": {
            "question": "What is V8 in the context of Node.js?",
            "options": [
                "A built-in Node.js module",
                "A JavaScript engine that compiles JS to machine code",
                "A database engine",
                "A CSS processor"
            ],
            "answer": "A JavaScript engine that compiles JS to machine code"
        }
    },
    {
        "id": "nodejs-basics-node.js-architecture",
        "category": "Node.js Basics",
        "topic": "Introduction",
        "subtopic": "Node.js Architecture",
        "shortInsight": "Node.js Architecture: Single-threaded, event-driven",
        "teaching": "Node.js uses a single-threaded event loop architecture for non-blocking I/O. This means one thread handles all requests by delegating heavy tasks (like file or network operations) to the system, then using callbacks/events when done. This design allows high concurrency with minimal threads.",
        "realLifeExample": "Imagine a restaurant kitchen with one chef (thread) who takes orders, sends them to be cooked (non-blocking tasks), and serves dishes when they\u2019re ready. The chef never sits idle waiting, making efficient use of time.",
        "quiz": {
            "question": "What best describes Node.js architecture?",
            "options": [
                "Multi-threaded, blocking I/O model",
                "Single-threaded, event-driven, non-blocking I/O model",
                "Browser-based, synchronous model",
                "Uses two threads for I/O and processing"
            ],
            "answer": "Single-threaded, event-driven, non-blocking I/O model"
        }
    },
    {
        "id": "nodejs-basics-commonjs-require",
        "category": "Node.js Basics",
        "topic": "Module Systems",
        "subtopic": "CommonJS (require)",
        "shortInsight": "CommonJS Modules: Node's original module format",
        "teaching": "CommonJS is Node's traditional module system. You use require() to load modules and module.exports (or exports) to expose functionality. This lets you split code into separate files and reuse them, all loaded synchronously at runtime.",
        "realLifeExample": "Think of CommonJS modules like packing tools into labeled boxes. require('box') is like opening the box of tools you need. module.exports is like deciding what tools to put in each box to share with others.",
        "quiz": {
            "question": "How do you load a module in CommonJS?",
            "options": [
                "import module from 'module'",
                "require('module')",
                "include('module')",
                "module.load('module')"
            ],
            "answer": "require('module')"
        }
    },
    {
        "id": "nodejs-basics-es-modules-import",
        "category": "Node.js Basics",
        "topic": "Module Systems",
        "subtopic": "ES Modules (import)",
        "shortInsight": "ES Modules: Modern JavaScript module system!",
        "teaching": "ES Modules use the import/export syntax to load and export functionality. Node.js supports ES modules natively in .mjs files or with type=module. They allow static analysis (the loader knows dependencies before running code) and work in browsers too.",
        "realLifeExample": "Think of ES Modules like using standard shipping containers: every container (module) has a manifest of exports at the dock. The system knows what's inside before unloading (static), making integration smoother.",
        "quiz": {
            "question": "Which syntax is used to import modules in ES Modules?",
            "options": [
                "require('module')",
                "import ... from 'module'",
                "module.load('module')",
                "export * from 'module'"
            ],
            "answer": "import ... from 'module'"
        }
    },
    {
        "id": "nodejs-basics-npm",
        "category": "Node.js Basics",
        "topic": "Package Managers",
        "subtopic": "npm",
        "shortInsight": "npm: The largest JavaScript package marketplace!",
        "teaching": "npm is Node's default package manager. It installs libraries from the npm registry, manages dependencies in package.json, and runs scripts. Developers use `npm install` to add packages and manage project dependencies easily.",
        "realLifeExample": "Think of npm like a supermarket for code libraries. You can browse shelves (search for packages) and take home whatever tools you need. package.json is your shopping list and the lock file is like the receipt.",
        "quiz": {
            "question": "Which command installs a package using npm?",
            "options": [
                "node install",
                "npm install",
                "npm get",
                "git install"
            ],
            "answer": "npm install"
        }
    },
    {
        "id": "nodejs-basics-yarn",
        "category": "Node.js Basics",
        "topic": "Package Managers",
        "subtopic": "yarn",
        "shortInsight": "Yarn: Fast, reliable JavaScript package manager!",
        "teaching": "Yarn is an alternative package manager to npm. It offers faster installs through caching and parallel downloads, and uses a lockfile to ensure consistent installations. Yarn and npm share the npm registry but with different commands and workflows.",
        "realLifeExample": "Think of Yarn as a speedy courier service for packages: it prefetches items, uses a strict manifest (lockfile) to ensure you get exactly the same versions every time, and delivers dependencies swiftly.",
        "quiz": {
            "question": "Which of these is a feature of Yarn compared to npm?",
            "options": [
                "It doesn't use a lockfile",
                "It installs packages sequentially only",
                "It parallelises downloads for speed",
                "It doesn't support private registries"
            ],
            "answer": "It parallelises downloads for speed"
        }
    },
    {
        "id": "nodejs-basics-package.json-lock-files",
        "category": "Node.js Basics",
        "topic": "Package Managers",
        "subtopic": "package.json & lock files",
        "shortInsight": "package.json & lock: Project manifest and exact receipts!",
        "teaching": "package.json is a file that lists your project's metadata and dependencies. A lock file (package-lock.json or yarn.lock) records the exact versions installed. This ensures that anyone installing the project gets the same dependency versions, avoiding 'works on my machine' problems.",
        "realLifeExample": "Imagine package.json as your project's recipe (ingredients and desired versions), and the lock file as a precise grocery receipt with the exact brand and version of each ingredient you bought, guaranteeing anyone cooking it will use the same supplies.",
        "quiz": {
            "question": "What does the package-lock.json file do?",
            "options": [
                "Specifies license information",
                "Lists the exact versions of installed dependencies",
                "Enables linking local modules",
                "Compiles JavaScript code"
            ],
            "answer": "Lists the exact versions of installed dependencies"
        }
    },
    {
        "id": "nodejs-basics-fs-file-system",
        "category": "Node.js Basics",
        "topic": "Core Modules",
        "subtopic": "fs (File System)",
        "shortInsight": "fs module: Read and write files with Node!",
        "teaching": "The 'fs' module in Node.js lets you interact with the file system. You can read, write, rename, and delete files or directories. It provides both synchronous and asynchronous methods to handle file operations.",
        "realLifeExample": "Think of 'fs' like a librarian fetching or updating books on shelves. If you want to read a file, it's like checking out a book. Writing a file is like adding notes to a book in the library.",
        "quiz": {
            "question": "Which 'fs' method would you use to write data to a file?",
            "options": [
                "fs.readFile",
                "fs.writeFile",
                "fs.deleteFile",
                "fs.openFile"
            ],
            "answer": "fs.writeFile"
        }
    },
    {
        "id": "nodejs-basics-path",
        "category": "Node.js Basics",
        "topic": "Core Modules",
        "subtopic": "path",
        "shortInsight": "path module: Work with file paths easily!",
        "teaching": "The 'path' module provides utilities for working with file and directory paths across different operating systems. You can join segments, parse file names, get extensions, and ensure correct path separators.",
        "realLifeExample": "Think of 'path' like a GPS for file locations. It builds the correct route (path string) from different parts of an address so you can reach the file reliably, whether on Windows or Unix.",
        "quiz": {
            "question": "Which 'path' method joins multiple path segments into one?",
            "options": [
                "path.join",
                "path.resolve",
                "path.parse",
                "path.basename"
            ],
            "answer": "path.join"
        }
    },
    {
        "id": "nodejs-basics-events",
        "category": "Node.js Basics",
        "topic": "Core Modules",
        "subtopic": "events",
        "shortInsight": "events module: Build your own events and listeners!",
        "teaching": "The 'events' module provides an EventEmitter class. You can create an emitter, emit named events, and have multiple listeners respond. This allows decoupling of code: one part triggers events and others handle them.",
        "realLifeExample": "Imagine a radio (EventEmitter): when a show (event) is broadcast (emitted), any number of listeners (like radios tuned in) can pick up and react to it.",
        "quiz": {
            "question": "Which class do you use to create an event emitter in Node.js?",
            "options": [
                "Event",
                "EventListener",
                "EventEmitter",
                "EventHandler"
            ],
            "answer": "EventEmitter"
        }
    },
    {
        "id": "nodejs-basics-http",
        "category": "Node.js Basics",
        "topic": "Core Modules",
        "subtopic": "http",
        "shortInsight": "http module: Create web servers from scratch!",
        "teaching": "The 'http' module lets you build basic HTTP servers. You can listen on a port, handle incoming requests, and send back responses. This is a low-level way to serve web content without additional frameworks.",
        "realLifeExample": "Think of the 'http' module as building your own mini restaurant: you open the door on a port, customers (requests) come in, and you serve them a response, all by hand.",
        "quiz": {
            "question": "Which method starts a basic HTTP server in Node.js?",
            "options": [
                "http.listen",
                "http.createServer",
                "http.open",
                "http.start"
            ],
            "answer": "http.createServer"
        }
    },
    {
        "id": "nodejs-basics-crypto",
        "category": "Node.js Basics",
        "topic": "Core Modules",
        "subtopic": "crypto",
        "shortInsight": "crypto module: Secure your data!",
        "teaching": "The 'crypto' module provides cryptographic functions like hashing, encryption, and HMACs. You can generate secure hashes (like bcrypt or SHA), create cipher streams, and handle encryption/decryption to secure data.",
        "realLifeExample": "Think of 'crypto' as a toolbox of locks and safes: you can lock up (encrypt) your secrets and unlock them, or shred (hash) them so no one can read the original data.",
        "quiz": {
            "question": "Which of the following is a valid use of Node.js 'crypto' module?",
            "options": [
                "Sending HTTP requests",
                "Hashing passwords securely",
                "Manipulating dates",
                "Rendering HTML"
            ],
            "answer": "Hashing passwords securely"
        }
    },
    {
        "id": "nodejs-basics-os",
        "category": "Node.js Basics",
        "topic": "Core Modules",
        "subtopic": "os",
        "shortInsight": "os module: Interact with the operating system!",
        "teaching": "The 'os' module provides information about the operating system and hardware, like CPU architecture, memory, and network interfaces. It's useful for making decisions based on environment or logging system details.",
        "realLifeExample": "Think of 'os' as a system report card: it tells you about your computer's specs, like how many CPUs it has or how much RAM is free.",
        "quiz": {
            "question": "Which method from the 'os' module returns information about CPUs?",
            "options": [
                "os.cpuInfo",
                "os.cpus",
                "os.getCPUs",
                "os.processorInfo"
            ],
            "answer": "os.cpus"
        }
    },
    {
        "id": "nodejs-basics-process",
        "category": "Node.js Basics",
        "topic": "Global Objects",
        "subtopic": "process",
        "shortInsight": "process object: Control your Node process!",
        "teaching": "The 'process' object is a global that provides information and control over the current Node.js process. You can access command-line arguments (process.argv), environment variables (process.env), exit the process (process.exit), and more.",
        "realLifeExample": "Think of 'process' like the control center of your running app. It’s like the self-aware chef who can check ingredients (env variables) or decide to close the restaurant (exit) when the night is over.",
        "quiz": {
            "question": "Where are environment variables accessible from in Node.js?",
            "options": [
                "process.args",
                "process.env",
                "process.vars",
                "process.system"
            ],
            "answer": "process.env"
        }
    },
    {
        "id": "nodejs-basics-buffer",
        "category": "Node.js Basics",
        "topic": "Global Objects",
        "subtopic": "Buffer",
        "shortInsight": "Buffer: Work with raw binary data!",
        "teaching": "Buffer is a global object in Node.js for handling binary data. It allows reading and writing bytes, which is necessary for processing files, network packets, or any data not in string form.",
        "realLifeExample": "Imagine Buffer as a bucket that holds water byte by byte. You pour binary data into it and manipulate it before it becomes a readable string or file data.",
        "quiz": {
            "question": "What does Buffer.from(data) do in Node.js?",
            "options": [
                "Creates a buffer of a given size",
                "Converts the buffer to a string",
                "Creates a new Buffer containing the given data",
                "Allocates CPU memory"
            ],
            "answer": "Creates a new Buffer containing the given data"
        }
    },
    {
        "id": "nodejs-basics-console",
        "category": "Node.js Basics",
        "topic": "Global Objects",
        "subtopic": "console",
        "shortInsight": "console: Your debugging megaphone!",
        "teaching": "The console object provides methods like console.log, console.error, console.warn, etc., for outputting information to the terminal. It's the simplest way to debug and display data while running a Node.js application.",
        "realLifeExample": "Think of console.log like writing notes on a whiteboard: you can see what’s happening inside the program. It’s your loudspeaker that yells information out as the code runs.",
        "quiz": {
            "question": "Which console method would you use to print an error message?",
            "options": [
                "console.log",
                "console.warn",
                "console.error",
                "console.info"
            ],
            "answer": "console.error"
        }
    },
    {
        "id": "nodejs-basics-__dirname",
        "category": "Node.js Basics",
        "topic": "Global Objects",
        "subtopic": "__dirname",
        "shortInsight": "__dirname: Know your script's directory!",
        "teaching": "__dirname is a global variable in Node.js that contains the absolute path of the directory where the current script is located. It's useful for constructing file paths relative to the script file.",
        "realLifeExample": "Think of __dirname as your current address in the filesystem: it tells you exactly where your script 'lives', so you can find files relative to it.",
        "quiz": {
            "question": "What does the __dirname variable represent in Node.js?",
            "options": [
                "The path of the current working directory",
                "The name of the current file",
                "The path of the current script's directory",
                "A temporary directory name"
            ],
            "answer": "The path of the current script's directory"
        }
    },
    {
        "id": "nodejs-advanced-interview-event-loop",
        "category": "Node.js Basics",
        "topic": "Advanced Interview Questions",
        "subtopic": "Event Loop",
        "shortInsight": "Event Loop Deep Dive: Will `process.nextTick` or `Promise` resolve first?",
        "teaching": "Both `process.nextTick` and `Promises` are microtasks, but they run in different queues. The `nextTickQueue` takes priority over the `microtaskQueue` (where Promises live). So, callbacks passed to `process.nextTick` will always run before Promise `.then()` callbacks in the same phase.",
        "realLifeExample": "Imagine a hospital waiting room. `process.nextTick` patients are emergency cases that cut the entire line. `Promise` patients have appointments and go next, while `setTimeout` patients wait in the general queue.",
        "quiz": {
            "question": "What is the order of execution for: process.nextTick, setTimeout, and Promise.resolve?",
            "options": [
                "process.nextTick -> Promise.resolve -> setTimeout",
                "setTimeout -> process.nextTick -> Promise.resolve",
                "Promise.resolve -> process.nextTick -> setTimeout",
                "process.nextTick -> setTimeout -> Promise.resolve"
            ],
            "answer": "process.nextTick -> Promise.resolve -> setTimeout"
        },
        "isInterviewQuestion": true
    }
]