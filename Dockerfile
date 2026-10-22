   FROM nginx:alpine
   # Copy all static files to Nginx's default web directory
   COPY . /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
