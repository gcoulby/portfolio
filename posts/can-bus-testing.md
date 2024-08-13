---
title: "J1939 CAN BUS Testing"
slug: "can-bus-testing"
description: "A minimal example to showcase CANBus communication"
keywords: ["C++", "Arduino", "Microcontrollers", "Systems/Hardware", "J1939", "VueJs", "TypeScript"]
---


# J1939 CAN BUS Testing


I developed this test as an early prototype for testing the MCP2515 CAN Transceiver in isolation. To test the transceiver I connected two MCP2515s to separate Arduino Uno R3 boards and connected them together via the CAN High and CAN Low pins (using 2 120R resistors to prevent signal reflections). The test involved a 4-stage development.


1. The First Arduino was programmed as a CAN Sender. Its job was to read values from the anolog pins and build a valid CAN message. This was done using the [AutoWP](https://www.arduino.cc/reference/en/libraries/autowp-mcp2515/) arduino library. I initially developed this with just a single analog sensor and tested it with an oscilloscope and logic analyzer to ensure I was receiving valid data and that data was being suitably converted to CAN. 

2. The second Arduino was programmed to parse the CAN frames, build them into a valid JSON message and transmit them over a UART to a computer so they could be picked up by a COM reader service. 

3. Following the same process I used on the [SAP-1 Emulator Project](https://grahamcoulby.co.uk/portfolio/sap-1-emulator/). The third piece of the puzzle was an Express.js project that read the COM port for the incomming JSON data and echoed the data to a TCP websocket. 

4. The final stage was a simple VueJS application, which read the TCP websocket and parsed the JSON dat, ultimately rendering the analog sensor values into reactive Vue components.


## Hardware Setup

The following schematic demonstrates how the project was configured:

![Schematic](/project-images/can-bus-testing/schematic.png)

The implementation uses the following components to demonstrate the functionality 

1. 2* Arduino Uno
2. 2* MCP2515 Shield
3. 10K potentiometer
4. MAX4466 Analog Microphone
5. Light Dependent Resistor
6. 2* 120R Resistors

---


## Media


<img src="/project-images/can-bus-testing/1.png" alt="image" width="466" height="auto">

<br />
<br />

<iframe width="466" height="828" src="https://www.youtube.com/embed/4vcKkvl3GRA" title="CAN Bus Testing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Repositories

There are various repositories for this project. View them on GitHub:


#### Stage 1 - CAN Sender

<a className="btn btn-dark" href="https://github.com/gcoulby/can-send-test"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
<br /><br />

#### Stage 2 - CAN Receiver

<a className="btn btn-dark" href="https://github.com/gcoulby/can-read-test"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
<br /><br />

#### Stage 3&4 - COM Reader and VueJs Application

<a className="btn btn-dark" href="https://github.com/gcoulby/can-com-reader"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
<br /><br />