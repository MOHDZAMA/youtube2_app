import React, {createContext, useState} from 'react';

export const ModalContext = createContext();

export const ModalProvider = props => {
  const [watch, setWatch] = useState(false);
  const [videoId, setVideoId] = useState('');
  console.log(watch);
  console.log(videoId);

  return (
    <ModalContext.Provider value={{watch, setWatch, videoId, setVideoId}}>
      {props.children}
    </ModalContext.Provider>
  );
};
