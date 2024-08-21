let usario = []

function adicionarUsuario(nome , idade, email){
    nome = "Maria C"
    idade = 1
    email = "maria.c@gmail.com"

        if(idade > 0 && nome && email ){
        usario.push(nome, idade, email)
        }else{
        console.log("Seu cadastro não está correto, por favor verifique os dados.")
        }
    }

    function listarUsuario(){
        usario.forEach(function(usario) {
                console.log(usario)
        })
       
    }
        
    adicionarUsuario()
    listarUsuario()


