import React, { useState, useEffect } from 'react'



function Hook() {

    const [user, setUser] = useState({ first: "", second: "" })

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: [e.target.value] })
    }
    const [searchText, setSearchText] = useState("")
    const [employee, setEmployee] = useState([])
    const [emp, setEmp] = useState([])
    const obArr = () => {
        setEmployee([...employee, user])
    }

    const setSearchFn = e => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        const searchData = searchUser(searchText)
        setEmp(searchData)
    }, [searchText])

    function searchUser(first) {
        return (employee.filter(res => res.first.toString().toLowerCase().includes(first.toString().toLowerCase())))
    }


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

                        <div>{res.first}</div>


                    ))}
                </div>

                {JSON.stringify(user)}


                {emp.map((res, key) => (
                    <div>
                        {res.first}

                    </div>
                ))}


            SearchText:<input type="text" onChange={setSearchFn} />
            </div>
        </div>
    )

}
export default Hook