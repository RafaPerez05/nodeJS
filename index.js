const fastify = require('fastify')();
const fs = require('fs');
const cron = require('node-cron');

function addAluno(){
    fs.readFile('dados.json','utf8', (erro,data) => {
        if(erro){
            console.log("Falha ao ler o arquivo JSON");
        }else{
            let dados = JSON.parse(data);
            const aluno = {
                nome: "Rafael Perez",
                idade: 18,
                cidade: "Álvares Machado"
            }

            dados.Turma.alunos.push(aluno);

            fs.writeFile('dados.json',JSON.stringify(dados, null, 2),(erro) => {
                if(erro){
                    console.log('Erro aqui');
                }else{
                    console.log('Aluno adicionado. ');
                }
            })
        }
    } )
}

cron.schedule('* * * * *', ()=>{
    addAluno();
})


fastify.get('/', function(request, reply){
    reply.send({hello: 'world'})
})

fastify.get('/ler-dados', function(request, reply){
     fs.readFile('dados.json', 'utf8',(erro,data) => {
        if(erro){
            reply.code(500).send({ erro: 'Falha ao ler o arquivo JSON' })
        }else{
            reply.send(JSON.parse(data));
        }
    })
})

fastify.listen({port: 3006 },(erro) => {
    if(erro){
        fastify.log.error(erro);
        process.exit(1)
    }else{
    console.log(`Server iniciado na porta 3006`)
    }
})
