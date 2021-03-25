node('master') {
    
    stage("Git checkout"){
    
git credentialsId: '5dd122fd-1354-4152-a5a3-01328b4ecee6', url: 'https://github.com/Olaprog/Advancly_BDD.git'
    }
    
    stage("NPM Package"){
        
    bat label: 'Install NPM', script: 'npm install --save-dev cypress' 
    
    }
    
    stage("Compile & Run test"){
        
        bat label: 'Run test', script: 'npm run chromebrowser' 
    }
    
      
    stages {
        stage('Error') {
            when {
                expression { doError == '1' }
            }
            steps {
                echo "Failure"
                error "failure test. It's work"
            }
        }
        
        stage('Success') {
            when {
                expression { doError == '0' }
            }
            steps {
                echo "ok"
            }
        }
    }
    post {
       always {
           
                 
                emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"
            
        }
    }

   
    }

    
  