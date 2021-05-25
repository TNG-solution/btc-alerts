FROM node:alpine as builder

WORKDIR "/home/client"

#COPY ./package.json /
ENV REACT_APP_RUNTIME=production

COPY . .
RUN npm install --production
RUN npm run build

FROM nginx
EXPOSE 3006
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/client/build /usr/share/nginx/html