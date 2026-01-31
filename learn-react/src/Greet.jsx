function Greet(){
    let date = new Date();
    return(
        <>
        <h1>Hello There!
        </h1>
        <p>Date : {date.toLocaleDateString()}</p>
        
        
        </>
    );
}
export default Greet;