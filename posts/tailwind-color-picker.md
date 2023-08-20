---
title: "Tailwind Color Picker"
slug: "tailwind-color-picker"
description: "A VueJs application for copying color classes from Tailwind's color palette."
keywords: ["Web Development", "JavaScript", "Vue", "Research", "Tools"]
---

This is a VueJs application for copying color classes from Tailwind's color palette. It was created as a reference tool for a project I was working on that used Tailwind CSS. I found it useful for quickly copying color classes to the clipboard and pasting them into my code editor.

The application is built with VueJs and Tailwind CSS. It uses the Tailwind CSS color palette as a data source and dynamically generates the color classes. The color classes are copied to the clipboard when a color is clicked.

Custom Keybindings can be used to copy the color classes to the clipboard with different prefixes. This is useful for copying e.g., `slate-500`, `bg-slate-500`, `text-slate-500`, `border-slate-500`, `dark:bg-slate-500`, `dark:text-slate-500`, `dark:border-slate-500`, etc. The keybindings can be customised to any prefix allowing the user to set shortcuts for their most commonly used color classes. A shortcut can also be setup for hex value of the color using the `!hex` prefix.The keybindings are set within the application and are stored in local storage, so they will persist between sessions.

---

![screenshot](/project-images/tailwind-color-picker/feature.png)

Try the App:

<a className="btn btn-dark" href="https://gcoulby.github.io/tailwind-color-picker/"  target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i> Try the App</a>

or View the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/tailwind-color-picker"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
