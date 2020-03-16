

import React, {useState, useEffect} from "react";
import MaterialTable from "material-table";

function Table() {
    const [state, setState] = useState({
        columns: [
            {title:"Picture", field:"thumbnail"},
            {title:"Title", field:"title"},
            {title:"First Name", field:"first"},
            {title:"Last Name", field:"last"},
            {title:"Email", field:"email"},
            {title:"Age", field:"age", type:"numeric"},
            {title:"Country", field:"country"}
        ],data:[],
    });
    
    useEffect(() => {
        async function getData() {
            const url="https://randomuser.me/api/?results=200&nat=us";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results);

            const users = data.results.map(user => {
                return {
                    thumbnail: <img src={user.picture.thumbnail} alt="fake_selfies"/>,
                    title: user.name.title,
                    first: user.name.first,
                    last: user.name.last,
                    email: user.email,
                    age: user.dob.age,
                    country: user.location.country
                }
            })
            setState({...state, data: users})
        }
        getData();
    },[]);

    return (
        <MaterialTable 
            title=""
            columns={state.columns}
            data={state.data}/>
    );
}



export default Table;