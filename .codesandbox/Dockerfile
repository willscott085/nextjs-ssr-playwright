FROM ubuntu:latest

RUN apt update -y && apt install -y curl 
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && apt-get install -y nodejs
RUN npx playwright install-deps
RUN npm install -g yarn
