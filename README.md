# Node-challenge

This is a personal challenge to test DDD and other tecnologies

## Installation

You can run the project using Docker-compose. The `docker-compose.yaml` file alredy has the configurations for the MySql database and for the application itself.

First, copy the contents of the `.env.example` file to a new `.env` file.

To run with docker-compose, be sure the *ENV* variable is set to `prod`. The other variables can stay the same.

After that, run the following:

```bash
docker-compose up --build
```

***Now you are all set! Just check Localhost at port 5000!***

---

If you want to run the project locally, you have to setup a MySQL database by yourself and set the *ENV* variable to `dev`, as well the others variable following your local configuration.

After that, you can use the package manager [yarn](https://yarnpkg.com/) to install the dependencies.

```bash
yarn install
```

And finally, run the following to start the project:

```bash
yarn dev
```

## Usage

On the project's root, there is a Insomnia JSON collection, with everything ready to use!

Just import it and start testing the application.

You can use MySQL Workbench to check the data on the database as well!

---

The project has a Lint setup, that can be run with:
```bash
yarn lint --fix
```
