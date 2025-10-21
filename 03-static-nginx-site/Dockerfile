# ---- Fase 1: Build ----
# Usamos una imagen base 'alpine' que es extremadamente pequeña.
# Le damos un nombre a esta fase para referenciarla luego.
FROM alpine:3.18 as builder

WORKDIR /app

# Copiamos nuestros archivos del sitio web a la imagen.
COPY index.html style.css ./

# ---- Fase 2: Final Image ----
# Usamos la imagen oficial de NGINX, también basada en Alpine para ser ligera.
FROM nginx:1.25-alpine

# El servidor NGINX por defecto busca los archivos en esta carpeta.
# Por eso, copiamos nuestros archivos (de la fase 'builder') a este directorio.
COPY --from=builder /app /usr/share/nginx/html

# Exponemos el puerto 80, que es el puerto estándar para tráfico web HTTP.
EXPOSE 80

# El comando para iniciar NGINX ya está incluido en la imagen base,
# por lo que no necesitamos un CMD. NGINX se iniciará automáticamente.