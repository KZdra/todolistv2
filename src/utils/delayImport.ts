// src/utils/delayImport.ts
export function delayImport<T>(importFunction: () => Promise<T>, delay: number): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        importFunction().then(resolve);
      }, delay);
    });
  }
  