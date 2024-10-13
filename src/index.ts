import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

// Classe Heroi
class Heroi{

    nome: string;
    idade: number;
    tipo_heroi: string;

    constructor(nome:string, idade:number, tipo_heroi:string){
        this.nome = nome;
        this.idade = idade;
        this.tipo_heroi = tipo_heroi;
    }

    atacar(tipo_heroi:string, ataque:string){
        console.log(`O ${tipo_heroi} atacou usando ${ataque}`)
    }
}

// Menu Principal
let opcao_escolhida, invalido;

do{
    console.log("==== Jogo ==== \n");
    opcao_escolhida = parseInt(await rl.question('Escolha uma opção:\n 1 - Iniciar \n 2 - Encerrar aplicação\n '));
    invalido = 0;

    if (opcao_escolhida == 1){
        let {nome, idade, tipo, ataque} = await escolhaSeuHeroi();

        let hero = new Heroi(nome, idade, tipo!);
        hero.atacar(hero.tipo_heroi,ataque!)  ;
    }else if ( opcao_escolhida == 2){
        finalizarAplicacao();
    }else{
        console.log('Opção inválida!');
        invalido = 1;
    }

}while(!invalido)


// Função de escolha do herói
async function escolhaSeuHeroi(){
    let nome,idade,tipo,opcao,ataque;

    nome = await rl.question('Qual o nome do seu herói?\n');
    idade = parseInt(await rl.question('Qual a idade do seu herói?\n'))
    opcao = parseInt(await rl.question('Escolha o tipo do seu herói:\n 1 - Guerreiro\n 2 - Mago\n 3 - Monge\n 4 - Ninja\n'));

    switch(opcao){
        case 1:
            tipo = 'Guerreiro';
            ataque = 'espada';
            break;
        case 2:
            tipo = 'Mago';
            ataque ='magia';
            break;
        case 3:
            tipo='Monge';
            ataque = 'artes marciais';
            break;
        case 4:
            tipo='Ninja';
            ataque = 'shuriken';
            break;
        default:
            console.log('Opção inválida!');
            finalizarAplicacao();
            break;
    }

    return {nome, idade, tipo,ataque};
}

function finalizarAplicacao(){
    process.exit(0);
}

rl.close();

