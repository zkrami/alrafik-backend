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
            sh 'export BUILD_ID=dontKillMe'
            sh 'forever -a -l myforever.log index.js &'


        }

}
