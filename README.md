# Message UP

This project is a demo application made with react as front end and openwhisk serverless functions and cloudant database as a backend.

## Technlogy Used
* [ReactJS](https://reactjs.org/)
* [Openwhisk](https://openwhisk.apache.org/)
* [Cloudand Database](https://www.ibm.com/cloud/cloudant)
* [NodeJS](https://nodejs.org/en/)
* [Twilio](https://www.twilio.com/)
* [Docker](https://www.docker.com/)
* [Kubernetes](https://kubernetes.io/)
* [IBM Cloud Functions](https://console.bluemix.net/openwhisk/)
* [Container Service](https://www.ibm.com/cloud/container-service)

## Prereq
To be able to follow along or complete this tutorial/workshop you need the following. 

### Openwhisk
* [Openwhish Local Installation](https://openwhisk.apache.org/documentation.html#openwhisk_deployment) for testing 
  * For setting up openwhisk local you need 
    * [docker](https://docs.docker.com/docker-for-mac/)
    * [docker-compose](https://docs.docker.com/docker-for-mac/)
#### OR 
* I would be using IBM Cloud Functions that uses Openwhisk.
  * Sign up for IBM Cloud https://ibm.biz/BdYan6 

### Prorgramming Language
For this demo I am using **Node**. But with openwhisk you can write your functions in Node, Swift, Go, Python, Java, Ruby, Php and in the unlikely case none of the above is your language, you can create a docker image of your function and openwhisk will run that. So its safe to say openwhisk can run it all. 

### Cloudant Database
Lite version of CLoudant available from IBM Cloud.

### React 
For front end I am using React. This will be a very simple use of react. We wont go much deep into the use of reactjs in this workshop.

## Getting Started
What is serverless really? 
Serverless aren't really without servers, its just that you wont have to worry about servers.

Openwhisk is a opensource serverless implementation under apache foundation. IBM has a managed version of openwhisk which we will make use of in this workshop. 

###For a more detailed tutorial workshop in Openwhisk
* https://github.com/jthomas/openwhisk-workshops/tree/master/bootcamp

We will quickly go over the basics here. But make use of the resource above.

[Functions Basics](./Basics.md)
