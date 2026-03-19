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
    },
    {
        "id": "node-js-interview-questions-event-loop-set-timeout-zero",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setTimeout with Zero Delay",
        "shortInsight": "setTimeout(0) still waits for the event loop!",
        "teaching": "Even with a 0ms delay, setTimeout callbacks are queued in the timers phase of the Node.js event loop. They only execute after the current synchronous code finishes and the call stack is empty. This is why synchronous console.log statements always print before the delayed callback.",
        "realLifeExample": "Think of it as placing an urgent order at a busy coffee shop; even if you say 'right now', the barista still finishes the current customer's drink first!",
        "quiz": {
            "question": "What is the output of the following code?\nconsole.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');",
            "options": [
                "Start Timeout End",
                "Start End Timeout",
                "Timeout Start End",
                "End Start Timeout"
            ],
            "answer": "Start End Timeout"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-process-next-tick",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "process.nextTick Priority",
        "shortInsight": "nextTick runs before any event loop phase!",
        "teaching": "process.nextTick queues callbacks to run immediately after the current operation completes but before the event loop proceeds to timers or I/O. It belongs to the microtask queue and executes before Promise.then callbacks in the same tick.",
        "realLifeExample": "Think of it as a sticky note saying 'do this before you leave the room' that you must handle before starting the next meeting!",
        "quiz": {
            "question": "What is the output of the following code?\nconsole.log('Start');\nprocess.nextTick(() => console.log('Next'));\nconsole.log('End');",
            "options": [
                "Start Next End",
                "Start End Next",
                "Next Start End",
                "End Start Next"
            ],
            "answer": "Start End Next"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-set-immediate",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setImmediate vs setTimeout",
        "shortInsight": "setImmediate runs in the check phase after poll!",
        "teaching": "setImmediate callbacks are executed in the check phase, after the poll phase completes. When both setTimeout(0) and setImmediate are scheduled in the same tick, setImmediate usually runs first because the timers phase comes before check only on the next cycle.",
        "realLifeExample": "Think of setImmediate as jumping the queue at the end of the line while setTimeout waits for the next full round of service!",
        "quiz": {
            "question": "What is the output of the following code?\nsetTimeout(() => console.log('Timeout'), 0);\nsetImmediate(() => console.log('Immediate'));",
            "options": [
                "Timeout Immediate",
                "Immediate Timeout",
                "No output",
                "Both at same time"
            ],
            "answer": "Immediate Timeout"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-promise-microtask",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Promise.then Microtask Order",
        "shortInsight": "Promises run after nextTick but before timers!",
        "teaching": "Promise.then callbacks are microtasks executed after process.nextTick but before the event loop moves to the timers phase. They drain completely before any macrotask like setTimeout fires.",
        "realLifeExample": "Think of Promise.then as an urgent text message that arrives right after your phone call ends but before you start checking your mail!",
        "quiz": {
            "question": "What is the output of the following code?\nconsole.log('Start');\nPromise.resolve().then(() => console.log('Promise'));\nprocess.nextTick(() => console.log('Next'));\nconsole.log('End');",
            "options": [
                "Start End Promise Next",
                "Start End Next Promise",
                "Start Next Promise End",
                "Next Promise Start End"
            ],
            "answer": "Start End Next Promise"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-global-scope",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Global Scope",
        "shortInsight": "Global this points to the global object!",
        "teaching": "At the top level of a Node.js module, 'this' refers to the module.exports object (not the global object). In the global scope outside any module, it points to global. This changes behavior compared to browsers.",
        "realLifeExample": "Think of this as your personal notebook in class; in Node each file has its own notebook!",
        "quiz": {
            "question": "What does console.log(this === global); print at the top level of a Node.js file?",
            "options": [
                "true",
                "false",
                "undefined",
                "Error"
            ],
            "answer": "false"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-set-timeout-regular",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in setTimeout Regular Function",
        "shortInsight": "this loses context in setTimeout callbacks!",
        "teaching": "When a regular function is passed to setTimeout, 'this' inside it points to the global object (or undefined in strict mode) because the timer invokes it without a calling context. This is a classic output prediction trap.",
        "realLifeExample": "Think of this as a dog that forgets its owner when the timer calls it to fetch the stick!",
        "quiz": {
            "question": "What is logged by this code?\nconst obj = {val: 'Hi'};\nsetTimeout(function() { console.log(this.val); }, 0);",
            "options": [
                "Hi",
                "undefined",
                "obj",
                "global"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-set-timeout-arrow",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in setTimeout Arrow Function",
        "shortInsight": "Arrow functions preserve lexical this!",
        "teaching": "Arrow functions do not have their own 'this' binding; they inherit it from the enclosing scope. In a setTimeout arrow callback inside an object method, 'this' correctly refers to the object.",
        "realLifeExample": "Think of arrow functions as a GPS that never loses the original destination no matter who calls it!",
        "quiz": {
            "question": "What is logged by this code?\nconst obj = {val: 'Hi'};\nsetTimeout(() => { console.log(this.val); }, 0);",
            "options": [
                "undefined",
                "Hi",
                "Error",
                "global"
            ],
            "answer": "Hi"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-var-for-loop",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "var Mutation in for Loop with setTimeout",
        "shortInsight": "var creates one shared variable for all closures!",
        "teaching": "Using var in a for loop means all setTimeout callbacks close over the same variable that mutates to the final value by the time they execute. This is because var is function-scoped and not block-scoped.",
        "realLifeExample": "Think of var as one shared shopping list that everyone keeps updating until the last item is written!",
        "quiz": {
            "question": "What is the output of this code?\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
            "options": [
                "0 1 2",
                "3 3 3",
                "0 0 0",
                "1 2 3"
            ],
            "answer": "3 3 3"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-let-for-loop",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "let Mutation in for Loop with setTimeout",
        "shortInsight": "let creates a fresh binding per iteration!",
        "teaching": "The let keyword is block-scoped, so each iteration of the for loop creates a new variable binding captured by the setTimeout closure. This prevents the mutation issue seen with var.",
        "realLifeExample": "Think of let as giving each friend their own private shopping list that never changes!",
        "quiz": {
            "question": "What is the output of this code?\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
            "options": [
                "3 3 3",
                "0 1 2",
                "undefined",
                "1 2 3"
            ],
            "answer": "0 1 2"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-object-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Object Mutation in Async Callback",
        "shortInsight": "Objects are mutated by reference even in async code!",
        "teaching": "When you mutate an object's property inside a setTimeout or Promise callback, the change is visible immediately because objects are passed by reference. The mutation happens when the callback runs.",
        "realLifeExample": "Think of an object as a shared notebook; anyone who gets it later can still scribble on the same page!",
        "quiz": {
            "question": "What is logged by this code?\nconst obj = {val: 1};\nsetTimeout(() => { obj.val = 2; }, 0);\nconsole.log(obj.val);",
            "options": [
                "2",
                "1",
                "undefined",
                "Error"
            ],
            "answer": "1"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-nested-next-tick",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Nested process.nextTick",
        "shortInsight": "Nested nextTick can starve the event loop!",
        "teaching": "Calling process.nextTick inside another nextTick callback creates a new microtask that runs immediately after the current one. Too many nested nextTicks can prevent the event loop from ever reaching timers or I/O.",
        "realLifeExample": "Think of it as continuously adding more urgent notes to the top of the stack instead of ever leaving the room!",
        "quiz": {
            "question": "Will a setTimeout(0) ever fire if you keep calling process.nextTick recursively?",
            "options": [
                "Yes immediately",
                "No, it starves the loop",
                "After one tick",
                "Only once"
            ],
            "answer": "No, it starves the loop"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-class-method",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Class Method with setTimeout",
        "shortInsight": "Class methods lose this unless bound or arrow!",
        "teaching": "Regular class methods lose their 'this' binding when passed to setTimeout because the method is extracted. Using an arrow function as the method or .bind(this) preserves the class instance as 'this'.",
        "realLifeExample": "Think of a class method as a recipe card that forgets whose kitchen it's in when handed to the timer!",
        "quiz": {
            "question": "What is logged by this code?\nclass Test {\n  constructor() { this.val = 'Hi'; }\n  log() {\n    setTimeout(function() { console.log(this.val); }, 0);\n  }\n}\nnew Test().log();",
            "options": [
                "Hi",
                "undefined",
                "Test",
                "Error"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-array-push-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Array Mutation in Timer Callback",
        "shortInsight": "Array push in async still mutates the original!",
        "teaching": "Pushing to an array inside a setTimeout callback mutates the same array object because arrays are reference types. The length change is visible after the timer fires, even if you logged the array earlier.",
        "realLifeExample": "Think of an array as a shared grocery cart; anyone who adds an item later still fills the same cart!",
        "quiz": {
            "question": "What is the final length after this code?\nconst arr = [];\nsetTimeout(() => arr.push(1), 0);\nconsole.log(arr.length);",
            "options": [
                "1",
                "0",
                "undefined",
                "Error"
            ],
            "answer": "0"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-strict-mode",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Strict Mode Callback",
        "shortInsight": "Strict mode makes this undefined in callbacks!",
        "teaching": "In 'use strict' mode, a regular function called by setTimeout has 'this' set to undefined instead of the global object. This prevents accidental global pollution and is a common interview output question.",
        "realLifeExample": "Think of strict mode as a polite bouncer that refuses to let 'this' sit at the global table!",
        "quiz": {
            "question": "In strict mode, what is this inside a setTimeout regular function?",
            "options": [
                "global",
                "undefined",
                "window",
                "module"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-fs-readfile-order",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "fs.readFile Callback Order",
        "shortInsight": "I/O callbacks run in poll phase after timers!",
        "teaching": "fs.readFile callbacks are executed in the poll phase once the I/O operation completes. If a setTimeout(0) is also scheduled, the timer may run first or second depending on when the file read finishes.",
        "realLifeExample": "Think of file reading as waiting for a package delivery while timers are quick doorbell rings!",
        "quiz": {
            "question": "Which prints first if both are scheduled together: setTimeout(0) or fs.readFile callback?",
            "options": [
                "Always setTimeout",
                "Depends on I/O speed",
                "Always fs.readFile",
                "Never both"
            ],
            "answer": "Depends on I/O speed"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-const-object",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Const Object Property Mutation",
        "shortInsight": "const prevents reassignment but not mutation!",
        "teaching": "A const declaration prevents reassigning the variable but allows mutating properties of objects or arrays it references. This is frequently tested in async code where you mutate inside callbacks.",
        "realLifeExample": "Think of const as a locked box; you can't replace the box but you can rearrange everything inside it!",
        "quiz": {
            "question": "Does this code throw an error?\nconst obj = {a:1};\nsetTimeout(() => { obj.a = 2; }, 0);",
            "options": [
                "Yes",
                "No",
                "Only in strict mode",
                "Depends"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-promise-then",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Promise.then Regular Function",
        "shortInsight": "Promise callbacks also lose this context!",
        "teaching": "Regular functions in .then lose their 'this' just like setTimeout callbacks. Arrow functions or explicit binding are required to keep the original context when mixing with event-loop async code.",
        "realLifeExample": "Think of Promise.then as another timer that calls your function without introducing you to the original owner!",
        "quiz": {
            "question": "What is this inside a regular function passed to .then()?",
            "options": [
                "The promise",
                "undefined or global",
                "The resolved value",
                "The object"
            ],
            "answer": "undefined or global"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-set-timeout-inside-immediate",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setTimeout Inside setImmediate",
        "shortInsight": "Nested timers change execution order!",
        "teaching": "When setTimeout is scheduled inside a setImmediate callback, the timeout callback moves to the next timers phase after the current check phase completes. This often results in the inner timeout running after subsequent immediates.",
        "realLifeExample": "Think of it as sending a package from inside the express lane; it still has to go through the regular delivery cycle!",
        "quiz": {
            "question": "If you schedule setTimeout(0) inside setImmediate, which runs first on the next cycle?",
            "options": [
                "setImmediate again",
                "The inner setTimeout",
                "Both same time",
                "Neither"
            ],
            "answer": "setImmediate again"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-module-exports",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this at Module Top Level",
        "shortInsight": "this equals module.exports in files!",
        "teaching": "Inside a Node.js module file (not wrapped in a function), 'this' refers to module.exports. Assigning properties to this adds them to the exported object.",
        "realLifeExample": "Think of every file having its own private this that becomes the public export when the file is required!",
        "quiz": {
            "question": "At the top level of a module, this === module.exports evaluates to what?",
            "options": [
                "false",
                "true",
                "undefined",
                "global"
            ],
            "answer": "true"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-closure-shared-var",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Closure Capturing Mutated Variable",
        "shortInsight": "Closures see the latest value at execution time!",
        "teaching": "A closure captures a reference to the variable, not its value at creation time. When the variable mutates before the async callback runs, all closures see the final mutated value.",
        "realLifeExample": "Think of a closure as a mirror reflecting the current state of the room whenever you look later!",
        "quiz": {
            "question": "If a shared counter is incremented after scheduling 3 timers, what value do the timers see?",
            "options": [
                "Initial value",
                "Final mutated value",
                "Each sees different",
                "Error"
            ],
            "answer": "Final mutated value"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-microtask-starvation",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Microtask Starvation of Event Loop",
        "shortInsight": "Endless microtasks block timers forever!",
        "teaching": "If you keep queuing new Promise.then or nextTick callbacks inside existing microtasks, the event loop never exits the microtask queue to reach timers or I/O phases.",
        "realLifeExample": "Think of microtasks as an infinite loop of urgent alerts that never let the phone check for new messages!",
        "quiz": {
            "question": "Can setTimeout callbacks ever run if you recursively queue Promise.then forever?",
            "options": [
                "Yes after one cycle",
                "No, starvation occurs",
                "Only once",
                "Immediately"
            ],
            "answer": "No, starvation occurs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-queue-microtask",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "queueMicrotask Priority",
        "shortInsight": "queueMicrotask drains after nextTick before timers!",
        "teaching": "queueMicrotask adds callbacks to the microtask queue after process.nextTick but before the next macrotask. It is used for custom microtasks and follows the same drain rules as Promise callbacks.",
        "realLifeExample": "Think of it as slipping an extra urgent email into the inbox right before the meeting starts!",
        "quiz": {
            "question": "What is the output?\nconsole.log('Start');\nqueueMicrotask(() => console.log('Micro'));\nconsole.log('End');",
            "options": [
                "Start Micro End",
                "Start End Micro",
                "Micro Start End",
                "End Micro Start"
            ],
            "answer": "Start End Micro"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-async-await-order",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "async/await Microtask Order",
        "shortInsight": "await pauses but resumes in microtask!",
        "teaching": "await on a resolved promise schedules the remaining code as a microtask. It runs after current microtasks but before any timers, just like .then.",
        "realLifeExample": "Think of await as hitting pause on a video – the next scene plays right after the current ad finishes!",
        "quiz": {
            "question": "What is the output?\nconsole.log('Start');\n(async () => { await Promise.resolve(); console.log('Await'); })();\nconsole.log('End');",
            "options": [
                "Start Await End",
                "Start End Await",
                "Await Start End",
                "End Await Start"
            ],
            "answer": "Start End Await"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-multiple-settimeout",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Multiple setTimeout Same Delay",
        "shortInsight": "Same-delay timers fire in scheduling order!",
        "teaching": "When multiple setTimeout have the same delay, they are executed in the order they were scheduled (FIFO) once the timers phase runs.",
        "realLifeExample": "Think of them as people arriving at the same time to a queue – first come, first served!",
        "quiz": {
            "question": "What is the output order?\nsetTimeout(() => console.log('A'), 0);\nsetTimeout(() => console.log('B'), 0);",
            "options": [
                "B A",
                "A B",
                "Random",
                "Simultaneous"
            ],
            "answer": "A B"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-fs-promise-order",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Promise inside fs.readFile",
        "shortInsight": "I/O callback then microtask!",
        "teaching": "When a Promise is created inside an fs.readFile callback, its .then runs as a microtask after the poll phase callback finishes but before the next timers phase.",
        "realLifeExample": "Think of the file read as opening a letter, then the promise is an urgent reply sent right after!",
        "quiz": {
            "question": "In fs.readFile callback with Promise.resolve().then, when does the then run relative to a setTimeout(0) scheduled before?",
            "options": [
                "Before setTimeout",
                "After setTimeout",
                "Same time",
                "Never"
            ],
            "answer": "Before setTimeout"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-eventemitter",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in EventEmitter Listener",
        "shortInsight": "Event listeners lose this unless arrow or bind!",
        "teaching": "Regular function listeners in emitter.on lose 'this' context and point to the emitter instance or global. Arrow functions preserve lexical this.",
        "realLifeExample": "Think of the emitter as a boss calling your name – regular functions forget who they work for!",
        "quiz": {
            "question": "What does this refer to in a regular listener on an EventEmitter?",
            "options": [
                "The object that emitted",
                "undefined",
                "global",
                "The listener function"
            ],
            "answer": "The object that emitted"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-foreach-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "forEach with setTimeout Mutation",
        "shortInsight": "forEach var still shares one variable!",
        "teaching": "Using var inside array.forEach with setTimeout creates the same closure mutation issue as a for loop because the variable is still function-scoped.",
        "realLifeExample": "Think of forEach as a group chat where everyone reads the last message sent!",
        "quiz": {
            "question": "What prints with forEach and var i in setTimeout?",
            "options": [
                "0 1 2",
                "3 3 3",
                "Each index",
                "Error"
            ],
            "answer": "3 3 3"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-iife-let",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "IIFE with let for Closure Fix",
        "shortInsight": "IIFE creates per-iteration scope!",
        "teaching": "Wrapping setTimeout in an IIFE with let captures the current value per iteration, solving the mutation problem without using block-scoped let in the loop.",
        "realLifeExample": "Think of an IIFE as giving each friend their own copy of the shopping list!",
        "quiz": {
            "question": "Does IIFE with let fix the var loop problem?",
            "options": [
                "No",
                "Yes",
                "Only with var",
                "Depends on delay"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-bind-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "bind(this) in setTimeout",
        "shortInsight": "bind explicitly fixes this context!",
        "teaching": "Function.prototype.bind creates a new function with 'this' permanently set to the provided value, so even in setTimeout the original object context is preserved.",
        "realLifeExample": "Think of bind as stapling your name tag to the function so the timer always knows who you are!",
        "quiz": {
            "question": "Does obj.method.bind(obj) fix this inside setTimeout?",
            "options": [
                "No",
                "Yes",
                "Only for arrow",
                "Causes error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-nexttick-immediate",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "nextTick inside setImmediate",
        "shortInsight": "nextTick always beats the next phase!",
        "teaching": "A process.nextTick scheduled inside a setImmediate callback runs immediately after the current check phase before any subsequent timers or I/O.",
        "realLifeExample": "Think of nextTick as a VIP pass that lets you cut the line even inside the express checkout!",
        "quiz": {
            "question": "If nextTick is called inside setImmediate, when does it run relative to the next setTimeout?",
            "options": [
                "After",
                "Before",
                "Same time",
                "Never"
            ],
            "answer": "Before"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-full-phases",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Full Event Loop Phase Order",
        "shortInsight": "Timers → Poll → Check → Timers again!",
        "teaching": "The Node.js event loop phases execute in order: timers, pending callbacks, idle/prepare, poll, check, close callbacks, then back to timers. Microtasks drain after each phase.",
        "realLifeExample": "Think of the event loop as a subway line with fixed stops – you must complete the full route before looping back!",
        "quiz": {
            "question": "After the check phase (setImmediate), which phase runs next?",
            "options": [
                "Timers",
                "Poll",
                "Close callbacks",
                "Pending"
            ],
            "answer": "Close callbacks"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-http-callback",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "http.get Callback vs Timer",
        "shortInsight": "HTTP I/O callbacks run in poll phase!",
        "teaching": "Callbacks from http.get are I/O callbacks executed in the poll phase. A setTimeout(0) scheduled at the same time may run before or after depending on when the network response arrives.",
        "realLifeExample": "Think of http.get as waiting for mail while the timer is a doorbell – whoever arrives first gets handled first!",
        "quiz": {
            "question": "Which runs first if http.get and setTimeout(0) are scheduled together?",
            "options": [
                "Always http",
                "Depends on network",
                "Always timer",
                "Error"
            ],
            "answer": "Depends on network"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-strict-module",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Strict Mode Module",
        "shortInsight": "Strict mode top-level this is undefined!",
        "teaching": "In a module with 'use strict', top-level 'this' is undefined instead of module.exports. This is different from non-strict behavior.",
        "realLifeExample": "Think of strict mode as removing the default seat at the global table!",
        "quiz": {
            "question": "In strict mode module top level, this equals what?",
            "options": [
                "module.exports",
                "undefined",
                "global",
                "Error"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-recursive-nexttick",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Recursive process.nextTick",
        "shortInsight": "Recursive nextTick blocks everything!",
        "teaching": "Recursive process.nextTick calls keep adding microtasks forever, preventing the event loop from ever reaching timers, I/O, or process exit.",
        "realLifeExample": "Think of it as an endless chain of urgent texts that never lets you answer the door!",
        "quiz": {
            "question": "Does recursive process.nextTick allow setTimeout to run?",
            "options": [
                "Yes",
                "No",
                "Only once",
                "After 10 calls"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-array-foreach-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Array Mutation in forEach Async",
        "shortInsight": "forEach async still mutates shared array!",
        "teaching": "Pushing to the same array inside forEach callbacks (with setTimeout) mutates the original reference regardless of async timing.",
        "realLifeExample": "Think of the array as a shared whiteboard – everyone adds their note later on the same board!",
        "quiz": {
            "question": "After forEach with setTimeout push, is the array mutated?",
            "options": [
                "No until loop ends",
                "Yes immediately when callback runs",
                "Never",
                "Error"
            ],
            "answer": "Yes immediately when callback runs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-arrow-class-field",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Class Field Arrow Function this",
        "shortInsight": "Class fields with arrow auto-bind this!",
        "teaching": "Class property arrow functions are created with lexical this bound to the instance, so they keep the correct context even when passed to setTimeout.",
        "realLifeExample": "Think of class field arrows as name tags already glued to your shirt!",
        "quiz": {
            "question": "Does class { log = () => console.log(this.val); } keep this in timer?",
            "options": [
                "No",
                "Yes",
                "Only in strict",
                "Depends"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-setimmediate-io",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setImmediate inside I/O Callback",
        "shortInsight": "setImmediate after I/O runs next check!",
        "teaching": "setImmediate scheduled inside an fs.readFile callback runs in the check phase of the same loop iteration, after the poll phase.",
        "realLifeExample": "Think of it as getting an express ticket right after you pick up your package!",
        "quiz": {
            "question": "When does setImmediate run if scheduled inside fs.readFile callback?",
            "options": [
                "Next full loop",
                "Immediately after I/O",
                "Before I/O",
                "Never"
            ],
            "answer": "Immediately after I/O"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-promise-chain",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Mutation in Promise Chain",
        "shortInsight": "Mutation in .then affects original object!",
        "teaching": "Mutating an object inside a .then callback changes the shared reference, visible to all other code holding the same object.",
        "realLifeExample": "Think of the promise chain as passing around the same notebook – later pages can still scribble on earlier ones!",
        "quiz": {
            "question": "If you mutate obj inside .then, when is the change visible?",
            "options": [
                "Only after chain ends",
                "Immediately when .then runs",
                "Never",
                "Only in catch"
            ],
            "answer": "Immediately when .then runs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-timer-unref",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Timer unref and Process Exit",
        "shortInsight": "unref timers don't prevent exit!",
        "teaching": "Calling .unref() on a timer removes it from the event loop reference count, allowing the process to exit even if the timer is still pending.",
        "realLifeExample": "Think of unref as telling the bouncer 'don't wait for me' so the party can end!",
        "quiz": {
            "question": "Does an unref'ed setTimeout(1000) prevent process exit?",
            "options": [
                "Yes",
                "No",
                "Only if 0 delay",
                "Depends on OS"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-top-level-await",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this with Top Level Await",
        "shortInsight": "Top level await runs in module scope!",
        "teaching": "In modules with top-level await, 'this' still refers to module.exports (or undefined in strict). The await just pauses module execution.",
        "realLifeExample": "Think of top level await as waiting for coffee before handing in your notebook – the notebook is still yours!",
        "quiz": {
            "question": "In a module with top-level await, this === module.exports is?",
            "options": [
                "false",
                "true",
                "undefined",
                "Error"
            ],
            "answer": "true"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-clear-timeout",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "clearTimeout Effect on Output",
        "shortInsight": "clearTimeout prevents callback execution!",
        "teaching": "Calling clearTimeout before the timer fires removes the callback from the timers queue so it never runs.",
        "realLifeExample": "Think of clearTimeout as cancelling the coffee order before the barista starts making it!",
        "quiz": {
            "question": "If you clearTimeout right after scheduling, does the callback run?",
            "options": [
                "Yes",
                "No",
                "Only if 0 delay",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-set-in-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Set Mutation in Timer Callback",
        "shortInsight": "Set.add mutates the same collection!",
        "teaching": "Adding to a Set inside a setTimeout callback mutates the original Set object because collections are reference types.",
        "realLifeExample": "Think of a Set as a shared guest list – anyone can add names later to the same list!",
        "quiz": {
            "question": "After setTimeout(() => mySet.add(1)), does the Set have the item?",
            "options": [
                "No until timer fires",
                "Yes when callback runs",
                "Never",
                "Error"
            ],
            "answer": "Yes when callback runs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-nexttick-promise",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "nextTick vs Promise.then Order",
        "shortInsight": "nextTick before Promise microtasks!",
        "teaching": "process.nextTick callbacks run before any Promise.then in the same microtask queue drain.",
        "realLifeExample": "Think of nextTick as the very first urgent call before any promise replies arrive!",
        "quiz": {
            "question": "Which runs first: process.nextTick or Promise.resolve().then?",
            "options": [
                "Promise",
                "nextTick",
                "Random",
                "Same time"
            ],
            "answer": "nextTick"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-setinterval-regular",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in setInterval Regular Function",
        "shortInsight": "setInterval also loses this context!",
        "teaching": "Regular functions passed to setInterval have 'this' set to global or undefined, just like setTimeout.",
        "realLifeExample": "Think of setInterval as a recurring timer that also forgets who called it!",
        "quiz": {
            "question": "What is this inside a regular setInterval callback?",
            "options": [
                "The object",
                "undefined",
                "global",
                "Interval ID"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-map-set-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Map Mutation in Async Callback",
        "shortInsight": "Map.set mutates shared reference!",
        "teaching": "Setting a key on a Map inside an async callback changes the original Map because Maps are passed by reference.",
        "realLifeExample": "Think of a Map as a shared address book – anyone can add contacts later!",
        "quiz": {
            "question": "Does myMap.set inside setTimeout affect the original Map?",
            "options": [
                "No",
                "Yes",
                "Only after exit",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-poll-starvation",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Poll Phase Starvation",
        "shortInsight": "Endless poll callbacks block timers!",
        "teaching": "If the poll phase keeps receiving I/O callbacks or you schedule setImmediate repeatedly, the event loop may never return to the timers phase.",
        "realLifeExample": "Think of poll as an endless line at the post office – you never get to check your timer watch!",
        "quiz": {
            "question": "Can timers run if poll phase has endless I/O?",
            "options": [
                "Yes",
                "No",
                "Only once",
                "After 1s"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-promise-constructor",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Promise Constructor",
        "shortInsight": "Promise executor runs synchronously!",
        "teaching": "The executor function in new Promise runs synchronously with 'this' as undefined in strict mode or global otherwise.",
        "realLifeExample": "Think of the promise constructor as an immediate job interview – you answer right away!",
        "quiz": {
            "question": "What is this inside new Promise((resolve) => { console.log(this); })?",
            "options": [
                "Promise instance",
                "undefined",
                "global",
                "Error"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-settimeout-in-nexttick",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setTimeout inside nextTick",
        "shortInsight": "Timer scheduled in microtask waits next loop!",
        "teaching": "A setTimeout called inside process.nextTick is scheduled for the timers phase of the next full event loop cycle.",
        "realLifeExample": "Think of it as mailing a letter from inside the urgent room – it goes out on the next delivery round!",
        "quiz": {
            "question": "When does setTimeout inside nextTick fire?",
            "options": [
                "Immediately",
                "Next full loop",
                "Never",
                "Same tick"
            ],
            "answer": "Next full loop"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-object-freeze-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Object.freeze Mutation Attempt",
        "shortInsight": "freeze prevents mutation even in async!",
        "teaching": "Object.freeze makes properties non-writable. Attempting to mutate inside a timer callback throws in strict mode or silently fails otherwise.",
        "realLifeExample": "Think of freeze as locking the notebook – no one can write anymore, even later!",
        "quiz": {
            "question": "Does setTimeout(() => frozenObj.prop = 2) change the value?",
            "options": [
                "Yes",
                "No",
                "Error always",
                "Only strict"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-setimmediate-nested",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Nested setImmediate",
        "shortInsight": "Nested setImmediate queues for next check!",
        "teaching": "Calling setImmediate inside a setImmediate callback schedules it for the next check phase after the current one finishes.",
        "realLifeExample": "Think of it as buying another express ticket while you're already in the express line!",
        "quiz": {
            "question": "Does nested setImmediate run in the same check phase?",
            "options": [
                "Yes",
                "No, next check",
                "Immediately",
                "Never"
            ],
            "answer": "No, next check"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-call-apply-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this with call/apply in Timer",
        "shortInsight": "call/apply set this only at invocation!",
        "teaching": "Using fn.call(obj) sets this only for that synchronous call. When the same function is later passed to setTimeout, this is lost again.",
        "realLifeExample": "Think of call as a one-time handshake – the timer still needs its own introduction!",
        "quiz": {
            "question": "Does fn.call(obj) before setTimeout(fn) keep this in the timer?",
            "options": [
                "Yes",
                "No",
                "Only arrow",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-primitive-closure",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Primitive in Closure Mutation",
        "shortInsight": "Primitives are copied – no mutation!",
        "teaching": "Closing over a primitive variable (number, string) captures the value at creation time. Reassigning the variable later does not affect closed-over copies.",
        "realLifeExample": "Think of primitives as taking a photo of the number – later changes to the original don't update the photo!",
        "quiz": {
            "question": "If you close over a number and later reassign it, what does the timer see?",
            "options": [
                "New value",
                "Original value",
                "undefined",
                "Error"
            ],
            "answer": "Original value"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-promise-all-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Promise.all with Timers",
        "shortInsight": "Promise.all waits for all – microtask after!",
        "teaching": "Promise.all resolves when all promises resolve. The .then runs as a single microtask after the last inner promise settles.",
        "realLifeExample": "Think of Promise.all as waiting for all friends to arrive before sending one group message!",
        "quiz": {
            "question": "When does Promise.all([setTimeout promises]).then run relative to individual timers?",
            "options": [
                "Before all timers",
                "After all timers",
                "With the last timer",
                "Never"
            ],
            "answer": "After all timers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-generator-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Generator with Timer",
        "shortInsight": "Generators lose this unless bound!",
        "teaching": "Regular generator functions lose 'this' when their yielded functions are used in timers, just like normal functions.",
        "realLifeExample": "Think of a generator as a recipe book – the timer still needs to know whose kitchen it is!",
        "quiz": {
            "question": "What is this inside a generator function passed to setTimeout?",
            "options": [
                "Generator instance",
                "undefined",
                "global",
                "Error"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-settimeout-zero-iife",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setTimeout Zero in IIFE",
        "shortInsight": "IIFE with setTimeout(0) still defers!",
        "teaching": "Even inside an IIFE, setTimeout(0) queues the callback for the timers phase after synchronous code.",
        "realLifeExample": "Think of the IIFE as a private room – you still have to wait for the timer bell outside!",
        "quiz": {
            "question": "Does setTimeout(0) inside IIFE run before or after outer console.log?",
            "options": [
                "Before",
                "After",
                "Same time",
                "Never"
            ],
            "answer": "After"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-weakmap-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "WeakMap Mutation in Async",
        "shortInsight": "WeakMap.set still mutates the map!",
        "teaching": "WeakMap behaves like Map for mutation – setting a key inside an async callback updates the shared WeakMap.",
        "realLifeExample": "Think of WeakMap as a private shared diary – later entries are still added!",
        "quiz": {
            "question": "Does WeakMap.set inside setTimeout affect the map?",
            "options": [
                "No",
                "Yes",
                "Only for garbage",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-microtask-queue-drain",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Microtask Queue Full Drain",
        "shortInsight": "All microtasks run before next macrotask!",
        "teaching": "The event loop drains the entire microtask queue (nextTick + promises + queueMicrotask) before moving to the next macrotask like timers.",
        "realLifeExample": "Think of microtasks as all urgent emails that must be answered before you check regular mail!",
        "quiz": {
            "question": "If 5 Promise.then are queued, when do they run relative to one setTimeout?",
            "options": [
                "Interleaved",
                "All before setTimeout",
                "After setTimeout",
                "Random"
            ],
            "answer": "All before setTimeout"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-arrow-nested",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Nested Arrow Function this",
        "shortInsight": "Arrow inside arrow keeps outer this!",
        "teaching": "Nested arrow functions all inherit the same lexical this from the enclosing scope.",
        "realLifeExample": "Think of nested arrows as Russian dolls – all have the same owner label!",
        "quiz": {
            "question": "In obj.method = () => { return () => console.log(this); }, what is this in the inner arrow?",
            "options": [
                "global",
                "obj",
                "undefined",
                "inner function"
            ],
            "answer": "obj"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-setimmediate-vs-nexttick-io",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "setImmediate vs nextTick after I/O",
        "shortInsight": "After I/O, setImmediate runs before next timers!",
        "teaching": "In an I/O callback, setImmediate runs in check phase while nextTick runs immediately as microtask.",
        "realLifeExample": "Think of nextTick as answering the phone instantly after opening mail, setImmediate as checking the mailbox next!",
        "quiz": {
            "question": "In fs.readFile callback, which runs first: nextTick or setImmediate?",
            "options": [
                "setImmediate",
                "nextTick",
                "Same",
                "Depends"
            ],
            "answer": "nextTick"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-const-array-push",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "const Array Push in Timer",
        "shortInsight": "const array can still be mutated!",
        "teaching": "const prevents reassignment but allows push, pop, etc. on the array reference inside async callbacks.",
        "realLifeExample": "Think of const as owning the shopping cart – you can't get a new cart but you can add groceries!",
        "quiz": {
            "question": "Does const arr = []; setTimeout(() => arr.push(1)) work?",
            "options": [
                "No, error",
                "Yes",
                "Only if strict",
                "Reassign only"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-promise-rejection-order",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Promise Rejection Microtask",
        "shortInsight": "Rejections are also microtasks!",
        "teaching": "Uncaught promise rejections are handled in the microtask queue, running before timers even if the rejection happens later.",
        "realLifeExample": "Think of a broken promise as an urgent complaint email that arrives before your regular mail!",
        "quiz": {
            "question": "When is a rejected promise .catch handler run relative to setTimeout?",
            "options": [
                "After",
                "Before",
                "Never",
                "Same"
            ],
            "answer": "Before"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-bound-method-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Bound Method in setTimeout",
        "shortInsight": "Pre-bound methods keep this forever!",
        "teaching": "If you bind a method once and store it, passing the bound version to setTimeout keeps the correct this.",
        "realLifeExample": "Think of binding as laminating your name tag – it stays attached no matter who calls!",
        "quiz": {
            "question": "Does a pre-bound method keep this in setTimeout?",
            "options": [
                "No",
                "Yes",
                "Only arrow",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-node-vs-browser",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Node Event Loop vs Browser",
        "shortInsight": "Node has extra phases and nextTick!",
        "teaching": "Node.js event loop includes setImmediate and process.nextTick phases; browsers do not have check phase or nextTick.",
        "realLifeExample": "Think of Node as a more detailed subway map with extra stops compared to the browser version!",
        "quiz": {
            "question": "Does browser have setImmediate?",
            "options": [
                "Yes native",
                "No, polyfill only",
                "Same as Node",
                "Error"
            ],
            "answer": "No, polyfill only"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-shared-closure-array",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Shared Array in Multiple Closures",
        "shortInsight": "Multiple timers mutate same array reference!",
        "teaching": "All closures over the same array object see and perform mutations on the identical array.",
        "realLifeExample": "Think of the array as one shared pizza – every timer takes a slice from the same pie!",
        "quiz": {
            "question": "If 3 timers push to the same array, how many items at end?",
            "options": [
                "1",
                "3",
                "0",
                "Error"
            ],
            "answer": "3"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-check-phase-setimmediate",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Check Phase setImmediate",
        "shortInsight": "Check phase is only for setImmediate!",
        "teaching": "The check phase exists solely to execute setImmediate callbacks after the poll phase.",
        "realLifeExample": "Think of the check phase as the 'express checkout' line that only setImmediate customers can use!",
        "quiz": {
            "question": "Which callbacks run exclusively in the check phase?",
            "options": [
                "setTimeout",
                "setImmediate",
                "Promises",
                "fs callbacks"
            ],
            "answer": "setImmediate"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-reflect-apply",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Reflect.apply this in Timer",
        "shortInsight": "Reflect.apply sets this only once!",
        "teaching": "Reflect.apply sets this for the current call only – passing the function to setTimeout loses the context again.",
        "realLifeExample": "Think of Reflect.apply as a one-time phone call introduction that doesn't stick for the timer!",
        "quiz": {
            "question": "Does Reflect.apply(obj, fn) before setTimeout keep this?",
            "options": [
                "Yes",
                "No",
                "Only in strict",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-default-param-closure",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Default Parameters in Closure Mutation",
        "shortInsight": "Default params capture at call time!",
        "teaching": "Default parameters are evaluated at function call time, so using them in timers can capture the current value correctly.",
        "realLifeExample": "Think of default params as taking a fresh photo each time the function is called!",
        "quiz": {
            "question": "Does using default param in setTimeout fix mutation?",
            "options": [
                "No",
                "Yes for that value",
                "Only var",
                "Error"
            ],
            "answer": "Yes for that value"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-close-callbacks",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Close Callbacks Phase",
        "shortInsight": "Close phase runs before next timers!",
        "teaching": "The close callbacks phase executes cleanup for closed sockets etc. before the event loop returns to timers.",
        "realLifeExample": "Think of it as saying goodbye to guests before starting the next round of the party!",
        "quiz": {
            "question": "When do close callbacks run relative to timers?",
            "options": [
                "After timers",
                "Before next timers",
                "Same time",
                "Never"
            ],
            "answer": "Before next timers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-async-function",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in async Function",
        "shortInsight": "async functions are regular for this binding!",
        "teaching": "async function declarations behave like regular functions for 'this' – they lose context in timers unless arrow or bound.",
        "realLifeExample": "Think of async as just adding await sugar – the this rules stay the same!",
        "quiz": {
            "question": "What is this inside an async function passed to setTimeout?",
            "options": [
                "The async context",
                "undefined",
                "global",
                "Promise"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-object-assign-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Object.assign Mutation in Callback",
        "shortInsight": "Object.assign mutates target object!",
        "teaching": "Object.assign modifies the target object in place even when called inside async callbacks.",
        "realLifeExample": "Think of Object.assign as copying stickers onto the same notebook page!",
        "quiz": {
            "question": "Does Object.assign(target, source) inside timer mutate target?",
            "options": [
                "No",
                "Yes",
                "Only shallow",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-idle-prepare",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Idle/Prepare Phase",
        "shortInsight": "Internal phase for libuv!",
        "teaching": "The idle and prepare phases are internal to libuv and not directly accessible to user code via timers or I/O.",
        "realLifeExample": "Think of idle/prepare as the backstage crew setting up before the next act – you never see them!",
        "quiz": {
            "question": "Can user code schedule callbacks for idle/prepare phase?",
            "options": [
                "Yes with API",
                "No",
                "Only nextTick",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-super-class",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this with super in Class",
        "shortInsight": "super calls parent with correct this!",
        "teaching": "In class constructors and methods, super() or super.method() automatically uses the correct subclass this.",
        "realLifeExample": "Think of super as calling your parent's phone with your own name tag attached!",
        "quiz": {
            "question": "Does super.method() inside class keep subclass this?",
            "options": [
                "No",
                "Yes",
                "Only arrow",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-pending-callbacks",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Pending Callbacks Phase",
        "shortInsight": "Pending for deferred I/O errors!",
        "teaching": "The pending callbacks phase executes callbacks for deferred I/O operations like some TCP errors that couldn't be handled in poll.",
        "realLifeExample": "Think of it as the 'sorry, delayed delivery' notifications phase!",
        "quiz": {
            "question": "What kind of callbacks run in pending callbacks phase?",
            "options": [
                "setTimeout",
                "Deferred I/O errors",
                "setImmediate",
                "Promises"
            ],
            "answer": "Deferred I/O errors"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-closure-let-iife",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "let in IIFE for Mutation Fix",
        "shortInsight": "let + IIFE gives per-iteration binding!",
        "teaching": "Using let inside an IIFE inside a loop creates a fresh variable for each timer closure.",
        "realLifeExample": "Think of it as photocopying the list for each friend separately!",
        "quiz": {
            "question": "Does let inside IIFE fix the classic loop timer problem?",
            "options": [
                "No",
                "Yes",
                "Only var",
                "Depends"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-global-strict-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Global Strict Timer",
        "shortInsight": "Strict global this is undefined in callbacks!",
        "teaching": "Even at global scope, strict mode makes timer callbacks have this = undefined.",
        "realLifeExample": "Think of strict mode as a global rule that no one gets the default seat!",
        "quiz": {
            "question": "In strict mode global code, this inside setTimeout is?",
            "options": [
                "global",
                "undefined",
                "module",
                "Error"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-queue-microtask-starvation",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "queueMicrotask Starvation",
        "shortInsight": "Recursive queueMicrotask also starves!",
        "teaching": "Recursive queueMicrotask calls keep the microtask queue full, preventing timers and I/O the same way nextTick does.",
        "realLifeExample": "Think of it as endless urgent emails that never let you read normal ones!",
        "quiz": {
            "question": "Can timers run with recursive queueMicrotask?",
            "options": [
                "Yes",
                "No",
                "Only once",
                "After drain"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-promise-async-arrow",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Arrow in Promise with async",
        "shortInsight": "Arrow + async preserves this perfectly!",
        "teaching": "Combining arrow function with async/await inside objects keeps lexical this throughout the async flow.",
        "realLifeExample": "Think of arrow async as a GPS that never forgets the destination even on long detours!",
        "quiz": {
            "question": "Does async arrow method keep this in await?",
            "options": [
                "No",
                "Yes",
                "Only without await",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-array-spread-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Array Spread Mutation in Async",
        "shortInsight": "Spread creates copy – original unchanged!",
        "teaching": "Using [...arr] inside timer creates a new array; mutations to the copy don't affect the original.",
        "realLifeExample": "Think of spread as photocopying the list – changes on the copy don't affect the original!",
        "quiz": {
            "question": "If you spread array in timer and push, does original change?",
            "options": [
                "Yes",
                "No",
                "Only shallow",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-timer-phase-order",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Timers Phase Execution Order",
        "shortInsight": "Expired timers run in insertion order!",
        "teaching": "In the timers phase, all expired setTimeout/setInterval callbacks run in the order they were scheduled.",
        "realLifeExample": "Think of timers as numbered tickets – you serve them in the order they were taken!",
        "quiz": {
            "question": "Two setTimeout(0) scheduled – which fires first?",
            "options": [
                "Second",
                "First scheduled",
                "Random",
                "Simultaneous"
            ],
            "answer": "First scheduled"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-class-static",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Static Class Method Timer",
        "shortInsight": "Static methods this is the class!",
        "teaching": "In static methods, 'this' refers to the class constructor itself, even when the method is passed to setTimeout.",
        "realLifeExample": "Think of static as the company name tag – the timer still knows it's the company calling!",
        "quiz": {
            "question": "In static method passed to setTimeout, this equals?",
            "options": [
                "Instance",
                "The class",
                "undefined",
                "global"
            ],
            "answer": "The class"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-set-clear-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Set.delete in Async Callback",
        "shortInsight": "Set.delete mutates the collection!",
        "teaching": "Deleting from a Set inside a timer callback removes the item from the original Set reference.",
        "realLifeExample": "Think of Set.delete as crossing a name off the shared guest list later!",
        "quiz": {
            "question": "Does setTimeout(() => mySet.delete(key)) remove the item?",
            "options": [
                "No",
                "Yes when callback runs",
                "Only synchronously",
                "Error"
            ],
            "answer": "Yes when callback runs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-microtask-after-poll",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Microtasks After Poll Phase",
        "shortInsight": "Microtasks drain after every phase!",
        "teaching": "After the poll phase executes I/O callbacks, the microtask queue is fully drained before moving to check or close phases.",
        "realLifeExample": "Think of microtasks as quick replies you must send after every phone call before hanging up!",
        "quiz": {
            "question": "After fs.readFile callback, when do queued Promise.then run?",
            "options": [
                "Next loop",
                "Immediately after I/O",
                "Before I/O",
                "Never"
            ],
            "answer": "Immediately after I/O"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-module-function-export",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Exported Function",
        "shortInsight": "Exported functions lose module this!",
        "teaching": "When you export a regular function and call it from another module, 'this' is no longer module.exports – it becomes global or undefined.",
        "realLifeExample": "Think of exporting as handing the notebook to someone else – they use their own this!",
        "quiz": {
            "question": "When calling an exported regular function, what is this?",
            "options": [
                "module.exports",
                "undefined or global",
                "The importing module",
                "Error"
            ],
            "answer": "undefined or global"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-var-hoisting-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "var Hoisting in Timer Closure",
        "shortInsight": "Hoisted var is undefined until assignment!",
        "teaching": "var is hoisted but initialized as undefined. If a timer closes over it before assignment, the callback sees undefined.",
        "realLifeExample": "Think of hoisting as announcing the shopping list exists but it's blank until you write on it!",
        "quiz": {
            "question": "If var x is declared after setTimeout that logs x, what is logged?",
            "options": [
                "Value",
                "undefined",
                "Error",
                "1"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-setimmediate-recursive",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Recursive setImmediate",
        "shortInsight": "Recursive setImmediate never starves timers!",
        "teaching": "Unlike nextTick, recursive setImmediate still allows the event loop to cycle through other phases, so timers can still run.",
        "realLifeExample": "Think of recursive setImmediate as repeatedly taking the express lane but still letting others through!",
        "quiz": {
            "question": "Does recursive setImmediate block setTimeout?",
            "options": [
                "Yes",
                "No",
                "Only after 10",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-arrow-promise-then",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Arrow in Promise.then",
        "shortInsight": "Arrow in .then keeps outer this!",
        "teaching": "Using an arrow function in .then inherits the lexical this from the scope where the Promise chain was created.",
        "realLifeExample": "Think of arrow then as keeping the original owner's name tag through the entire promise journey!",
        "quiz": {
            "question": "In obj.method = function() { return Promise.resolve().then(() => this); }, what is this in then?",
            "options": [
                "undefined",
                "obj",
                "Promise",
                "global"
            ],
            "answer": "obj"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-array-length-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Array Length Mutation in Timer",
        "shortInsight": "Direct length = mutates the array!",
        "teaching": "Setting arr.length = 0 inside a timer callback truncates the original array immediately when the callback runs.",
        "realLifeExample": "Think of changing length as cutting the shopping list paper shorter – it affects the shared list!",
        "quiz": {
            "question": "After setTimeout(() => arr.length = 0), is the array empty?",
            "options": [
                "No until later",
                "Yes when callback runs",
                "Never",
                "Error"
            ],
            "answer": "Yes when callback runs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-pending-i-o",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Pending I/O Callbacks Order",
        "shortInsight": "Pending callbacks before poll!",
        "teaching": "Deferred I/O callbacks (like OS-level errors) run in the pending callbacks phase before the poll phase.",
        "realLifeExample": "Think of pending as the 'we couldn't deliver' notices before checking the main mailbox!",
        "quiz": {
            "question": "When do pending I/O callbacks run relative to poll?",
            "options": [
                "After poll",
                "Before poll",
                "Same time",
                "Never"
            ],
            "answer": "Before poll"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-class-constructor-timer",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "this in Constructor with Timer",
        "shortInsight": "Constructor this is the instance!",
        "teaching": "Inside a class constructor, 'this' is the new instance. Scheduling a timer inside the constructor keeps that instance as this if using arrow.",
        "realLifeExample": "Think of the constructor as introducing yourself – the timer remembers the name you gave!",
        "quiz": {
            "question": "In class constructor with setTimeout(() => console.log(this)), what is logged?",
            "options": [
                "undefined",
                "The instance",
                "Class",
                "Error"
            ],
            "answer": "The instance"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-const-reassign-error",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Const Reassign in Async",
        "shortInsight": "Const reassign throws even in timer!",
        "teaching": "Attempting to reassign a const variable inside a timer callback throws a TypeError synchronously when the callback executes.",
        "realLifeExample": "Think of const as a locked safe – trying to replace the entire safe later still fails!",
        "quiz": {
            "question": "Does setTimeout(() => { const x = 1; x = 2; }) throw?",
            "options": [
                "No",
                "Yes when timer runs",
                "Immediately",
                "Never"
            ],
            "answer": "Yes when timer runs"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-close-phase-order",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Close Callbacks Order",
        "shortInsight": "Close callbacks run after check!",
        "teaching": "The close callbacks phase executes after the check phase in every event loop iteration.",
        "realLifeExample": "Think of close as saying goodbye after the express checkout is done!",
        "quiz": {
            "question": "After setImmediate, when do close callbacks run?",
            "options": [
                "Before check",
                "After check",
                "Before timers",
                "Never"
            ],
            "answer": "After check"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-exported-arrow",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Exported Arrow Function this",
        "shortInsight": "Exported arrow keeps creation this!",
        "teaching": "Arrow functions exported from a module keep the lexical this from the module where they were defined.",
        "realLifeExample": "Think of exported arrows as carrying their original notebook with them!",
        "quiz": {
            "question": "An exported arrow function from a module – what is its this when called elsewhere?",
            "options": [
                "undefined",
                "The module's this",
                "global",
                "The caller"
            ],
            "answer": "The module's this"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-map-clear-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Map.clear in Timer",
        "shortInsight": "Map.clear empties the original map!",
        "teaching": "Calling clear() on a Map inside async code empties the shared Map reference.",
        "realLifeExample": "Think of clear as erasing the entire shared address book at once!",
        "quiz": {
            "question": "Does map.clear() inside setTimeout empty the map?",
            "options": [
                "No",
                "Yes",
                "Only size",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-timers-after-close",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Timers After Close Phase",
        "shortInsight": "After close, back to timers!",
        "teaching": "After the close callbacks phase, the event loop loops back to the timers phase for the next iteration.",
        "realLifeExample": "Think of it as the party starting another round after everyone has said goodbye!",
        "quiz": {
            "question": "After close callbacks, which phase runs next?",
            "options": [
                "Poll",
                "Timers",
                "Check",
                "Pending"
            ],
            "answer": "Timers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-strict-exported",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Strict Mode Exported Function this",
        "shortInsight": "Strict exported functions have undefined this!",
        "teaching": "Functions exported from strict modules have this = undefined when called without explicit context.",
        "realLifeExample": "Think of strict export as sending a polite 'no default seat' note with the function!",
        "quiz": {
            "question": "Calling a strict-mode exported regular function – this is?",
            "options": [
                "module.exports",
                "undefined",
                "global",
                "Error"
            ],
            "answer": "undefined"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-weakset-add-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "WeakSet.add in Async",
        "shortInsight": "WeakSet.add mutates the set!",
        "teaching": "Adding to a WeakSet inside a timer updates the original WeakSet reference.",
        "realLifeExample": "Think of WeakSet as a private guest list – new guests can still be added later!",
        "quiz": {
            "question": "Does WeakSet.add inside setTimeout add the item?",
            "options": [
                "No",
                "Yes",
                "Only if strong",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-microtask-after-close",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Microtasks After Close Phase",
        "shortInsight": "Microtasks drain even after close!",
        "teaching": "The microtask queue is drained after the close callbacks phase before the loop returns to timers.",
        "realLifeExample": "Think of microtasks as final quick replies after saying goodbye to everyone!",
        "quiz": {
            "question": "When do microtasks run after close callbacks?",
            "options": [
                "Before next timers",
                "After next timers",
                "Never",
                "Same time"
            ],
            "answer": "Before next timers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-arrow-static",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Arrow in Static Class Method",
        "shortInsight": "Static arrow this is the class!",
        "teaching": "Arrow functions in static class fields or methods have this bound to the class constructor.",
        "realLifeExample": "Think of static arrow as the company logo that never changes owner!",
        "quiz": {
            "question": "In static arrow method, this refers to?",
            "options": [
                "Instance",
                "The class",
                "undefined",
                "global"
            ],
            "answer": "The class"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-array-splice-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Array.splice in Timer",
        "shortInsight": "splice mutates original array!",
        "teaching": "Array.prototype.splice modifies the array in place even when called asynchronously.",
        "realLifeExample": "Think of splice as cutting pieces out of the shared grocery list!",
        "quiz": {
            "question": "Does arr.splice(0,1) inside setTimeout change the array?",
            "options": [
                "No",
                "Yes",
                "Only copy",
                "Error"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-last-phase-loop",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Event Loop Full Cycle Return",
        "shortInsight": "After close → timers again!",
        "teaching": "The event loop always returns to the timers phase after completing the close callbacks phase.",
        "realLifeExample": "Think of the full cycle as a clock that resets to the timer hand after every full rotation!",
        "quiz": {
            "question": "After the close callbacks phase, the next phase is?",
            "options": [
                "Check",
                "Timers",
                "Poll",
                "Pending"
            ],
            "answer": "Timers"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-global-arrow",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Global Arrow Function this",
        "shortInsight": "Global arrow this is global object!",
        "teaching": "Arrow functions defined at global scope inherit this from the global object even in strict mode.",
        "realLifeExample": "Think of global arrow as always knowing the big picture owner!",
        "quiz": {
            "question": "In global scope, arrow function this equals?",
            "options": [
                "undefined",
                "global",
                "module",
                "Error"
            ],
            "answer": "global"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-object-seal-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Object.seal Mutation Attempt",
        "shortInsight": "seal prevents adding properties!",
        "teaching": "Object.seal makes existing properties non-configurable and prevents adding new ones. Mutations inside timers fail silently or throw in strict.",
        "realLifeExample": "Think of seal as taping the notebook shut – no new pages can be added!",
        "quiz": {
            "question": "Can you add a new property to sealed object in timer?",
            "options": [
                "Yes",
                "No",
                "Only modify",
                "Error always"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-microtask-priority",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Microtask vs Macrotask Priority",
        "shortInsight": "Microtasks always before macrotasks!",
        "teaching": "No matter which phase, the microtask queue is completely drained before any macrotask (timers, I/O, check) executes.",
        "realLifeExample": "Think of microtasks as VIPs that always cut the line before regular customers!",
        "quiz": {
            "question": "Do microtasks run before or after a macrotask?",
            "options": [
                "After",
                "Before",
                "Interleaved",
                "Same"
            ],
            "answer": "Before"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-this-module-strict-arrow",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Strict Module Arrow this",
        "shortInsight": "Module arrow this is module.exports!",
        "teaching": "Even in strict mode modules, top-level arrow functions have this bound to module.exports.",
        "realLifeExample": "Think of module arrow as carrying the export notebook no matter the rules!",
        "quiz": {
            "question": "In strict module, top-level arrow function this equals?",
            "options": [
                "undefined",
                "module.exports",
                "global",
                "Error"
            ],
            "answer": "module.exports"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-mutation-array-concat-async",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Array.concat in Async",
        "shortInsight": "concat returns new array – no mutation!",
        "teaching": "arr.concat() creates a new array; the original is unchanged even if called asynchronously.",
        "realLifeExample": "Think of concat as making a photocopy of the list – changes don't affect the original!",
        "quiz": {
            "question": "Does arr.concat([1]) inside timer change original arr?",
            "options": [
                "Yes",
                "No",
                "Only if assigned",
                "Error"
            ],
            "answer": "No"
        },
        "isInterviewQuestion": true
    },
    {
        "id": "node-js-interview-questions-event-loop-final-microtask-drain",
        "category": "Node.js",
        "topic": "Interview Questions",
        "subtopic": "Final Microtask Drain Before Exit",
        "shortInsight": "Microtasks drain before process exit!",
        "teaching": "Before Node.js exits, the event loop drains any remaining microtasks even after no more macrotasks.",
        "realLifeExample": "Think of it as answering all urgent emails before turning off the lights and leaving!",
        "quiz": {
            "question": "Do pending microtasks run before process exit?",
            "options": [
                "No",
                "Yes",
                "Only nextTick",
                "Never"
            ],
            "answer": "Yes"
        },
        "isInterviewQuestion": true
    }
]