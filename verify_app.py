from playwright.sync_api import sync_playwright
import time

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")

        # Click on the Total TypeScript category
        page.wait_for_selector("text=Total TypeScript", timeout=10000)
        page.screenshot(path="screenshot_categories.png")
        print("Categories screenshot saved to screenshot_categories.png")

        # Click and wait
        page.click("text=Total TypeScript")
        time.sleep(2)

        page.screenshot(path="screenshot_cards.png")
        print("Cards screenshot saved to screenshot_cards.png")

        browser.close()

if __name__ == "__main__":
    verify_app()
