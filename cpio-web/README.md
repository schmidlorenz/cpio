# Overview Web Interface

The CPIO Web Interface allows a powerful and flexible interaction with the remaining CPIO circuit and control software.

It will be written in [Python 3](https://docs.python.org/3/) and based on the [Django Framework](https://docs.djangoproject.com/en/1.9/) as a web app. Data exchange between the locally running control software will happen over a [SQLite](https://sqlite.org/docs.html) database. All of it runs together on a small, [Nginx](http://nginx.org/en/docs/) web server only accesible in the home network.

## Structure

The CPIO Web Interface can be separated in multiple layers building on eachother. Every layer has its corresponding folder:

 * [templates](templates/) forms the frontend consisting of static files which are included via templates into the actual web app
 * [web-app](web-app/) contains all Python code linking the visible interface shown to the user and the controlling database in a [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) manner forming the web app
 * [server-config](server-config/) contains all files and scripts needed to set up and configure the Raspberry Pi as a server connected to a database
