#!/bin/bash

### What is this script for? ###

# Init all for an API

# DO NOT MODIFY

DEFAULT_PORT=3500
WP_PORT=${PORT:-$DEFAULT_PORT}

bold=`tput bold`
normal=`tput sgr0`

# CODE

printf "\n${bold}==> Remover contenedores previos...\n${normal}"
printf "${bold}==> Remover utn-clase6-api...\n${normal}"
docker rm -vf utn-fullstack-books-api
printf "${bold}==> Remover utn-clase6-mongo...\n${normal}"
docker rm -vf utn-fullstack-books-mongo

printf "\n${bold}==> Inicializar contenedores...\n${normal}"
printf "${bold}==> Inicializar utn-fullstack-books-mongo...\n${normal}"
docker run --name utn-fullstack-books-mongo -p 27017:27017 -d mongo:3.0
printf "${bold}==> Inicializar utn-fullstack-books-api...\n${normal}"
docker run --name utn-fullstack-books-api --link utn-fullstack-books-mongo:mongo -p $WP_PORT:$WP_PORT -v $PWD/=/app/ -d elgambet/utn-fullstack-books-api:0.0.1
