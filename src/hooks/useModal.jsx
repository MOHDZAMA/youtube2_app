import {useContext} from 'react';

import {ModalContext} from '../context/Contex';

function useModal() {
  const watch = useContext(ModalContext);
  return watch;
}

export default useModal;
