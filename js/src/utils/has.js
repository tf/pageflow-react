export default function has(featureName, browser = pageflow.browser) {
  return browser.has(featureName);
}
