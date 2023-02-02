# CodeSandbox supports debian & ubuntu based images
FROM ubuntu:latest
 
# Example; install htop by default
RUN apt update -y && apt install -y htop curl
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && apt-get install -y nodejs
RUN npx playwright install-deps && npx playwright install
RUN npm install -g yarn 

# The project will be mounted in /workspace by default

# Every new shell will open inside the built container

# On top of this build, we install `zsh`, `git` and `docker` as additional
# Docker layers.
