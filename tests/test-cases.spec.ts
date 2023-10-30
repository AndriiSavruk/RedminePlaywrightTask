import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { MyAccountPage } from "../pages/my-account-page";
import { UserPage } from "../pages/user-page";

const URL = "https://www.redmine.org/";
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let userPage: UserPage;

let valLog: string;
let valPass: string;
let valName: string;
let valFullName: string;
const testData = JSON.parse(
  JSON.stringify(require("../test_data/TestData.json"))
);
valLog = testData.user.username;
valPass = testData.user.userpassword;
valName = testData.user.userfirstname;
valFullName = testData.user.userfullname;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});

test.describe("Test cases", () => {
  test("Test case #1-1 Valid Login", async ({ page }) => {
    // Step 1
    await homePage.clickSignIn();
    loginPage = new LoginPage(page);
    await expect(page).toHaveURL("https://www.redmine.org/login");
    // Step 2
    await loginPage.userNameField.fill(valLog);
    await expect(loginPage.userNameField).toHaveValue(valLog);
    // Step 3
    await loginPage.passwordField.fill(valPass);
    await expect(loginPage.passwordField).toHaveValue(valPass);
    await expect(loginPage.passwordField).toHaveAttribute("type", "password");
    // Step 4
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL(URL);
    await expect(homePage.loggedString).toContainText(valLog);
  });

  test("Test case #1-2", async ({ page }) => {
    let inValLog: string;
    let inValPass: string;
    inValLog = Math.random().toString(5).substring(2);
    inValPass = Math.random().toString(5).substring(2);
    // Step 1
    await homePage.clickSignIn();
    loginPage = new LoginPage(page);
    await expect(page).toHaveURL("https://www.redmine.org/login");
    // Step 2
    await loginPage.userNameField.fill(inValLog);
    await expect(loginPage.userNameField).toHaveValue(inValLog);
    // Step 3
    await loginPage.passwordField.fill(inValPass);
    await expect(loginPage.passwordField).toHaveValue(inValPass);
    await expect(loginPage.passwordField).toHaveAttribute("type", "password");
    // Step 4
    await loginPage.clickLoginButton();
    await expect(loginPage.warningMessage).toBeVisible();
    await expect(loginPage.warningMessage).toHaveText(
      "Invalid user or password"
    );
  });

  test("Test case #1-3 Sign out", async ({ page }) => {
    // Step 1
    await homePage.clickSignIn();
    loginPage = new LoginPage(page);
    await expect(page).toHaveURL("https://www.redmine.org/login");
    // Step 2
    await loginPage.loginOnThePage(valLog, valPass);
    await expect(page).toHaveURL(URL);
    await expect(homePage.loggedString).toContainText(valLog);
    // Step 3
    await homePage.clickSignOut();
    await expect(page).toHaveURL(URL);
    await expect(homePage.signInLink).toBeVisible();
  });

  test("Test case #1-4 Check User name in MyAccount page", async ({ page }) => {
    // Step 1
    await homePage.clickSignIn();
    loginPage = new LoginPage(page);
    await expect(page).toHaveURL("https://www.redmine.org/login");
    // Step 2
    await loginPage.loginOnThePage(valLog, valPass);
    await expect(page).toHaveURL(URL);
    await expect(homePage.loggedString).toContainText(valLog);
    // Step 3
    await homePage.clickMyAccount();
    myAccountPage = new MyAccountPage(page);
    await expect(page).toHaveURL("https://www.redmine.org/my/account");
    await expect(myAccountPage.informationBlock).toBeVisible();
    await expect(myAccountPage.userFirstName).toHaveValue(valName);
  });

  test("Test case #1-5 Check User login in the User page", async ({ page }) => {
    // Step 1
    await homePage.clickSignIn();
    loginPage = new LoginPage(page);
    await expect(page).toHaveURL("https://www.redmine.org/login");
    // Step 2
    await loginPage.loginOnThePage(valLog, valPass);
    await expect(page).toHaveURL(URL);
    await expect(homePage.loggedString).toContainText(valLog);
    // Step 3
    await homePage.clickUserActive();
    userPage = new UserPage(page);
    await expect(page).toHaveURL(/.*users/);
    await expect(userPage.avatarBlock).toHaveText(valFullName);
  });
});
