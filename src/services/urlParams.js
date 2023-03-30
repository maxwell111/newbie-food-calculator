const KEY_PARAM_NAME = "product";
const url = new URL(window.location.href);

export function addUrlParam(param) {
  url.searchParams.set(KEY_PARAM_NAME, param);
  window.history.pushState(null, "", url.href);
}

export function removeUrlParam() {
  url.searchParams.delete(KEY_PARAM_NAME);
  window.history.pushState(null, "", url.href);
}
