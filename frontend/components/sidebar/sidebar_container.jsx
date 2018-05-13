import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => {
  return {
    activeListId: state.ui.listId
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
