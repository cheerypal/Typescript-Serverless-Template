import DynamoDB from "aws-sdk/clients/dynamodb";
export const initDB = new DynamoDB.DocumentClient();
