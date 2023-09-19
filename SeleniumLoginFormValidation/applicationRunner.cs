

using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs;
using WebDriverManager.DriverConfigs.Impl;



namespace SeleniumFirstProject
{
   public class SimpleApplicationRunner
    {
        public static void Main(string[] args)
        {

            new DriverManager().SetUpDriver(new ChromeConfig());
            IWebDriver driver = new ChromeDriver();
            driver.Manage().Window.Maximize();

            driver.Navigate().GoToUrl("file:///C:/Users/aso23/.vscode/Project/website.html");


            string ID = "YBONG";
            int PW = 1234;


            IWebElement typeID = driver.FindElement(By.CssSelector("[name='id']"));
            typeID.SendKeys(ID);
            typeID.SendKeys(Keys.Enter);

            IWebElement typePW = driver.FindElement(By.CssSelector("[name='pw']"));
            typePW.SendKeys(PW.ToString());
            typePW.SendKeys(Keys.Enter);

            IWebElement btn = driver.FindElement(By.CssSelector("[id='btn']"));
            btn.SendKeys(Keys.Enter);

            IList<string> actualItems = driver.FindElements(By.CssSelector(".style-scope ytd-playlist-renderer"))
           .Select(item => item.Text.ToLower())
           .ToList();

            IList<string> expectedItems = actualItems
           .Where(item => item.Contains("invalid search"))
           .ToList();

            Assert.AreEqual(expectedItems, actualItems);

         //   Assert.True(actualItems.All(item => item.ToLower().Contains("invalid search Phrase")));
           // driver.Quit();

        }
    }


}