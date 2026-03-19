from playwright.sync_api import sync_playwright
import time

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")

        # Click on the Total TypeScript category
        page.wait_for_selector("text=Total TypeScript", timeout=10000)
        page.click("text=Total TypeScript")

        # Wait for the main scroll container
        page.wait_for_selector("div.h-screen.w-full")

        # Scroll the specific container down
        page.evaluate('''() => {
            const container = document.querySelector('div.h-screen.w-full.overflow-y-scroll');
            if(container) container.scrollBy(0, window.innerHeight);
        }''')

        time.sleep(2)

        page.screenshot(path="screenshot_quiz3.png")
        print("Quiz screenshot saved to screenshot_quiz3.png")

        browser.close()

if __name__ == "__main__":
    verify_app()
