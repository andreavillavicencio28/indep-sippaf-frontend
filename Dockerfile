FROM node:18.10.0-alpine as ui-build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm install glob rimraf
RUN npm run build


FROM nginx:alpine
ENV TZ=America/Mexico_City
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
#COPY nginx.local.conf /etc/nginx/nginx.conf
COPY nginx.prod.conf /etc/nginx/nginx.conf
#COPY dist/sis-gob /usr/share/nginx/html/siaraf.com
COPY --from=ui-build /usr/local/app/dist/sis-gob /usr/share/nginx/html/siaraf.com

ENV PYTHONUNBUFFERED=1