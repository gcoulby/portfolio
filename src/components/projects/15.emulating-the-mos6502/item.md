---
title: 'Emulating the MOS6502'
date: '08-02-2021 11:01'
taxonomy:
    tag:
        - 'Web Development'
        - JavaScript
        - Emulation
        - Assembly
media_order: msedge_IyWkIC3hzC.png
---

I wanted to learn 6502 Assembly so began exploring different resources. I first came across Nick Morgan's 6502 tutorial [1], which I found to be very helpful for grasping the basics. However, I quickly hit a wall and began exploring different Assembly resources, C64 literature as well as Assembly for Zilog z80, Sharp LR35902 (Gameboy), Motorolla 68k (Sega Genesis). I found myself coming back to 6502 when I found Dave Poo's [2] video on reverse engineering the 6502 to make an emulator in C++. After watching Dave's process for creating instructions in C++ ( Read instruction definitions [3], code the functionality, run tests to ensure the instruction works as it is supposed to), I decided the best way to learn would be to move away from the 'Copy along' coding and just follow his methods to do it myself. I chose to do it in Javascript as I remembered Morgan's tutorial and liked how interactive the whole experience was.

This is the product of this CPD exercise.

This project is not original in idea, but its not copied code either. The aim here is purely a learning exercise.

---

Try the App:

<a class="btn btn-secondary" href="https://gcoulby.github.io/MOS6502/"  target="_blank" rel="noopener noreferrer"><i class="fa fa-globe-europe"></i> Try the App</a>

or View the Repository on GitHub:

<a class="btn btn-secondary" href="https://github.com/gcoulby/MOS6502"  target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> View on GitHub</a>

---

#### References

1 Morgan, N. (2020). skilldrick/easy6502. Retrieved 15 January 2021, from [https://github.com/skilldrick/easy6502](https://github.com/skilldrick/easy6502)

2 Poo, D. (2020). Emulating a CPU in C++ (6502). Retrieved 1 February 2021, from [https://www.youtube.com/watch?v=qJgsuQoy9bc](https://www.youtube.com/watch?v=qJgsuQoy9bc)

3 Jacobs, A. (2009) 6502 Introduction. Retrieved 1 February 2021, from [http://www.obelisk.me.uk/6502/](http://www.obelisk.me.uk/6502/)