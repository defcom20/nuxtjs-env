# etapa de compilación
FROM node:12.18.2 as build-stage
ARG NAME_ENV=$NAME_ENV
COPY ["package*.json" ,  "/app/"]
WORKDIR /app
RUN npm install
COPY ["." ,  "/app/"]
# RUN npm run staging
RUN echo "Ejecutando - $NAME_ENV"
RUN npm run $NAME_ENV
RUN ls -lth
# etapa de producción
FROM nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
