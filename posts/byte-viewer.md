---
title: "Byte Viewer"
slug: "byte-viewer"
description: "A react app for viewing binary data in files"
keywords: ["React", "Web Development", "JavaScript", "Tools"]
---

I created this project when I was exploring how the PICO-8 steganography works. This tool opens binary files and displays them as a grid of bytes. Bytes can be viewed in the grid as either decimal or hexadecimal. Hovering over a byte will display the byte value in binary. The grid also shows ASCII characters where possible. The grid shows 16\*16 bank of bytes (0x00-0xFF), but this bank can be cycled or changed. The app also has a decimal-binary/binary-decimal converter.

![feature](/project-images/byte-viewer/feature.png)

---

Try the App:

<a className="btn btn-dark" href="https://gcoulby.github.io/byte-viewer/"  target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i> Try the App</a>

or View the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/byte-viewer"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
