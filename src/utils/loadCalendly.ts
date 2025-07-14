export const loadCalendly = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.Calendly) {
      resolve();
      return;
    }

    const existingScript = document.getElementById("calendly-widget-script");

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly"));
    document.body.appendChild(script);
  });
};
