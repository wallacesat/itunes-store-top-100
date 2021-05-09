/* eslint-disable no-unused-vars */

type useLocalStorageReturn = {
  getItem: (key: string) => unknown;
  setItem: (key: string, value: unknown) => void;
};

export const useLocalStorage = (): useLocalStorageReturn => {
  function getItem(key: string) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  function setItem(key: string, value: unknown) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return {
    getItem,
    setItem,
  };
};

const createNoopStorage = () => {
  return {
    getItem(key: string) {
      return Promise.resolve(null);
    },
    setItem(key: string, value: unknown) {
      return Promise.resolve(value);
    },
  };
};

const storage =
  typeof window !== 'undefined' ? useLocalStorage : createNoopStorage;

export default storage;
