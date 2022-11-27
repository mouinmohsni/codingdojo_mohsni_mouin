import React ,{useState} from 'react'
import './style.css'

function Form() {
    const [firstname, setFirstname] = useState("   ")
    const [lastname, setLastname ] = useState("   ")
    const [email, setEmail] = useState("   ")
    const [Password,setPassword ] = useState("        ")
    const [confirm, setConfirm] = useState("        ")

    const submite = (e) =>{e.preventDefault(); 
        const newUser = { firstname,lastname , email, Password };
        console.log("Welcome", newUser);};

    const Messagefirst = () => {
        if( firstname.length < 3 ) {
        return "your first name shold be more than 3 caracter ";} }
    const Messagelast = () =>{
        if (lastname.length < 3) {
            return "your last name shold be more than 3 caracter ";} }
    const Messagemail = () =>{
        if (email.length < 3) {
            return "your mail shold be more than 3 caracter ";} }
    const Messagepass = () =>{
        if (Password.length < 8) {
            return "your password shold be more than 8 caracter ";} }
    const Messageconf = () =>{
        if (Password !== confirm) {
            return "your password and your confirm password should be match ";} }

    
    
    

    return (
        <div>
        <form onSubmit={submite} >
            <fieldset>
                <legend> fill in the forms </legend>
                <div className="flex">
                
                    <div className='ajustement'>
                        <label > first name </label>
                        <label >Last name </label> 
                        <label >E-mail </label>
                        <label > Password </label>
                        <label > confirm Password </label>
                    </div>
                    <div className='ajustement'>
                        <input type="text" onChange={(e)=>setFirstname(e.target.value)}/>
                        <input type="text" onChange={(e)=>setEmail(e.target.value)} />
                        
                        <input type="text"  onChange={(e)=>setLastname(e.target.value)} />
                        
                        <input type="text" onChange={(e)=>setPassword(e.target.value)} />
                        
                        <input type="text"  onChange={(e)=>setConfirm(e.target.value)}/>
                        
                        
                    </div>
                </div>
                <div className='main'>
                <input type="button" value=" submit"  className='bt'/>
                </div>
                </fieldset>
                <h6>{Messagefirst()}</h6>
                <h6>{Messagelast()}</h6>
                <h6>{Messagemail()}</h6>
                <h6>{Messagepass()}</h6>
                <h6>{Messageconf()}</h6>
                
                
                
            </form>
    <h1>hello</h1>
    <div className="flex_2">
        <div className='ajustement_text'>
        <p> your  first and last name : </p>
        <p>your mail :</p>
        <p> your pass word :  </p>
        <p>your confirm Password</p>
        </div>
        <div className='ajustement_text'> 
            <p>{firstname} {lastname}</p>
            <p>{email}</p>
            <p>{Password}</p>
            <p>{confirm}</p>
        </div>
    </div>
    
</div>
)
}

export default Form