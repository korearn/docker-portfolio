# Plantillas de Dockerfiles para Fiverr

Este repositorio contiene plantillas de Dockerfiles profesionales y optimizadas para diferentes tipos de aplicaciones. El objetivo es servir como portafolio para mi gig de Docker en Fiverr.

## 🚀 Plantillas Disponibles

### 1. Python / Flask

-   Ubicación: `01-python-flask-app/`
-   Características: Build multi-etapa para una imagen final ligera y segura.
-   **Para construir:** `docker build -t python-app .`
-   **Para correr:** `docker run -p 5000:5000 python-app`

### 2. Node.js / Express

-   Ubicación: `02-nodejs-express-app/`
-   Características: Build multi-etapa usando `npm ci` para instalaciones rápidas y consistentes.
-   **Para construir:** `docker build -t node-app .`
-   **Para correr:** `docker run -p 3000:3000 node-app`

### 3. Sitio Estático / NGINX

-   Ubicación: `03-static-nginx-site/`
-   Características: Imagen final súper ligera usando NGINX sobre Alpine para servir archivos estáticos (HTML, CSS, JS).
-   **Para construir:** `docker build -t static-site .`
-   **Para correr:** `docker run -p 8080:80 static-site`