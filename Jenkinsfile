pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test "tests/00.Login page/login1.spec.js" "tests/01.Lead Creation/leadfixture.spec.js" "tests/02. Organization module/organizedfixture.spec.js" "tests/03. Contact module/contact1.spec.js"'
            }
        }
    }
}