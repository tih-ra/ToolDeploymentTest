def label = "builder-${UUID.randomUUID().toString()}"

podTemplate(label: label,
            inheritFrom: 'k8s-slave',
            containers: [containerTemplate(name: 'docker-builder',
                                           image: 'docker:stable-git',
                                           command: 'sleep',
					   args: '1d',
					   alwaysPullImage: true)]
) {
  node(label) {
    container('docker-builder') {
      global.checkoutRepo('.', gitRepo, gitBranch, gitRefspec)
      parallel(
        layoutconstructor_backend: {
          createDockerImage('layoutconstructor-ui', 'Dockerfile', version)
        }
      )
    }
  }
}

def createDockerImage(imageName, dockerfile, version) {
  withEnv(['version=' + version.replaceAll("\\+","-"), 'dockerfile=' + dockerfile, 'HOME=/root', 'imageName=' + imageName]) {
    withCredentials([usernamePassword(credentialsId: 'docker-registry-creds', passwordVariable: 'password', usernameVariable: 'user')]) {
        sh '''
          docker login -u ${user} -p ${password} secure-registry.tra.ai
        '''
    }
    sh '''
      echo ".git" > .dockerignore
      docker build --pull -t secure-registry.tra.ai/${imageName}:${version} -t secure-registry.tra.ai/${imageName}:latest  -f ${dockerfile} .
      docker push secure-registry.tra.ai/${imageName}:${version}
      docker push secure-registry.tra.ai/${imageName}:latest
    '''
    if (gitBranch == 'master') {
      sh '''
        docker tag secure-registry.tra.ai/${imageName}:${version} secure-registry.tra.ai/${imageName}
        docker push secure-registry.tra.ai/${imageName}
      '''
    }
  }
}
