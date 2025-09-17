pipeline {
    agent {
        docker { image 'node:18' } 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'pnpm test'
            }
        }
    }

    post {
        success {
            echo "✅ All Node.js tests passed!"
        }
        failure {
            echo "❌ Some tests failed!"
        }
    }
}
