//? try `env` in terminal, we see all the environment variables from our system

//* Process Object in Node

// `process` is a property of the global object `globalThis`

// it can be accessed from anywhere (without importing it)


// provides information concerning the runtime of a program
// console.log(process)

//* Environment Variables

// an environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system

// made up of a name(key) / value pair

// loaded into `process.env` during application initialization

// makes our app easier to configure by separating infrequently changing data from our code.


//* Environment Variables in NodeJS

// at runtime, NodeJS automatically loads environment variables into `process.env` to make them available to the application.

// environment variables in `.env` are formatted as name=value
console.log(process.env.NODE_ENV)

// lines starting with # are treated as comments

// blank lines are ignored

// to load the environment variables from our .env file, run Node.js application with `--env-file` flag

// add a command-line argument to npm script
//* node --watch --env-file=.env index.js

//! `.env` keeps all the sensitive data, such as API keys and secrets. 
// keep it away from public by adding in `.gitIgnore` (it won't be tracked by git)

