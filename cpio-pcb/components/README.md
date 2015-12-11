# Overview PCB Components

This folder contains the part list of all used components in the CPIO PCB design as well as their documentation.

## Installation Note

In order to be able to `git diff` .xlsx spreadsheets use the following instructions as found on [stackoverflow](http://stackoverflow.com/questions/17083502/how-to-perform-better-document-version-control-on-excel-files-and-sql-schema-fil#17106035):
 1. Install a [xlsx to csv](https://github.com/dilshod/xlsx2csv) converter via python `sudo easy_install xlsx2csv`
 2. Indicate to git your new `git diff` method for xlsx files:
```
[diff "xlsx"]
  binary = true
  textconv = /usr/local/bin/xlsx2csv
```