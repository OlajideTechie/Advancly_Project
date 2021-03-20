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

    stage ('generate cucumber reports') {

        bat label: 'cucumber report'
        cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
    }
}   