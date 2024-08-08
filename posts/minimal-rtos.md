
# Minimal RTOS for Raspberry Pi Pico


For this project I was reading into real-time operating systems (RTOS) and wanted to build out the minimal requirements of an RTOS. The primary purpose of this RTOS is to handle multiple scheduled tasks each with specific interval requirements and run them concurrently *or as close to*. To keep the minimal RTOS as light weight as possible, it uses a round-robin schedular to distribute resources. This means that each task gets an equal share of the CPU. 


## Hardware Setup

Refer to the following schematic to connect LEDs, a button, and a potentiometer to your Raspberry Pi Pico:

![Schematic](/project-images/minimal-rtos/feature.png)

This RTOS implementation uses the following components to demonstrate the functionality 

1. Raspberry Pi Pico
2. 10K potentiometer
3. 4pin tactile switch
4. 2*LEDs
5. 3*220R Resistors


---

For more complete documentation and to view the source code, view the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/minimal-rtos"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
