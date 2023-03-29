export function setURLSearchParams(params = "") {
  if (!params) {
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.set("product", params);
  window.history.pushState(null, "", url.href);
}
