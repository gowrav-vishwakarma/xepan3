#!/bin/sh

if [ -f .env ]; then
    export $(cat .env | sed 's/#.*//g' | xargs)
fi

IFS=', ' read -r -a services <<<"$SERVICES"

script="concurrently "
for element in "${services[@]}"; do
    script = "${script} (cd ./modules/$element/server && nodemon ./server.js)"
done

eval $script
