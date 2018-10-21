import React, {Component} from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rows: 10
    };

    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  };

  handlePrevPage() {
    alert('Prev');
  };

  handleNextPage() {
    alert('Next');
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePrevPage}>&lt; Назад</button>
        <button onClick={this.handleNextPage}>Вперед &gt;</button>
      </div>
    );
  }
}

export default Pagination;