---
title: "DCS Keypad"
slug: "dcs-keypad"
description: "A keypad control interface for DCS World flight simulator."
keywords: ["Systems/Hardware", "C++", "Microcontrollers", "Pico"]
---

For this project I wanted to develop a control interface for DCS world. This was a project more borne out of personal development curiosity more than necessity. As such I didn't want to just download DCSBios and use the 'one-liner' code approach offered by the Arduino library. Instead I wanted a challenge! So, I decided to transpose the Arduino library so that it could run on the Raspberry Pi pico, so that I could run the 'one-liner' approach after putting the work in. 

The transposition of the library is not complete in this implementation as there were a few very nuanced snags that acted as blockers. This means the pico is currently unable to process telematics being transmitted from the game and I was only able to get it working under DEFAULT_SERIAL. However, the pico is able to send messages into the game using the DCS Bios interfaces compiled through a traditional CMake approach. I was therefore able to successfully hook up a 16-button keypad I had lying around to the F/18's up-front controller. 

Overall I am pleased with how the transposition of the library turned out and I am excited to try and get data out of the game into the pico environment. 

<iframe width="1134" height="638" src="https://www.youtube.com/embed/sa4q6qKcH4M" title="interfacing with DCS studio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
