node {


      stage('scm checkout'){
          checkout scm
      }
      stage('clean'){


            try
            {
              sh 'forever stop index.js'

            }
            catch (exc) {
              echo 'Something failed, I should sound the klaxons!'
            }


        }

      stage('build') {

              sh 'npm install'
              sh 'npm run clean'

              sh 'npm run build'


      }

        stage('staging'){
            sh 'JENKINS_NODE_COOKIE=dontKillMe forever start --minUptime 1 --spinSleepTime 1000 index.js'


        }

}
