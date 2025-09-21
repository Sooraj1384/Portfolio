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
          bat "${tool 'sonarscanner'}/bin/sonar-scanner.bat -Dsonar.projectKey=sooraj1384_portfolio-app -Dsonar.organization=sooraj1384 -Dsonar.sources=src -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=ebec83989e359e8937d281f92dd3a7ed224b4768"

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
