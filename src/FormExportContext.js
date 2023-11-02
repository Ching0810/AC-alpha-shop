import { createContext } from "react";

export const FormExportContext = createContext({
  formData: {},
  setFormData: () => {}
})