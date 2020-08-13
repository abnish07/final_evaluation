import React from 'react'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Art & Photography</li>
              <li class="list-group-item">Fiction</li>
              <li class="list-group-item">Motivation</li>
              <li class="list-group-item">Education</li>
              <li class="list-group-item">Biography</li>
              <li class="list-group-item">Ancient</li>
            </ul>
          </div>
         );
    }
}
 
export default Category;