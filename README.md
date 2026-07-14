Vitest CJS Dual Package Hazard

1. pnpm i
1. cd packages/package-B && pnpm exec vitest 
   - I expect all tests to succeed, but one fails.

1. cd packages/package-B-typescript && pnpm exec vitest
   - the situation is even worse here - comparing the two exports within package-B are not even equal.