import { createContext, useContext } from "react";
import { food_list } from "../assets/assets";
const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = { food_list };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useContextProvider = () => {
  return useContext(StoreContext);
};

export default StoreContextProvider;
