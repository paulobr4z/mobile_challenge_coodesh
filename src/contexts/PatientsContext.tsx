import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { IPatients } from "../types/patients";

interface IPatientsContext {
  patients: IPatients[];
  loading: boolean;
}

export const PatientsContext = createContext({} as IPatientsContext);

export function PatientsProvider({ children }: any) {
  const [patients, setPatients] = useState<IPatients[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function onGetPatients() {
      const response = await api.get('?page=0&results=10&seed=patients');

      setPatients(response.data.results);
      setLoading(false);
    }

    onGetPatients();      

  }, [])


  return(
    <PatientsContext.Provider 
      value={{
        patients,
        loading,
      }}
    >
      {children}
    </PatientsContext.Provider>
  )  
}