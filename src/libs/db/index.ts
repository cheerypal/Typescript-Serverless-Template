import DynamoDB from "aws-sdk/clients/dynamodb";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const initDB = (): DocumentClient => {
  if (process.env.STAGE === "local")
    return new DynamoDB.DocumentClient({
      region: process.env.REGION,
      endpoint: process.env.LOCALHOST,
    });
  else return new DynamoDB.DocumentClient();
};
