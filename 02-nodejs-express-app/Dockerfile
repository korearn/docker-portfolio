# ---- Fase 1: Build ----
# Usamos una imagen oficial de Node.js. 'alpine' es una versión súper ligera.
FROM node:18-alpine as builder

WORKDIR /app

# Copiamos package.json y package-lock.json. El lockfile es importante para
# tener builds consistentes, ya que fija las versiones exactas de las dependencias.
COPY package*.json ./

# Instalamos las dependencias de producción.
# 'npm ci' es más rápido y seguro para entornos de CI/CD que 'npm install'.
RUN npm ci --only=production

# Copiamos el resto del código fuente.
COPY . .

# ---- Fase 2: Final Image ----
FROM node:18-alpine

WORKDIR /app

# De la fase 'builder', copiamos las dependencias instaladas y el código.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/index.js ./index.js

# Exponemos el puerto 3000, que es el que usa nuestra app.
EXPOSE 3000

# El comando para iniciar la aplicación.
CMD [ "node", "index.js" ]