import { expect, test } from '@playwright/test';
import { NavigableItemPage } from '../pages/NavigableItemPage';

test('Skip link should be hidden by default', async ({ page }) => {
	const currentPage = new NavigableItemPage('chapters', page);
	await currentPage.goToId(1);

	const skipLink = page.getByRole('link', { name: 'Skip to main content' });

	await expect(skipLink).not.toBeInViewport();

	await page.keyboard.press('Tab');

	await expect(skipLink).toBeInViewport();
	await expect(skipLink).toBeVisible();
});
