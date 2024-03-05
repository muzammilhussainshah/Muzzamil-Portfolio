import React, { createContext, useState } from "react";

export interface MenuContextState {
  toggleDisplayMenu: () => void;
}

const MenuContext = createContext({
  displayMenu: false,
  toggleDisplayMenu: () => {},
});

export const MenuContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const value = {
    displayMenu,
    toggleDisplayMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContext;
