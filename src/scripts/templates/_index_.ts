export default async function templates() {
  const navigationSelector = "[data-script='navigation']";
  const navigationElements =
    document.querySelectorAll<HTMLElement>(navigationSelector);

  if (navigationElements) {
    const navigation = await import("./navigation");
    navigationElements.forEach(navigation.default);
  }
}
