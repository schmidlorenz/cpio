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
