from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5173")

        # Look for category button
        page.click("button >> text=Prerequisites")

        # Give it a moment to load and render the first card
        page.wait_for_timeout(1000)
        page.screenshot(path="learning_card.png")

        # Scroll down to the next card (the quiz card)
        page.evaluate("""
            const container = document.querySelector('.overflow-y-scroll');
            if (container) {
                container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
        """)

        # Give it a moment to scroll and snap
        page.wait_for_timeout(1000)

        page.screenshot(path="quiz_card.png")

        print("Frontend verified successfully")
        browser.close()

if __name__ == "__main__":
    verify_frontend()
