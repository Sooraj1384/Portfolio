pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('portfolio_app') {
          bat 'sonar-scanner -Dsonar.projectKey=sooraj1384_portfolio-app -Dsonar.organization=YOUR_ORG_KEY -Dsonar.sources=src -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=YOUR_TOKEN'
        }
      }
    }
    stage('Quality Gate') {
      steps {
        timeout(time: 1, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }
}
