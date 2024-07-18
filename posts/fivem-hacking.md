---
title: "FiveM Hacking Mod"
slug: "fivem-hacking"
description: "A bespoke hacking resource for Arma and FiveM roleplay servers"
keywords: ["Gaming", "Modding", "Game Scripts", "Lua", "JavaScript"]
---

I developed the first prototype for this project when developing for Arma 3 Roleplay server. The concept was that you could hack into mainframes and gain access to additional items, money, passwords, access codes, admin commands etc. I was pretty pleased with how this turned out since it was written in Arma 3's own scripting language Bohemia's Status Quo Functions (SQF).

This project then expanded and grew legs when I ported it over to FiveM... but since it was originally written in SQF, the porting process was more a ground-up rebuild in Lua, HTML and JavaScript. The principal flow within FiveM was that you could gain access to a custom USB stick and then use that to gain access to the NetShark application. Once inside the you could do some reconnaissance to find accessible servers then use NMAP to identify open ports. Once inside a server, the police would be notified of the hack, while you are left traverse the filesystem to find encrypted files, or look for `.msg` files, which would give you a hint where to look. 

Using the `exploit` command, you could create an encryption key that acts as a time sync to afford the police some time to responds. Once you have the key you could be used as a second parameter for the `cat` command to gain access to encrypted files. The encrypted files would have pin codes for safes in stores around the city. These pins would change weekly meaning hackers have time to sell the information, or could use the codes themselves to gain extra cash. 

![logo](/project-images/fivem-hacking/feature.png)

![image](/project-images/fivem-hacking/1.png)

![image](/project-images/fivem-hacking/2.png)

![image](/project-images/fivem-hacking/3.png)


Original ARMA3 version:
![image](/project-images/fivem-hacking/4.jpg)
