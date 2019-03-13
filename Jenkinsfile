node {



      stage('build') {

              sh 'npm install'
              sh 'npm run clean'
              sh 'npm run build'


      }
        stage('clean staging'){


            try
            {
              sh 'forever stop index.js'

            }
            catch (exc) {
              echo 'Something failed, I should sound the klaxons!'
            }


        }
        stage('staging'){

            sh 'BUILD_ID=dontKillMe forever -a -l alrafik.log index.js &'

        }

}
