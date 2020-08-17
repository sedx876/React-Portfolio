import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Software Engineering" where="FlatIron School" from="September 2019" to="Present"/>
<Widecard title="PlaceHolder" where="PlaceHolder" from="2011" to="2017"/>
</div>
)
}
}
export default Education