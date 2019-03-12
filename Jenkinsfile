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
              sh 'rm -r /var/www/alrafik-backend'
            }
            catch (exc) {
              echo 'Something failed, I should sound the klaxons!'
            }

        }
        stage('staging'){

            sh 'cp -r . /var/www/alrafik-backend'
            sh 'forever --uid alrafik start /var/www/alrafik-backend'

        }

}
