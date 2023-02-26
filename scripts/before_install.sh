#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/gonza/ecommerceServer/_work/ecommerceServer

cd /home/gonza/ecommerceServer/_work/ecommerceServer/ecommerceServer

#download node and npm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

#add npm and node to path
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

#install node
nvm install node

#install pm2
npm install pm2 -g


#restart pm2 services
pm2 stop all
pm2 start all


#!/bin/bash
