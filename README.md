# CSP Reporter
CSP Reporter is a [serverless](http://serverless.com/) application that aims to
collect and provide analysis on reports submitted by web browsers as part of the
[Content Security Policy](https://www.w3.org/TR/CSP2/) standard.

## Functions

### `receive_csp_report`
Is connected to API Gateway and receives the JSON reports supplied by browers. It doesn't
make any attempt to validate the payload and attempts to respond to multiple know MIME
types. The payload, along with headers from the request are written out as an object to
S3.

## Testing
Local running testing can be done by calling:

    serverless function test --all

## Deployment
Assuming you have valid AWS credentials set:

    serverless resources deploy
    serverless dash deploy

## License

