import{Component} from "react";
class Class4 extends Component
{
    constructor()
    {
        super()
    this.state=
    {data:100}
    }
    Change()
    {
        this.setState({data:200})
    }
    render()
    {
return(
<div>
<h1>{this.state.data}</h1>
<button onClick={()=>this.Change()}>ok</button>
</div>
)
    }
}
export default Class4