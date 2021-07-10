import AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const initDB = (): DocumentClient => {
  if (process.env.STAGE === "local")
    return new AWS.DynamoDB.DocumentClient({
      region: process.env.REGION,
      endpoint: process.env.LOCALHOST,
    });
  else return new AWS.DynamoDB.DocumentClient();
};
