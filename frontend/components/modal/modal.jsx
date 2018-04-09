import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddListFormContainer from '../list_form/add_list_form_container';
import EditListFormContainer from '../list_form/edit_list_form_container';
import DeleteListContainer from '../lists/delete_list_container';

function Modal({modal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.name) {
    case 'addListForm':
      component = <AddListFormContainer />;
      break;
    case 'editListForm':
      component = <EditListFormContainer listId={modal.listId}/>;
      break;
    case 'deleteList':
      component = <DeleteListContainer listId={modal.listId}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
