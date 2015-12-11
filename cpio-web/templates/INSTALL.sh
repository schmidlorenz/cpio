#!/bin/bash

# Inform user about script
printf "
This script installs a complete web front-end toolchain existing out of:
 - Node.js and npm
 - SASS (via ruby)
 - Gulp and
 - Bower.

It will then initiate all local Node.js dependencies needed for this app. 
Please assure that you are in the same folder as this installation script.

In order to install a compatible Node.js version a remote script which needs
sudo rights will be executed. Please do only continue if you know about the
possible danger. \n\n"

# Ask for user's permission to continue
while true; do
	read -p "Do you want to continue? [y/n] " yn
	case $yn in
		[Yy]* ) break;;
		[Nn]* ) exit;;
		* ) printf "Please answer yes or no.\n";;
	esac
done

printf "\nThank you! We will start in a moment...\n\n"

# Install Node.js and update its included package manager npm
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm -g

# Install SASS via ruby
sudo gem install sass

# Install all required node.js packages
sudo npm install -g gulp
sudo npm install -g bower
sudo npm install

# Load web frontend dependencies with bower
bower install

# Generate static content with gulp
gulp
