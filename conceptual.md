### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

    Restful routing uses standard HTTP verbs. It acts as the language the client and server communicate to one another with

- What is a resource?

    A resource is an object with an associated type, data and relations with other resources

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

    When building JSON API, it already passes the data from route to JSON disctionary

- What does idempotent mean? Which HTTP verbs are idempotent?

    When result is idempotent, it means it is the same each time we request it. GET, PUT/PATCH and DELETE are idempotent

- What is the difference between PUT and PATCH?

    PUT updates the entire resource, while PATCH updates a part of i

- What is one way encryption?

    User's password is not stored in database, only user can see and modify their password

- What is the purpose of a `salt` when hashing a password?

    Hashing a password adds secuirty to it by turning a human-readable password into binary code. 'Salt' is a random piece of code that will be added to the end of the hashed password for extra security.

- What is the purpose of the Bcrypt module?

    It is cryptographically hashing a password, and makes it more difficult for hackers to hack. It slows the process of finding out the correct password. Developers can specify how many rounds of encryption the password should have, that means how slow will it be to generate hashed password.

- What is the difference between authorization and authentication?

    Auhthorization checks if user is allowed to view certain features of the app, while authentication verifies that the user is who they claim to be.
