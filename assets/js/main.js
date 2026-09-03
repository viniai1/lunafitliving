const ANALYTICS_MEASUREMENT_ID = "G-64GZL48QCL";
const ANALYTICS_CONSENT_KEY = "lunaFitLivingAnalyticsConsent";

const getAnalyticsConsent = () => {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  } catch {
    return null;
  }
};

let analyticsConsent = getAnalyticsConsent();

const setAnalyticsConsent = (value) => {
  analyticsConsent = value;

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch {
    // The choice still applies to the current page if storage is unavailable.
  }
};

const loadAnalytics = () => {
  if (document.querySelector("script[data-luna-ga4]")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_MEASUREMENT_ID);

  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`;
  analyticsScript.dataset.lunaGa4 = ANALYTICS_MEASUREMENT_ID;
  document.head.appendChild(analyticsScript);
};

const showAnalyticsConsent = () => {
  const consent = document.createElement("section");
  consent.className = "analytics-consent";
  consent.setAttribute("role", "region");
  consent.setAttribute("aria-labelledby", "analytics-consent-title");
  consent.innerHTML = `
    <div class="analytics-consent__copy">
      <p class="analytics-consent__title" id="analytics-consent-title">Analytics &amp; privacy</p>
      <p>We use optional analytics to understand how visitors use Luna Fit Living and improve the site. <a href="/privacy-policy/">Privacy Policy</a></p>
    </div>
    <div class="analytics-consent__actions">
      <button class="analytics-consent__button" type="button" data-analytics-accept>Accept analytics</button>
      <button class="analytics-consent__button" type="button" data-analytics-decline>Decline</button>
    </div>
  `;

  consent.querySelector("[data-analytics-accept]").addEventListener("click", () => {
    setAnalyticsConsent("accepted");
    loadAnalytics();
    consent.remove();
  });

  consent.querySelector("[data-analytics-decline]").addEventListener("click", () => {
    setAnalyticsConsent("declined");
    consent.remove();
  });

  document.body.appendChild(consent);
};

if (document.body.hasAttribute("data-analytics-consent")) {
  if (analyticsConsent === "accepted") {
    loadAnalytics();
  } else if (analyticsConsent !== "declined") {
    showAnalyticsConsent();
  }
}

const trackCheckoutStart = (event) => {
  if (analyticsConsent !== "accepted" || typeof window.gtag !== "function") return;

  window.gtag("event", "begin_checkout", {
    currency: "USD",
    value: 9,
    items: [
      {
        item_id: "30-day-healthy-lifestyle-reset",
        item_name: "30-Day Healthy Lifestyle Reset",
        price: 9,
        quantity: 1,
      },
    ],
    cta_location: event.currentTarget.dataset.ctaLocation,
  });
};

document.querySelectorAll("[data-checkout-cta][data-cta-location]").forEach((cta) => {
  cta.addEventListener("click", trackCheckoutStart);
});

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  const closeNav = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 820) closeNav();
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
