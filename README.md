# Typescript-Serverless-Template

Modified version of the aws-nodejs-typescript template.
List of dependencies used are below!

## Installation:
```
sls create --template-url https://github.com/cheerypal/Typescript-Serverless-Template/tree/master --path <directory>
```


Install Dependencies
``` 
npm i
```


## Deployment
```
sls deploy -v
```


## Dynamodb Offline

If you want to use dynamodb offline. Install and run using below commands: 

```
sls dynamodb install
sls offline start
```

Make sure to set the serverless stage to local before running (serverless.yml)!


I recommend using dynamodb-admin for viewing and maintaining the offline database. Run this in a different terminal window whilst sls offline is running!


```
npm i -g dynamodb-admin

dynamodb-admin
```

