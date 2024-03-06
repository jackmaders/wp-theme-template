export default function navigation(element: HTMLElement) {
  const toggleButton = element.querySelector("[data-ref='toggle-button']");

  toggleButton?.addEventListener("click", () => {
    element.classList.toggle("max-md:grid-rows-navbar-closed");
    element.classList.toggle("max-md:grid-rows-navbar-open");

    toggleButton?.classList.toggle(
      "after:mask-[url('/src/images/heroicons/bars-3.svg')]",
    );
    toggleButton?.classList.toggle(
      "after:mask-[url('/src/images/heroicons/x-mark.svg')]",
    );
  });
}
