# ProctorX API

## API Version

Base path:

/api/v1

## Status

The endpoints below are currently implemented. The remaining planned domains
will be documented as they are added to the backend.

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

**Authentication*

None.

**Response*

```json
{
  "success": true,
  "data": {
    "service": "ProctorX API",
    "status": "healthy",
    "environment": "development",
    "timestamp": "2026-09-04T12:00:00.000Z"
  }
}
```

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
```

**Response*

Returns `201 Created` with the new user in the `data.user` property.

## Login

### Login User

**Method*

`POST`

**Endpoint*

`/auth/login`

**Authentication*

None.

**Request Body*

```json
{
  "email": "candidate@example.com",
  "password": "Password123!"
}
```

**Response*

Returns `200 OK` with the authenticated user and token in the `data` property.
