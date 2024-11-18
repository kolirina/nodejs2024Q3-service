# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Download repository and change branch

```
git clone https://github.com/kolirina/nodejs2023Q2-service.git

git checkout dev-2
```

## Install NPM modules

```
npm install
```

## Install Docker

```
Install [Docker](https://docs.docker.com/engine/install/)

after installing run docker
```

## Run the application using docker

```
docker compose up
```

The app starts on port (4000 as default)
To change port use .env file
Available endpoints description: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/rest-service/assignment.md

## Vulnerabilities scanning

```
npm run audit
```

## Testing

When the application is running, open a new terminal and run all tests without authorization:

```
npm run test
```
