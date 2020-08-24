import React from 'react';
import 'tachyons';
import CardList from './CardList';
import imageInfo from './info';
import Search from './search';
import Blur from './Blur';
import Gray from './Gray';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      searchInput : '',
      blur : 'no',
      countb : 1,
      gray : 'no',
      countg : 1 
    }
  }

  onSearchChange=((event)=>{
    this.setState({searchInput:event.target.value});
  });

  
  onClickBlur = ((event)=>
  {
    const filtered = imageInfo.filter((image)=> image.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    if(filtered.length != 1)
      alert('Can only blur one image at a time');
    else
      {this.setState({blur:'yes'});
            let c = this.state.countb;
            this.setState({countb:c+1});}
  }
    )

  onClickGray = ((event)=>
  {
    const filtered = imageInfo.filter((image)=> image.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    if(filtered.length != 1)
      alert('Can only grayscale one image at a time');
    else
      {this.setState({gray:'yes'});
            let c = this.state.countg;
            this.setState({countg:c+1});}
  }
    )
  


  render(){ 
    const filteredInfo = imageInfo.filter((image)=> image.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    return (
      <div className = 'tc'>
      <h1 className='f1'> Background Image Selector </h1>
      <br/>
      <Search change={this.onSearchChange} className='dim'/> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <CardList info = {filteredInfo} blur = {this.state.blur} countb = {this.state.countb} gray = {this.state.gray} countg = {this.state.countg} />
      <br/>
      <br/>
      <Blur action ={this.onClickBlur} />
      <br />
      <Gray action = {this.onClickGray} />
      <br/>
      <br/>
      </div>
    );
  }
}

export default App;
