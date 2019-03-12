node {



      stage('build') {

              sh 'npm install'
              sh 'npm run clean'
              sh 'npm run build'


      }
        stage('clean staging'){


            try
            {
              sh 'forever stop alrafik'

            }
            catch (exc) {
              echo 'Something failed, I should sound the klaxons!'
            }


        }
        stage('staging'){

            sh 'forever --uid alrafik start .'

        }

}
