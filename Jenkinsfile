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
