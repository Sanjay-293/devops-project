pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh "docker build -t web-server ."  // Added space between -t and .
            }
        }
        
        stage('Deploy') { 
            steps {
                sh "docker run -itd -p 80:80 web-server" 
            }
        }
    }
}
