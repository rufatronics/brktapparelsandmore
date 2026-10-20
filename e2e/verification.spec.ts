import { test, expect } from '@playwright.test';

test.use({ viewport: { width: 390, height: 844 } }); // Mobile iPhone 12/13/14 frame

test('verify modal close button and cart localstorage persistence', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for products to load
  await page.waitForSelector('text=Luxury Velvet Regal Abaya');

  // Click on 'View' button for the first product card
  const viewButtons = page.locator('button:has-text("View")');
  await viewButtons.first().click();

  // Verify modal is visible
  const modalHeader = page.locator('h2:has-text("Luxury Velvet Regal Abaya")');
  await expect(modalHeader).toBeVisible();

  // Add item to bag from modal
  const addToBagBtn = page.locator('button:has-text("Add to Bag")');
  await addToBagBtn.click();

  // Click the modal close button
  const closeBtn = page.locator('button[aria-label="Close modal"]');
  await expect(closeBtn).toBeVisible();
  await closeBtn.click();

  // Verify modal is closed
  await expect(modalHeader).not.toBeVisible();

  // Reload page to verify localstorage cart persistence
  await page.reload();

  // Check cart badge in header or mobile sticky bar
  const bagBadge = page.locator('span:has-text("1")').first();
  await expect(bagBadge).toBeVisible();

  // Take screenshot after close & reload
  await page.screenshot({ path: '/home/jules/verification/modal_and_cart_test.png', fullPage: false });
});
