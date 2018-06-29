## Exercice Docker + NodeJS ( mini-projet )

La société Tech-Solution vous a missionné pour terminer leur formulaire de contact. 
Elle vous demande de coder le nécessaire pour que l'envoi d'email fonctionne. 
Comme elle n'a pas précisé à quelle adresse email de destination elle veut recevoir ses demandes, vous devez simplement rentrer votre adresse personnelle.

*Mission* : Récupérer les données POST envoyées par le formulaire en NodeJS et envoyer un email à destination de votre adresse personnelle.

Nb : Le package nodemailer est préinstallé dans server.js

## Démarrer le projet

```bash
git clone https://github.com/simplon-roanne/docker-nodejs-mail
cd docker-nodejs-mail
docker-compose up
```

## Documentation

La seule documentation nécessaire est à cette adresse : https://community.nodemailer.com/

## Exercices bonus

*ExoBonus 1* : Renvoyer une erreur si le format de l'email n'est pas bon.

*ExoBonus 2* : Ajouter un champ "Pièce-Jointe" sur le frontend et gérer l'envoi de la pièce jointe à l'email.

*ExoBonus 3* : Styliser l'email avec du HTML et du CSS pour qu'il soit plus lisible et professionnel.

*ExoBonus 4 ( Hard )* : Sauvegarder le nom et l'email en base de données ( de votre choix ).

Quelques idées de recherches Google :
- "How to validate an email address in JavaScript"
- "node mailer add attachment"