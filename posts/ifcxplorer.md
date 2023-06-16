---
title: "IFCXplorer"
slug: "ifcxplorer"
description: "A react app to read IFC STEP-21 files with syntax highlighting and documentation lookup"
keywords: ["React", "Research", "Web Development", "JavaScript", "Tools"]
---

This project is a a text reader specifically designed for reading Industry Foundation Class (IFC) files. IFCs are open standard Building Information Modelling (BIM) models.

I made the first variation of this project when I was working as a research assistant, working predominantly with IFC files. My role involved repeated interrogation of IFC files (in text format, rather than as 3D models). These files are essentially made up of cross referenced hash tags (see featured image), which refer to shared entities. Therefore, reading a file as text involves a lot of find operations and moving around the file to get a complete picture of an Entity.

The original application was made in .NET Framework back in 2015 and its primary function was to provide a way to hover over hash tag reference similar to what I was used to with Visual Studio when coding. A secondary requirement was the ability to open IFCZip files. IFCZips are just a single IFC file compressed as a zip archive with the file extension changed. However, text editors such as Notepad++ were unable to open these files or required extra steps.

Fast-forward 6 years and Visual Studio Code has dominated the market of text editors and is highly extensible. Since it was built on the open source Monaco editor, I wanted to revamp the old project and make it a web based application. Using Monaco allowed me to have much nicer syntax highlighting, while retaining the ability to hover peek hash tags. It also provided me with the ability to provide rich text popups, which link to Schema definitions:

![screenshot](/project-images/ifcxplorer/feature.png)

It also enables peek definitions, which show a much nicer way to see the hash tags:

![screenshot](/project-images/ifcxplorer/1.png)

---

Try the App:

<a className="btn btn-dark" href="https://gcoulby.github.io/IfcXplorer/"  target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i> Try the App</a>

or View the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/IfcXplorer"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
