import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';

const URL = 'https://www.redmine.org/';
let homePage: HomePage;
let loginPage: LoginPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    homePage = new HomePage(page);
});

async function clickSignIn(page: Page) {
    await homePage.clickSignIn();
    loginPage = new LoginPage(page);
  };

  test.describe('Test cases', () => {
    test('Test case #1-1 Valid Login', async ({ page }) => {
        let valLog: string;
        let valPass: string;
         valLog = 'SuperTester123';
         valPass = 'Testing11'

         await clickSignIn(page);
         await expect(page).toHaveURL('https://www.redmine.org/login');

         await loginPage.userNameField.fill(valLog);
         await loginPage.passwordField.fill(valPass);
         await loginPage.clickLoginButton();

         await expect(page).toHaveURL(URL);
    })
  })
