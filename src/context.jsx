import React, { useContext, useState } from "react";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showHeadModal, setShowHeadModal] = useState(false);

  return (
    <Appcontext.Provider
      value={{
        showModal,
        setShowModal,
        showHeadModal,
        setShowHeadModal,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
export { Appcontext, AppProvider };
