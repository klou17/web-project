# Singers Voting System

This is a [Next.js](https://nextjs.org) project that implements a **singer voting system** using a **hexagonal architecture** to ensure modularity, maintainability, and testability.

## 🏗️ Hexagonal Architecture

This project follows the **Hexagonal Architecture**, which separates business logic from external concerns like APIs, databases, and UI. The structure consists of:

- **Domain:** Business logic and entities.
- **Use Cases:** Application services that implement domain logic.
- **Infrastructure:** Implementations of repositories, API clients, and external dependencies.
- **Presentation:** UI components, pages, and hooks.

This separation makes the application **flexible**, **testable**, and **scalable**.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Or with with Docker
```bash
docker build -t front
docker run front
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Technologies Used

- **Framework:** [Next.js](https://nextjs.org) (App Router & Server Components)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **State Management:** React Hooks
- **Styling:** Tailwind CSS
- **API Calls:** Fetch with custom repositories
- **Testing:** [Jest](https://jestjs.io/)
- **Linting & Formatting:** ESLint & Prettier

## 🧪 Testing

We use **Jest** and **React Testing Library** to test UI components and business logic.

Run tests with:

```bash
npm run test
# or
yarn test
```
