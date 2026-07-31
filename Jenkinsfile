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
                bat 'npx playwright test "tests/00.Login page/login1.spec.js" "tests/03. Contact module/contact1.spec.js" "tests/04. opertunities/oppertunity1.spec.js"'
            }
        }
    }
}