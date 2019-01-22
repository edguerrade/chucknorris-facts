import React, { PureComponent } from 'react';
import Select from 'react-select';

class CategoriesFilter extends PureComponent {
  state = {
    categories: []
  };

  componentDidMount = async () => {
    const categories = await this.props.getCategories();
    this.setState({
      categories
    });
  };

  handleChange = selectedOption =>
    this.props.handleChange(selectedOption.value);

  render() {
    const { selectedOption } = this.props;
    return (
      <Select
        placeholder={'Categories...'}
        value={
          selectedOption && {
            value: selectedOption,
            label: selectedOption.toUpperCase()
          }
        }
        onChange={this.handleChange}
        options={[
          { label: 'ALL' },
          ...this.state.categories.sort().map(category => {
            return {
              value: category,
              label: category.toUpperCase()
            };
          })
        ]}
      />
    );
  }
}

export default CategoriesFilter;
