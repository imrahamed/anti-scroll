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
    }
]