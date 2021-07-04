import React,{useState, useEffect}  from 'react'

export const Users = () =>{
    const API = process.env.REACT_APP_API;
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res =  await  fetch(`${API}/users`,{
            
            method:"POST",
            headers:{
                    "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
            
        });
         await res.json();
    }

    const getUsers = async () => {
        const res= await fetch(`${API}/users`)
       const data = await res.json()
       console.log(data)
    }

useEffect(()=>{
    getUsers();

},[])



    return (
    
    <div className="row">
        <div className="col-md-4">
            <form onSubmit={handleSubmit} className="card card-body">
                <div className="form-group">
                  <input type="text" onChange={e=>setName(e.target.value)} value={name}
                  className="form-control"
                  placeholder="Name"
                  autoFocus
                  />
                </div>
                <div className="form-group">
                  <input type="email" onChange={e=>setEmail(e.target.value)} value={email}
                  className="form-control"
                  placeholder="Email"
                  autoFocus
                  />
                </div>

                <div className="form-group">
                  <input type="password" onChange={e=>setPassword(e.target.value)} value={password}
                  className="form-control"
                  placeholder="Password"
                  autoFocus
                  />
                </div>
                <button className="btn rtn-primary btn-block">
                    Create
                </button>
            </form>
        </div>

        <div className="col md-8">


        </div>

    </div>);
}