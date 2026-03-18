export const architectureData = [
    {
        "id": "architecture-singleton",
        "category": "Architecture & Design Patterns",
        "topic": "Design Patterns",
        "subtopic": "Singleton",
        "shortInsight": "Singleton: One instance only!",
        "teaching": "The Singleton pattern ensures a class has only one instance and provides a global access point to it. In Node.js, modules are often singletons by nature, since require() caches and returns the same object every time.",
        "realLifeExample": "Think of Singleton like a president role: there is only one president in a country, and everyone refers to the same person. No matter where you look, you get that one instance.",
        "quiz": {
            "question": "What does the Singleton pattern guarantee?",
            "options": [
                "Multiple instances can be created",
                "Exactly one instance of a class exists globally",
                "Classes are abstract",
                "All methods are static"
            ],
            "answer": "Exactly one instance of a class exists globally"
        }
    },
    {
        "id": "architecture-factory",
        "category": "Architecture & Design Patterns",
        "topic": "Design Patterns",
        "subtopic": "Factory",
        "shortInsight": "Factory: Create objects without specifying classes!",
        "teaching": "The Factory pattern provides an interface for creating objects, but lets subclasses decide which class to instantiate. It decouples object creation from usage, allowing new types to be introduced easily without changing client code.",
        "realLifeExample": "Imagine a factory assembly line: you press a button for 'car' or 'truck', and the factory produces the appropriate vehicle without you needing to know the details of its construction.",
        "quiz": {
            "question": "What is an advantage of using the Factory pattern?",
            "options": [
                "It hard-codes object classes in client code",
                "It makes adding new object types easier without changing client logic",
                "It ensures only one object is ever made",
                "It removes all abstraction"
            ],
            "answer": "It makes adding new object types easier without changing client logic"
        }
    },
    {
        "id": "architecture-observer",
        "category": "Architecture & Design Patterns",
        "topic": "Design Patterns",
        "subtopic": "Observer",
        "shortInsight": "Observer: Publish-subscribe event pattern!",
        "teaching": "The Observer pattern defines a one-to-many relationship where subjects (observables) notify observers (subscribers) about changes. Observers register to receive updates whenever the subject changes state, allowing decoupled communication.",
        "realLifeExample": "Think of Observer like a newsletter subscription: the publisher sends updates to all subscribers whenever there's news. Each subscriber receives and reacts to the update independently.",
        "quiz": {
            "question": "Which describes the Observer pattern?",
            "options": [
                "An object that can only have one listener",
                "Observers automatically update Subjects",
                "Subjects notify registered observers of changes",
                "It eliminates events entirely"
            ],
            "answer": "Subjects notify registered observers of changes"
        }
    },
    {
        "id": "architecture-mvc",
        "category": "Architecture & Design Patterns",
        "topic": "Software Architecture",
        "subtopic": "MVC",
        "shortInsight": "MVC: Structure code into Models, Views, Controllers!",
        "teaching": "Model-View-Controller separates an application into three parts. The Model handles data and business logic, the View handles the user interface, and the Controller processes user input, updating Model or View accordingly. This separates concerns and makes maintenance easier.",
        "realLifeExample": "Imagine a restaurant: The Model is the kitchen (data/logic), the View is the dining area (UI), and the Controller is the waiter (mediator) taking orders and updating kitchen or serving food.",
        "quiz": {
            "question": "Which component in MVC is responsible for handling user input and interactions?",
            "options": [
                "Model",
                "View",
                "Controller",
                "Database"
            ],
            "answer": "Controller"
        }
    },
    {
        "id": "architecture-clean-architecture",
        "category": "Architecture & Design Patterns",
        "topic": "Software Architecture",
        "subtopic": "Clean Architecture",
        "shortInsight": "Clean Architecture: Independent, layered design!",
        "teaching": "Clean Architecture emphasizes separation of concerns and independence of frameworks. It usually involves layers (Entities, Use Cases, Interface Adapters, Frameworks) so that business logic (inner layers) doesn't depend on outer layers. This makes code maintainable and testable.",
        "realLifeExample": "Think of Clean Architecture like an onion: core business rules at the center, surrounded by layers of policies, frameworks, and UI on the outside. Inner layers never depend on the outer layers.",
        "quiz": {
            "question": "What is a principle of Clean Architecture?",
            "options": [
                "Outer layers depend on inner layers",
                "All code is in a single layer",
                "No separation of concerns",
                "Inner business rules depend on outer frameworks"
            ],
            "answer": "Outer layers depend on inner layers"
        }
    },
    {
        "id": "architecture-microservices",
        "category": "Architecture & Design Patterns",
        "topic": "Software Architecture",
        "subtopic": "Microservices",
        "shortInsight": "Microservices: Many small services instead of a monolith!",
        "teaching": "Microservices architecture breaks an application into small, independent services that communicate over APIs. Each service does one thing and can be developed, deployed, and scaled separately. This increases flexibility and fault tolerance.",
        "realLifeExample": "Think of microservices like a fleet of food trucks: each truck (service) has a specific menu item (functionality). They operate independently, so one can be updated or fixed without shutting down all services.",
        "quiz": {
            "question": "What is a key benefit of microservices?",
            "options": [
                "Tight coupling of all features",
                "Independent deployment and scaling of components",
                "It requires a single codebase",
                "No need for service communication"
            ],
            "answer": "Independent deployment and scaling of components"
        }
    },
    {
        "id": "arch-advanced-interview-patterns",
        "category": "Architecture & Design Patterns",
        "topic": "Advanced Interview Questions",
        "subtopic": "Singleton & Dependency Injection",
        "shortInsight": "Architecture Deep Dive: Avoid global singletons, inject dependencies!",
        "teaching": "While the Singleton pattern (one instance globally) is easy to use, it hides dependencies and makes unit testing incredibly difficult since state persists across tests. Modern systems use Dependency Injection (DI) to pass instances into classes, making code modular and testable.",
        "realLifeExample": "A global singleton is like an omnipotent mechanic magically fixing your car without you asking. Dependency Injection is you explicitly driving your car to a specific mechanic and asking them to fix it.",
        "quiz": {
            "question": "Why is the Singleton pattern often considered an 'anti-pattern' in modern unit testing?",
            "options": ["It consumes too much CPU power", "It creates hidden global state that persists across different tests", "It forces multiple database connections", "It only works with SQL databases"],
            "answer": "It creates hidden global state that persists across different tests"
        },
        "isInterviewQuestion": true
    }
]