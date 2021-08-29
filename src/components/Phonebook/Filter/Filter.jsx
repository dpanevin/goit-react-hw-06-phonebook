import { connect } from 'react-redux';
import pbActions from 'redux/phonebook/pb-actions';
import { FormInput } from '../Phonebook.styled';

function Filter({ onFilterChange, filterValue }) {
  function hendleChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <label>
      Поиск по списку контактов:
      <FormInput
        onChange={hendleChange}
        value={filterValue}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Фильтр"
        required
      />
    </label>
  );
}

const mapStateToProps = ({ filter }) => ({
  filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: value => dispatch(pbActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
