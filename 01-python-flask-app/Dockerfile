# ---- Fase 1: Build ----
# Usamos una imagen oficial de Python como base. 'slim' es una versión ligera.
FROM python:3.11-slim as builder

# Establecemos el directorio de trabajo dentro del contenedor.
# A partir de aquí, todos los comandos se ejecutan en /app
WORKDIR /app

# Copiamos solo el archivo de requerimientos primero.
# Esto aprovecha el caché de Docker. Si no cambiamos los requerimientos,
# Docker no reinstalará todo cada vez que hagamos un cambio en el código.
COPY requirements.txt .

# Instalamos las dependencias.
RUN pip install --no-cache-dir -r requirements.txt

# Ahora sí, copiamos el resto del código de la aplicación.
COPY . .

# ---- Fase 2: Final Image ----
# Empezamos de nuevo desde una imagen aún más pequeña para producción.
FROM python:3.11-slim

WORKDIR /app

# Copiamos solo los archivos instalados de la fase 'builder'.
# No copiamos el código fuente, solo lo necesario para correr.
# Esto resulta en una imagen final mucho más pequeña y segura.
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=builder /app /app

# Exponemos el puerto 5000, que es el que usa nuestra app Flask.
EXPOSE 5000

# El comando que se ejecutará cuando el contenedor se inicie.
CMD ["python", "app.py"]