from flask import Flask

# Creamos una instancia de la aplicación Flask
app = Flask(__name__)

# Definimos una ruta (la página principal '/')
@app.route('/')
def hello_world():
    return '<h1>Hello from a Docker Container!</h1><p>Your Python app is running.</p>'

# Esto permite correr el servidor cuando ejecutamos "python app.py"
# El host '0.0.0.0' es importante para que sea accesible desde fuera del contenedor
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)