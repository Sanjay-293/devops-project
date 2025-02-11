FROM nginx:latest
COPY index.js /user/share/nginx/html
EXPOSE 80
