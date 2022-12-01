import React from 'react'

function page1(props) {

  const message = props.tab;

  // const onClickHandler = (i) => {
  //   const message = props.tab;
  //   console.log(message.tab1);
  // }
  return (
    <div>
{message.map((tab , i)=>{

<button> tab {tab.tab1}</button>



})


}
    </div>
  )
}

export default page1



