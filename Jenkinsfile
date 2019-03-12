pipeline {

    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run clean'
                sh 'npm run build'

            }
        }
        stage('clean staging'){
          steps{

            try{
              sh 'forever stop alrafik'
              sh 'rm -r /var/www/alrafik-backend'
            }

            catch{

            }
          }
        }
        stage('staging'){
          steps{
            sh 'cp -r . /var/www/alrafik-backend'
            sh 'forever --uid alrafik start /var/www/alrafik-backend'
          }
        }

    }
      post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
