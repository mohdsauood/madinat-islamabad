import React, { useState } from 'react';

const SmallMenuButtonContext = React.createContext();

function SmallMenuButtonProvider({ children }) {
  const [state, setState] = useState(false);

  return (
    <SmallMenuButtonContext.Provider value={[state, setState]}>
      {children}
    </SmallMenuButtonContext.Provider>
  );
}

function useSmallMenuButton() {
  const context = React.useContext(SmallMenuButtonContext);
  if (context === undefined) {
    throw new Error(
      'useCountState must be used within a SmallMenuButton Provider'
    );
  }
  const [showSmallMenu, setShowSmallMenu] = context;

  const handleShowSmallMenu = () => {
    setShowSmallMenu((prevState) => !prevState);
  };

  return {
    showSmallMenu,
    handleShowSmallMenu,
  };
}

export { SmallMenuButtonProvider, useSmallMenuButton };
