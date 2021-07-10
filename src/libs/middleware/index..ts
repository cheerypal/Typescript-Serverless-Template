import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import cors from "@middy/http-cors";
import httpErrorHandler from "@middy/http-error-handler";
import httpEventNormalizer from "@middy/http-event-normalizer";
import { Handler } from "aws-lambda";

export default (handler: Handler) => {
  return middy(handler).use([
    jsonBodyParser(),
    httpErrorHandler(),
    httpEventNormalizer(),
    cors(),
  ]);
};
