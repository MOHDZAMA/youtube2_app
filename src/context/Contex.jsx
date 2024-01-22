import React, {createContext, useState} from 'react';

export const ModalContext = createContext();

export const ModalProvider = props => {
  const [watch, setWatch] = useState(false);

  return (
    <ModalContext.Provider value={{watch, setWatch}}>
      {props.children}
    </ModalContext.Provider>
  );
};
