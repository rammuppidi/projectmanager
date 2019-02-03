import React, { Component } from 'react';
import '../App.css';

class AddProject extends Component {
  static defaultProps = { categories: ["Web Design","Mobile Development","Web Development"] }


  render() {
  let categoryOptions = this.props.categories.map(category => { return <option key={category}  value="category">{category}</option> })
  return (
  <div>
       <h3>Add Project</h3>
       <form>
        <div>
           <label>Title</label>
           <input type="text" ref="title"/>
        </div>
           <div>
                   <label>Category</label>
                   <select ref="category">
                       {categoryOptions}
                   </select>
           </div>
       </form>
       </div>
    );
  }
}

export default AddProject;