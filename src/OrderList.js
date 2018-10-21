import React, {Component} from 'react';
import Client from "./Client";
import Pagination from "./Pagination";

class OrderList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      query: {
        filters: {
          status: 0
        },
        pagination: {
          page: 0,
          rows: 5
        }
      }
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  };

  componentDidMount() {
    this.loadOrders();
  };

  loadOrders() {
    Client.search(this.state.query, orders => {
      this.setState({
        orders: orders.slice(0)
      });
    });
  };

  handleFilterChange(event) {
    this.setState({
      query: {
        filters: {
          status: event.target.value
        },
        pagination: {
          page: 0,
          rows: 5
        }
      }
    });

    this.loadOrders();
  };

  render() {
    const {orders} = this.state;
    const orderRows = orders.map((order, idx) =>
      (
        <tr key={idx}>
          <td>{order.id}</td>
          <td>{order.status}</td>
          <td>{order.sender}</td>
          <td>{order.receiver}</td>
          <td>{order.name}</td>
        </tr>
      )
    );

    return (
      <div>
        <div>
          Статус:
          <select onChange={this.handleFilterChange}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th>id</th>
              <th>status</th>
              <th>sender</th>
              <th>receiver</th>
              <th>name</th>
            </tr>
            </thead>
            <tbody>
            {orderRows}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    );
  }
}

export default OrderList;