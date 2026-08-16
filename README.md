# Athlo Store

Athlo Store is a multilingual e-commerce storefront built with Next.js, focusing on product browsing, cart interactions, checkout flow, and profile/authenticated user experiences. The project follows a feature-oriented App Router structure and integrates with a backend API that exposes endpoints for products, categories, reviews, shipping methods, cart, orders, and user account actions.

## Overview

This frontend represents a production-style storefront for athletic apparel and gear. The application includes:

- localized storefront pages for English and Arabic
- product listing with category/brand filters and infinite scrolling
- product detail pages with variant selection and quantity handling
- authenticated cart and checkout flow
- profile management, password updates, and order history
- server/client separation consistent with Next.js App Router patterns

The codebase is organized around a feature-first architecture, with API calls centralized in each feature’s `api/` module, hooks using TanStack Query, and a shared `lib/` layer for auth, Axios setup, and cross-cutting concerns.

## Features

### Shopping

- Home page with hero, categories, brand story, and featured products
- Product catalog with search, category filters, brand filters, and sort order
- Product detail views with image gallery, pricing, variants, stock information, reviews, and share actions
- Infinite product loading on the listing page using IntersectionObserver
- Cart drawer with summary, quantity updates, and checkout access gating
- Checkout page with shipping selection and order submission

### Authentication

- Login and registration flows using React Hook Form and Zod validation
- Forgot password, verification code, and reset password flows
- JWT-based identity extraction from access tokens
- Cookie-based token storage and route protection middleware
- Auth state held in Zustand with persistence of session state in the client

### Localization

- English and Arabic locales configured through `next-intl`
- Locale-aware URL routing with `app/[locale]` segments
- RTL/LTR direction changes based on locale
- Locale-specific Accept-Language headers sent with API requests
- Translation dictionaries in `messages/en.json` and `messages/ar.json`

## Tech Stack

| Technology                            | Purpose                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| Next.js 16                            | App Router, server/client rendering, routing, metadata                         |
| React 19                              | UI layer                                                                       |
| TypeScript                            | Static typing across app and feature modules                                   |
| Tailwind CSS                          | Utility-first styling and design tokens                                        |
| shadcn/ui patterns + Radix primitives | Reusable UI primitives like dialogs, sheets, dropdowns, tabs, and collapsibles |
| TanStack Query                        | Data fetching, caching, mutation state, and query invalidation                 |
| Axios                                 | HTTP client for backend integration                                            |
| next-intl                             | Localization and locale-aware routing                                          |
| React Hook Form + Zod                 | Form handling and validation                                                   |
| Zustand                               | Lightweight auth state management                                              |
| js-cookie                             | Cookie access for auth/session state                                           |
| jwt-decode                            | JWT payload extraction for user claims                                         |
| Sonner                                | Toast notifications                                                            |
| next-themes                           | Theme toggling support                                                         |

## Architecture

The application uses a feature-oriented architecture with a clear separation between:

- `app/` for route-level entry points and layouts
- `features/` for domain-specific UI and logic (auth, products, cart, checkout, profile, categories, reviews)
- `components/` for shared UI, navigation, and shell layout elements
- `lib/` for Axios config, auth utilities, routing, providers, and shared infrastructure
- `config/` for application metadata, API endpoints, constants, and route access configuration
- `messages/` for locale dictionaries
- `i18n/` for locale routing and request configuration

Important architectural decisions implemented in the codebase:

- `app/[locale]` groups provide locale-aware route structure while keeping a shared layout shell.
- `proxy.ts` acts as a custom middleware gate for route protection and locale routing.
- `lib/providers.tsx` wraps the app in `QueryClientProvider` and `ThemeProvider`.
- `lib/interceptors.ts` injects bearer tokens and locale headers into outgoing requests.
- `features/*/api` modules isolate backend contracts from component code.
- `features/*/hooks` combine React Query mutation/query lifecycle with feature-specific actions.
- Shared UI components in `components/ui` wrap Radix primitives and provide a consistent design system.

## Authentication Architecture

Authentication is implemented as a client-side Zustand store plus cookie-backed token handling.

Flow observed from the code:

1. User signs in from the login form in `features/auth/components/login-form/LoginForm.tsx`.
2. The form calls `useLogin()` and posts to `ENDPOINTS.auth.login` via `features/auth/api/login.ts`.
3. Response is stored in cookies using `js-cookie` under `athlo-store-accessToken` and `athlo-store-refreshToken`.
4. `useAuthStore` updates the authenticated state.
5. `proxy.ts` checks request cookies for the access token to redirect protected routes away from guests and redirect authenticated users away from guest-only pages.
6. `lib/auth/getCurrentUserClaims.ts` decodes the JWT to extract identity claims for user-specific actions such as profile updates.
7. `lib/auth/auth.ts` exposes token retrieval and logout helpers that also reset the auth store.

Not confirmed from the codebase:

- refresh-token rotation/refresh endpoint flow
- secure cookie attributes beyond `sameSite: "lax"` and expiration dates
- server-side session validation beyond client-side cookie checks

## Data Fetching & API Architecture

The frontend follows a consistent pattern:

`Component → Hook → Feature API module → Axios instance → Backend endpoint`

Examples from the codebase:

- Product lists: `ProductsPage` → `useInfiniteProducts` / `fetchProducts`
- Cart: `CartDrawer` → `useFetchCartItems` → `getCartItems`
- Checkout: `Checkout` → `useFetchShippingMethods` → `fetchShippingMethods`
- Profile: `ProfileWrapper` → `useCurrentUser` → `getCurrentUserData`

The central Axios instance is in `lib/api.ts`, with request interceptors configured in `lib/interceptors.ts` to attach `Authorization` and `Accept-Language` headers.

Common query patterns in the app include:

- `useQuery` for fetches
- `useMutation` for create/update/delete operations
- `queryClient.invalidateQueries` or `queryClient.clear` after mutation success

## Internationalization

The project supports two locales:

- `en`
- `ar`

Configuration is defined in `i18n/routing.ts` and `i18n/request.ts`.

Implementation details:

- `app/[locale]` route segments drive locale-aware page routing.
- `NextIntlClientProvider` is mounted in the locale layout.
- Translation message files live in `messages/en.json` and `messages/ar.json`.
- `getApiLocale(locale)` converts locale to `en-US` or `ar-EG` for backend API headers.
- Root layout sets `dir={locale === "ar" ? "rtl" : "ltr"}` and applies Arabic/Latin typography variables.

Important note:

- A locale cookie is written in `actions/change-locale.ts` as `cookieStore.set("locale", locale)`, but the request interceptor reads `Cookies.get("NEXT_LOCALE") || "en"`. This inconsistency indicates a partial or stale locale implementation that should be reviewed.

## Forms & Validation

The app uses React Hook Form with Zod via `@hookform/resolvers/zod`.

Examples:

- `features/auth/schemas/login.schema.ts`
- `features/auth/schemas/register.schema.ts`
- `features/checkout/checkout.schema.ts`
- `features/profile/schema/*.schema.ts`
- `features/forgot-password/forgot-password.schema.ts`
- `features/reset-password/reset-password.schema.ts`

Validation-aware patterns are consistent:

- `mode: "onChange"` for several forms
- field-level errors passed into custom form input wrappers
- mutation-based submission with loading states and toast notifications
- custom validation for password strength, confirm-password matching, and checkout requirements

## Styling & Design System

The styling system is built around Tailwind CSS and custom design tokens defined in `app/globals.css`.

Implemented patterns:

- custom CSS variables for theme colors, spacing, radii, and typography
- support for light/dark theme via `next-themes`
- custom `@theme inline` tokens for app colors and spacing
- `components/ui` wrappers built around Radix primitives and shadcn-inspired patterns

The global stylesheet defines fonts using `next/font/google` for Inter, Oswald, Tajawal, and IBM Plex Sans Arabic. This helps distinguish English and Arabic typography while maintaining a consistent e-commerce aesthetic.

## Project Structure

Important directories and responsibilities:

- `app/` – route entry points, layouts, route groups, and metadata
- `components/` – shared layout, buttons, menus, dialogs, and UI helpers
- `features/` – domain-specific modules for auth, product catalog, cart, checkout, reviews, profile, and categories
- `lib/` – global utilities, providers, API config, auth helpers, stores, and route helpers
- `config/` – endpoint registry, route access config, constants, and app metadata
- `i18n/` – locale config and request handling
- `messages/` – locale dictionaries
- `public/images/` – static assets and media used by storefront pages

## Getting Started

### Prerequisites

- Node.js 18+ or a compatible current LTS version
- npm, pnpm, yarn, or bun

### Install

```bash
npm install
```

### Environment Variables

This repository requires one frontend environment variable for the API base URL:

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
```

The variable is read in `config/endpoints.ts` as `process.env.NEXT_PUBLIC_API_BASE_URL` and is required for backend integration.

No `.env.example` file or other credential template was found in the repository.

### Run locally

```bash
dev: npm run dev
build: npm run build
start: npm run start
lint: npm run lint
```

Open the app in a browser at:

```text
http://localhost:3000
```

## Available Scripts

From `package.json`:

- `npm run dev` – run the Next.js development server
- `npm run build` – build the production bundle
- `npm run start` – start the production server
- `npm run lint` – run ESLint

## Future Improvements

Reasonable improvements based on actual code gaps:

- align locale cookie logic between `actions/change-locale.ts` and `lib/interceptors.ts`
- add a proper persisted wishlist feature if the product UI is to support it end-to-end
- complete stronger refresh-token / session lifecycle handling
- expand test coverage and CI validation
- add a clearer service/repository layer if the API surface grows beyond the current feature modules

## License

No license file was found in the repository, so no explicit license is currently declared for this project.
