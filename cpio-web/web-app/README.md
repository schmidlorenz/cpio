# Overview Web App

The goal of the web app is to form a consistent interface between the low-level software controlling all sensors and actuators and the user. It is written in [Python 3](https://docs.python.org/3/) and based on the [Django Framework](https://docs.djangoproject.com/en/1.9/). Data exchange between the locally running control software will happen over a [SQLite](https://sqlite.org/docs.html) database.

## Installation

**Note:** The following toolchain is specifically written for Python 3 with additional indications on how to assure the correct version of Python is used in case of multiple installed version on one system.

### virtualenvwrapper

Since the world of Python modules is fragmented the web app is developed in a dedicated virtual environment which guarantees that all developers always use the same module versions. The virtual environment is organized by the tool [`virtualenvwrapper`](http://virtualenvwrapper.readthedocs.org/en/latest/) which can be installed as following:

    pip install virtualenvwrapper

Since `virtualenvwrapper` stores all virtual environments at one common place, this place has first to be defined (best in the `.bash_profile` or a similar configuration file):

    export WORKON_HOME=$HOME/.virtualenvs
    source /usr/local/bin/virtualenvwrapper.sh

If you use multiple Python versions on your system you might also add the following line before reloading `virtualenvwrapper.sh` in order to specify Python 3 as correct version:

    export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3

### Configuration

Finally create the virtual environment in this very folder:

    mkvirtualenv cpio

and install all requirements as given by the project:

    pip install -r requirements.txt


## Usage

The following commands are available:
 - `workon cpio` to enter the project's virtual environment
 - `deactivate` to leave it
 - `pip freeze > requirements.txt` to add newly installed modules by you to the project requirements
 - `pip install -r requirements.txt` to update the modules of your virtual environment to the one of the project

