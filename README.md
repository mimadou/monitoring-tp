# Monitoring TP

## Description

Ce projet est une application Node.js. Il permet de commenter, de supprimer un commentaire et de modifier un commentaire. Les logs applicatifs sont écrits dans un fichier local et intégrés dans Elasticsearch à l'aide de Logstash. Les logs peuvent être visualisés dans Kibana à travers un dashboard personnalisé.


## Prérequis

- Node.js
- npm
- Elasticsearch
- Kibana
- Logstash

## Installation

1. Naviguez dans le répertoire du serveur :
cd server
2. Installez les dépendances :
npm install 
3. Démarrez le serveur :
node server.js

### test 
1. lancer les test :
npm test
1. Voir la Couverture des Tests :
npm run coverage
