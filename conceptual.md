### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token

- What is the signature portion of the JWT? What does it do?
  It functions as a cryptographic mechanism that verifies the token's integrity

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes

- How can you implement authentication with a JWT? Describe how it works at a high level.
  For user login, the user provides their credentials to the server and verifies them

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests test one part, integration test mixed parts and end-to-end tests everything

- What is a mock? What are some things you would mock?
  sample data that we put to make sure things work. Any information in database

- What is continuous integration?
  Software development practice where code changes are frequently integrated into a shared repository

- What is an environment variable and what are they used for?
  An environment variable is a dynamic configuration value external to a program used to provide settings, information, and customization options to applications during runtime.

- What is TDD? What are some benefits and drawbacks?
  Test-Driven Development (TDD) is a software development approach where tests are written before code to ensure quality, but it can introduce overhead and a learning curve.

- What is the value of using JSONSchema for validation?
  Using JSONSchema for validation ensures data consistency and integrity by providing a standardized way to define and enforce the structure and constraints of JSON data.

- What are some ways to decide which code to test?
  Error Handling and sentitive areas

- What does `RETURNING` do in SQL? When would you use it?
  when editing data in the database, we can capture the edited data when updating the info

- What are some differences between Web Sockets and HTTP?
  Web Sockets enable continuous, bidirectional communication, while HTTP is a request-response protocol used for fetching resources.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  No, i prefer Express as setting up the environment was not as complicated as Flask. Routing was also simpler I think.
