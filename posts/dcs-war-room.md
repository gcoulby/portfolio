---
title: "DCS War Room"
slug: "dcs-war-room"
description: "A full-stack application for parsing and viewing locations of entities from DCS World flight simulator."
keywords: ["C++", "Microcontrollers", "VueJs", "JavaScript", "Gaming"]
---


#### Introduction
The DCS WarRoom project is a sophisticated backend system designed to interface with DCS World via TacView, parsing live gameplay data and making it accessible over a REST API. This API is consumed by a Vue.js frontend application, which visualizes the data on a Leaflet map using dynamic NATO Joint Military Symbology. This document outlines the flow of data from TacView to the map visualization.

#### Data Flow
1. Data Collection from TacView:

    - **TacView Client:** A custom C++ client connects to TacView, which is a tool for real-time data tracking in DCS World. This client uses the network capabilities provided by Boost Asio for socket communication.

    - **Connection and Data Reception:** The client establishes a connection with TacView and begins receiving a continuous stream of data. This data typically includes detailed positional and state information about various military entities engaged in the simulation.

2. Data Parsing:

    - **Message Parser:** Once data is received from TacView, it is handed over to the MessageParser component. This parser is responsible for interpreting the raw data, which is formatted in a bespoke serialization that includes timestamps, entity identifiers, and other relevant attributes.
    - **Data Extraction:** The parser identifies and extracts key information such as geographical coordinates, entity types, and status updates. It organizes this data into a structured format (DataMessages), making it easier to handle in subsequent processes.

3. API Serving:

    - **Crow Framework:** Utilizing the lightweight Crow framework, the server defines endpoints that allow data queries over HTTP. This setup is ideal for serving web applications due to its simplicity and efficiency in handling RESTful requests.
    - **REST API Endpoints:**
        - **/api/v1/entities:** Returns a list of all entities with basic or detailed information based on the request parameters.
        - Detailed requests provide all available data for entities, whereas basic requests might only return critical information like position and entity type.

4. Frontend Visualization:

    - **Vue.js Application:** The frontend, built with Vue.js, queries the REST API at regular intervals to fetch updated data. It processes and prepares this data for visualization.
    - **Leaflet Map Integration:** The geographical data (latitude, longitude) from the API is used to plot entities on a Leaflet map. Leaflet provides extensive support for interactive maps, which are further enhanced with NATO Joint Military Symbology to represent different military units and statuses dynamically.

#### Dynamic Visualization
- **NATO Joint Military Symbology:** The frontend utilizes this standard to visually differentiate between various entity types and states, providing users with a clear, tactical overview of the simulated battlefield.
- **Real-time Updates:** As the backend continually parses and serves new data, the frontend refreshes the map display, ensuring that users have access to the latest information without significant delays.

#### Conclusion
The DCS WarRoom Server and its accompanying frontend application demonstrate a robust use of modern software architecture principles to provide a real-time, dynamic visualization of military simulations. By leveraging tools like TacView for data collection, Crow for API management, and Leaflet for mapping, the system offers a comprehensive solution for monitoring and analyzing simulated military operations.

![screenshot](/project-images/dcs-war-room/feature.png)


<iframe width="843" height="474" src="https://www.youtube.com/embed/QASE1rxmw-4" title="DCS War Room" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

You use the front-end app:

<a className="btn btn-dark" href="https://gcoulby.github.io/DCSWarRoom/"  target="_blank" rel="noopener noreferrer"><i className="fa fa-globe"></i> Try the App</a>

or View the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/DCSWarRoom"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>

and you can get the server here:

<a className="btn btn-dark" href="https://github.com/gcoulby/DCSWarRoomServer"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>
