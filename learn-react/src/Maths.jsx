function Maths(){
    const name = "Arithmetc operations"
    const operators=['Addition','Subtraction','Multiplication','Division','Modulus'];
    return(
    <>
    <h1>{name}</h1>
    
    <p>{operators[0]} : 2+2 = {2+2}</p>
    
    <p>{operators[1]} : 50-25 = {50-25}</p>
    
    <p>{operators[2]} : 12*2 = {12*2}</p>
    
    <p>{operators[3]} : 12/2 = {12/2}</p>
    
    <p>{operators[4]} : 20%2 = {20%2}</p>
    
    
    
    </>);
}
export default Maths;