export const testingData = [
    {
        "id": "testing-unit-testing",
        "category": "Testing",
        "topic": "Types of Testing",
        "subtopic": "Unit Testing",
        "shortInsight": "Unit testing: Check individual code pieces!",
        "teaching": "Unit tests focus on testing small, isolated pieces of code (like functions or classes) to ensure they work correctly. They run very fast and help catch bugs early by verifying each 'unit' of code behaves as expected with various inputs.",
        "realLifeExample": "Think of unit testing as inspecting each brick of a building: before constructing the house, you check each brick individually for flaws. This way, when the building is up, you know each part is solid.",
        "quiz": {
            "question": "What does a unit test typically verify?",
            "options": [
                "The entire system's integration",
                "A single function or component in isolation",
                "Performance under load",
                "The UI layout"
            ],
            "answer": "A single function or component in isolation"
        }
    },
    {
        "id": "testing-integration-testing",
        "category": "Testing",
        "topic": "Types of Testing",
        "subtopic": "Integration Testing",
        "shortInsight": "Integration testing: Ensure combined parts work together!",
        "teaching": "Integration tests validate that multiple components or systems work together correctly. After unit tests, integration tests might check that modules interact properly or that a database query actually retrieves data, ensuring the pieces fit seamlessly.",
        "realLifeExample": "Imagine integration testing as checking that all the rooms in a house connect properly: doors align and plumbing runs between floors. It's not enough that each room (unit) is fine alone; they must integrate smoothly.",
        "quiz": {
            "question": "What is the focus of integration testing?",
            "options": [
                "Testing each individual unit in isolation",
                "Testing how multiple parts of a system work together",
                "Testing user interface elements only",
                "Testing only in production environment"
            ],
            "answer": "Testing how multiple parts of a system work together"
        }
    },
    {
        "id": "testing-e2e-testing",
        "category": "Testing",
        "topic": "Types of Testing",
        "subtopic": "E2E Testing",
        "shortInsight": "E2E testing: Simulate user experience from start to finish!",
        "teaching": "End-to-end (E2E) tests simulate real user scenarios by testing the entire application flow — from UI to backend. They verify that the system works as a whole, including databases, networks, and user interfaces.",
        "realLifeExample": "Think of E2E tests like taking a car for a full test drive: you check steering, brakes, and engine together in real-world conditions to ensure everything works in tandem.",
        "quiz": {
            "question": "What does E2E stand for in testing?",
            "options": [
                "Entry to Exit",
                "End-to-End",
                "Efficiency to Efficiency",
                "Error to End"
            ],
            "answer": "End-to-End"
        }
    },
    {
        "id": "testing-jest",
        "category": "Testing",
        "topic": "Testing Frameworks",
        "subtopic": "Jest",
        "shortInsight": "Jest: Comprehensive JavaScript testing!",
        "teaching": "Jest is a popular testing framework for JavaScript (especially React). It provides an all-in-one solution including a test runner, assertion library, and mocking utilities. Jest features include snapshot testing and parallel execution of tests.",
        "realLifeExample": "Think of Jest like a full-service garage: it has the tools for writing tests, running them, and checking results, all in one package, to keep your JavaScript code in top shape.",
        "quiz": {
            "question": "Which feature is Jest especially known for?",
            "options": [
                "Real-time backend monitoring",
                "Snapshot testing",
                "Building mobile apps",
                "In-browser debugging"
            ],
            "answer": "Snapshot testing"
        }
    },
    {
        "id": "testing-vitest",
        "category": "Testing",
        "topic": "Testing Frameworks",
        "subtopic": "Vitest",
        "shortInsight": "Vitest: Fast testing powered by Vite!",
        "teaching": "Vitest is a fast, modern testing framework built on Vite. It runs tests in parallel and caches results for speed. It has a similar API to Jest but leverages the Vite dev server for ultra-fast startup and updates.",
        "realLifeExample": "Think of Vitest as a test runner on energy drinks: it starts and runs tests extremely quickly by using Vite's lightning-fast bundler and hot reload features under the hood.",
        "quiz": {
            "question": "What is a primary advantage of Vitest?",
            "options": [
                "It only runs in browsers",
                "It leverages Vite for very fast test execution",
                "It replaces TypeScript completely",
                "It has no mocking support"
            ],
            "answer": "It leverages Vite for very fast test execution"
        }
    },
    {
        "id": "testing-supertest",
        "category": "Testing",
        "topic": "Testing Frameworks",
        "subtopic": "Supertest",
        "shortInsight": "Supertest: Test HTTP APIs with ease!",
        "teaching": "Supertest is a library for testing Node.js HTTP servers. You can make requests to your Express (or other) app in tests and assert the response (status, headers, body). It works nicely with Jest or other test runners.",
        "realLifeExample": "Imagine Supertest as an automated customer that sends HTTP requests to your server and checks the replies, verifying your endpoints behave as expected.",
        "quiz": {
            "question": "What is Supertest primarily used for?",
            "options": [
                "Styling web pages",
                "Testing HTTP APIs by simulating requests",
                "Querying databases",
                "Monitoring production servers"
            ],
            "answer": "Testing HTTP APIs by simulating requests"
        }
    },
    {
        "id": "test-advanced-interview-mocks",
        "category": "Testing",
        "topic": "Advanced Interview Questions",
        "subtopic": "Mocks & Stubs",
        "shortInsight": "Testing Deep Dive: Don't call real APIs in your tests!",
        "teaching": "When unit testing, you should isolate your code from external dependencies (databases, 3rd-party APIs like Stripe). We use 'Mocks' to simulate the behavior of those dependencies. A mock tracks if it was called, with what arguments, and returns fake data instantly.",
        "realLifeExample": "Testing a car's dashboard speed display by running the car on a treadmill (mock) instead of driving it 100mph down an actual highway (real external system).",
        "quiz": {
            "question": "What is the primary purpose of mocking in unit tests?",
            "options": ["To make the tests run slower and more reliably", "To isolate the unit from its external dependencies (e.g., databases)", "To execute the entire end-to-end user flow", "To deploy code automatically"],
            "answer": "To isolate the unit from its external dependencies (e.g., databases)"
        },
        "isInterviewQuestion": true
    }
]