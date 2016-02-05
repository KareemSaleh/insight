#!/usr/bin/env bash

# Install Apache, PHP, MySQL
sudo apt-get update
sudo apt-get -y install apache2 php5 libapache2-mod-php5 php5-mcrypt php5-curl php5-mysql php5-gd php5-cli php5-dev mysql-client mcrypt

# Get rid of Apache warnings
# echo "ServerName 127.0.0.1" >> /etc/apache2/apache2.conf

if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant/cakephp-2.7.9 /var/www
fi

#Configure MySQL Server
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password MYPASSWORD123'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password MYPASSWORD123'

sudo apt-get -y install mysql-server

#Restart all the installed services to verify that everything is installed properly
echo -e "\n"

service apache2 restart && service mysql restart > /dev/null

echo -e "\n"

if [ $? -ne 0 ]; then
   echo "Error: Please Check the Installed Services, Installed services failed to run."
else
   echo "Installed Services ran Sucessfully!"
fi

echo -e "\n"