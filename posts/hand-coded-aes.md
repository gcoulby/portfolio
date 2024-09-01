---
title: "Hand Coding the Advanced Encryption Standard (AES)" 
slug: "hand-coded-aes" 
description: "A detailed exploration and implementation of the AES encryption algorithm in C++ for educational purposes."
keywords: ["AES", "Encryption", "C++", "Security", "Cryptanalysis"]
---

![screenshot](/project-images/hand-coded-aes/feature.png)

#### Project Overview
This project involves implementing the Advanced Encryption Standard (AES) algorithm in C++ from scratch. This journey through one of the most utilized encryption standards was both challenging and enlightening, and I hope you find the discussion on the nuances of AES as intriguing as I did.

#### Why AES and Why C++?
AES is ubiquitous, used across software applications worldwide to secure data. My curiosity about AES was piqued not just because of its widespread use but also due to its reputation for security and efficiency. I am exploring software engineering roles that focus on C++/Embedded development. Therefore, I wanted to use this project as a means to tackle a complex problem, requiring careful planning and unit testing. 

#### Why Code AES by Hand?
The answer lies in the pure educational value it provides. Building AES from the ground up is like putting together a complex puzzle. Each piece of the algorithm, from key expansion to the final AddRoundKey, fits into a larger picture of how secure systems function.

Moreover, coding it by hand demystifies the process. It transforms AES from a theoretical, somewhat abstract concept into something tangible that I can manipulate and understand at a granular level. This hands-on approach deepens comprehension and appreciation for the design and resilience of cryptographic systems.

Lastly, there's a deeper, personal enjoyment I find in the challenge of emulation and reverse engineering existing solutions from scratch. This approach is not just about learning; it's about testing and honing my problem-solving skills in a complex and engaging way. Each line of code becomes a self-imposed puzzle where I can explore how every tiny decision impacts security and efficiency. This rigorous practice not only sharpens my technical abilities but also fuels my passion for understanding and reconstructing intricate systems to see how well I can replicate their functionality and perhaps even improve upon them. 

#### The core of AES
The Core of AES
The implementation covers all critical phases of AES: key expansion, initial rounds, MixColumns, ShiftRows, and finally, the AddRoundKey. Each step is crucial for the encryption process, and dissecting these helped me understand the importance of each transformation in securing data.

In total my implementation

#### FIPS197 Algorithm 1 Pseudocode for CIPHER() (See References below)
```js
procedure CIPHER(in, Nr, w) 
    state ← in 
    state ← ADDROUNDKEY(state,w[0..3]) 
    for round from 1 to Nr − 1 do 
        state ← SUBBYTES(state) 
        state ← SHIFTROWS(state) 
        state ← MIXCOLUMNS(state) 
        state ← ADDROUNDKEY(state,w[4 ∗ round..4 ∗ round + 3]) 
    end for 
state ← SUBBYTES(state) 
state ← SHIFTROWS(state) 
state ← ADDROUNDKEY(state,w[4 ∗ Nr..4 ∗ Nr + 3]) 
return state 
end procedure  
```

##### Development Rules!

- AI can be used to improve comprehension of the AES algorithm, but should not be relied upon to generate the implementation.
- The program must be written entirely in C++.
- The program must use the AES algorithm to encrypt and decrypt the text.
- The program must print the output for each step of the encryption and decryption process.
- The program must be well-documented and easy to understand.
- The program must be well-tested and free of bugs.
- The programm must include test cases to verify the correctness of the implementation using the NIST test vectors.

##### Emphasizing Comprehension Over Automation
One of the foundational rules of this project was to use AI as a tool to aid understanding but not as a crutch to generate the implementation. This distinction is crucial for several reasons. First, while AI can offer explanations and synthesize information quickly, actively engaging with the problem by manually coding forces a deeper learning and comprehension of the AES algorithm. It requires a mastery of the details that AI can sometimes gloss over or simplify for expediency.

By avoiding the automation of the coding process, I also ensure that I'm not just replicating results but truly understanding each step and its purpose. This manual approach helps in internalizing the logic and mathematics behind AES, making it more than just an academic exercise—it becomes a skill that can be applied in real-world scenarios.

Moreover, manually implementing the encryption ensures that I encounter and solve problems firsthand. Each bug and each anomaly becomes a learning opportunity, teaching resilience and adaptability that automated solutions often shield us from. This not only deepens technical knowledge but also enhances problem-solving skills, preparing for complex challenges beyond this project.


#### Challenges Along the Way
One of the biggest hurdles was debugging the MixColumns and ShiftRows transformations. AES requires precise bit manipulations, and ensuring accuracy at each step was both challenging and critical. Another significant task was aligning my output with the official NIST standards to verify the implementation's correctness.

#### Key Takeaways
This project was more than just about coding; it was about understanding the intricacies of a standard encryption protocol. 

Here are a few takeaways:

- In-depth Learning: Implementing AES from scratch deepened my understanding of cryptographic protocols.
- Problem Solving: Debugging complex transformations improved my problem-solving skills.
- Performance Optimization: Working in C++ encouraged me to think about optimizing code for performance without sacrificing readability or security.

#### Conclusion
Building an AES encryption tool in C++ was as rewarding as it was complex. This project not only enhanced my programming skills but also provided a practical understanding of securing data with AES. I’ve documented the process and the code on my GitHub, which I encourage you to check out and perhaps even contribute to.


#### References

I used the following key resources to learn, understand and evaluate my implementation of the AES.

- [AES Algorithm](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197-upd1.pdf) < KEY RESOURCE!
- [NIST Test Vectors](https://csrc.nist.gov/CSRC/media/Projects/Cryptographic-Algorithm-Validation-Program/documents/aes/aesavs.pdf)
- [Computerphile Video](https://www.youtube.com/watch?v=O4xNJsjtN6E)


---

View the Repository on GitHub:

<a className="btn btn-dark" href="https://github.com/gcoulby/AESEncrypt"  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> View on GitHub</a>


