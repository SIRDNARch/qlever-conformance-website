# qlever-conformance-website

Website to visualize the results of the [qlever-conformance-tests](https://github.com/ad-freiburg/qlever-conformance-tests).

## Prerequisites

Docker or NPM.

## Setup

1. Clone this repository.

2. If you want to use it with the GitHub implementation read the README at https://github.com/SIRDNARch/qlever-conformance-upload-server


## Starting the server

### Using Docker

```
docker build -t sparql-conformance-ui . 
```


```
docker run --name sparql-conformance-ui -d -p PORT:3000 -v path_to_mount:/public/results sparql-conformance-ui
```

```
-v /Users/username/Desktop/project/results:/usr/src/app/results
```

This mounts your directory (which is the first path, do not change the second path) to the results directory used by the server.

Set it to the directory containing the result files.


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
