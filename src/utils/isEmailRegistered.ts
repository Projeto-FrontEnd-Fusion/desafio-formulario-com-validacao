import { IFormData } from "../types/IFormData";
import { getFromLocalStorage } from "./localStorage";

export function isEmailRegistered(email: string): boolean {
  const existingData: IFormData[] = getFromLocalStorage('formData');

  return existingData.some((data) => data.email === email);
}
