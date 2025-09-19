pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        // Checkout source code from your repository
        checkout scm
      }
    }
    stage('SonarQube Analysis') {
      steps {
        // Run SonarQube scanner with environment configured in Jenkins
        withSonarQubeEnv('portfolio_app') {
          sh 'sonar-scanner -Dsonar.projectKey=sooraj1384_portfolio-app -Dsonar.sources=src'
        }
      }
    }
    stage('Quality Gate') {
      steps {
        // Wait for SonarQube quality gate result and fail build if it fails
        timeout(time: 1, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }
}
