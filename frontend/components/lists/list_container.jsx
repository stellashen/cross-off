import List from './list';
import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    lists: state.entities.lists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    openModal: (modal, listId) => dispatch(openModal(modal, listId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
