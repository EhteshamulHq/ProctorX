# ProctorX Architecture

## Status

High-level architecture planned.

## Architecture

React Client
↓
HTTPS / REST API
↓
Node.js + Express Server
↓
MongoDB

## Major Backend Domains

- Authentication
- Users
- Organizations
- Candidates
- Questions
- Assessments
- Exams
- Proctoring
- Results

## Note

Detailed implementation architecture will be documented during Phase 2 setup and subsequent feature implementation.

## Backend Directory Structure

The backend application is located under `server/`.

```text
server/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
└── tests/
