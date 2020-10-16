# ***The Twelve-Factor App***

>In the modern era, software is commonly delivered as a service: called *web apps*, or *software-as-a-service*.
The twelve-factor app is a methodology for building *software-as-a-service* apps that:
- Use declarative formats for setup automation, to minimize time and cost for new developers joining the
 project;
- Have a clean contract with the underlying operating system, offering maximum portability between execution
 environments;
- Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems
administration;
- Minimize divergence between development and production, enabling continuous deployment for maximum agility;
- And can scale up without significant changes to tooling, architecture, or development practices.
The twelve-factor methodology can be applied to apps written in any programming language, and which use any
combination of backing services (database, queue, memory cache, etc).

> # ***The Twelve Factors***

**[I. Codebase](https://12factor.net/codebase)**
 - One codebase tracked in revision control, many deploys.
 - A codebase is any single repo (in a centralized revision control system like Subversion), or any set of
 repos who share a root commit (in a decentralized revision control system like Git). One codebase maps to
 many deploys
 There is always a one-to-one correlation between the codebase and the app:
 - If there are multiple codebases, it’s not an app – it’s a distributed system. Each component in a
 distributed system is an app, and each can individually comply with twelve-factor.
 - Multiple apps sharing the same code is a violation of twelve-factor. The solution here is to factor shared
 code into libraries which can be included through the dependency manager.

**[II. Dependencies](https://12factor.net/dependencies)**
 - Explicitly declare and isolate dependencies
 - Most programming languages offer a packaging system for distributing support libraries. A twelve-factor