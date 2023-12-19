function Function3()
{
    var fname="Mithlesh"
    function Change()
    {
      var fname="Rajat"
      alert(fname)
    }
    return(
        <div>
    <h1>{fname}</h1>
    <button onClick={Change}>ok</button>
        </div>
    )
}
export default Function3