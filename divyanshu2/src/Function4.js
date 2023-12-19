import{useState} from "react";
function Function4()
{
    const[data,setdata]=useState("Mithlesh")
function Change()
{
    setdata("Divyanshu")
}
    return(
        <div>
    <h1>{data}</h1>
<button onClick={Change}>ok</button>
        </div>
    )
}
export default Function4