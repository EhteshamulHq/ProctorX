# ProctorX Database

## Database

ProctorX uses MongoDB as its primary database.

## Status

Database schema is not finalized.

## Planned Entities

User
├── name
├── email
├── passwordHash
├── role
├── isActive
├── createdAt
└── updatedAt

- Organization
- Question
- QuestionCategory
- Assessment
- AssessmentQuestion
- CandidateAssignment
- ExamAttempt
- Answer
- ProctoringEvent
- Result

## ODM

Mongoose is used as the MongoDB ODM.

## Connection Configuration

The MongoDB connection string is provided through:

`MONGODB_URI`

The connection string must never be hard-coded in application source code.

## Startup Behavior

The backend establishes the MongoDB connection before starting the HTTP server.

If the database connection fails, backend startup fails rather than starting the API without its required database connection.

## Current Phase

Phase 2.5 establishes only the database connectivity foundation.

No application models or schemas are implemented yet.
