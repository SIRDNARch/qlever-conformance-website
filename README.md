# qlever-conformance-website

Website to visualize the results of the [qlever-conformance-tests](https://github.com/ad-freiburg/qlever-conformance-tests).

## Prerequisites

Docker or NPM.

## Setup

1. Clone this repository.

2. In the public/index.js file you need to change the website address to the address of the server. You do this by setting the const websiteAdress to the correct value.

3. If you want to use it with the GitHub implementation read the README at https://github.com/SIRDNARch/qlever-conformance-upload-server


## Starting the server

### Using Docker

```
docker build -t website-example . 
```


```
docker run -p 3001:3000 -v /Users/ricoandris/Desktop/project/results:/usr/src/app/results website-example
```

### Using NPM
  
```
npm install
```
  
```
node server.js
```

This will make the server reachable at http://localhost:3000/  
  
If you want to change the port use:


```
PORT=4000 node server.js
```