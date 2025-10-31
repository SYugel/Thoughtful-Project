# Thoughtful Robotic Automation - Package Sorting

A TypeScript solution for Thoughtful's robotic automation factory that dispatches packages to the correct stack based on their dimensions and mass.

## Problem Statement

This application implements a sorting function for a robotic arm that categorizes packages into three stacks:

- **STANDARD**: Packages that are neither bulky nor heavy
- **SPECIAL**: Packages that are either bulky OR heavy
- **REJECTED**: Packages that are both bulky AND heavy

### Classification Rules

- **Bulky**: Volume ≥ 1,000,000 cm³ OR any dimension ≥ 150 cm
- **Heavy**: Mass ≥ 20 kg

## Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

**Expected Output:** All tests should pass, demonstrating correct sorting logic and edge case handling.

## Prerequisites

- Node.js v22
- npm >= 10.0.0

> **Note:** This project includes a `.nvmrc` file. If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to switch to the correct version.

## Project Structure

```
src/
  ├── sort.ts           # Core sorting logic
  └── sort.test.ts      # Test suite
```

## Available Scripts

### Testing

- `npm test` - Run all tests
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:coverage` - Generate detailed coverage report

### Development

- `npm run build` - Compile TypeScript to JavaScript

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Automatically fix linting errors
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files need formatting
- `npm run type-check` - Validate TypeScript types

## Technology Stack

- TypeScript
- Node.js v22
- Vitest
- ESLint & Prettier
