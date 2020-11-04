import React, { useState, useEffect } from 'react'

import * as service from '../Hook/users'


function Hook() {
    // const [count,setCount]=useState(0);

    // const setFun=()=>{

    //         setCount(count+1)
    // }

    const [user, setUser] = useState({ first: "", second: "" })
    // const firstN=e=>{
    //     setUser({...user,first:e.target.value})
    // }
    // const secN =e=>{
    //     setUser({...user,second:e.target.value})
    // }
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: [e.target.value] })
    }
    const [employee, setEmployee] = useState([])
    const obArr = () => {
        setEmployee([...employee, user])
    }
    const [searchText, setSearchText] = useState("")
    const setSearchFn = e => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        const searchData = service.searchUser(searchText)
        // console.log(searchData)
        setEmployee(searchData)
    }, [searchText])




    return (
        <div>
            {/* <p>your {count} th click</p>
        <button onClick ={setFun}>click</button> */}


            <div>
                <div>
                    FirstName : <input type="text" name="first" onChange={handleChange} />
                </div>
                <div>
                    SecondName : <input type="text" name="second" onChange={handleChange} />
                </div>
               
                <button onClick={obArr}>Save Data</button>
                <div>
                    {employee.map((res, key) => (
                        <div>
                            <div>{res.first}</div>
                            <div>{res.second}</div>
                        </div>
                    ))}
                </div>
                <div>
                    {JSON.stringify(user)}
                </div>

            SearchText:<input type="text" onChange={setSearchFn} />
            </div>
        </div>
    )

}
export default Hook