FROM node:6.10.3-wheezy

RUN npm install -g cordova ionic

WORKDIR /var/www/html

# # Install app dependencies
# COPY html/package.json /var/www/html
# RUN npm install

# CMD [ "npm", "start" ]
# CMD [ "bash" ]
# CMD bash -C 'bash'