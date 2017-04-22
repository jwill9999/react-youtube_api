import React, {Component} from 'react';

class searchBarComponent extends Component {
    constructor(props){
        super(props)

        this.state  = {
            term: ""
        }

    }

  render() {
      
    return (
      <div className="form-group">
        <div className="row">
          <div className="col-xs-10">
            <input
              className="form-control"
              onChange={event => this.onInputChange(event.target.value)}
              value={this.state.term}
              placeholder= "Search ....  "
             />
          </div>
          {/*<div className="col-xs-2">
            <button  className="btn btn-primary" type="submit">Search</button>
          </div>*/}
        </div>
      </div>
    );
  }
  onInputChange(searchTerm){
    this.setState({term: searchTerm});
    this.props.onVideoSearch(searchTerm);
  }


};

export default searchBarComponent;