# Aplicación de Dictado de Voz con Encriptación en Angular y Node.js

## Descripción
Este proyecto permite encriptar y desencriptar cadenas de texto utilizando **RSA_PKCS1_OAEP_PADDING**.
## Nota: 
El método de desencriptado **RSA_PKCS1_PADDING** ha sido descontinuado en Node.js a partir de la versión 20 debido a un cambio de seguridad. Por lo que se utlizo el algoritmo **RSA_PKCS1_OAEP_PADDING**
La versión de Node que manejo es la : **Node.js v20.16.0**

##  Tecnologías utilizadas
- **Frontend**: Angular 19 (con Angular Universal)
- **Backend**: Node.js con Express
- **Encriptación**: `crypto` de Node.js

##  Instalación
- **Instalación de dependencias**: npm install
- **Ejecutar el Backend NodeJS**: cd backend/src
                                  node server.js
- **Ejecutar el FrontEnd Angular 19**: cd PT_Front-End\pruebaT_front>
                                        ng serve -o                               


##  Uso de la API
Este endpoint permite encriptar un texto.

#### **URL:**
POST http://localhost:3000/api/encryption/encrypt
**En el cuerpo de la solicitud**
            {
            "text": "Hola"
            }

**Respuesta esperada:**
            {
            "encryptedText": "BtfI1v9JyHJ0v7sm4qqeGqbI6mWCKfBp+GneOdy3XBCwH1sIRyAchyjJwFML3GGA9Xoq+wEhkjxQg9iRFmD3q2yhPNRCSMbPwTRCY44qw9ErdgtbK7njRvDF5yFg2jIhkmryiVWw3PQOmdRITiBhYjMIpbsiFJvx/LczHwVO7IvOL1YZY//zgqS974r1qKKGlawy2w1B9VK8maizJUy7Eu07vPrkfY+4zV6OdRRjXQpnvnCTEzSq25qhomxICLdf5iuC1wH1pKwNB61BaiCaDO++1wwGjptmZGX2jsK+HvpAa0W6zPYK/sTauR3HNWtsaMt31bw8272QLBduy06aqw=="
            }

Este endpoint permite desencriptar un texto previamente encriptado.

POST http://localhost:3000/api/encryption/decrypt
**En el cuerpo de la solicitud**

            {
            "encryptedText": "BtfI1v9JyHJ0v7sm4qqeGqbI6mWCKfBp+GneOdy3XBCwH1sIRyAchyjJwFML3GGA9Xoq+wEhkjxQg9iRFmD3q2yhPNRCSMbPwTRCY44qw9ErdgtbK7njRvDF5yFg2jIhkmryiVWw3PQOmdRITiBhYjMIpbsiFJvx/LczHwVO7IvOL1YZY//zgqS974r1qKKGlawy2w1B9VK8maizJUy7Eu07vPrkfY+4zV6OdRRjXQpnvnCTEzSq25qhomxICLdf5iuC1wH1pKwNB61BaiCaDO++1wwGjptmZGX2jsK+HvpAa0W6zPYK/sTauR3HNWtsaMt31bw8272QLBduy06aqw=="
            }

**Respuesta esperada:**
            {
            "decryptedText": "Hola"
            }


##  Pruebas
1.- Ejecuta el proyecto en tu navegador.

2.- Haz clic en el botón de micrófono para dictar tu texto (puedes decir tu nombre o cualquier cosa).

3.- El texto dictado aparecerá en el campo de entrada.

4.- Espera unos segundos y abre las herramientas de desarrollo en el navegador.

5.- En la consola, verás un mensaje con el texto encriptado, por ejemplo:
        Texto encriptado: "BtfI1v9JyHJ0v7sm4qqeGqbI6mWCKfBp+GneOdy3XBCwH1sIRyAchyjJwFML3GGA9Xoq+wEhkjxQg9iRFmD3q2yhPNRCSMbPwTRCY44qw9ErdgtbK7njRvDF5yFg2jIhkmryiVWw3PQOmdRITiBhYjMIpbsiFJvx/LczHwVO7IvOL1YZY//zgqS974r1qKKGlawy2w1B9VK8maizJUy7Eu07vPrkfY+4zV6OdRRjXQpnvnCTEzSq25qhomxICLdf5iuC1wH1pKwNB61BaiCaDO++1wwGjptmZGX2jsK+HvpAa0W6zPYK/sTauR3HNWtsaMt31bw8272QLBduy06aqw=="


##  La llaves privada y publica se encuentra en la carpeta src/keys


###  Integración de Dockerfile y Construcción.
**Dockerfile de BackEnd**
          Desde el directorio: cd PT_Front-End/pruebaT_front
          docker build -t encryption-backend ./backend
          docker run -p 3000:3000 encryption-backend
          docker ps

**Dockerfile de FrontEnd**
          Desde el directorio: cd PT_Front-End/
          docker build -t encryption-frontend ./pruebaT_front 
          docker run -p 8080:80 encryption-frontend
          docker ps



**Prompts utilizados.**

1.- Configuración de los algoritmos RSA_PKCS1_PADDING
2.- Configuración de los algoritmos RSA_PKCS1_OAEP_PADDING 
3.- Generación de claves privadas en OpenSSL
4.- API webkitSpeechRecognition para el reconocimiento de voz en tiempo real.

###  Clonar el repositorio
```bash
git clone https://github.com/Leo-JG1024/front_gpoSalinas.git
cd pruebaT_front
