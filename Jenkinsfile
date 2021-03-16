node('master') {
    
    stage("Git checkout"){
    
git credentialsId: '5dd122fd-1354-4152-a5a3-01328b4ecee6', url: 'https://github.com/Olaprog/Advancly_BDD.git'
    }
    
    stage("npm install"){
        
    bat label: 'Install npm package', script: 'npm install' 
    
    }
    
    stage("compile & run test"){
        
        bat label: 'Run test', script: 'npm run chromebrowser' 
    }
}   