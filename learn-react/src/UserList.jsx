function UserList(){
    const users = [
        {id:1,name:"Alex",age:21},
        {id:2,name:"Alice",age:22},
        {id:3,name:"Brian",age:28},
        {id:4,name:"Ali",age:26},
        
    ]
    return(
        <>
       {users.map(user=>(
        
        <div>
            <ul>
                <li key={user.id}>{user.name} - Age: {user.age}</li>
            </ul>
        </div>

       ))}
        </>
    );

}
export default UserList;