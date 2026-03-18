export const advancedNodejsData = [
    {
        "id": "advanced-event-loop-phases",
        "category": "Advanced Node.js",
        "topic": "Asynchronous Control Flow",
        "subtopic": "Event Loop Phases",
        "shortInsight": "Event Loop Phases: The cycle behind Node's async magic!",
        "teaching": "Node.js event loop has phases (timers, pending callbacks, idle, poll, check, close). Each phase has a specific purpose (e.g., timers executes setTimeout callbacks). The loop cycles through these phases continuously to handle tasks and callbacks.",
        "realLifeExample": "Think of event loop phases like the sequence of steps in a factory line: each station (phase) handles a certain type of task. The loop is the conveyor belt moving tasks through each station in order.",
        "quiz": {
            "question": "Which of the following is a phase in Node.js event loop?",
            "options": [
                "Initialization phase",
                "Timing phase",
                "Idle, prepare, poll, check, close",
                "Render phase"
            ],
            "answer": "Idle, prepare, poll, check, close"
        }
    },
    {
        "id": "advanced-timers",
        "category": "Advanced Node.js",
        "topic": "Asynchronous Control Flow",
        "subtopic": "Timers",
        "shortInsight": "Timers: Schedule tasks for the future!",
        "teaching": "Timers are functions like setTimeout and setInterval that schedule code to run after a delay or repeatedly. These callbacks go through the event loop: setTimeout and setInterval callbacks are executed in the 'timers' phase.",
        "realLifeExample": "Imagine timers like setting an alarm clock: you set it to go off after a certain time (setTimeout) or at regular intervals (setInterval), and when it rings, a function runs.",
        "quiz": {
            "question": "Which function would you use to run code repeatedly every second?",
            "options": [
                "setTimeout(fn, 1000)",
                "setInterval(fn, 1000)",
                "nextTick(fn, 1000)",
                "schedule(fn, 1000)"
            ],
            "answer": "setInterval(fn, 1000)"
        }
    },
    {
        "id": "advanced-streams",
        "category": "Advanced Node.js",
        "topic": "Performance",
        "subtopic": "Streams",
        "shortInsight": "Streams: Process data piece by piece!",
        "teaching": "Streams in Node.js allow reading or writing data in chunks instead of all at once. They are useful for large data (like files or network data) because you can start processing as data arrives, without loading it fully into memory.",
        "realLifeExample": "Think of streams like drinking water through a straw: you sip (chunks of data) continuously, rather than trying to gulp down the whole glass at once.",
        "quiz": {
            "question": "What is an advantage of using streams in Node.js?",
            "options": [
                "They always load the entire data into memory",
                "They allow processing data chunk by chunk",
                "They slow down data processing",
                "They are only for text data"
            ],
            "answer": "They allow processing data chunk by chunk"
        }
    },
    {
        "id": "advanced-worker-threads",
        "category": "Advanced Node.js",
        "topic": "Performance",
        "subtopic": "Worker Threads",
        "shortInsight": "Worker Threads: Real multi-threading in Node!",
        "teaching": "Worker Threads allow Node.js to run JavaScript in parallel threads. You can spawn worker threads to handle CPU-intensive tasks without blocking the main thread. This is useful for tasks like image processing or heavy computations.",
        "realLifeExample": "Imagine hiring extra chefs in the kitchen (workers) for the heavy prep work, so the head chef (main thread) can keep taking new orders without delay.",
        "quiz": {
            "question": "What is a primary use case for Node.js Worker Threads?",
            "options": [
                "To handle web requests in parallel",
                "To perform CPU-intensive tasks in parallel",
                "To improve CSS styling",
                "To manage HTTP proxies"
            ],
            "answer": "To perform CPU-intensive tasks in parallel"
        }
    },
    {
        "id": "advanced-cluster-module",
        "category": "Advanced Node.js",
        "topic": "Performance",
        "subtopic": "Cluster Module",
        "shortInsight": "Cluster: Use all your CPU cores!",
        "teaching": "The Cluster module allows creating child processes (workers) that share the same server port. It's a way to achieve multi-process parallelism in Node.js, effectively distributing load across CPU cores to improve throughput.",
        "realLifeExample": "Think of the Cluster like having multiple restaurant branches (processes) behind the same facade: each branch (process) handles customers (requests) independently, using all available staff (CPU cores).",
        "quiz": {
            "question": "What does the Node.js cluster module allow you to do?",
            "options": [
                "Write files to multiple directories",
                "Run multiple processes to utilize multiple CPU cores",
                "Use Web Workers in the browser",
                "Merge two Node.js processes"
            ],
            "answer": "Run multiple processes to utilize multiple CPU cores"
        }
    },
    {
        "id": "advanced-garbage-collection",
        "category": "Advanced Node.js",
        "topic": "Memory Management",
        "subtopic": "Garbage Collection",
        "shortInsight": "Garbage Collection: Automatic memory cleanup!",
        "teaching": "Node.js (via V8) has automatic garbage collection. It periodically frees memory from objects that are no longer reachable. V8 uses generational garbage collection to optimize performance, cleaning young and old object generations separately.",
        "realLifeExample": "Imagine a librarian who automatically clears out unshelved books no one can reach. Once objects are no longer referenced, the garbage collector reclaims that memory.",
        "quiz": {
            "question": "When does V8 typically perform garbage collection?",
            "options": [
                "Only when the program ends",
                "When the memory is low or at set intervals",
                "Never, you must manually call it",
                "Continuously for every single operation"
            ],
            "answer": "When the memory is low or at set intervals"
        }
    },
    {
        "id": "advanced-memory-leaks",
        "category": "Advanced Node.js",
        "topic": "Memory Management",
        "subtopic": "Memory Leaks",
        "shortInsight": "Memory Leaks: Unreleased memory causing slowdowns!",
        "teaching": "A memory leak happens when a program unintentionally holds references to unused objects, preventing garbage collection. Over time, this causes increasing memory usage. Common causes include global variables or closed-over variables that are never released.",
        "realLifeExample": "Imagine leaving taps open (references) that keep filling a bathtub: if you forget about them, the water (memory usage) keeps rising until it overflows (app crashes).",
        "quiz": {
            "question": "Which scenario can cause a memory leak in JavaScript?",
            "options": [
                "Deleting unused objects",
                "Holding references in a closure that never gets released",
                "Using local variables inside functions",
                "Closing unneeded connections"
            ],
            "answer": "Holding references in a closure that never gets released"
        }
    },
    {
        "id": "adv-interview-memory-leaks",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Memory Leaks",
        "shortInsight": "Memory Leaks: Why did my Node server just crash with 'heap out of memory'?",
        "teaching": "JavaScript has an automatic Garbage Collector (GC) that frees memory. A memory leak occurs when an object is no longer needed by the app, but is still 'referenced' by an active variable (e.g., a massive array in a global scope or an un-cleared `setInterval`). The GC cannot delete referenced objects.",
        "realLifeExample": "A memory leak is a hoarding roommate. They keep buying new magazines (data) and placing them on the coffee table (global memory), but they never throw the old ones away. Eventually, there is no room left to live.",
        "quiz": {
            "question": "Which of the following scenarios is highly likely to cause a memory leak in Node.js?",
            "options": ["Failing to catch a Promise rejection", "Storing massive amounts of session data in a global cache without an expiration", "Using the `const` keyword extensively", "Writing an infinite loop that crashes the main thread instantly"],
            "answer": "Storing massive amounts of session data in a global cache without an expiration"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-event-loop-phases",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Event Loop Phases",
        "shortInsight": "Master the 6 phases of the Event Loop for non-blocking magic!",
        "teaching": "The Node.js event loop processes callbacks through six distinct phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Libuv handles I/O offloading while the single thread cycles through these phases repeatedly. Understanding the order prevents unexpected blocking behavior in production apps.",
        "realLifeExample": "Think of the event loop like a busy waiter cycling through restaurant tables: checking timers for food readiness, polling for new orders, and closing bills without ever stopping service!",
        "quiz": {
            "question": "How many phases does the Node.js event loop have?",
            "options": [
                "4",
                "5",
                "6",
                "7"
            ],
            "answer": "6"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-libuv-thread-pool",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Libuv Thread Pool",
        "shortInsight": "Libuv's 4-thread pool unlocks true parallelism for heavy ops!",
        "teaching": "Libuv maintains a default 4-thread pool for executing blocking operations like file I/O or DNS lookups. You can increase UV_THREADPOOL_SIZE up to 1024. This pool allows Node to remain non-blocking while offloading CPU-bound work.",
        "realLifeExample": "Think of the libuv thread pool like extra kitchen staff handling chopping while the head chef (main thread) keeps serving customers without delay!",
        "quiz": {
            "question": "What is the default size of libuv's thread pool in Node.js?",
            "options": [
                "2",
                "4",
                "8",
                "16"
            ],
            "answer": "4"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-process-nexttick-vs-setimmediate",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Process.nextTick vs setImmediate",
        "shortInsight": "nextTick runs before the next event loop tick; setImmediate after!",
        "teaching": "process.nextTick queues a callback in the microtask queue before the current event loop phase ends. setImmediate schedules in the check phase after poll. nextTick has higher priority and can starve the event loop if overused.",
        "realLifeExample": "Think of nextTick like a VIP interrupting the waiter right now, while setImmediate waits politely until the current round of orders is done!",
        "quiz": {
            "question": "Which runs first in the same event loop iteration: process.nextTick or setImmediate?",
            "options": [
                "setImmediate",
                "They run simultaneously",
                "process.nextTick",
                "Depends on the phase"
            ],
            "answer": "process.nextTick"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-worker-threads",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Worker Threads",
        "shortInsight": "Worker Threads bring true multi-threading to CPU-heavy tasks!",
        "teaching": "Worker threads allow running JavaScript in parallel threads with shared memory via ArrayBuffer or MessageChannel. Introduced in Node 10, they avoid blocking the main event loop for CPU-intensive work. Communication happens via postMessage and on('message').",
        "realLifeExample": "Think of worker threads like hiring extra chefs who cook complex dishes in separate kitchens while the main chef handles orders!",
        "quiz": {
            "question": "What is the primary use case for worker threads in Node.js?",
            "options": [
                "File I/O operations",
                "CPU-intensive calculations",
                "HTTP request handling",
                "Database connections"
            ],
            "answer": "CPU-intensive calculations"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-cluster-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Cluster Module",
        "shortInsight": "Cluster forks processes to utilize all CPU cores effortlessly!",
        "teaching": "The cluster module allows a master process to fork multiple worker processes sharing the same port. It uses round-robin load balancing by default. Workers communicate via IPC and can be restarted on crash for high availability.",
        "realLifeExample": "Think of clustering like opening multiple restaurant locations that share the same phone number but serve customers in parallel!",
        "quiz": {
            "question": "In Node.js cluster, who typically forks the worker processes?",
            "options": [
                "Each worker",
                "The master process",
                "Libuv",
                "The OS"
            ],
            "answer": "The master process"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-fork-vs-spawn",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Fork vs Spawn",
        "shortInsight": "Fork for Node scripts; spawn for any executable!",
        "teaching": "child_process.fork creates a new Node.js process with IPC channel for easy messaging. spawn launches any command without automatic IPC and is lighter. fork is ideal for Node modules while spawn suits external binaries.",
        "realLifeExample": "Think of fork like cloning your exact chef for Node tasks, while spawn hires any cook from the street for general kitchen work!",
        "quiz": {
            "question": "Which child_process method automatically establishes an IPC channel?",
            "options": [
                "spawn",
                "exec",
                "fork",
                "execFile"
            ],
            "answer": "fork"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-streams-types",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Streams Types",
        "shortInsight": "Four stream types power efficient data flow in Node.js!",
        "teaching": "Node streams come in readable, writable, duplex, and transform types. They process data in chunks to save memory. The stream module provides base classes while fs and http use them natively.",
        "realLifeExample": "Think of streams like a water pipeline: readable is the source tap, writable the sink, duplex both ways, and transform a filter in the middle!",
        "quiz": {
            "question": "Which stream type can both read and write data?",
            "options": [
                "Readable",
                "Writable",
                "Duplex",
                "Transform only"
            ],
            "answer": "Duplex"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-backpressure-in-streams",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Backpressure in Streams",
        "shortInsight": "Backpressure prevents overwhelming slow consumers with fast producers!",
        "teaching": "When a writable stream's buffer fills, it signals the readable stream to pause via the 'drain' event. This flow control avoids memory exhaustion. Modern pipelines handle it automatically.",
        "realLifeExample": "Think of backpressure like a traffic jam: the slow car ahead signals the fast cars behind to stop until space clears!",
        "quiz": {
            "question": "What event signals that a writable stream can accept more data?",
            "options": [
                "data",
                "end",
                "drain",
                "error"
            ],
            "answer": "drain"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-buffer-class",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Buffer Class",
        "shortInsight": "Buffers handle raw binary data outside V8 heap safely!",
        "teaching": "Buffers are fixed-size allocations for binary data, created with Buffer.alloc or from strings. They are mutable and used by fs, crypto, and http. Prefer Buffer.from for safety over deprecated new Buffer.",
        "realLifeExample": "Think of a buffer like a fixed-size lunchbox that holds raw ingredients before cooking, separate from the main kitchen counter!",
        "quiz": {
            "question": "Which method is recommended for creating a Buffer from a string in modern Node.js?",
            "options": [
                "new Buffer()",
                "Buffer.alloc",
                "Buffer.from",
                "Buffer.concat"
            ],
            "answer": "Buffer.from"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-readable-streams",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Readable Streams",
        "shortInsight": "Readable streams deliver data in chunks without loading everything at once!",
        "teaching": "Readable streams emit 'data' events in flowing mode or use read() in paused mode. They implement the _read method internally. fs.createReadStream and http responses are common examples.",
        "realLifeExample": "Think of a readable stream like sipping from a never-ending straw instead of gulping the whole bottle at once!",
        "quiz": {
            "question": "Which mode does a readable stream start in by default?",
            "options": [
                "Flowing",
                "Paused",
                "Both",
                "None"
            ],
            "answer": "Paused"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-writable-streams",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Writable Streams",
        "shortInsight": "Writable streams consume data efficiently in chunks!",
        "teaching": "Writable streams implement _write and emit 'drain' when ready for more data. fs.createWriteStream and http requests use them. End() signals completion and flushes buffers.",
        "realLifeExample": "Think of a writable stream like pouring water into a bucket that signals when it's full so you pause pouring!",
        "quiz": {
            "question": "What method signals the end of writing to a writable stream?",
            "options": [
                "write",
                "end",
                "close",
                "finish"
            ],
            "answer": "end"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-duplex-streams",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Duplex Streams",
        "shortInsight": "Duplex streams read and write simultaneously like sockets!",
        "teaching": "Duplex streams inherit from both readable and writable, implementing _read and _write. net.Socket and some crypto streams are duplex. They enable bidirectional communication.",
        "realLifeExample": "Think of duplex streams like a two-way phone line where you can talk and listen at the same time!",
        "quiz": {
            "question": "Which built-in module commonly provides duplex streams?",
            "options": [
                "fs",
                "http",
                "net",
                "crypto"
            ],
            "answer": "net"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-transform-streams",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Transform Streams",
        "shortInsight": "Transform streams modify data on the fly like compression filters!",
        "teaching": "Transform streams extend duplex and implement _transform to modify chunks. zlib.createGzip and custom parsers use them. They are perfect for data processing pipelines.",
        "realLifeExample": "Think of a transform stream like a coffee filter that changes beans into brewed coffee as they pass through!",
        "quiz": {
            "question": "What is the key method implemented in a transform stream?",
            "options": [
                "_write",
                "_read",
                "_transform",
                "_final"
            ],
            "answer": "_transform"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-pipeline-method",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Pipeline Method",
        "shortInsight": "Stream.pipeline handles errors and cleanup automatically!",
        "teaching": "stream.pipeline connects multiple streams and propagates errors while destroying them on failure. It replaces manual pipe chaining. Available since Node 10 for safer stream composition.",
        "realLifeExample": "Think of pipeline like a conveyor belt with automatic emergency stop if any section jams!",
        "quiz": {
            "question": "What advantage does stream.pipeline provide over manual .pipe()?",
            "options": [
                "Faster performance",
                "Automatic error handling and cleanup",
                "Only works with duplex streams",
                "Requires less code"
            ],
            "answer": "Automatic error handling and cleanup"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-async-await-tradeoffs",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Async Await Tradeoffs",
        "shortInsight": "Async/await simplifies code but can hide unhandled rejections!",
        "teaching": "Async/await makes promises readable but creates microtasks that can starve the event loop if not awaited properly. It improves over callbacks but requires try/catch for errors. Use it with Promise.all for concurrency.",
        "realLifeExample": "Think of async/await like writing a shopping list sequentially instead of juggling multiple carts at once!",
        "quiz": {
            "question": "What is a major pitfall of using async/await extensively?",
            "options": [
                "It blocks the event loop",
                "It can hide unhandled promise rejections",
                "It is slower than callbacks",
                "It requires more memory"
            ],
            "answer": "It can hide unhandled promise rejections"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-promise-all-vs-race",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Promise.all vs Promise.race",
        "shortInsight": "Promise.all waits for all; race returns the fastest winner!",
        "teaching": "Promise.all resolves when all promises succeed or rejects on first failure. Promise.race resolves or rejects with the first settled promise. Use all for parallel independent tasks and race for timeouts or fastest response.",
        "realLifeExample": "Think of Promise.all like waiting for all friends to arrive at dinner, while race is whoever shows up first gets the prize!",
        "quiz": {
            "question": "Which method rejects as soon as one promise fails?",
            "options": [
                "Promise.race",
                "Promise.all",
                "Promise.any",
                "Promise.allSettled"
            ],
            "answer": "Promise.all"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-callback-hell-solutions",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Callback Hell Solutions",
        "shortInsight": "Promises and async/await rescue you from callback pyramid of doom!",
        "teaching": "Callback hell arises from nested callbacks for sequential async ops. Solutions include promises with chaining, async/await, or libraries like async.js. Modern code avoids it entirely.",
        "realLifeExample": "Think of callback hell like stacking endless phone calls where each person waits for the previous to finish before talking!",
        "quiz": {
            "question": "What is the modern primary solution to callback hell?",
            "options": [
                "More callbacks",
                "Async/await or promises",
                "Global variables",
                "Synchronous code"
            ],
            "answer": "Async/await or promises"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-unhandled-rejections",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Unhandled Rejections",
        "shortInsight": "Unhandled promise rejections crash your app in future Node versions!",
        "teaching": "process.on('unhandledRejection') catches promises that reject without .catch. Node 15+ treats them as errors that terminate the process. Always handle or log them for production stability.",
        "realLifeExample": "Think of unhandled rejections like a forgotten phone call that keeps ringing until the battery dies and the whole system shuts down!",
        "quiz": {
            "question": "Which event listener catches unhandled promise rejections?",
            "options": [
                "uncaughtException",
                "unhandledRejection",
                "exit",
                "SIGTERM"
            ],
            "answer": "unhandledRejection"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-uncaught-exceptions",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Uncaught Exceptions",
        "shortInsight": "Uncaught exceptions can leave your app in inconsistent state!",
        "teaching": "process.on('uncaughtException') catches synchronous errors not handled by try/catch. Best practice is to log, notify, and exit gracefully rather than continue. Use domains or clusters for recovery.",
        "realLifeExample": "Think of an uncaught exception like a chef dropping a knife mid-cut; better to stop everything and clean up than keep cooking with risk!",
        "quiz": {
            "question": "What is the recommended action on uncaughtException in production?",
            "options": [
                "Ignore it",
                "Continue running",
                "Log and exit the process",
                "Restart immediately without logging"
            ],
            "answer": "Log and exit the process"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-graceful-shutdown",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Graceful Shutdown",
        "shortInsight": "Graceful shutdown ensures no data loss on SIGTERM!",
        "teaching": "Listen for SIGTERM and SIGINT, close servers, finish pending requests, drain connections, then exit. Use close events on servers and clear timeouts. Tools like PM2 or Kubernetes handle orchestration.",
        "realLifeExample": "Think of graceful shutdown like a restaurant closing: finish serving current tables, turn off lights, then lock the door instead of kicking everyone out mid-meal!",
        "quiz": {
            "question": "Which signal is typically sent for graceful shutdown in containers?",
            "options": [
                "SIGKILL",
                "SIGTERM",
                "SIGINT",
                "SIGHUP"
            ],
            "answer": "SIGTERM"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-memory-leaks-detection",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Memory Leaks Detection",
        "shortInsight": "Heap snapshots reveal memory leaks before they crash your app!",
        "teaching": "Use --inspect and Chrome DevTools or clinic.js to take heap snapshots. Look for growing detached DOM or closures retaining objects. Common causes: event listeners not removed or global caches without eviction.",
        "realLifeExample": "Think of memory leaks like a sink that never drains: slowly filling until it overflows and floods the kitchen!",
        "quiz": {
            "question": "What tool is commonly used to analyze Node.js heap snapshots?",
            "options": [
                "console.log",
                "Chrome DevTools",
                "npm ls",
                "fs module"
            ],
            "answer": "Chrome DevTools"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-v8-garbage-collection",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "V8 Garbage Collection",
        "shortInsight": "V8 GC keeps memory clean but can pause your app!",
        "teaching": "V8 uses generational GC with young and old spaces. Mark-and-sweep collects unreachable objects. Tune with --max-old-space-size and monitor with --trace-gc. Frequent full GC indicates leaks or high memory pressure.",
        "realLifeExample": "Think of V8 garbage collection like a janitor sweeping floors at night: necessary but stops work temporarily!",
        "quiz": {
            "question": "Which V8 flag increases old space size for memory tuning?",
            "options": [
                "--max-young-space-size",
                "--max-old-space-size",
                "--gc-interval",
                "--trace-gc"
            ],
            "answer": "--max-old-space-size"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-async-hooks",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Async Hooks",
        "shortInsight": "Async Hooks track async resources across the event loop!",
        "teaching": "async_hooks module provides createHook for init, before, after, and destroy callbacks. Useful for tracking context in async operations like request tracing. Performance cost makes it production-debug only.",
        "realLifeExample": "Think of async hooks like invisible threads tying every order to its table number across the entire restaurant service!",
        "quiz": {
            "question": "Which async_hooks callback fires when a resource is destroyed?",
            "options": [
                "init",
                "before",
                "after",
                "destroy"
            ],
            "answer": "destroy"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-event-emitter",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Event Emitter",
        "shortInsight": "Event Emitters power the entire Node.js ecosystem!",
        "teaching": "EventEmitter class allows objects to emit named events and register listeners with on/once. Core modules like fs and http inherit from it. Avoid memory leaks by removing listeners with removeListener.",
        "realLifeExample": "Think of an event emitter like a restaurant bell: ring once and all waiters (listeners) respond instantly!",
        "quiz": {
            "question": "What method registers a listener that fires only once?",
            "options": [
                "on",
                "emit",
                "once",
                "removeListener"
            ],
            "answer": "once"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-reactor-pattern",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Reactor Pattern",
        "shortInsight": "The reactor pattern makes Node.js event-driven and scalable!",
        "teaching": "The reactor pattern demultiplexes I/O events and dispatches to handlers via the event loop. Libuv implements it using epoll/kqueue. It enables handling thousands of connections with one thread.",
        "realLifeExample": "Think of the reactor pattern like a single dispatcher directing calls to different departments without creating new phone lines!",
        "quiz": {
            "question": "Which library implements the reactor pattern in Node.js?",
            "options": [
                "V8",
                "Libuv",
                "Express",
                "Cluster"
            ],
            "answer": "Libuv"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-non-blocking-i-o",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Non Blocking I O",
        "shortInsight": "Non-blocking I/O lets one thread handle thousands of requests!",
        "teaching": "Node uses libuv to delegate blocking operations to the thread pool or OS kernel. The event loop continues while waiting for completion callbacks. This model shines for I/O-heavy apps but not CPU-heavy ones.",
        "realLifeExample": "Think of non-blocking I/O like a waiter taking orders from many tables while the kitchen cooks, never waiting idly!",
        "quiz": {
            "question": "What makes Node.js suitable for I/O-intensive applications?",
            "options": [
                "Multi-threading",
                "Non-blocking I/O model",
                "Synchronous execution",
                "Built-in database"
            ],
            "answer": "Non-blocking I/O model"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-microtasks-queue",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Microtasks Queue",
        "shortInsight": "Microtasks run before the next macrotask for promise resolution!",
        "teaching": "The microtask queue holds promise callbacks and process.nextTick. It empties completely before the event loop continues to macrotasks. Overusing it can delay timers and I/O.",
        "realLifeExample": "Think of microtasks like urgent emails that get checked before resuming regular mail delivery!",
        "quiz": {
            "question": "Which queue processes promise .then callbacks?",
            "options": [
                "Macrotask queue",
                "Microtask queue",
                "Timer queue",
                "Poll queue"
            ],
            "answer": "Microtask queue"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-macrotasks-queue",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Macrotasks Queue",
        "shortInsight": "Macrotasks include setTimeout and I/O callbacks!",
        "teaching": "Macrotasks encompass timers, I/O callbacks, and check phase callbacks. The event loop processes one macrotask per iteration after microtasks. This queue drives most asynchronous behavior.",
        "realLifeExample": "Think of macrotasks like regular scheduled deliveries that happen after urgent emails are cleared!",
        "quiz": {
            "question": "Which operation goes into the macrotask queue?",
            "options": [
                "Promise.then",
                "process.nextTick",
                "setTimeout",
                "Microtask"
            ],
            "answer": "setTimeout"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-modules-commonjs-vs-esm",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Modules CommonJS vs ESM",
        "shortInsight": "CommonJS is synchronous; ESM is async and future-proof!",
        "teaching": "CommonJS uses require and module.exports synchronously. ESM uses import/export with top-level await in modern Node. ESM requires .mjs or package.json type:module and enables tree-shaking.",
        "realLifeExample": "Think of CommonJS like grabbing a tool instantly from your belt, while ESM is ordering from a catalog that arrives later!",
        "quiz": {
            "question": "Which module system supports top-level await natively?",
            "options": [
                "CommonJS",
                "ESM",
                "Both",
                "Neither"
            ],
            "answer": "ESM"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-require-resolve",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Require Resolve",
        "shortInsight": "require.resolve finds module paths without loading them!",
        "teaching": "require.resolve returns the full path to a module without executing it. Useful for checking existence or building paths dynamically. It follows the same lookup algorithm as require.",
        "realLifeExample": "Think of require.resolve like checking the map for a store location without actually walking inside!",
        "quiz": {
            "question": "What does require.resolve do?",
            "options": [
                "Loads and executes the module",
                "Returns the resolved filename",
                "Deletes the module cache",
                "Creates a new module"
            ],
            "answer": "Returns the resolved filename"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-global-objects",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Global Objects",
        "shortInsight": "Globals like process and __dirname are available everywhere!",
        "teaching": "Global objects include process, console, Buffer, and __dirname/__filename. They are not truly global like browser window but attached to the module scope in strict mode. Avoid polluting with custom globals.",
        "realLifeExample": "Think of global objects like the restaurant's master clock and address book available to every staff member instantly!",
        "quiz": {
            "question": "Which global gives access to command-line arguments?",
            "options": [
                "__dirname",
                "process.argv",
                "Buffer",
                "console"
            ],
            "answer": "process.argv"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-crypto-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Crypto Module",
        "shortInsight": "Crypto module secures your data with hashing and encryption!",
        "teaching": "The crypto module provides randomBytes, createHash, and createCipher for security. Use pbkdf2 or scrypt for passwords. Constant-time comparisons prevent timing attacks.",
        "realLifeExample": "Think of the crypto module like a vault with unbreakable locks and secret codes for every important document!",
        "quiz": {
            "question": "Which crypto function is recommended for password hashing?",
            "options": [
                "createHash('md5')",
                "randomBytes",
                "pbkdf2 or scrypt",
                "createHmac"
            ],
            "answer": "pbkdf2 or scrypt"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-tls-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "TLS Module",
        "shortInsight": "TLS module encrypts connections for secure HTTPS!",
        "teaching": "tls module creates secure servers and clients using certificates. http2 and https use it internally. Configure with options like key, cert, and secureProtocol for compliance.",
        "realLifeExample": "Think of TLS like sealing letters in tamper-proof envelopes delivered by armed guards!",
        "quiz": {
            "question": "What protocol does the tls module primarily implement?",
            "options": [
                "HTTP",
                "SSL/TLS",
                "WebSocket",
                "FTP"
            ],
            "answer": "SSL/TLS"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-net-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Net Module",
        "shortInsight": "Net module builds custom TCP servers and clients!",
        "teaching": "net.createServer creates TCP servers while net.connect makes clients. Handles raw sockets with events like data and end. Used for custom protocols or when HTTP overhead is unwanted.",
        "realLifeExample": "Think of the net module like building your own private phone lines between computers!",
        "quiz": {
            "question": "What transport does the net module use?",
            "options": [
                "UDP",
                "TCP",
                "HTTP",
                "WebSocket"
            ],
            "answer": "TCP"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-dns-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "DNS Module",
        "shortInsight": "DNS module resolves hostnames without OS caching issues!",
        "teaching": "dns.lookup uses OS resolver while dns.resolve uses pure Node implementation. Supports A, MX, and other record types. Use for custom resolution or avoiding system DNS cache.",
        "realLifeExample": "Think of the DNS module like a personal phone book that looks up numbers faster than calling directory assistance!",
        "quiz": {
            "question": "Which dns method bypasses the operating system resolver?",
            "options": [
                "dns.lookup",
                "dns.resolve",
                "dns.promises",
                "dns.getServers"
            ],
            "answer": "dns.resolve"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-os-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "OS Module",
        "shortInsight": "OS module reveals hardware and environment details!",
        "teaching": "os module provides cpus, freemem, totalmem, and platform info. Useful for adaptive clustering or resource monitoring. os.cpus() helps decide worker count.",
        "realLifeExample": "Think of the OS module like checking the restaurant's kitchen equipment inventory and staff count before opening!",
        "quiz": {
            "question": "What does os.cpus() return?",
            "options": [
                "Memory stats",
                "Array of CPU cores",
                "Network interfaces",
                "File paths"
            ],
            "answer": "Array of CPU cores"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-path-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Path Module",
        "shortInsight": "Path module handles cross-platform file paths safely!",
        "teaching": "path.join, path.resolve, and path.parse normalize paths across OS. path.sep gives the separator. Prevents errors from hard-coded slashes on Windows vs Unix.",
        "realLifeExample": "Think of the path module like a universal translator for addresses in different countries' formats!",
        "quiz": {
            "question": "Which path method joins segments safely?",
            "options": [
                "path.resolve",
                "path.join",
                "path.parse",
                "path.extname"
            ],
            "answer": "path.join"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-zlib-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Zlib Module",
        "shortInsight": "Zlib compresses data to save bandwidth and storage!",
        "teaching": "zlib.createGzip and createGunzip provide streaming compression. Used in http compression middleware. Levels range from fastest to best compression.",
        "realLifeExample": "Think of zlib like a vacuum sealer shrinking big packages before shipping to save space!",
        "quiz": {
            "question": "What does zlib.createGzip do?",
            "options": [
                "Decompresses data",
                "Compresses data with gzip",
                "Encrypts data",
                "Hashes data"
            ],
            "answer": "Compresses data with gzip"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-util-module",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Util Module",
        "shortInsight": "Util module offers handy debugging and formatting tools!",
        "teaching": "util.inspect pretty-prints objects, util.promisify converts callbacks to promises, and util.format works like printf. Essential for logging and debugging complex structures.",
        "realLifeExample": "Think of util like a Swiss army knife with magnifying glass and formatters for every debugging need!",
        "quiz": {
            "question": "Which util function converts callback APIs to promises?",
            "options": [
                "util.inspect",
                "util.format",
                "util.promisify",
                "util.callbackify"
            ],
            "answer": "util.promisify"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-jwt-authentication",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "JWT Authentication",
        "shortInsight": "JWT provides stateless token-based auth across services!",
        "teaching": "jsonwebtoken signs and verifies tokens with HS256 or RS256. Store claims in payload and set expiration. Use middleware to validate on protected routes and refresh tokens for security.",
        "realLifeExample": "Think of JWT like a stamped concert ticket that proves entry without calling the box office every time!",
        "quiz": {
            "question": "What algorithm is commonly used for signing JWTs?",
            "options": [
                "MD5",
                "HS256",
                "SHA1",
                "Base64"
            ],
            "answer": "HS256"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-passport-strategies",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Passport Strategies",
        "shortInsight": "Passport strategies handle multiple auth methods elegantly!",
        "teaching": "Passport.js uses strategies like Local, JWT, OAuth2. Each strategy has its own verify callback. Serialize and deserialize users for session support or use stateless JWT.",
        "realLifeExample": "Think of passport strategies like different entrance doors to the same club, each with its own bouncer checking ID differently!",
        "quiz": {
            "question": "What is the purpose of Passport.js strategies?",
            "options": [
                "Database connections",
                "Authentication methods",
                "Routing",
                "Caching"
            ],
            "answer": "Authentication methods"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-oauth-implementation",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "OAuth Implementation",
        "shortInsight": "OAuth lets users log in with Google without sharing passwords!",
        "teaching": "OAuth2 flow involves redirect, authorization code, and token exchange. Use passport-oauth2 or openid-client. Store tokens securely and handle refresh tokens for long-lived sessions.",
        "realLifeExample": "Think of OAuth like a VIP pass from another club letting you enter without showing your own ID!",
        "quiz": {
            "question": "What is exchanged for an access token in OAuth2?",
            "options": [
                "Password",
                "Authorization code",
                "JWT",
                "Session ID"
            ],
            "answer": "Authorization code"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-rate-limiting",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Rate Limiting",
        "shortInsight": "Rate limiting protects APIs from abuse and DDoS!",
        "teaching": "express-rate-limit or rate-limiter-flexible tracks requests by IP or token. Use token bucket or leaky bucket algorithms. Store state in Redis for distributed apps.",
        "realLifeExample": "Think of rate limiting like a bouncer counting entries per minute to prevent overcrowding the club!",
        "quiz": {
            "question": "Where is rate limit state typically stored in production?",
            "options": [
                "Memory only",
                "Redis or database",
                "Filesystem",
                "Cookies"
            ],
            "answer": "Redis or database"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-cors-handling",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "CORS Handling",
        "shortInsight": "CORS middleware controls cross-origin requests securely!",
        "teaching": "cors package sets Access-Control-Allow-Origin and methods. Use credentials for cookies or Authorization headers. Preflight OPTIONS requests must be handled for complex methods.",
        "realLifeExample": "Think of CORS like a security guard checking passports before letting visitors from other countries enter!",
        "quiz": {
            "question": "What HTTP method is used for CORS preflight checks?",
            "options": [
                "GET",
                "POST",
                "OPTIONS",
                "PUT"
            ],
            "answer": "OPTIONS"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-helmet-security",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Helmet Security",
        "shortInsight": "Helmet sets secure HTTP headers automatically!",
        "teaching": "helmet middleware adds X-Frame-Options, Strict-Transport-Security, and Content-Security-Policy. Configure individually to avoid breaking features. Essential for production Express apps.",
        "realLifeExample": "Think of Helmet like putting on a full set of armor and helmet before stepping onto the battlefield!",
        "quiz": {
            "question": "What does Helmet primarily protect against?",
            "options": [
                "Database injections",
                "Clickjacking and XSS via headers",
                "File uploads",
                "Rate limits"
            ],
            "answer": "Clickjacking and XSS via headers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-body-parser",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Body Parser",
        "shortInsight": "Body parser safely parses JSON and urlencoded payloads!",
        "teaching": "express.json and express.urlencoded limit size to prevent DoS. Set extended:true for complex objects. Deprecated body-parser package is now built-in.",
        "realLifeExample": "Think of body parser like a mail sorter that opens and reads incoming packages up to a safe weight limit!",
        "quiz": {
            "question": "What is the default size limit for express.json()?",
            "options": [
                "1kb",
                "100kb",
                "1mb",
                "10mb"
            ],
            "answer": "100kb"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-multer-file-uploads",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Multer File Uploads",
        "shortInsight": "Multer handles multipart file uploads with storage options!",
        "teaching": "multer parses multipart/form-data and stores in disk or memory. Use limits for size and fileFilter for validation. Combine with sharp for image resizing.",
        "realLifeExample": "Think of Multer like a secure parcel reception desk that checks and stores incoming packages!",
        "quiz": {
            "question": "What field in Multer config limits upload size?",
            "options": [
                "fileFilter",
                "limits",
                "storage",
                "dest"
            ],
            "answer": "limits"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-idempotency-in-apis",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Idempotency in APIs",
        "shortInsight": "Idempotency ensures retries don't duplicate actions!",
        "teaching": "Use Idempotency-Key header and store processed keys in Redis with TTL. Return same response for duplicate keys. Essential for payments and order creation.",
        "realLifeExample": "Think of idempotency like a receipt scanner: scanning the same ticket twice still lets you in only once!",
        "quiz": {
            "question": "What header is commonly used for idempotency keys?",
            "options": [
                "Authorization",
                "Idempotency-Key",
                "Content-Type",
                "X-Request-ID"
            ],
            "answer": "Idempotency-Key"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-api-versioning",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "API Versioning",
        "shortInsight": "API versioning prevents breaking changes for clients!",
        "teaching": "Version via URL (/v1/users), header (Accept: application/vnd.api.v1+json), or query param. Use express router per version. Deprecate old versions gracefully.",
        "realLifeExample": "Think of API versioning like car model years: newer models don't force old owners to upgrade instantly!",
        "quiz": {
            "question": "Which versioning method uses URL paths?",
            "options": [
                "Header-based",
                "Query param",
                "URL path (/v1/)",
                "Content negotiation"
            ],
            "answer": "URL path (/v1/)"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-pagination-strategies",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Pagination Strategies",
        "shortInsight": "Cursor-based pagination scales better than offset for large datasets!",
        "teaching": "Offset pagination uses LIMIT/OFFSET but skips records on large pages. Cursor uses unique IDs or timestamps for next page. Mongoose and Sequelize support both.",
        "realLifeExample": "Think of cursor pagination like reading a book with a bookmark instead of counting pages from the start every time!",
        "quiz": {
            "question": "Which pagination method performs better at scale?",
            "options": [
                "Offset-based",
                "Cursor-based",
                "Page number",
                "All records"
            ],
            "answer": "Cursor-based"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-caching-with-redis",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Caching with Redis",
        "shortInsight": "Redis caching dramatically speeds up repeated database queries!",
        "teaching": "Use ioredis or redis client with setex for TTL. Cache JSON-serialized data. Implement cache-aside pattern with invalidation on writes. Monitor hit/miss ratios.",
        "realLifeExample": "Think of Redis caching like keeping popular menu items pre-cooked and ready instead of making each order from scratch!",
        "quiz": {
            "question": "What pattern uses cache first then falls back to DB?",
            "options": [
                "Cache-through",
                "Cache-aside",
                "Write-through",
                "Write-behind"
            ],
            "answer": "Cache-aside"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-message-queues-rabbitmq",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Message Queues RabbitMQ",
        "shortInsight": "RabbitMQ decouples services for reliable async processing!",
        "teaching": "amqplib connects to RabbitMQ for publish/subscribe or work queues. Use acknowledgments for at-least-once delivery. Dead-letter queues handle failures. Perfect for background jobs.",
        "realLifeExample": "Think of RabbitMQ like a restaurant ticket system passing orders to the kitchen without the waiter waiting!",
        "quiz": {
            "question": "What delivery guarantee does RabbitMQ provide with acknowledgments?",
            "options": [
                "At-most-once",
                "At-least-once",
                "Exactly-once",
                "None"
            ],
            "answer": "At-least-once"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-bullmq-queues",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "BullMQ Queues",
        "shortInsight": "BullMQ adds retries, delays, and priorities on Redis!",
        "teaching": "BullMQ uses Redis for persistent job queues with automatic retries and cron support. Workers process jobs with concurrency control. Dashboard provides monitoring.",
        "realLifeExample": "Think of BullMQ like an advanced waiter ticket system with priority seating and automatic retry for kitchen delays!",
        "quiz": {
            "question": "What backend does BullMQ use for storage?",
            "options": [
                "PostgreSQL",
                "Redis",
                "MongoDB",
                "Filesystem"
            ],
            "answer": "Redis"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-microservices-architecture",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Microservices Architecture",
        "shortInsight": "Microservices let teams scale and deploy independently!",
        "teaching": "Break monolith into small services communicating via REST, gRPC, or queues. Use API Gateway for routing and authentication. Node.js excels due to its lightweight nature.",
        "realLifeExample": "Think of microservices like a food court with separate kitchens for pizza, burgers, and sushi each managed independently!",
        "quiz": {
            "question": "What is a common communication method between microservices?",
            "options": [
                "Shared database",
                "Message queues or gRPC",
                "Direct function calls",
                "Global variables"
            ],
            "answer": "Message queues or gRPC"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-serverless-with-node",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Serverless with Node",
        "shortInsight": "Serverless scales to zero and charges per execution!",
        "teaching": "AWS Lambda, Vercel, or Cloud Functions run Node code on demand. Cold starts are mitigated with provisioned concurrency. Use middy for middleware and layers for dependencies.",
        "realLifeExample": "Think of serverless like vending machines that only turn on when someone inserts a coin!",
        "quiz": {
            "question": "What is the main advantage of serverless architecture?",
            "options": [
                "Always running servers",
                "Pay only for execution time",
                "Multi-threading",
                "Shared state"
            ],
            "answer": "Pay only for execution time"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-docker-deployment",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Docker Deployment",
        "shortInsight": "Docker containers make Node apps portable and consistent!",
        "teaching": "Use multi-stage Dockerfile with node:alpine for small images. .dockerignore excludes node_modules. Run as non-root user and expose only necessary ports.",
        "realLifeExample": "Think of Docker like packing your entire kitchen into a shipping container that works anywhere in the world!",
        "quiz": {
            "question": "What base image is recommended for lightweight Node Dockerfiles?",
            "options": [
                "node:latest",
                "node:alpine",
                "ubuntu",
                "debian"
            ],
            "answer": "node:alpine"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-pm2-clustering",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "PM2 Clustering",
        "shortInsight": "PM2 provides zero-downtime reload and process management!",
        "teaching": "pm2 start with --instances max uses cluster mode. Ecosystem file configures logs, restarts, and watches. pm2 reload achieves zero-downtime updates.",
        "realLifeExample": "Think of PM2 like an automated restaurant manager that restarts chefs instantly without closing the doors!",
        "quiz": {
            "question": "What PM2 command enables zero-downtime reload?",
            "options": [
                "pm2 restart",
                "pm2 reload",
                "pm2 stop",
                "pm2 start"
            ],
            "answer": "pm2 reload"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-zero-downtime-deployment",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Zero Downtime Deployment",
        "shortInsight": "Zero-downtime keeps your API alive during updates!",
        "teaching": "Use PM2 reload, Kubernetes rolling updates, or blue-green deployment. Health checks ensure new instances are ready before routing traffic. Drain old connections gracefully.",
        "realLifeExample": "Think of zero-downtime like changing tires on a moving car without stopping the journey!",
        "quiz": {
            "question": "What deployment strategy uses two identical environments?",
            "options": [
                "Rolling update",
                "Blue-green deployment",
                "Canary release",
                "All at once"
            ],
            "answer": "Blue-green deployment"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-ci-cd-pipeline",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "CI CD Pipeline",
        "shortInsight": "CI/CD automates testing and deployment for faster releases!",
        "teaching": "GitHub Actions or Jenkins runs lint, test, build, and deploy stages. Use Docker images for consistency. Secrets management and canary deployments reduce risk.",
        "realLifeExample": "Think of CI/CD like an automated assembly line that tests and ships new menu items daily without manual effort!",
        "quiz": {
            "question": "What is the purpose of the CI stage?",
            "options": [
                "Deploy to production",
                "Run tests and build",
                "Monitor logs",
                "Scale servers"
            ],
            "answer": "Run tests and build"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-performance-profiling",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Performance Profiling",
        "shortInsight": "Clinic.js and 0x reveal bottlenecks in your Node app!",
        "teaching": "node --prof or clinic flame generates CPU profiles. Heap snapshots find leaks. Use --cpu-prof for easy analysis. Focus on hot functions and I/O waits.",
        "realLifeExample": "Think of profiling like a fitness tracker showing exactly which exercise burns the most calories in your kitchen workflow!",
        "quiz": {
            "question": "Which tool provides flame graphs for Node.js?",
            "options": [
                "console.time",
                "Clinic.js",
                "Jest",
                "PM2"
            ],
            "answer": "Clinic.js"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-heap-snapshots",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Heap Snapshots",
        "shortInsight": "Heap snapshots pinpoint exact memory hogs!",
        "teaching": "Take snapshots with --inspect and Chrome DevTools. Compare before/after to find retained objects. Look for closures, event listeners, and large arrays.",
        "realLifeExample": "Think of heap snapshots like X-rays revealing exactly what's clogging the pipes in your system!",
        "quiz": {
            "question": "What Chrome tool analyzes Node heap snapshots?",
            "options": [
                "Console",
                "Memory tab",
                "Network tab",
                "Sources"
            ],
            "answer": "Memory tab"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-cpu-intensive-tasks",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "CPU Intensive Tasks",
        "shortInsight": "Offload CPU work to workers or child processes!",
        "teaching": "Avoid blocking the event loop with worker threads or child_process for heavy computation. Use worker-farm or piscina for pooling. Monitor with clinic cpu.",
        "realLifeExample": "Think of CPU tasks like heavy chopping: assign extra sous-chefs so the main chef doesn't stop serving!",
        "quiz": {
            "question": "Where should CPU-heavy work be offloaded in Node.js?",
            "options": [
                "Main thread",
                "Worker threads or child processes",
                "Database",
                "Frontend"
            ],
            "answer": "Worker threads or child processes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-opentelemetry-monitoring",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "OpenTelemetry Monitoring",
        "shortInsight": "OpenTelemetry standardizes tracing across languages!",
        "teaching": "opentelemetry-node instruments HTTP, DB calls, and custom spans. Export to Jaeger or Prometheus. Correlates requests end-to-end in microservices.",
        "realLifeExample": "Think of OpenTelemetry like GPS trackers on every order showing the full journey from kitchen to table!",
        "quiz": {
            "question": "What does OpenTelemetry primarily provide?",
            "options": [
                "Logging only",
                "Distributed tracing and metrics",
                "Security scanning",
                "Database ORM"
            ],
            "answer": "Distributed tracing and metrics"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-winston-logging",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Winston Logging",
        "shortInsight": "Winston offers flexible multi-transport structured logging!",
        "teaching": "winston.createLogger with dailyRotateFile and console transports. Use JSON format for parsing. Add correlation IDs for tracing across services.",
        "realLifeExample": "Think of Winston like a detailed restaurant logbook with timestamps, waiter names, and order notes for every table!",
        "quiz": {
            "question": "What format is recommended for production Winston logs?",
            "options": [
                "Plain text",
                "JSON",
                "CSV",
                "XML"
            ],
            "answer": "JSON"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-correlation-ids",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Correlation IDs",
        "shortInsight": "Correlation IDs trace requests across microservices!",
        "teaching": "Generate UUID on entry and propagate via headers. Log with every request and include in OpenTelemetry spans. Tools like Winston and Pino support it natively.",
        "realLifeExample": "Think of correlation IDs like table numbers on every order slip across multiple kitchens!",
        "quiz": {
            "question": "How are correlation IDs typically passed between services?",
            "options": [
                "Cookies",
                "HTTP headers",
                "Database rows",
                "Environment variables"
            ],
            "answer": "HTTP headers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-circuit-breaker-pattern",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Circuit Breaker Pattern",
        "shortInsight": "Circuit breakers prevent cascading failures in distributed systems!",
        "teaching": "opossum or hystrix-js implements open/half-open/closed states. Track failures and open circuit after threshold. Fallbacks return default responses.",
        "realLifeExample": "Think of a circuit breaker like a fuse that cuts power before the whole house burns down from one faulty appliance!",
        "quiz": {
            "question": "What state allows testing if the service recovered?",
            "options": [
                "Closed",
                "Open",
                "Half-open",
                "Locked"
            ],
            "answer": "Half-open"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-retry-mechanisms",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Retry Mechanisms",
        "shortInsight": "Retries with exponential backoff handle transient failures gracefully!",
        "teaching": "Use retry or p-retry libraries with jitter. Limit attempts and use circuit breakers together. Log retries for monitoring.",
        "realLifeExample": "Think of retries like politely asking a busy waiter multiple times with increasing patience between attempts!",
        "quiz": {
            "question": "What backoff strategy is recommended to avoid thundering herd?",
            "options": [
                "Fixed delay",
                "Exponential with jitter",
                "Immediate retry",
                "Linear backoff"
            ],
            "answer": "Exponential with jitter"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-exponential-backoff",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Exponential Backoff",
        "shortInsight": "Exponential backoff prevents overwhelming failing services!",
        "teaching": "Increase delay exponentially with random jitter: 2^attempt * base + random. Libraries like retry implement it. Combine with max attempts.",
        "realLifeExample": "Think of exponential backoff like waiting longer each time you knock on a busy door so you don't annoy the occupants!",
        "quiz": {
            "question": "What is added to exponential backoff to avoid synchronized retries?",
            "options": [
                "Fixed delay",
                "Jitter (randomness)",
                "Max attempts",
                "Circuit breaker"
            ],
            "answer": "Jitter (randomness)"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-https-configuration",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "HTTPS Configuration",
        "shortInsight": "HTTPS configuration secures your entire application!",
        "teaching": "Use https.createServer with key and cert files or Let's Encrypt. Set secure options like minVersion TLS 1.2. Redirect HTTP to HTTPS with middleware.",
        "realLifeExample": "Think of HTTPS like upgrading from postcard to locked envelope for every message!",
        "quiz": {
            "question": "What minimum TLS version is recommended in production?",
            "options": [
                "TLS 1.0",
                "TLS 1.2",
                "SSL 3.0",
                "TLS 1.3 only"
            ],
            "answer": "TLS 1.2"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-ssl-tls-setup",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "SSL TLS Setup",
        "shortInsight": "SSL/TLS setup with certbot enables free automatic certificates!",
        "teaching": "certbot or acme provides Let's Encrypt certs. Renew automatically. Use http-01 or dns-01 challenges. Node reads cert and key for https server.",
        "realLifeExample": "Think of SSL/TLS setup like getting a free official stamp for your business mail from the post office!",
        "quiz": {
            "question": "Which free service provides TLS certificates?",
            "options": [
                "OpenSSL",
                "Let's Encrypt",
                "AWS ACM",
                "All of them"
            ],
            "answer": "Let's Encrypt"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-environment-variables",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Environment Variables",
        "shortInsight": "Environment variables keep secrets out of code!",
        "teaching": "dotenv loads .env files in development. Use process.env for config. Never commit secrets. Validate with joi or envalid at startup.",
        "realLifeExample": "Think of environment variables like secret handshakes whispered only to trusted staff!",
        "quiz": {
            "question": "Which package loads .env files?",
            "options": [
                "config",
                "dotenv",
                "winston",
                "helmet"
            ],
            "answer": "dotenv"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-node-env-usage",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "NODE ENV Usage",
        "shortInsight": "NODE_ENV=production enables optimizations and disables dev tools!",
        "teaching": "Set NODE_ENV=production to skip debug middleware and enable caching. Express and many packages check it. Use cross-env for consistent setting across platforms.",
        "realLifeExample": "Think of NODE_ENV like flipping the restaurant sign from 'Closed for training' to 'Open for business' mode!",
        "quiz": {
            "question": "What NODE_ENV value should be used in production?",
            "options": [
                "development",
                "test",
                "production",
                "staging"
            ],
            "answer": "production"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-typescript-in-node",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "TypeScript in Node",
        "shortInsight": "TypeScript adds type safety and better tooling to Node projects!",
        "teaching": "Use ts-node for development and tsc for building to JS. tsconfig.json configures paths and strictness. @types packages provide definitions for Node modules.",
        "realLifeExample": "Think of TypeScript like adding labeled ingredient containers so chefs never mix up salt and sugar!",
        "quiz": {
            "question": "What command compiles TypeScript to JavaScript?",
            "options": [
                "ts-node",
                "tsc",
                "nodemon",
                "pm2"
            ],
            "answer": "tsc"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-graphql-resolvers",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "GraphQL Resolvers",
        "shortInsight": "GraphQL resolvers fetch exactly the data clients request!",
        "teaching": "Apollo Server defines schema and resolvers. Use DataLoader for batching N+1 queries. Context passes request data like user.",
        "realLifeExample": "Think of GraphQL resolvers like custom chefs preparing exactly the dish ingredients a customer ordered!",
        "quiz": {
            "question": "What problem does DataLoader solve in GraphQL?",
            "options": [
                "Authentication",
                "N+1 query problem",
                "Caching",
                "Rate limiting"
            ],
            "answer": "N+1 query problem"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-apollo-server",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Apollo Server",
        "shortInsight": "Apollo Server powers production-ready GraphQL APIs!",
        "teaching": "ApolloServer integrates with Express or standalone. Built-in playground, subscriptions, and federation. Plugins add tracing and validation.",
        "realLifeExample": "Think of Apollo Server like a full-service restaurant menu system that customizes every order perfectly!",
        "quiz": {
            "question": "Which feature does Apollo Server provide out of the box?",
            "options": [
                "Only REST endpoints",
                "GraphQL playground and federation",
                "Database only",
                "File uploads"
            ],
            "answer": "GraphQL playground and federation"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-websockets-socket-io",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "WebSockets Socket.io",
        "shortInsight": "Socket.io provides real-time bidirectional communication with fallbacks!",
        "teaching": "Socket.io handles rooms, namespaces, and auto-reconnect. Engine.io provides the transport. Use Redis adapter for scaling across servers.",
        "realLifeExample": "Think of Socket.io like instant walkie-talkies between every customer and the kitchen!",
        "quiz": {
            "question": "What adapter enables Socket.io across multiple servers?",
            "options": [
                "Memory adapter",
                "Redis adapter",
                "Mongo adapter",
                "File adapter"
            ],
            "answer": "Redis adapter"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-server-sent-events",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Server Sent Events",
        "shortInsight": "SSE pushes updates one-way efficiently without WebSockets overhead!",
        "teaching": "res.write and keep-alive headers send text/event-stream. Clients use EventSource. Perfect for notifications or live dashboards.",
        "realLifeExample": "Think of SSE like a restaurant loudspeaker announcing order numbers as they become ready!",
        "quiz": {
            "question": "What content-type is used for Server-Sent Events?",
            "options": [
                "application/json",
                "text/event-stream",
                "text/plain",
                "multipart"
            ],
            "answer": "text/event-stream"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-long-polling",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Long Polling",
        "shortInsight": "Long polling simulates real-time before WebSockets!",
        "teaching": "Client sends request held open until server has data. Timeout and reconnect. Less efficient than SSE or WebSockets but works everywhere.",
        "realLifeExample": "Think of long polling like a waiter standing by your table until the kitchen signals the dish is ready!",
        "quiz": {
            "question": "What is the main drawback of long polling?",
            "options": [
                "No browser support",
                "High resource usage on server",
                "Only one-way",
                "No fallback"
            ],
            "answer": "High resource usage on server"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-mongoose-middleware",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Mongoose Middleware",
        "shortInsight": "Mongoose middleware runs hooks before and after save operations!",
        "teaching": "pre('save') and post('save') hooks validate or transform documents. pre('remove') for cleanup. Async middleware supports await for complex logic.",
        "realLifeExample": "Think of Mongoose middleware like automatic quality checks before and after every dish leaves the kitchen!",
        "quiz": {
            "question": "Which Mongoose hook runs before saving a document?",
            "options": [
                "post('save')",
                "pre('save')",
                "pre('validate')",
                "post('remove')"
            ],
            "answer": "pre('save')"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-sequelize-transactions",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Sequelize Transactions",
        "shortInsight": "Sequelize transactions ensure atomic database operations!",
        "teaching": "sequelize.transaction wraps multiple queries. Commit or rollback on success/failure. Use isolation levels for concurrency control in high-traffic apps.",
        "realLifeExample": "Think of transactions like preparing an entire multi-course meal that either all succeeds or all gets thrown out!",
        "quiz": {
            "question": "What happens if any query fails inside a Sequelize transaction?",
            "options": [
                "Continues anyway",
                "Rolls back all changes",
                "Commits partial",
                "Ignores error"
            ],
            "answer": "Rolls back all changes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-mongodb-connection",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "MongoDB Connection",
        "shortInsight": "Mongoose connects with proper options for production reliability!",
        "teaching": "mongoose.connect with useNewUrlParser, useUnifiedTopology, and poolSize. Handle reconnect on disconnect. Use connection events for monitoring.",
        "realLifeExample": "Think of MongoDB connection like establishing a reliable phone line to the supplier with backup lines ready!",
        "quiz": {
            "question": "Which Mongoose option is required for modern MongoDB drivers?",
            "options": [
                "useNewUrlParser",
                "useUnifiedTopology",
                "Both",
                "Neither"
            ],
            "answer": "Both"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-test-pyramid",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Test Pyramid",
        "shortInsight": "Test pyramid balances fast unit tests with fewer slow E2E tests!",
        "teaching": "Many unit tests, fewer integration, fewest E2E. Jest for units, Supertest for integration. Keep E2E in CI for critical paths only.",
        "realLifeExample": "Think of the test pyramid like checking ingredients (unit), cooking a dish (integration), and tasting the full meal (E2E)!",
        "quiz": {
            "question": "Where should most tests sit in the test pyramid?",
            "options": [
                "E2E",
                "Integration",
                "Unit tests",
                "Manual"
            ],
            "answer": "Unit tests"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-jest-mocks",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Jest Mocks",
        "shortInsight": "Jest mocks isolate units by replacing dependencies!",
        "teaching": "jest.mock replaces modules. spyOn tracks calls. Use factory for custom mocks. Clear mocks between tests with beforeEach.",
        "realLifeExample": "Think of Jest mocks like using a toy kitchen instead of real fire when testing a recipe!",
        "quiz": {
            "question": "What Jest function replaces an entire module?",
            "options": [
                "jest.spyOn",
                "jest.mock",
                "jest.fn",
                "jest.clearAllMocks"
            ],
            "answer": "jest.mock"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-integration-testing",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Integration Testing",
        "shortInsight": "Integration tests verify multiple components work together!",
        "teaching": "Supertest starts the Express app and hits real endpoints. Use test database or containers. Mock external services for reliability.",
        "realLifeExample": "Think of integration tests like checking if the stove, oven, and fridge work together to cook a full meal!",
        "quiz": {
            "question": "Which library is popular for testing HTTP endpoints?",
            "options": [
                "Jest only",
                "Supertest",
                "Mocha",
                "Chai"
            ],
            "answer": "Supertest"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-e2e-testing",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "E2E Testing",
        "shortInsight": "E2E tests simulate real user flows in the browser or API!",
        "teaching": "Cypress or Playwright for UI, or Artillery for load. Run against staging-like environment. Keep minimal and focused on critical paths.",
        "realLifeExample": "Think of E2E tests like a mystery shopper experiencing the full restaurant from door to dessert!",
        "quiz": {
            "question": "Which tool is commonly used for browser-based E2E testing?",
            "options": [
                "Jest",
                "Cypress",
                "Supertest",
                "Mocha"
            ],
            "answer": "Cypress"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-error-handling-middleware",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Error Handling Middleware",
        "shortInsight": "Error middleware catches and formats errors centrally!",
        "teaching": "Express uses (err, req, res, next) signature. Place last in stack. Use http-errors for standard codes. Log and send consistent JSON responses.",
        "realLifeExample": "Think of error middleware like a restaurant manager handling every complaint at one central desk!",
        "quiz": {
            "question": "How many parameters does Express error middleware have?",
            "options": [
                "3",
                "4",
                "5",
                "2"
            ],
            "answer": "4"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-centralized-logging",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Centralized Logging",
        "shortInsight": "Centralized logging aggregates logs from all services!",
        "teaching": "ELK stack or Datadog collects Winston JSON logs. Include correlation IDs. Use fluentd or logstash for shipping. Query across instances easily.",
        "realLifeExample": "Think of centralized logging like one master ledger where every table's orders are recorded instantly!",
        "quiz": {
            "question": "What is the popular stack for centralized logs?",
            "options": [
                "Winston only",
                "ELK stack",
                "Console.log",
                "PM2 logs"
            ],
            "answer": "ELK stack"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-load-balancing",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Load Balancing",
        "shortInsight": "Load balancing distributes traffic across multiple instances!",
        "teaching": "Nginx or AWS ELB uses round-robin or least-connections. Health checks remove unhealthy nodes. Session affinity for sticky sessions when needed.",
        "realLifeExample": "Think of load balancing like multiple waiters sharing tables evenly so no one gets overwhelmed!",
        "quiz": {
            "question": "What algorithm does basic load balancing often use?",
            "options": [
                "Random",
                "Round-robin",
                "First come first served",
                "Heavy load only"
            ],
            "answer": "Round-robin"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-high-availability",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "High Availability",
        "shortInsight": "High availability keeps your app running 99.99% of the time!",
        "teaching": "Multiple instances across availability zones, auto-scaling, and health checks. Use PM2 or Kubernetes for restarts. Database replication and Redis sentinel.",
        "realLifeExample": "Think of high availability like having backup generators and multiple entrances so the restaurant never closes!",
        "quiz": {
            "question": "What percentage uptime defines high availability typically?",
            "options": [
                "99%",
                "99.99%",
                "95%",
                "100%"
            ],
            "answer": "99.99%"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-ddos-protection",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "DDoS Protection",
        "shortInsight": "DDoS protection uses rate limits and cloud firewalls!",
        "teaching": "Cloudflare or AWS Shield absorbs attacks. Combine with rate limiting and CAPTCHA. Monitor with WAF rules. Scale horizontally during spikes.",
        "realLifeExample": "Think of DDoS protection like security guards and metal detectors preventing crowds from overwhelming the restaurant entrance!",
        "quiz": {
            "question": "Which service commonly protects against DDoS attacks?",
            "options": [
                "Express rate-limit",
                "Cloudflare",
                "Mongoose",
                "Jest"
            ],
            "answer": "Cloudflare"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-internationalization",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Internationalization",
        "shortInsight": "i18n libraries serve content in multiple languages dynamically!",
        "teaching": "i18next or intl with locale detection from headers. Store translations in JSON. Use middleware to set req.language and format dates/numbers.",
        "realLifeExample": "Think of internationalization like offering menus in different languages so every customer feels at home!",
        "quiz": {
            "question": "Which popular library handles i18n in Node.js?",
            "options": [
                "Helmet",
                "i18next",
                "Multer",
                "Passport"
            ],
            "answer": "i18next"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-ssr-with-node",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "SSR with Node",
        "shortInsight": "Server-Side Rendering improves SEO and initial load speed!",
        "teaching": "Next.js or custom Express + ReactDOMServer renders on server. Hydrate on client. Use caching for repeated pages and stream responses for large pages.",
        "realLifeExample": "Think of SSR like pre-cooking and serving the full meal hot instead of giving raw ingredients to each customer!",
        "quiz": {
            "question": "What is the main SEO benefit of SSR?",
            "options": [
                "Faster JavaScript",
                "Search engines see full HTML",
                "Smaller bundles",
                "No hydration"
            ],
            "answer": "Search engines see full HTML"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-monolithic-vs-microservices",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Monolithic vs Microservices",
        "shortInsight": "Monoliths are simpler; microservices scale teams and services independently!",
        "teaching": "Monolith deploys as one unit with shared DB. Microservices use separate repos and databases. Node suits both but microservices leverage its lightweight nature.",
        "realLifeExample": "Think of monolith like one big kitchen cooking everything, versus microservices as separate food trucks each specializing!",
        "quiz": {
            "question": "What is a key advantage of microservices over monolith?",
            "options": [
                "Simpler deployment",
                "Independent scaling and teams",
                "Shared database",
                "Faster development"
            ],
            "answer": "Independent scaling and teams"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-bun-vs-node-vs-deno",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Bun vs Node vs Deno",
        "shortInsight": "Bun is faster; Deno is secure; Node is battle-tested!",
        "teaching": "Bun uses Zig and has built-in bundler. Deno has permissions and TypeScript native. Node has massive ecosystem. Choose based on performance vs compatibility.",
        "realLifeExample": "Think of them like three different restaurant chains: Node the classic, Deno the health-focused, Bun the speed racer!",
        "quiz": {
            "question": "Which runtime emphasizes built-in TypeScript support and permissions?",
            "options": [
                "Node.js",
                "Bun",
                "Deno",
                "All"
            ],
            "answer": "Deno"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-esbuild-integration",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Esbuild Integration",
        "shortInsight": "Esbuild bundles Node apps lightning fast for production!",
        "teaching": "esbuild replaces webpack for bundling with near-instant speed. Use for serverless or edge functions. Supports plugins for custom transforms.",
        "realLifeExample": "Think of esbuild like a supersonic chef that prepares the entire menu in seconds instead of hours!",
        "quiz": {
            "question": "What is the main advantage of esbuild over traditional bundlers?",
            "options": [
                "More plugins",
                "Extremely fast build times",
                "Built-in testing",
                "Database support"
            ],
            "answer": "Extremely fast build times"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-event-delegation",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Event Delegation",
        "shortInsight": "Event delegation reduces memory by listening once at parent level!",
        "teaching": "In EventEmitter, attach listeners to root and check event type. Useful for dynamic elements or many similar events. Saves resources in large systems.",
        "realLifeExample": "Think of event delegation like one head waiter listening for all table bells instead of each table having its own bell!",
        "quiz": {
            "question": "What is the benefit of event delegation?",
            "options": [
                "More events",
                "Reduced memory usage",
                "Slower performance",
                "No listeners"
            ],
            "answer": "Reduced memory usage"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-v8-optimization",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "V8 Optimization",
        "shortInsight": "V8 hidden classes and inline caching make JS blazing fast!",
        "teaching": "Consistent object shapes enable monomorphic calls. Avoid adding properties dynamically. Use --trace-deopt to find optimizations.",
        "realLifeExample": "Think of V8 optimization like a chef who preps identical ingredients the same way every time for speed!",
        "quiz": {
            "question": "What V8 feature speeds up property access?",
            "options": [
                "Hidden classes",
                "Garbage collection",
                "Event loop",
                "Libuv"
            ],
            "answer": "Hidden classes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-telemetry",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Telemetry",
        "shortInsight": "Telemetry collects metrics and traces for observability!",
        "teaching": "OpenTelemetry or Prometheus client exposes metrics. Include custom counters and histograms. Integrate with Grafana for dashboards.",
        "realLifeExample": "Think of telemetry like dashboard cameras and sensors monitoring every part of the restaurant operation!",
        "quiz": {
            "question": "Which standard is becoming the default for telemetry in Node.js?",
            "options": [
                "New Relic",
                "OpenTelemetry",
                "Winston",
                "Jest"
            ],
            "answer": "OpenTelemetry"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "advanced-nodejs-promise-chaining-best-practices",
        "category": "Advanced Node.js",
        "topic": "Advanced Interview Questions",
        "subtopic": "Promise Chaining Best Practices",
        "shortInsight": "Proper promise chaining avoids memory leaks and improves readability!",
        "teaching": "Return promises in .then chains instead of nesting. Use async/await for clarity. Always catch at the end or use .catch on each step. Avoid mixing with callbacks.",
        "realLifeExample": "Think of promise chaining like passing a baton smoothly in a relay race instead of dropping it mid-way!",
        "quiz": {
            "question": "What is the best practice when using .then chains?",
            "options": [
                "Nest them deeply",
                "Always return the next promise",
                "Ignore errors",
                "Use global catch"
            ],
            "answer": "Always return the next promise"
        },
        "isInterviewQuestion": true
    }
]