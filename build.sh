#!/bin/bash

# Verificar si Node.js y npm están instalados
if ! command -v node &> /dev/null
then
    echo "Node.js no está instalado. Por favor, instálalo primero."
    exit
fi

if ! command -v npm &> /dev/null
then
    echo "npm no está instalado. Por favor, instálalo primero."
    exit
figit 
# Instalar dependencias de Node.js
npm install
# Construir el proyecto React
npm run build

# Eliminar el directorio 'public' si existe
rm -rf public

# Crear el directorio 'public'
mkdir public

# Mover los archivos de construcción al directorio 'public'
mv build/* public/

echo "Setup completed successfully."
