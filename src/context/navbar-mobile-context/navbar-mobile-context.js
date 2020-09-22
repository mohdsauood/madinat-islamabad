import React, { useState } from 'react';

const NavbarMobileContext = React.createContext();

function NavbarMobileProvider({ children }) {
  const [state, setState] = useState(false);

  return (
    <NavbarMobileContext.Provider value={[state, setState]}>
      {children}
    </NavbarMobileContext.Provider>
  );
}

function useNavbarMobile() {
  const context = React.useContext(NavbarMobileContext);
  if (context === undefined) {
    throw new Error(
      'useCountState must be used within a NavbarMobileContext Provier'
    );
  }
  const [showMenu, setShowMenu] = context;

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return {
    showMenu,
    handleShowMenu,
  };
}

export { NavbarMobileProvider, useNavbarMobile };
