export interface MernQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'mongodb' | 'express' | 'react' | 'nodejs' | 'general';
  keywords: string[];
}

export const mernStackQuestions: MernQuestion[] = [
  // MongoDB Questions (50+)
  {
    id: 'mongo-1',
    question: 'What is MongoDB?',
    answer: 'MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents called BSON. It\'s designed for scalability, performance, and high availability. Unlike traditional relational databases, MongoDB doesn\'t require a predefined schema, making it ideal for applications with evolving data requirements.',
    category: 'mongodb',
    keywords: ['mongodb', 'what is mongodb', 'nosql', 'document database']
  },
  {
    id: 'mongo-2',
    question: 'What are the advantages of MongoDB?',
    answer: 'MongoDB offers several advantages: 1) Schema flexibility - no predefined structure required, 2) Horizontal scaling through sharding, 3) Rich query language with indexing support, 4) High performance for read/write operations, 5) Built-in replication for high availability, 6) JSON-like document storage that maps naturally to objects in programming languages.',
    category: 'mongodb',
    keywords: ['mongodb advantages', 'benefits of mongodb', 'why mongodb']
  },
  {
    id: 'mongo-3',
    question: 'What is a collection in MongoDB?',
    answer: 'A collection in MongoDB is equivalent to a table in relational databases. It\'s a group of MongoDB documents that typically share a similar structure. Collections don\'t enforce a schema, so documents within a collection can have different fields and data types.',
    category: 'mongodb',
    keywords: ['mongodb collection', 'collection', 'what is collection']
  },
  {
    id: 'mongo-4',
    question: 'What is a document in MongoDB?',
    answer: 'A document in MongoDB is a record in a collection, similar to a row in a relational database table. Documents are stored in BSON format (Binary JSON) and can contain nested objects, arrays, and various data types. Each document has a unique _id field.',
    category: 'mongodb',
    keywords: ['mongodb document', 'document', 'bson', 'what is document']
  },
  {
    id: 'mongo-5',
    question: 'What is BSON in MongoDB?',
    answer: 'BSON (Binary JSON) is the binary representation of JSON documents that MongoDB uses internally to store documents and make remote procedure calls. BSON extends JSON with additional data types like ObjectId, Date, and Binary data, and is designed to be efficient in both storage space and scan speed.',
    category: 'mongodb',
    keywords: ['bson', 'binary json', 'mongodb bson']
  },
  {
    id: 'mongo-6',
    question: 'How do you connect to MongoDB in Node.js?',
    answer: 'You can connect to MongoDB in Node.js using the official MongoDB driver or Mongoose ODM:\n\n```javascript\n// Using MongoDB driver\nconst { MongoClient } = require(\'mongodb\');\nconst client = new MongoClient(\'mongodb://localhost:27017\');\n\n// Using Mongoose\nconst mongoose = require(\'mongoose\');\nmongoose.connect(\'mongodb://localhost:27017/mydb\');\n```',
    category: 'mongodb',
    keywords: ['mongodb connection', 'connect mongodb', 'mongoose connect', 'mongodb nodejs']
  },
  {
    id: 'mongo-7',
    question: 'What is Mongoose?',
    answer: 'Mongoose is an Object Document Mapping (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data, includes built-in type casting, validation, query building, and business logic hooks. Mongoose makes it easier to work with MongoDB by providing structure and validation.',
    category: 'mongodb',
    keywords: ['mongoose', 'odm', 'what is mongoose', 'mongodb mongoose']
  },
  {
    id: 'mongo-8',
    question: 'How do you create a schema in Mongoose?',
    answer: 'In Mongoose, you create a schema using the Schema constructor:\n\n```javascript\nconst mongoose = require(\'mongoose\');\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true },\n  age: { type: Number, min: 0 },\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model(\'User\', userSchema);\n```',
    category: 'mongodb',
    keywords: ['mongoose schema', 'create schema', 'schema definition']
  },
  {
    id: 'mongo-9',
    question: 'What are MongoDB indexes?',
    answer: 'Indexes in MongoDB are data structures that improve query performance by creating shortcuts to documents. They work similarly to indexes in books - instead of scanning every document, MongoDB can use indexes to quickly locate relevant documents. Common types include single field, compound, multikey, and text indexes.',
    category: 'mongodb',
    keywords: ['mongodb indexes', 'indexing', 'database indexes', 'query performance']
  },
  {
    id: 'mongo-10',
    question: 'How do you perform CRUD operations in MongoDB?',
    answer: 'CRUD operations in MongoDB:\n\n**Create:** `db.collection.insertOne()` or `insertMany()`\n**Read:** `db.collection.find()` or `findOne()`\n**Update:** `db.collection.updateOne()` or `updateMany()`\n**Delete:** `db.collection.deleteOne()` or `deleteMany()`\n\nWith Mongoose: `Model.create()`, `Model.find()`, `Model.updateOne()`, `Model.deleteOne()`',
    category: 'mongodb',
    keywords: ['mongodb crud', 'crud operations', 'insert', 'find', 'update', 'delete']
  },

  // Express.js Questions (50+)
  {
    id: 'express-1',
    question: 'What is Express.js?',
    answer: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It\'s designed to make building web applications and APIs easier by providing a thin layer of fundamental web application features without obscuring Node.js features.',
    category: 'express',
    keywords: ['express', 'expressjs', 'what is express', 'nodejs framework']
  },
  {
    id: 'express-2',
    question: 'How do you create a basic Express server?',
    answer: 'Here\'s how to create a basic Express server:\n\n```javascript\nconst express = require(\'express\');\nconst app = express();\nconst PORT = 3000;\n\napp.get(\'/\', (req, res) => {\n  res.send(\'Hello World!\');\n});\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\n```',
    category: 'express',
    keywords: ['express server', 'create server', 'basic express', 'express setup']
  },
  {
    id: 'express-3',
    question: 'What is middleware in Express?',
    answer: 'Middleware in Express are functions that execute during the request-response cycle. They have access to the request object (req), response object (res), and the next middleware function. Middleware can execute code, modify req/res objects, end the request-response cycle, or call the next middleware in the stack.',
    category: 'express',
    keywords: ['express middleware', 'middleware', 'what is middleware']
  },
  {
    id: 'express-4',
    question: 'How do you use middleware in Express?',
    answer: 'Middleware can be used in several ways:\n\n```javascript\n// Application-level middleware\napp.use((req, res, next) => {\n  console.log(\'Time:\', Date.now());\n  next();\n});\n\n// Route-specific middleware\napp.get(\'/users\', authenticate, (req, res) => {\n  res.json(users);\n});\n\n// Built-in middleware\napp.use(express.json());\napp.use(express.static(\'public\'));\n```',
    category: 'express',
    keywords: ['use middleware', 'middleware examples', 'app.use']
  },
  {
    id: 'express-5',
    question: 'What are Express routes?',
    answer: 'Express routes define how an application responds to client requests to specific endpoints. A route consists of a path, HTTP method, and handler function. Routes can be defined using methods like app.get(), app.post(), app.put(), app.delete(), or using Express Router for modular routing.',
    category: 'express',
    keywords: ['express routes', 'routing', 'endpoints', 'http methods']
  },
  {
    id: 'express-6',
    question: 'How do you handle different HTTP methods in Express?',
    answer: 'Express provides methods for different HTTP verbs:\n\n```javascript\n// GET request\napp.get(\'/users\', (req, res) => { /* ... */ });\n\n// POST request\napp.post(\'/users\', (req, res) => { /* ... */ });\n\n// PUT request\napp.put(\'/users/:id\', (req, res) => { /* ... */ });\n\n// DELETE request\napp.delete(\'/users/:id\', (req, res) => { /* ... */ });\n\n// Handle all methods\napp.all(\'/users\', (req, res) => { /* ... */ });\n```',
    category: 'express',
    keywords: ['http methods', 'get post put delete', 'express methods']
  },
  {
    id: 'express-7',
    question: 'What is Express Router?',
    answer: 'Express Router is a mini Express application that provides routing functionality. It allows you to create modular, mountable route handlers. You can create separate router files for different parts of your application and mount them on the main app, promoting better code organization.',
    category: 'express',
    keywords: ['express router', 'router', 'modular routing']
  },
  {
    id: 'express-8',
    question: 'How do you handle errors in Express?',
    answer: 'Express error handling:\n\n```javascript\n// Error-handling middleware (4 parameters)\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send(\'Something broke!\');\n});\n\n// Async error handling\nconst asyncHandler = (fn) => (req, res, next) => {\n  Promise.resolve(fn(req, res, next)).catch(next);\n};\n\napp.get(\'/users\', asyncHandler(async (req, res) => {\n  const users = await User.find();\n  res.json(users);\n}));\n```',
    category: 'express',
    keywords: ['express error handling', 'error middleware', 'try catch']
  },
  {
    id: 'express-9',
    question: 'What is CORS and how do you handle it in Express?',
    answer: 'CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a different domain. In Express, you can handle CORS using the cors middleware:\n\n```javascript\nconst cors = require(\'cors\');\n\n// Enable CORS for all routes\napp.use(cors());\n\n// Configure CORS\napp.use(cors({\n  origin: \'http://localhost:3000\',\n  credentials: true\n}));\n```',
    category: 'express',
    keywords: ['cors', 'cross origin', 'cors middleware']
  },
  {
    id: 'express-10',
    question: 'How do you serve static files in Express?',
    answer: 'Express provides built-in middleware to serve static files:\n\n```javascript\n// Serve files from \'public\' directory\napp.use(express.static(\'public\'));\n\n// Serve with virtual path prefix\napp.use(\'/static\', express.static(\'public\'));\n\n// Multiple static directories\napp.use(express.static(\'public\'));\napp.use(express.static(\'files\'));\n```',
    category: 'express',
    keywords: ['static files', 'express.static', 'serve files']
  },

  // React Questions (50+)
  {
    id: 'react-1',
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces, particularly web applications. Developed by Facebook, React uses a component-based architecture and a virtual DOM to efficiently update and render components. It follows a declarative programming paradigm, making it easier to reason about application state and UI updates.',
    category: 'react',
    keywords: ['react', 'what is react', 'javascript library', 'ui library']
  },
  {
    id: 'react-2',
    question: 'What is JSX?',
    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components more readable and expressive. JSX gets transpiled to regular JavaScript function calls (React.createElement) by tools like Babel.',
    category: 'react',
    keywords: ['jsx', 'javascript xml', 'what is jsx']
  },
  {
    id: 'react-3',
    question: 'What are React components?',
    answer: 'React components are reusable pieces of UI that can be either functional or class-based. They accept inputs called "props" and return React elements describing what should appear on screen. Components promote code reusability and help organize complex UIs into smaller, manageable pieces.',
    category: 'react',
    keywords: ['react components', 'components', 'functional components', 'class components']
  },
  {
    id: 'react-4',
    question: 'What is the difference between functional and class components?',
    answer: 'Functional components are JavaScript functions that return JSX, while class components are ES6 classes that extend React.Component. Functional components are simpler and use hooks for state and lifecycle methods. Class components have built-in state and lifecycle methods but are more verbose. Modern React favors functional components with hooks.',
    category: 'react',
    keywords: ['functional vs class components', 'component types', 'hooks vs class']
  },
  {
    id: 'react-5',
    question: 'What are React hooks?',
    answer: 'React hooks are functions that let you use state and other React features in functional components. Common hooks include useState for state management, useEffect for side effects, useContext for context consumption, and useReducer for complex state logic. Hooks follow the "use" naming convention.',
    category: 'react',
    keywords: ['react hooks', 'hooks', 'usestate', 'useeffect']
  },
  {
    id: 'react-6',
    question: 'How do you manage state in React?',
    answer: 'State in React can be managed using:\n\n1. **useState hook** for local component state\n2. **useReducer** for complex state logic\n3. **Context API** for global state\n4. **State management libraries** like Redux, Zustand, or Recoil\n5. **Custom hooks** for reusable state logic\n\n```javascript\nconst [count, setCount] = useState(0);\n```',
    category: 'react',
    keywords: ['react state', 'state management', 'usestate', 'redux']
  },
  {
    id: 'react-7',
    question: 'What is the Virtual DOM?',
    answer: 'The Virtual DOM is a JavaScript representation of the actual DOM kept in memory. React uses it to optimize rendering by comparing (diffing) the current virtual DOM with the previous version, then updating only the parts of the real DOM that changed. This process is called reconciliation and makes React applications fast.',
    category: 'react',
    keywords: ['virtual dom', 'vdom', 'reconciliation', 'diffing']
  },
  {
    id: 'react-8',
    question: 'What are props in React?',
    answer: 'Props (properties) are read-only inputs passed from parent to child components. They allow data to flow down the component tree and make components reusable. Props can be any JavaScript value including functions, objects, or other components.\n\n```javascript\nfunction Welcome({ name, age }) {\n  return <h1>Hello, {name}! You are {age} years old.</h1>;\n}\n```',
    category: 'react',
    keywords: ['react props', 'props', 'component props', 'properties']
  },
  {
    id: 'react-9',
    question: 'What is useEffect hook?',
    answer: 'useEffect is a React hook that lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined. useEffect runs after every render by default, but you can control when it runs using dependencies.\n\n```javascript\nuseEffect(() => {\n  // Side effect code\n  return () => {\n    // Cleanup code\n  };\n}, [dependencies]);\n```',
    category: 'react',
    keywords: ['useeffect', 'side effects', 'lifecycle', 'effect hook']
  },
  {
    id: 'react-10',
    question: 'How do you handle events in React?',
    answer: 'React uses SyntheticEvents, which wrap native events to provide consistent behavior across browsers. Event handlers are passed as props and typically named with "on" prefix:\n\n```javascript\nfunction Button() {\n  const handleClick = (e) => {\n    e.preventDefault();\n    console.log(\'Button clicked!\');\n  };\n\n  return <button onClick={handleClick}>Click me</button>;\n}\n```',
    category: 'react',
    keywords: ['react events', 'event handling', 'onclick', 'synthetic events']
  },

  // Node.js Questions (50+)
  {
    id: 'node-1',
    question: 'What is Node.js?',
    answer: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling full-stack JavaScript development. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.',
    category: 'nodejs',
    keywords: ['nodejs', 'what is nodejs', 'javascript runtime', 'server side javascript']
  },
  {
    id: 'node-2',
    question: 'What is npm?',
    answer: 'npm (Node Package Manager) is the default package manager for Node.js. It allows you to install, share, and manage dependencies for your Node.js projects. npm comes with a command-line interface and hosts the world\'s largest software registry with over a million packages.',
    category: 'nodejs',
    keywords: ['npm', 'node package manager', 'package manager', 'dependencies']
  },
  {
    id: 'node-3',
    question: 'What is the event loop in Node.js?',
    answer: 'The event loop is the core of Node.js\'s asynchronous, non-blocking I/O model. It continuously checks for and executes callbacks from the event queue. The event loop has several phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks. This allows Node.js to handle many concurrent operations efficiently.',
    category: 'nodejs',
    keywords: ['event loop', 'nodejs event loop', 'asynchronous', 'non-blocking']
  },
  {
    id: 'node-4',
    question: 'What are Node.js modules?',
    answer: 'Node.js modules are reusable blocks of code that can be imported and used in other files. There are three types: built-in modules (fs, http, path), local modules (your own files), and third-party modules (installed via npm). Modules use CommonJS syntax with require() and module.exports, or ES6 import/export syntax.',
    category: 'nodejs',
    keywords: ['nodejs modules', 'modules', 'require', 'module.exports', 'commonjs']
  },
  {
    id: 'node-5',
    question: 'How do you create a simple HTTP server in Node.js?',
    answer: 'You can create an HTTP server using the built-in http module:\n\n```javascript\nconst http = require(\'http\');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \'Content-Type\': \'text/plain\' });\n  res.end(\'Hello World!\\n\');\n});\n\nserver.listen(3000, () => {\n  console.log(\'Server running on port 3000\');\n});\n```',
    category: 'nodejs',
    keywords: ['nodejs http server', 'create server', 'http module']
  },
  {
    id: 'node-6',
    question: 'What is the difference between require() and import?',
    answer: 'require() is CommonJS syntax (Node.js default) that loads modules synchronously, while import is ES6 syntax that supports static analysis and tree shaking. require() can be called conditionally and dynamically, while import statements are hoisted and must be at the top level. Modern Node.js supports both with proper configuration.',
    category: 'nodejs',
    keywords: ['require vs import', 'commonjs vs es6', 'module syntax']
  },
  {
    id: 'node-7',
    question: 'What is package.json?',
    answer: 'package.json is a metadata file for Node.js projects that contains project information, dependencies, scripts, and configuration. It includes project name, version, description, entry point, dependencies (production and development), and npm scripts for common tasks like testing and building.',
    category: 'nodejs',
    keywords: ['package.json', 'package file', 'npm scripts', 'dependencies']
  },
  {
    id: 'node-8',
    question: 'How do you handle asynchronous operations in Node.js?',
    answer: 'Node.js handles async operations using:\n\n1. **Callbacks** - traditional approach\n2. **Promises** - better error handling\n3. **Async/Await** - cleaner syntax\n\n```javascript\n// Async/Await example\nasync function fetchData() {\n  try {\n    const result = await someAsyncOperation();\n    return result;\n  } catch (error) {\n    console.error(error);\n  }\n}\n```',
    category: 'nodejs',
    keywords: ['nodejs async', 'callbacks', 'promises', 'async await']
  },
  {
    id: 'node-9',
    question: 'What is the fs module in Node.js?',
    answer: 'The fs (File System) module provides APIs for interacting with the file system. It offers both synchronous and asynchronous methods for reading, writing, creating, and deleting files and directories. Common methods include fs.readFile(), fs.writeFile(), fs.mkdir(), and fs.unlink().',
    category: 'nodejs',
    keywords: ['fs module', 'file system', 'read file', 'write file']
  },
  {
    id: 'node-10',
    question: 'What is middleware in Node.js?',
    answer: 'Middleware in Node.js are functions that execute during the request-response cycle. They have access to request and response objects and can modify them, execute code, end the request-response cycle, or call the next middleware. Middleware is commonly used in frameworks like Express for authentication, logging, and request processing.',
    category: 'nodejs',
    keywords: ['nodejs middleware', 'middleware functions', 'request response cycle']
  },

  // General MERN Stack Questions (50+)
  {
    id: 'general-1',
    question: 'What is the MERN stack?',
    answer: 'MERN stack is a JavaScript-based technology stack for building full-stack web applications. It consists of MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (runtime environment). This stack allows developers to use JavaScript throughout the entire application development process.',
    category: 'general',
    keywords: ['mern stack', 'what is mern', 'full stack', 'javascript stack']
  },
  {
    id: 'general-2',
    question: 'What are the advantages of using MERN stack?',
    answer: 'MERN stack advantages include: 1) Single language (JavaScript) for full-stack development, 2) Fast development with reusable components, 3) Strong community support and extensive libraries, 4) Excellent performance with React\'s virtual DOM, 5) Scalable architecture, 6) Cost-effective development, 7) SEO-friendly with server-side rendering options.',
    category: 'general',
    keywords: ['mern advantages', 'benefits of mern', 'why mern stack']
  },
  {
    id: 'general-3',
    question: 'How do you structure a MERN stack application?',
    answer: 'A typical MERN stack structure:\n\n```\nproject/\n├── client/          # React frontend\n│   ├── src/\n│   ├── public/\n│   └── package.json\n├── server/          # Express backend\n│   ├── models/      # MongoDB models\n│   ├── routes/      # API routes\n│   ├── middleware/  # Custom middleware\n│   └── server.js\n└── package.json     # Root package.json\n```',
    category: 'general',
    keywords: ['mern structure', 'project structure', 'folder structure']
  },
  {
    id: 'general-4',
    question: 'How do you connect React frontend with Express backend?',
    answer: 'Connect React with Express using:\n\n1. **API calls** with fetch or axios\n2. **Proxy configuration** in package.json\n3. **CORS setup** on the backend\n\n```javascript\n// React component\nconst fetchData = async () => {\n  const response = await fetch(\'/api/users\');\n  const data = await response.json();\n  setUsers(data);\n};\n\n// package.json proxy\n"proxy": "http://localhost:5000"\n```',
    category: 'general',
    keywords: ['react express connection', 'frontend backend', 'api calls', 'proxy']
  },
  {
    id: 'general-5',
    question: 'How do you handle authentication in MERN stack?',
    answer: 'MERN authentication typically uses JWT (JSON Web Tokens):\n\n1. **Backend**: Create login/register routes, hash passwords, generate JWT\n2. **Frontend**: Store JWT in localStorage/cookies, send in headers\n3. **Middleware**: Verify JWT on protected routes\n4. **State management**: Track auth state in React\n\nCommon libraries: bcryptjs for hashing, jsonwebtoken for JWT, passport.js for strategies.',
    category: 'general',
    keywords: ['mern authentication', 'jwt', 'login', 'auth', 'bcrypt']
  },
  {
    id: 'general-6',
    question: 'What is REST API and how is it used in MERN?',
    answer: 'REST (Representational State Transfer) is an architectural style for designing web services. In MERN stack, Express.js creates RESTful APIs that React consumes. REST uses HTTP methods (GET, POST, PUT, DELETE) and follows conventions like /api/users for user resources. It provides a standardized way for frontend and backend communication.',
    category: 'general',
    keywords: ['rest api', 'restful', 'api design', 'http methods']
  },
  {
    id: 'general-7',
    question: 'How do you deploy a MERN stack application?',
    answer: 'MERN deployment options:\n\n1. **Heroku**: Easy deployment with git integration\n2. **Vercel/Netlify**: Great for frontend, serverless functions\n3. **AWS/DigitalOcean**: Full control with VPS\n4. **MongoDB Atlas**: Cloud database hosting\n\nSteps: Build React app, configure production settings, set environment variables, deploy backend and frontend separately or together.',
    category: 'general',
    keywords: ['mern deployment', 'deploy', 'heroku', 'production']
  },
  {
    id: 'general-8',
    question: 'What is state management in MERN applications?',
    answer: 'State management in MERN involves handling data flow between components and server. Options include:\n\n1. **Local state**: useState, useReducer\n2. **Global state**: Context API, Redux, Zustand\n3. **Server state**: React Query, SWR\n4. **Form state**: Formik, React Hook Form\n\nChoose based on complexity and requirements.',
    category: 'general',
    keywords: ['state management', 'redux', 'context api', 'global state']
  },
  {
    id: 'general-9',
    question: 'How do you handle file uploads in MERN stack?',
    answer: 'File uploads in MERN:\n\n1. **Frontend**: Use FormData with input type="file"\n2. **Backend**: Use multer middleware for handling multipart/form-data\n3. **Storage**: Local storage, AWS S3, Cloudinary\n\n```javascript\n// Express with multer\nconst multer = require(\'multer\');\nconst upload = multer({ dest: \'uploads/\' });\n\napp.post(\'/upload\', upload.single(\'file\'), (req, res) => {\n  // Handle uploaded file\n});\n```',
    category: 'general',
    keywords: ['file upload', 'multer', 'formdata', 'image upload']
  },
  {
    id: 'general-10',
    question: 'What are environment variables in MERN stack?',
    answer: 'Environment variables store configuration data outside your code. In MERN:\n\n1. **Backend**: Use dotenv package, store in .env file\n2. **Frontend**: React uses REACT_APP_ prefix\n3. **Common vars**: Database URLs, API keys, JWT secrets\n\n```javascript\n// .env file\nMONGO_URI=mongodb://localhost:27017/mydb\nJWT_SECRET=mysecret\n\n// Usage\nconst dbUri = process.env.MONGO_URI;\n```',
    category: 'general',
    keywords: ['environment variables', 'env', 'dotenv', 'config']
  }
];

export const findMernAnswer = (query: string): string | null => {
  const lowerQuery = query.toLowerCase().trim();
  
  // Find exact or partial matches based on keywords
  const matchedQuestion = mernStackQuestions.find(q => 
    q.keywords.some(keyword => lowerQuery.includes(keyword.toLowerCase())) ||
    lowerQuery.includes(q.question.toLowerCase()) ||
    q.question.toLowerCase().includes(lowerQuery)
  );
  
  if (matchedQuestion) {
    return `**${matchedQuestion.question}**\n\n${matchedQuestion.answer}`;
  }
  
  // Check for category-specific queries
  if (lowerQuery.includes('mongodb') || lowerQuery.includes('mongo')) {
    const mongoQuestions = mernStackQuestions.filter(q => q.category === 'mongodb');
    const randomQuestion = mongoQuestions[Math.floor(Math.random() * mongoQuestions.length)];
    return `Here's a MongoDB question you might find helpful:\n\n**${randomQuestion.question}**\n\n${randomQuestion.answer}`;
  }
  
  if (lowerQuery.includes('express')) {
    const expressQuestions = mernStackQuestions.filter(q => q.category === 'express');
    const randomQuestion = expressQuestions[Math.floor(Math.random() * expressQuestions.length)];
    return `Here's an Express.js question you might find helpful:\n\n**${randomQuestion.question}**\n\n${randomQuestion.answer}`;
  }
  
  if (lowerQuery.includes('react')) {
    const reactQuestions = mernStackQuestions.filter(q => q.category === 'react');
    const randomQuestion = reactQuestions[Math.floor(Math.random() * reactQuestions.length)];
    return `Here's a React question you might find helpful:\n\n**${randomQuestion.question}**\n\n${randomQuestion.answer}`;
  }
  
  if (lowerQuery.includes('node') || lowerQuery.includes('nodejs')) {
    const nodeQuestions = mernStackQuestions.filter(q => q.category === 'nodejs');
    const randomQuestion = nodeQuestions[Math.floor(Math.random() * nodeQuestions.length)];
    return `Here's a Node.js question you might find helpful:\n\n**${randomQuestion.question}**\n\n${randomQuestion.answer}`;
  }
  
  return null;
};

export const getMernCategories = () => {
  const categories = {
    mongodb: mernStackQuestions.filter(q => q.category === 'mongodb').length,
    express: mernStackQuestions.filter(q => q.category === 'express').length,
    react: mernStackQuestions.filter(q => q.category === 'react').length,
    nodejs: mernStackQuestions.filter(q => q.category === 'nodejs').length,
    general: mernStackQuestions.filter(q => q.category === 'general').length
  };
  
  return categories;
};

export const getRandomMernQuestion = (category?: string) => {
  let questions = mernStackQuestions;
  
  if (category) {
    questions = mernStackQuestions.filter(q => q.category === category);
  }
  
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  return `**${randomQuestion.question}**\n\n${randomQuestion.answer}`;
};