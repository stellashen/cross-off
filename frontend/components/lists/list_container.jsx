import List from './list';
import { connect } from 'react-redux';
import { fetchLists, deleteList } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    lists: state.entities.lists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    deleteList: (id) => dispatch(deleteList(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
