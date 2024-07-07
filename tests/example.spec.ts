import { test, expect } from '@playwright/test';

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */

test('should return Hello', async ({ request }) => {
  const response = await request.get(`/`);
  expect(response.status()).toBe(200);
  expect(await response.text()).toBe('Hello');
})

test('should return Hi', async ({ request }) => {
  const response = await request.post(`/hi`);
  expect(response.status()).toBe(200);
  expect(await response.text()).toBe('Hi');
})

test('should return Route not found :(', async ({ request }) => {
  const response = await request.get(`/not-found`);
  expect(response.status()).toBe(404);
  expect(await response.text()).toBe('Route not found :(');
})