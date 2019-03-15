[![Build Status](https://travis-ci.org/ikeshegs/Epic-Mail-App-01.svg?branch=ch-setupTravis-164519383)](https://travis-ci.org/ikeshegs/Epic-Mail-App-01)
[![Maintainability](https://api.codeclimate.com/v1/badges/024f02a337a4ec4a1dc8/maintainability)](https://codeclimate.com/github/ikeshegs/Epic-Mail-App-01/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/024f02a337a4ec4a1dc8/test_coverage)](https://codeclimate.com/github/ikeshegs/Epic-Mail-App-01/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/ikeshegs/Epic-Mail-App-01/badge.svg?branch=develop)](https://coveralls.io/github/ikeshegs/Epic-Mail-App-01?branch=develop)

# Epic-Mail-App-01
Epic Mail App is an application that provides uses with the ability to via emails to their friends and business associates.

## Getting Started


### Prerequisites

1. Internet connection
2. internet browser
3. Nodejs
4. git
5. postman

### Installing

1. Copy repository link
2. Create a folder in your computer
3. cd location/
4. git clone repositorylink.git
5. cd Epic-Mail-App-O1
6. npm install
7. npm run dev-start
8. Open postman
9. Test one endpoint select verb(action) eg. POST
10. type url eg. localhost:3000/api/v1/auth/signup
11. select Headers below url, under key type Content-Type
12. for value type application/json
13. select Body beside Headers, select raw
14. from the select list choose JSON (application/json)
15. type this into the body using this format below
    ```
    {
        "firstname": "Ikechuwu",
        "lastname": "okoro",
        "email": "andela@epic.com",
        "password": "test",
        "phone": "08056415165"
    }

    ```


## Testing
Test locally by executing "npm test"

```
app running on port 3000


  /All Message Endpoint Tests
    ✓ Create a new Message on /api/v1/messages POST (187ms)
    ✓ Filter all received messages on api/v1/messages GET
    ✓ Filter all sent messages on api/v1/messages/sent GET
    ✓ Filter all unread messages on api/v1/messages/unread GET
[ { id: 2,
    createdOn:
     'Thu Mar 14 2019 18:20:52 GMT+0100 (West Africa Standard Time)',
    subject: 'Andela',
    message: 'I am an incoming Andelan',
    senderId: 2,
    receiverId: 1,
    parentMessageId: 1,
    status: 'draft' } ]
    ✓ Get a specific email on api/v1/messages/:id GET
    ✓ Delete email from inbox on api/v1/messages/:id GET

  /All User Endpoint Tests
    ✓ Create a new user on /api/v1/auth/signup POST (187ms)
    ✓ Login a user on /api/v1/auth/login POST (141ms)


  8 passing (566ms)


```
### Built with 
1. HTML
2. CSS
3. NodeJS
4. Express

### Contributors
* Ikechukwu Okoro

### Author 
* Ikechukwu Okoro