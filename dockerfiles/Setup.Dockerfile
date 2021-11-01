FROM node:14

WORKDIR /vue-setup

RUN npm install -g @vue/cli

# The following commands ensure access to our files
# If we left them out, changing files on our local setup
# would fail due to insufficient permissions.
RUN userdel -r node

ARG USER_ID

ARG GROUP_ID

RUN addgroup --gid $GROUP_ID user

RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

# Set the active user and open the interactive terminal
USER user

ENTRYPOINT [ "bash" ]