# ProctorX API

## API Version

Base path:

/api/v1

## Status

API contract will be finalized during backend implementation.

## Planned Domains

- /auth
- /users
- /organizations
- /candidates
- /questions
- /assessments
- /exams
- /proctoring
- /results

## Base URL

Development:

`http://localhost:5000/api/v1`

## Health API

### Get API Health

**Method*

`GET`

### Endpoint

`/health`

## Authentication

### Register Candidate

**Method*

`POST`

**Endpoint*

`/auth/register`

**Authentication*

None.

**Request Body*

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123!"
}

## Login

### Login User

**Method*

`POST`

**Endpoint*

`/auth/login`

**Authentication*

None.

**Request Body**

```json
{
  "email": "candidate@example.com",
  "password": "Password123!"
}
