import {useState} from "react";
export default function as(){
    return(
        <>
        <Mycomp/>
        </>
    )
}


function Mycomp(){
    const student=useState("pratik");
    const studentid=useState("089")
    const[message ,setMessage]=useState("");
    const[list ,setList]=useState([]);

    
    const getmsg=(e)=>{
        setMessage(e.target.value);
    
    }

     const displaymsg=()=>{
        if(message==""){
            alert ("type message");
            return
        }
         const newList=[message];
         setList(newList);
         setMessage("")
     }
    return(
        <div>
            <div className="bg-dark text-light  p-4  row d-flex ">
                <h1 className="col-12" > MyChatApp <span className="h6">by {student} {studentid}  </span> </h1>
                
               
            </div>

            <div class="mb-3 justify-content-center row bg-info p-4">
              
              <input type="text" class="form-control w-50 mt-3 mx-2" onChange={getmsg} value={message}  placeholder="Lets chat here"/>
              <input  class="btn bg-danger mt-3 w-25" onClick={displaymsg} type="button" value="send"/>
            
            </div> 
            { <div>
                {list.map((item,index)=>(
                    <div className="bg-warning p-3" key={index}>{item}</div>
                ))}
            </div> }
        </div>
    )
}