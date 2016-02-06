#!/usr/bin/env bash

# Environment Variables
MYSQLPASS='DINGDONG'

# Install Apache, PHP, MySQL
echo "Installing LAMP stack..."
sudo apt-get update > /dev/null 2>&1
sudo apt-get -y install apache2 php5 libapache2-mod-php5 php5-mcrypt php5-curl php5-mysql php5-gd php5-cli php5-dev mysql-client mcrypt > /dev/null 2>&1
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant/cakephp-2.7.9 /var/www
fi

# Configure MySQL Server
echo "Configuring MySQL Server..."
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $MYSQLPASS" > /dev/null 2>&1
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $MYSQLPASS" > /dev/null 2>&1
sudo apt-get -y install mysql-server > /dev/null 2>&1
# Create DB connection
mysql -uroot "-p$MYSQLPASS" -e "CREATE DATABASE insight"
sudo cp /vagrant/files/database.php /vagrant/cakephp-2.7.9/app/Config/database.php

# Prep apache for CakePHP by enabling mod_rewrite and setting apache user in configs
echo "Preping Apache for CakePHP..."
sudo cp /vagrant/files/envvars /etc/apache2/envvars
sudo cp /vagrant/files/000-default /etc/apache2/sites-enabled/000-default
rm -rf /var/lock/apache2 
sudo a2enmod rewrite -q > /dev/null 2>&1

# Config and Restart all the installed services to verify that everything is installed properly
echo "Verifying and Starting services..."
service apache2 restart > /dev/null 2>&1
service mysql restart > /dev/null 2>&1

# Print off the result
if [ $? -ne 0 ]; then
   >&2 echo "Error: Please Check the Installed Services, Installed services failed to run."
else
   echo "Installed Services ran Sucessfully!"
fi