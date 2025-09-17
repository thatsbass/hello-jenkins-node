pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install pnpm') {
            steps {
                // installer pnpm si pas déjà présent
                sh 'corepack enable'       // pnpm inclus depuis Node 16+
                sh 'corepack prepare pnpm@latest --activate'
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
