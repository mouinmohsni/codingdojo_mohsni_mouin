import React from 'react'


const Liste = ({autors}) => {

  return (
    <div>
    <div>
    <table>
        
            <tr>
                <th> author</th>
                <th> action</th>
            </tr>
        
            <tbody>
                {autors.map((autor)=>{
                return (<tr key={autor._id}>
                            <td>
                                {autor.name}
                            </td>
                            <td>
                                <button>update </button>
                                <button>delete</button>
                            </td>
                        </tr>)})}
            </tbody>
      </table>

      </div>









    </div>
  )
}

export default Liste