import React from "react";

const Hello = () =>{
    // return (
    //     <div>
    //         <h1>hello asmitha</h1>
    //     </div>
    // )
    return React.createElement('div',{id: 'hello', className:'test'},React.createElement('h1',null,"hi asmitha"))
}

export default Hello;