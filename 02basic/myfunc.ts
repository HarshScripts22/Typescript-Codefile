function addTwo (num:number){
    return num + 2;
}

function getUpper(val :string){
    return val.toUpperCase
} 

function SingupUser(name:string,email:string,isPaid:Boolean){
    return ;
}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    if (isPaid === void 0 ) {isPaid = false;} {
        
    }
}

loginUser("h","h@h.com");

SingupUser("harsh","deshmukhahrsh23@gmail.com",true);

getUpper("harsh");

addTwo(5);


// this is arrow func  returning the string  
const getHello = (s:string):string =>{
    return ""
}

const heros = ["spidy","batman","ironman"]
heros.map((hero:string)=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
    
}
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}


export{}
