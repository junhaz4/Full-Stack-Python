import React from "react";
import ReactDOM from "react-dom";
 
class Product extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {qty: 0}
  }
  
  buy(){
    this.setState((prevState) => ({
      qty: prevState.qty +1
    }));
    this.props.handleTotal(this.props.price);
  }

  show(){
    this.props.handleShow(this.props.name);
  } 

  render(){
    
    return(
      <div>
        <h2> {this.props.name}</h2>
        <h3> Price - ${this.props.price}</h3>
        <h4>Qty - {this.state.qty}</h4>
        <button onClick={this.buy.bind(this)}>Buy Now</button>
        <button onClick={this.show.bind(this)}>Show</button>
        <hr/>
      </div>
    )
  }
}

class Total extends React.Component{
  
  render(){
    return(
      <div>
        <h4> Total Cash : $ {this.props.total} </h4>
      </div>
    )
  }
} 

class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state = {total: 0}
  }
  calculateTotal(price) {
    this.setState((prevState) => ({
      total: prevState.total + price
    }));
  }
  showProduct(name){
    alert("You Selected" + name);
  }
  render(){
    return(
      <div>
        <Product name="Samsung" price={100}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal.bind(this)}
        />
        <Product name="Nokia" price={150}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal.bind(this)}
        />
        <Product name="Apple" price={200}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal.bind(this)}
        />
        <Total total={this.state.total}/>
      </div>
    )
  }
} 

ReactDOM.render(
  <ProductList />,
  document.getElementById("root")
)
