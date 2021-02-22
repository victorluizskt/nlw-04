
// UUID => Universally unique identifier

// function sendEmail(para, id, assunto, texto) {
//     // Biblioteca de envio de email.
//     console.log(para, id, assunto, texto);
// }

// class EnviarEmailParaUsuario {
    
//     send(){
//         sendEmail('Victorluizcefet@gmail.com', 9899, 'Olá', "Tudo bem");
//     };
// };


// Usando typescript para as tipagens e afins!

interface DadosDeEnvioEmail {
    para:string;
    id:string;
    assunto:string; 
    texto:string;
}


function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    
    send(){
        enviarEmail({
            para:'Victorluizcefet@gmail.com', 
            id: '9899', 
            assunto: 'Olá', 
            texto: "Tudo bem"});
    };
};
