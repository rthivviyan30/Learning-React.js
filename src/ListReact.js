import React from "react";

function ListReact() {
    const fruits = ["Apple", "Orange", "Cherry", "Banana", "Watermelon", "Grapes", "Papaya"];
    const handleClick = (fruits)=> {
        document.getElementById('Fruits').innerHTML = `You clicked on ${fruits}`
    };
    const users = [
        { id: 1, name: 'Geek', age: 35 },
        { id: 2, name: 'Alphonse', age: 28 },
        { id: 3, name: 'John', age: 40 }
    ];
    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                <p id="Fruits"></p>
                {fruits.map((fruits, index) =>(
                    <button key={index} onClick={() => handleClick(fruits)}>
                        {fruits}
                    </button>
                ))}

            </ul>
            <br /><br />
            <h1>Developers</h1>
            <table cellSpacing={25} border={20}>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>

                {users.map((user) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}

            </table>
            <ul>
                {users.map((user) => (
                    user.age > 25 ? (
                        <li key={user.id}> {user.name} a senior developer</li>
                    ):(
                        <li key={user.id}>{user.name} is a junior developer</li> 
                    )
                ))}
            </ul>
        </div>

    )
}

export default ListReact;