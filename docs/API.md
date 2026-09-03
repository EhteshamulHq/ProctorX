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

**Authentication*

None.

**Request Body*

None.

### Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "service": "ProctorX API",
    "status": "healthy",
    "environment": "development",
    "timestamp": "2026-..."
  }
}
