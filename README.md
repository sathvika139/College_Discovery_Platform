# 🎓 College Discovery Platform

A full-stack web application that helps students discover, compare, and evaluate colleges through a centralized platform.

The platform provides searchable college listings, detailed college information, side-by-side college comparison, admission prediction based on rank, and college insights including courses, placements, and reviews.

# 📌 Problem Statement

Students often visit multiple websites to gather information about colleges, placements, fees, courses, and admission possibilities.

This process is time-consuming and makes decision-making difficult.

The College Discovery Platform solves this problem by bringing essential college information into a single platform where students can:

* Search colleges
* Compare colleges
* Explore detailed college information
* View placements and reviews
* Predict suitable colleges based on rank
* Save colleges for later reference

# 🚀 Features

## 1. College Listing & Search

Students can browse colleges through a searchable listing page.

### Capabilities

* Search colleges by name
* View college location
* View college fees
* View college ratings
* Pagination support for large datasets

## 2. College Details Page

Each college has a dedicated details page containing complete information.

### Information Available

* College overview
* Courses offered
* Placement statistics
* Student reviews
* Fees
* Ratings
* Location

## 3. College Comparison

Students can compare multiple colleges side-by-side.

### Comparison Parameters

* Fees
* Placements
* Ratings
* Location

This helps students make informed decisions before applying.

## 4. College Predictor

Students can enter their examination rank and receive recommended colleges.

### Current Logic

* Rank-based recommendation system
* Demonstrates admission prediction workflow

## 5. Saved Colleges

Students can save colleges for future reference.

### Benefits

* Quick access to favorite colleges
* Better shortlisting process
* Easier decision making

## 6. Discussions & Q&A

Students can browse commonly asked questions and answers regarding colleges, placements, and admissions.

# 🏗️ System Architecture

## Frontend Layer

Built using:
* Next.js
* React
* TypeScript
* Tailwind CSS

### Responsibilities

* User Interface
* Search Experience
* College Exploration
* Comparison Workflow
* Predictor Interface

## Backend Layer

Built using:
* Next.js API Routes

### Responsibilities

* College Retrieval APIs
* College Detail APIs
* Comparison APIs
* Data Processing

## Database Layer

Built using:
* PostgreSQL
* Prisma ORM

### Entities

#### College

Stores:
* Name
* Location
* Fees
* Rating

#### Course

Stores:
* Course Name
* Duration

#### Placement

Stores:
* Average Package
* Highest Package

#### Review

Stores:
* User Reviews
* Ratings

# 🔄 Application Workflow

### Step 1

User opens the platform.

### Step 2

User searches for colleges.

### Step 3

User selects a college.

### Step 4

Platform fetches college details from PostgreSQL through Prisma.

### Step 5

User can:

* Compare colleges
* Save colleges
* View placements
* Read reviews
* Explore courses

### Step 6

User can use the Predictor Tool to discover suitable colleges.

## 🛠️ Technology Stack

### Frontend
* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend
* Next.js API Routes

### Database
* PostgreSQL

### ORM
* Prisma

### Version Control
* Git
* GitHub

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── api/
│   ├── college/
│   ├── compare/
│   ├── predictor/
│   ├── discussions/
│   ├── saved/
│   └── login/
│
├── components/
│   ├── SearchBar
│   ├── Pagination
│   ├── CompareClient
│   ├── Predictor
│   └── SaveButton
│
├── services/
├── repositories/
└── lib/
```

---

## 📸 Screenshots

Screenshots are available in:

```text
docs/screenshots/
```

Included:

* Login Page
* Home Page
* Compare Colleges
* Predictor Tool
* Architecture Diagram
* Workflow Diagram

---

## 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

* Full Stack Development
* REST API Design
* Database Modeling
* Prisma ORM
* PostgreSQL Integration
* Component-Based Architecture
* Search and Pagination
* State Management
* Dynamic Routing
* Software Architecture Design

## 🔮 Future Enhancements

* Real Authentication (JWT / NextAuth)
* Discussion Creation & Replies
* Save Comparisons
* Advanced Filters
* College Recommendation Engine
* AI-Based Predictor
* Cloud Database Deployment
* Admin Dashboard
