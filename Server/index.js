const Server =require('./src/server');


main()

async function main(){
    try {
        
        Server.Iniciar()
    } catch (error) {
        console.log(error)
    }
}