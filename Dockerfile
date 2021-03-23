# pull official base image
FROM node:alpine  AS builder

COPY ./ /engtoolbox

COPY ./frontend/dev-package.json /engtoolbox/frontend/package.json
COPY ./frontend/config/dev-paths.js /engtoolbox/frontend/config/paths.js
COPY ./frontend/config/dev-webpack.config.js /engtoolbox/frontend/config/webpack.config.js

WORKDIR /engtoolbox/frontend
RUN npm install
RUN npm run build 



FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

COPY ./api /app
WORKDIR /app

COPY --from=builder /engtoolbox/api/static/react ./static/react/
# COPY --from=builder /engtoolbox/backend/app/templates ./templates/
COPY --from=builder /engtoolbox/api/static/react/index.html ./templates/index.html

RUN pip install -r ./requirements.txt
RUN pip install pydantic[email]
