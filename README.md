#DevOps Project - Node.js Web Server
A modern DevOps sample project featuring a Node.js HTTP server containerized with Docker and automated via a Jenkins CI/CD pipeline.
---
## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Docker Setup](#docker-setup)
- [CI/CD Pipeline (Jenkins)](#cicd-pipeline-jenkins)
- [Configuration](#configuration)
---
## Overview
This project demonstrates an end-to-end DevOps workflow for a lightweight Node.js web server:
- **Application**: Native Node.js HTTP server (`index.js`).
- **Containerization**: Lightweight Alpine Linux Docker image (`node:18-alpine`).
- **CI/CD Automation**: Automated Build and Deploy stages configured via `Jenkinsfile`.
---
## Project Structure
```text
devops-project/
├── index.js          # Node.js HTTP server implementation
├── package.json      # Node.js dependencies and start scripts
├── Dockerfile        # Docker container image definition
├── dockerfile        # Dockerfile copy for case-insensitivity support
├── Jenkinsfile       # Declarative Jenkins CI/CD pipeline definition
└── README.md         # Project documentation
```
---
## Prerequisites
Ensure the following tools are installed on your environment:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/)
- [Jenkins](https://www.jenkins.io/) (for CI/CD automation)
---
## Local Development
### 1. Run with Node.js
start the server directly using Node.js:
```bash
npm start
# or
node index.js
```
By default, the application runs on **port 3000** (or the port specified in `process.env.PORT`).
Access the application in your browser or via curl:
```bash
curl http://localhost:3000
# Response: Hello World!
```
---
## Docker Setup
### 1. Build Docker Image
Build the Docker image with tag `web-server`:
```bash
docker build -t web-server .
```

### 2. Run Container
Run the container mapping host port `8080` (or `80`) to container port `8080`:
```bash
docker run -d -p 8080:8080 --name web-server web-server
```
Test the containerized application:
```bash
curl http://localhost:8080
```
---
## CI/CD Pipeline (Jenkins)
The project includes a declarative `Jenkinsfile` that automates building and deploying the containerized application:
```groovy
pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh "docker build -t web-server ." 
            }
        }
        
        stage('Deploy') { 
            steps {
                sh "docker rm -f web-server || true"
                sh "docker run -d -p 80:8080 --name web-server web-server" 
            }
        }
    }
}
```
### Pipeline Stages
1. **Build**: Builds the Docker image `web-server` from the root directory `Dockerfile`.
2. **Deploy**: Cleans up any previously running `web-server` container instance and runs a fresh container mapping host port `80` to container port `8080`.
---
## Configuration
| Environment Variable | Default Value | Description |
| -------------------- | ------------- | ----------- |
| `PORT`               | `3000` (Local) / `8080` (Docker) | Port on which the HTTP server listens |
---
