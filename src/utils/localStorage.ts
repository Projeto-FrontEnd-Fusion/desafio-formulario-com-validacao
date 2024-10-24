import { IFormData } from "../types/IFormData";

const saveToLocalStorage = (key: string, value: IFormData[]) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getFromLocalStorage = (key: string): IFormData[] => {
  const storedData = localStorage.getItem(key);


  try {
    const parsedData = storedData ? JSON.parse(storedData) : [];

    if (!Array.isArray(parsedData)) {
      console.warn("Os dados armazenados não são um array. Retornando um array vazio.");
    } else {
      return parsedData;
    }
  } catch (error) {
    console.error("Erro ao parsear os dados do localStorage:", error);
  }

  return [];
};

export { getFromLocalStorage, saveToLocalStorage };
