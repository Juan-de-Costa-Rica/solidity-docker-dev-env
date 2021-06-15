ARG VARIANT="focal"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}
USER root
WORKDIR /home/app
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -fsSL https://deb.nodesource.com/setup_16.x  | sudo -E bash -
RUN sudo apt-get -y install nodejs
RUN echo "{\"name\": \"solidity-dev\"}" > package.json
RUN npm install
RUN npm install -g truffle@5.3.10
