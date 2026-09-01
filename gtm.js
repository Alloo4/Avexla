/*
 * Google Tag Manager loader for avexla.com
 * -----------------------------------------
 * 1. Create a GTM container at https://tagmanager.google.com (Admin > Create Container,
 *    target platform "Web"). Copy the container ID -- it looks like GTM-ABC1234.
 * 2. Paste it between the quotes on the GTM_ID line below.
 * 3. Commit + push. GTM then loads on every page. Leave it empty to keep analytics off.
 *
 * This is the only place the ID lives. Do not add the classic inline GTM snippet
 * to the HTML -- this file replaces it. (The <noscript> iframe is intentionally
 * omitted; it only matters for visitors with JavaScript disabled.)
 */
(function () {
  var GTM_ID = "";

  if (!/^GTM-[A-Z0-9]+$/.test(GTM_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  var j = document.createElement("script");
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
  document.head.appendChild(j);
})();
