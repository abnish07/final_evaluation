import React from 'react'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="flex-box">
            <select className="custom-select"> 
              <option value="art_photography">Art & Photography</option>
              <option value="fiction">Fiction</option>
              <option value="motivation">Motivation</option>
              <option value="education">Education</option>
              <option value="biography">Biography</option>
              <option value="ancient">Ancient</option>
            </select>
          </div>
         );
    }
}
 
export default Category;