# Docker and Kubernetes
The react app is now running locally in our machine. Its not bad, but its not ideal. We want our wonderful app to be available to the world. 

One way to achieve this is to dockerize our app and deploy it to a kubernetes cluster to some provider. I like this way because its almost vendor agnostic. Also if your docker image works in one location, there is a very good chance that it will work anywhere.

You need `docker` and `kubectl` cli tool for this step.

Most of these instructions are borrowed from this repo
https://github.com/IBM/deploy-react-kubernetes

If you are interested in learning more about deploying react to kubernetes you can find instructions there.