import React ,{useState}from 'react'

export default function Textform(props) {
    const [text,settext]=useState("Enter text here")
   const handleupcase=()=>{
    let newtext= text.toUpperCase();
    settext(newtext)
    }

    const handlelocase=()=>{
      props.setprogress(10)
        let newtext= text.toLowerCase();
        settext(newtext)
      props.setprogress(100)

        }

        const handleclearcase=()=>{
      props.setprogress(10)
            let newtext= ""
            settext(newtext)
      props.setprogress(100)
      document.title=`TExtUtility-text claeared`
            }

    const handleonchange=(event)=>{
        console.log("handleonchange")
        settext(event.target.value)
    }
    const handlecopycase=(event)=>{
        let text = document.getElementById("mybox")
     text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleextracase=(event)=>{
        let newtext=text.split(/[ ]+/)
        settext(newtext.join(" "))
    }
  return (
    <>
    <div className='container' style={{color:props.mode==="light"? "black":"white"}}>
      <div className="mb-3"  >
        <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==="light"?"white":"black",color:props.mode==="light"?"black":"white"}} id="mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleupcase}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handlelocase}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleclearcase}>click to Clear</button>
<button className='btn btn-primary mx-2' onClick={handlecopycase}>Click for copy</button>
<button className='btn btn-primary mx-2' onClick={handleextracase}>Remove extra spaces</button>
    </div>
    <div className='container my-3'>
    <h1>Your Text-Summary</h1>
    <p>{text.split(" ").length} words {text.length} characters</p>
    </div>
    </>
  )
}
