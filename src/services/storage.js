export default class Storage {
  static getStorageItem(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }

  static setStorageItem(key, data = []) {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }
}
