import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Sidebar from './sidebar';

const mapStateToProps = ({ session, ui }) => ({
  currentUser: session.currentUser,
  modal: ui.modal
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
