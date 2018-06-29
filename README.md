## Simplon Roanne NodeJS Environment with Docker

## Requirements

### Docker

[Get Docker CE for Ubuntu | Docker Documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

[Post-installation steps for Linux | Docker Documentation](https://docs.docker.com/install/linux/linux-postinstall/)

Both link setup procedures must be followed. 
And finally the cli docker-compose : 

[Install Docker Compose | Docker Documentation](https://docs.docker.com/compose/install/#install-compose)


### Kitematic

GUI ( Graphical User Interface ) for docker

[Releases · docker/kitematic · GitHub](https://github.com/docker/kitematic/releases)


## Setup

```bash
# Download the docker image
git clone https://github.com/simplon-roanne/docker-nodejs-helloworld
# Go to the newly created directory
cd docker-nodejs-helloworld
```

## Creating the containers and running them immediatly ( without using Kitematic )
```bash
# This will initialize the container and then start it immediatly
docker-compose up 
```

## Creating the container for Kitematic
```bash
# This will initialize the container but won't start it
docker-compose up --no-start
```
Then run Kitematic and start your container.

## And then ? 
If you see the message : " docker-nodejs | server is listening on 8000 "
Then your web server is up : go to [http://localhost:8000](http://localhost:8000)
