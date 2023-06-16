---
title: "Domination (PICO-8)"
slug: "domination-pico-8"
description: "A homebrew card game for PICO-8"
keywords: ["Lua", "PICO-8", "Gaming"]
---

I recently discovered the Pico-8 fantasy console, and I've been having a lot of fun with it. I thought a good way to learn the system would be to try and recreate some of my old games. I've started with Domination, which I originally made for the Nintendo Gameboy ([https://grahamcoulby.co.uk/portfolio/domination-gb](https://grahamcoulby.co.uk/portfolio/domination-gb) )

I was able to get the game running on the Pico-8 with relative ease, as I have a fair amount of experience with Lua, so I just had to translate the code and learn the PICO-8 API. The map, sprite and music were all created in the Pico-8 itself, and the sound effects were created using the Pico-8's built in sound editor.

It still baffles me that the entire game is encoded into png file using steganography. This image contains the entire game, including the map, sprites, music and sound effects and can be run on the Pico-8.

![feature](/portfolio/project-images/domination-pico-8/feature.png)

---

#### Instructions

The goal of the game is to have the most cards.

You play a card by moving the cursor in your hand with ⬅️➡️ and pressing 🅾️ to select a card.

Select an available slot on the board and press 🅾️ to play it.

Cards can be won by placing your card adjacent to an opponent's card.

When the values on your card are > or = to adjacent values on your opponent's card, you win their card.

This effect can cascade when you win a card! When a card is won adjacencies are then evaluated accordingly, for the newly aquired card. however, this cascade can only happen once and only if the values on your new card are > the adjacent vales on the next layer of opponent cards.

You win the round by having the most cards when the last card is played. enjoy!

---

You call also play the game direct in the browser using the Pico-8 player:

![controls](https://imgur.com/BPMVOyQ.png)

<iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=jubibeyewe" allowfullscreen width="621" height="513" style="border:none; overflow:hidden"></iframe>

---

You can also try the app in a dedicated browser window (which supports mobile controls):

<a className="btn btn-dark" href="https://gcoulby.github.io/domination-p8/"  target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i> Try the App</a>

or View the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/domination-p8"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
