# qlever-conformance-website

Website to visualize the results of the [qlever-conformance-tests](https://github.com/ad-freiburg/qlever-conformance-tests).

## Prerequisites

Docker.

## Setup

1. Clone this repository.

2. If you want to use it with the GitHub implementation read the README at https://github.com/SIRDNARch/qlever-conformance-upload-server

## Starting the server

### Using Docker compose

1. Configure the docker-compose.yml
2. Set the port to the port the website will be accessible at.
3. Set the path to the path of the conformance result files. (Should be the same as for the conformance-upload-server)
4. Use the following commands to start or shutdown.

If you run it for the first time use to build the image.
```
docker-compose up --build -d
```

If you have already build the image just use.

```
docker-compose up -d
```

You can remove the ***-d*** if you do not want to start it in the detached mode.

To ***shut down*** use

```
docker-compose down
```

Use this to access the interactive shell of the docker container:

```
docker-compose exec app /bin/sh
```

### Using Docker

```
docker build -t sparql-conformance-ui . 
```

```
docker run --name sparql-conformance-ui -d -p PORT:3000 -v path_to_mount:/public/results sparql-conformance-ui
```

```
-v /Users/username/Desktop/project/results:/public/results
```

This mounts your directory (which is the first path, do not change the second path) to the results directory used by the server.

Set it to the directory containing the result files.

