# BestAdvice
_Frontend Web Application allowing you to discover the advices of the day._

![Javascript Badge](https://img.shields.io/badge/Javascript-black?style=flat&logo=Javascript) ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&labelColor=e3e3e3) ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style&logo=CSS3&logoColor=1572B6&labelColor=white)  


The Web App focuses on using AJAX in order to retrieve data from an API.

This is the first project where I implemented AJAX and the Mobile First concept.

##### Issues encountered and Solutions:
1. Couldn't retrieve multiple different advices in a rapid succession. Would receive the  
same repeated advice for a short period of time.
1. Debugged though Dev Tools and found the cause of the issue: Cache. The same advice  
would be stored and re-offered multiple times for a short period.
1. Solved the issue by generating a dynamic URL appending the current time to it for every  
HTTP request.


---


## Installation

Start by cloning or downloading the remote repository.  
Find out more here: [GitHub Docs Cloning Guide](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github)

---


## Usage

The Web App allows you to receive a random advice. To get started simply click on the 'Get Advice' button and enjoy.


---


## Coming Soon!

- Code Refactoring to **React**!
- Implementation of a **HomePage** and a **New Section**!



 

