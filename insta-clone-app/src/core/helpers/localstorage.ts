export const local = (key: string, value?: string) => {
  if (value) {
    return localStorage.setItem(key, value);
  } else {
    return localStorage.getItem(key);
  }
};
