import List from './list';
import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    lists: state.entities.lists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
