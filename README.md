# Fynd Marketing Footer React Starter

Small React project containing the Fynd One marketing footer from the Storybook default footer story. It is intentionally isolated so the footer can be copied into another React application later.

## Stack

- React 18
- TypeScript
- Vite
- React Router
- Lottie React for the animated Fynd wordmark
- Plain CSS scoped to `src/components/marketing-footer`

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Project Structure

```text
src/
  components/
    marketing-footer/
  styles/
  App.tsx
  main.tsx
  routes.ts
```

## Routes

- `/`
- `/partners/commerce/`

## Merge Notes

1. Copy `src/components/marketing-footer` into the receiving React project.
2. Install `lottie-react` if the receiving project does not already have it.
3. Register the two route paths from `src/routes.ts` in the host app router.
4. Import and render `MarketingFooter` wherever the host app needs the footer.
5. Copy the reset/font pieces from `src/styles/global.css` only if the host app does not already provide equivalent base styles.
6. Run the host project lint, typecheck, build, and visual QA checks after integration.

The footer uses the default Storybook asset URLs for the certification badges, custom fonts, and animated Fynd wordmark.
