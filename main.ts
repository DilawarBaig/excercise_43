
let magicians = ["Chriss Angle","Dynamo","David Blaine"]

let magicainsCopy:string[] = [...magicians]

function make_great (magicainsCopy:string[]):void {
    for(let i = 0 ;i < magicainsCopy.length; i++){
        console.log(`${magicainsCopy[i]}`);
    }
}
console.log('"Original Array"')
make_great(magicainsCopy)

function show_magicians (magicainsCopy:string[]):void {
    for (let i =0; i < magicainsCopy.length; i++){
        console.log(`The great ${magicainsCopy[i]}`)
    }
}

console.log('"The Great Magicians"')
show_magicians(magicainsCopy);
