FROM node:13-alpine as layout-constructor-ui-prod
WORKDIR /code
COPY . .
RUN cp .env.production .env
RUN npm install && npm run build

FROM nginx
EXPOSE 80
WORKDIR /srv/layout-constructor-ui-prod
COPY --from=layout-constructor-ui-prod /code/build /srv/layout-constructor-ui-prod/build
COPY config/nginx/default.conf /etc/nginx/conf.d/default.tmpl
RUN envsubst < /etc/nginx/conf.d/default.tmpl > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
