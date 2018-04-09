export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalName, listId) => {
  return {
    type: OPEN_MODAL,
    modal: { name: modalName, listId: listId }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
