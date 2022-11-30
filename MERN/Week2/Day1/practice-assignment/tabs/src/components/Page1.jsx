import React from 'react'

function page1(props) {

  const message = props.tab;

  const onClickHandler = (e) => {
    const message = props.tab;
    console.log(message.tab1);
  }
  return (
    <div>
{message.map( (tab,i) => {
return <button onClick={ (e) => onClickHandler(e, tab) }>  {tab} </button>


})}

{/* <textarea > {props.tab1}</textarea>  */}





    </div>
  )
}

export default page1



