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
Assuming you have valid AWS credentials set in your environment, and serverless installed:

    serverless resources deploy
    serverless dash deploy

## TODO
* Reporting services
* CloudWatch Metrics support
* Migrate to Serverless 1.x

## License
Copyright 2016 Tony Tiger.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

