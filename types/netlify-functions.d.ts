declare module '@netlify/functions' {
  export interface Context {
    clientContext: { [key: string]: any }
    callbackWaitsForEmptyEventLoop: boolean
    functionName: string
    functionVersion: string
    invokedFunctionArn: string
    memoryLimitInMB: string
    awsRequestId: string
    logGroupName: string
    logStreamName: string
    identity: any
    done: (error: Error | null, response: any) => void
    fail: (error: Error | string) => void
    succeed: (response: any) => void
  }

  export interface Event {
    body: string | null
    headers: { [key: string]: string }
    multiValueHeaders: { [key: string]: string[] }
    httpMethod: string
    isBase64Encoded: boolean
    path: string
    pathParameters: { [key: string]: string } | null
    queryStringParameters: { [key: string]: string } | null
    multiValueQueryStringParameters: { [key: string]: string[] } | null
    stageVariables: { [key: string]: string } | null
    requestContext: {
      accountId: string
      apiId: string
      authorizer: any
      protocol: string
      httpMethod: string
      identity: {
        accessKey: string | null
        accountId: string | null
        apiKey: string | null
        apiKeyId: string | null
        caller: string | null
        cognitoAuthenticationProvider: string | null
        cognitoAuthenticationType: string | null
        cognitoIdentityId: string | null
        cognitoIdentityPoolId: string | null
        principalOrgId: string | null
        sourceIp: string
        user: string | null
        userAgent: string | null
        userArn: string | null
      }
      path: string
      stage: string
      requestId: string
      requestTimeEpoch: number
      resourceId: string
      resourcePath: string
    }
    resource: string
  }

  export type Handler = (
    event: Event,
    context: Context
  ) => Promise<{
    statusCode: number
    body: string
    headers?: { [key: string]: string }
  }>
} 