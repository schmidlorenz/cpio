# Overview PCB Design

The CPIO [PCB](https://en.wikipedia.org/wiki/Printed_circuit_board) is a small extension board for the Raspberry Pi which connects over the GPIO header (40 pins). It interfaces with multiple sensors such as:
 - temperature
 - humidity
 - brightness

and multiple actuators such as:
 - heating pads
 - ventilation fans
 - water pumps
 - lights

The schematic and layout of the PCB are design with Cadsoft's [Eagle](http://www.cadsoft.de/download-eagle/).

## Structure

The two folder with the prefix "eagle-" are used by Eagle:
 * [eagle-lbr](eagle-lbr/) contains the component library used in the design in addition to the [SparkFun](https://github.com/sparkfun/SparkFun-Eagle-Libraries) and [Adafruit](https://github.com/adafruit/Adafruit-Eagle-Library) library
 * [eagle-proj](eagle-proj/) contains the different prototype designs composed of layout and schematic files

The [components](components/) folder contains the part list of all used components as well as their documentation.

## Eagle Grid Settings

In order to have correct alignment of all components between different developers please use the following grid settings:

 - Grid: 0.635mm
 - Alt Grid: 0.127mm


The default setting can be changed in `[Eagle Install Dir]/scr/eagle.src`:
````
BRD:
Grid mm 0.635 on;
Grid alt mm 0.127;
````

## git diff

In order to be able to `git diff` for Eagle schematic (`.sch`) and layout files (`.brd`) use the [eagle-automation](https://github.com/guyzmo/eagle-automation) Python tool (also called `pea`) which generates images highlighting the differences visually.
It can be installed over [`pip`](https://pip.pypa.io/en/stable/):

    pip3 install eagle_automation

**Note:** Despite that a Python egg for Python 2.7 is available it seems as if the tool requires to be run with Python 3.

After installation to show differences to the design that have not yet been committed use the following command

    git difftool -t eaglediff

**Note:** The `pea` tool contains further functions allowing to generate for example a bill of material but most of it seem to be broken at the current moment (see [#5](https://github.com/guyzmo/eagle-automation/issues/5)). Instructions on how to use them will be added here once the issues are fixed.