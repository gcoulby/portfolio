---
title: "'NU-BAC'"
slug: "nu-bac"
description: "A Building Automation Control Network monitoring system architecture"
keywords: ["IoT", "Systems/Hardware", "Microservices"]
---


The NuBAC (Northumbria University Building Automation Control) proposal focused on providing an innovative microservice architecture to safely allow academic researchers and other stakeholders access to live data from building management systems, specifically through BACNet gateways, without risking system integrity. This initiative addressed the challenges of ensuring data security and accessibility for research purposes, which had previously been hampered by the risks of unauthorized access to critical building control systems.

The primary value of the project was multi-faceted: it met unfulfilled post-construction commitments to provide a true living lab, to further the university's contributions to smart city and campus innovations. Additionally, it restored data ownership to the university, eliminating dependencies on external contractors.

The system was designed from the ground up to read data live data from a highly sensitive and secured BACNet network, transferring it across university networks using bespoke data-diodes, which provided a hardware controlled unidirectionality to mitigate all risks to secure networks. This data was then accessible via an API, ensuring that sensitive operational systems remained isolated from direct access. The solution fostered research and development, enhanced teaching, and strengthened industrial engagement, all while maintaining stringent security measures to protect the university’s infrastructure.

![nubac architecture](/project-images/nu-bac/feature.png)


