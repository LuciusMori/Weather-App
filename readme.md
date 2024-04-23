# Deployment

- What are environment variables

- stored in `process` & loaded at initialization of app

- Saving secrets in `process.env`: Loading `.env` files with
  - `node --env-file=.env server.js`
  - set the mode: production or development with `NODE_ENV` variable
  - check node version, it must be >= 20.6
    install nvm & get the latest node version:
      `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
      `nvm install node`

- Add `.env` in `.gitIgnore` 
  - Keep your `.env` out of git, keep secrets out of git

- Live Coding - simple weather app (server side)
    - create an account and get API key from [openWeatherMap](https://openweathermap.org/)
    - fetchAPI in node;

- Deploying a server on Render

- Exercise
  - build your frontend for weather API (client side)
    - work in the `client` directory (vite react app)