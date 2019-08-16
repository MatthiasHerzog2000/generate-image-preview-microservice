# Generate-Image-Preview-Microservice

## Introduction

This Project is part of the File Browser Project which currently consists of following Projects

- https://github.com/MatthiasHerzog2000/download-file-microservice
- https://github.com/MatthiasHerzog2000/generate-image-preview-microservice
- https://github.com/MatthiasHerzog2000/file-browser-client
- https://github.com/MatthiasHerzog2000/file-browser-server
- https://github.com/MatthiasHerzog2000/User-Management

The aim of this Projects is to recreate a Google Drive like experience for your own Files e.g. you want to access data of your private NAS from outside with a better UI. This part is responsible for all Previews of the different Files and to serve the Documents which can be watched in the Browser

### Features

- It's possible to generate Image Previews of almost every File.
- converts Files to Pdf Documents for the Client.

## Prerequisites

### unoconv

`apt-get install unoconv`

### ffmpeg

`apt-get install ffmpeg`

### imagemagick

`apt-get install imagemagick`

### curl

`apt-get install curl`

## Getting Started

Clone the Project with `git clone https://github.com/MatthiasHerzog2000/generate-image-preview-microservice.git`.
After this you need to install the node modules. Type `npm install` into the console.
The next Step is to create a _config.js_ File. This File stores the secret for the JWT Middleware to check.
For a more stable experience you can run `unoconv --listener` in a seperate Terminal.
