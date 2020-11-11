import React from "react";
import axios from './api/unsplash';
import "./App.css";
import SearchBar from './pages/Search';
import ImageList from './pages/imageList';

class App extends React.Component {
  state = { searchData: [] };
  
  onFormSubmit = async (text) => {
   const response = await axios.get('/search/photos', {
      params: { query: text }
    });

    this.setState({ searchData: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
       <SearchBar onSubmit={this.onFormSubmit} />
        <p style={{textAlign: 'center'}}>Found : {this.state.searchData.length} images</p> 
       <ImageList data={this.state.searchData} />
      </div>
    );
  }
}

export default App;
