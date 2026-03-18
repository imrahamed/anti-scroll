export const securityData = [
    {
        "id": "security-session-based-auth",
        "category": "Security Basics",
        "topic": "Authentication & Authorization",
        "subtopic": "Session-based Auth",
        "shortInsight": "Session Auth: Server remembers logged-in users!",
        "teaching": "Session-based authentication stores a user session on the server after login, usually via a cookie session ID sent to the client. The server keeps track of active sessions in memory or a database. Each subsequent request references this session.",
        "realLifeExample": "Think of session-based auth like checking into a hotel: when you log in (check-in), the hotel (server) gives you a keycard (session ID). As long as you present it, the hotel knows you\'re a registered guest (authenticated).",
        "quiz": {
            "question": "What does a session-based authentication store on the client?",
            "options": [
                "The user's password",
                "A session identifier (e.g., in a cookie)",
                "The user's entire profile data",
                "Nothing; sessions are only server-side"
            ],
            "answer": "A session identifier (e.g., in a cookie)"
        }
    },
    {
        "id": "security-jwt-json-web-tokens",
        "category": "Security Basics",
        "topic": "Authentication & Authorization",
        "subtopic": "JWT (JSON Web Tokens)",
        "shortInsight": "JWT: Self-contained tokens for stateless auth!",
        "teaching": "JWTs are tokens that contain JSON payload and a signature. They are self-contained, meaning the server doesn’t need to store sessions; instead, the token itself carries user identity and claims. They are signed so the server can verify they weren't tampered with.",
        "realLifeExample": "Imagine a JWT as a locked envelope containing your credentials; the server can open it with a key (signature check) and trust the contents without keeping your details on file.",
        "quiz": {
            "question": "What ensures the integrity of a JWT?",
            "options": [
                "The HTTPS protocol",
                "The signature with a secret or public key",
                "Storing it in a database",
                "Encrypting the entire token"
            ],
            "answer": "The signature with a secret or public key"
        }
    },
    {
        "id": "security-oauth-2.0",
        "category": "Security Basics",
        "topic": "Authentication & Authorization",
        "subtopic": "OAuth 2.0",
        "shortInsight": "OAuth 2.0: Delegated authorization standard!",
        "teaching": "OAuth 2.0 is a protocol that allows users to grant limited access to their resources on one site (like Google or Facebook) to another site, without giving away their password. It issues tokens after an authorization flow.",
        "realLifeExample": "Think of OAuth like giving a valet key to your car: you allow it to start and drive (limited access), but not open the trunk (full access to all data).",
        "quiz": {
            "question": "What is OAuth 2.0 primarily used for?",
            "options": [
                "Encrypting data in transit",
                "Granting limited access to resources without sharing credentials",
                "Running JavaScript code",
                "Managing user sessions on a server"
            ],
            "answer": "Granting limited access to resources without sharing credentials"
        }
    },
    {
        "id": "security-cors",
        "category": "Security Basics",
        "topic": "Web Security Best Practices",
        "subtopic": "CORS",
        "shortInsight": "CORS: Control who can call your API!",
        "teaching": "CORS (Cross-Origin Resource Sharing) is a browser security feature. It lets servers specify which domains are allowed to access resources. By setting CORS headers (like Access-Control-Allow-Origin), you control who can make cross-site requests to your API.",
        "realLifeExample": "Think of CORS like a guest list for a party: only the specified domains are allowed to enter and interact with your resources, blocking uninvited origins.",
        "quiz": {
            "question": "What does CORS stand for?",
            "options": [
                "Cross-Origin Resource Sharing",
                "Cross-Order Request Service",
                "Crypto-Origin Registration System",
                "Content-Origin Resource Security"
            ],
            "answer": "Cross-Origin Resource Sharing"
        }
    },
    {
        "id": "security-helmet.js",
        "category": "Security Basics",
        "topic": "Web Security Best Practices",
        "subtopic": "Helmet.js",
        "shortInsight": "Helmet.js: Secure your app with HTTP headers!",
        "teaching": "Helmet.js is middleware for Express that sets various HTTP headers (like HSTS, XSS protection, content security policy) to harden security. It helps protect against common attacks by configuring secure defaults.",
        "realLifeExample": "Think of Helmet.js as giving your HTTP responses a protective helmet: it adds safeguards (headers) so that browsers handle content more securely (like preventing clickjacking or enforcing HTTPS).",
        "quiz": {
            "question": "What is the main purpose of using Helmet.js in an Express application?",
            "options": [
                "To minify JavaScript code",
                "To serve static files",
                "To set secure HTTP headers automatically",
                "To enable hot reloading"
            ],
            "answer": "To set secure HTTP headers automatically"
        }
    },
    {
        "id": "security-input-validation",
        "category": "Security Basics",
        "topic": "Web Security Best Practices",
        "subtopic": "Input Validation",
        "shortInsight": "Input validation: Block malicious data at the door!",
        "teaching": "Input validation means checking and sanitizing user input before processing it. This prevents attacks like SQL injection or XSS by ensuring only safe, expected data is accepted (e.g., verifying types, length, or content).",
        "realLifeExample": "Imagine input validation as a bouncer at a club checking IDs: it screens all incoming data to ensure nothing malicious or unexpected gets through.",
        "quiz": {
            "question": "Which attack can be prevented by proper input validation?",
            "options": [
                "Denial of Service (DoS)",
                "Cross-Site Scripting (XSS)",
                "Server overheating",
                "DNS poisoning"
            ],
            "answer": "Cross-Site Scripting (XSS)"
        }
    },
    {
        "id": "security-hashing-passwords-bcrypt",
        "category": "Security Basics",
        "topic": "Cryptography",
        "subtopic": "Hashing Passwords (bcrypt)",
        "shortInsight": "bcrypt: One-way hashing for passwords!",
        "teaching": "bcrypt is a password hashing function that applies a salt and multiple rounds of hashing. It’s designed to be slow (to thwart brute-force attacks) and stores only the hash, not the plaintext. When a user logs in, bcrypt hashes the input and compares it to the stored hash.",
        "realLifeExample": "Think of bcrypt like shredding a document: once you hash a password, you can’t easily reconstruct the original. The salt is like a unique twist on the shredder that makes each outcome different.",
        "quiz": {
            "question": "What is the purpose of 'salt' in password hashing (like bcrypt)?",
            "options": [
                "To store the password in plain text",
                "To make each hash unique even for identical passwords",
                "To speed up the hashing process",
                "To act as a password hint"
            ],
            "answer": "To make each hash unique even for identical passwords"
        }
    },
    {
        "id": "security-encryption",
        "category": "Security Basics",
        "topic": "Cryptography",
        "subtopic": "Encryption",
        "shortInsight": "Encryption: Scramble data so only owners can read it!",
        "teaching": "Encryption is the process of encoding data so it cannot be read without a key. It uses algorithms (like AES, RSA) to transform plaintext into ciphertext. Only someone with the correct decryption key can restore the original data, keeping it confidential.",
        "realLifeExample": "Imagine encryption like sending a locked safe: you put secrets inside and lock it with a key. Without the key (which only the receiver has), no one else can see what’s inside.",
        "quiz": {
            "question": "What is the main goal of encryption?",
            "options": [
                "To permanently delete data",
                "To prevent data from being readable without a key",
                "To speed up data transmission",
                "To compress data size"
            ],
            "answer": "To prevent data from being readable without a key"
        }
    },
    {
        "id": "sec-advanced-interview-xss",
        "category": "Security Basics",
        "topic": "Advanced Interview Questions",
        "subtopic": "XSS vs CSRF Attacks",
        "shortInsight": "Security Deep Dive: Stealing cookies vs Forging requests!",
        "teaching": "Cross-Site Scripting (XSS) involves injecting malicious JavaScript into a web page (e.g., via a comment) that steals another user's `localStorage` or session cookies. Cross-Site Request Forgery (CSRF) tricks an already authenticated user into sending an unwanted request (like a bank transfer) by exploiting the browser's automatic inclusion of cookies.",
        "realLifeExample": "XSS is a pickpocket stealing your house keys from your jacket. CSRF is a con artist wearing a mask of your face to trick the bank teller into making a withdrawal, since you're already logged in.",
        "quiz": {
            "question": "Setting cookies as HttpOnly prevents which common attack vector?",
            "options": ["SQL Injection", "CSRF", "XSS", "DDoS"],
            "answer": "XSS"
        },
        "isInterviewQuestion": true
    }
]