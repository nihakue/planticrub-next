import React from 'react';

type AppContext = {
  contact: Record<string, string>
}

export const AppContext = React.createContext<AppContext>({} as AppContext);

export function useAppContext() {
  return React.useContext(AppContext);
}