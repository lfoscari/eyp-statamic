# EYP Italy
EYP Italy website made with Statamic.
Il tema si chiama `eypst` e comprende i layout e il SCSS/CSS + JS, il tema è stato creato con Bulma,
sono state utilizzate in modo intensivo le classi proposte per permettere modifiche future molto velocemente.
Nel tema sono richiamate 2 collezioni `consigliodirettivo` e `assistentidipresidenza`.

## Impostare il droplet

#### Initial setup droplet
1. https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04
2. Creare una chiave SSH del droplet per la repository e aggiungerla tra quelle accettate su GitHub
3. https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04

#### Impostare il dominio

Andare su Google Domains e far puntare il dominio al droplet.

#### Impostare Let's Encrypt

https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04

#### Installare Statamic

1. Installare Apache2 e Php
2. Installare i pacchetti php necessari e mettere la timezone
3. Clonare la repository in var/www/
4. `sudo a2enmod rewrite` (attivare la riscrittura degli url)
5. `sudo systemctl restart apache2`
6. `chmod -R 777 site local statamic assets`
7. `php please key:generate`
8. In `/etc/apache2/apache2.conf` sotto `Directory var/www` cambiare in `AllowOverride All` (così vede l’htaccess)
9. Modificare in statamic il file site/settings/system.yaml per far corrispondere il dominio (it e en)

#### Mail?
