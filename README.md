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

---


## Dependencies

- @middy/core: ^1.5.2,
- @middy/http-cors: ^2.4.1,
- @middy/http-error-handler: ^2.4.1,
- @middy/http-event-normalizer: ^2.4.1,
- @middy/http-json-body-parser: ^1.5.2,
- @middy/validator: ^2.4.1,
- @types/aws-sdk: ^2.7.0,
- @types/uuid: ^8.3.0,
- aws-lambda: ^1.0.6,
- http-errors: ^1.8.0,
- serverless-create-global-dynamodb-table: ^3.1.1,
- serverless-iam-roles-per-function: ^3.2.0,
- serverless-prune-plugin: ^1.5.0,
- source-map-support: ^0.5.19,
- uuid: ^8.3.2

## Dev Deps

- @serverless/typescript: ^2.23.0,
- @types/aws-lambda: ^8.10.71,
- aws-sdk: ^2.931.0,
- @types/node: ^14.14.25,
- json-schema-to-ts: ^1.5.0,
- serverless: ^2.23.0,
- serverless-webpack: ^5.3.5,
- ts-loader: ^8.0.15,
- ts-node: ^9.1.1,
- tsconfig-paths: ^3.9.0,
- tsconfig-paths-webpack-plugin: ^3.3.0,
- typescript: ^4.1.3,
- webpack: ^5.20.2,
- webpack-node-externals: ^2.5.2,
- serverless-offline: ^7.0.0,
- serverless-dynamodb-local: ^0.2.39