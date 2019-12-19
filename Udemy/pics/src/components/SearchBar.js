import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
     event.preventDefault();
     this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            className="form-control"
            onChange = {(e) => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
