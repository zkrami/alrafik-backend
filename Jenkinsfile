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

            sh 'forever index.js  -a -l alrafik.log & exit 0'

        }

}
