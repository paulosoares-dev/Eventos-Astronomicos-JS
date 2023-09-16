import colecaoChuvasDeMeteoros from "./data/chuva-de-meteoros.js";
import {
    verificaChuvaVisivelPorData,
    verificaChuvaVisivelProximos2Meses
} from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date();

const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter(
    (chuva)=> verificaChuvaVisivelPorData(chuva, dataAtual)
);

const chuvasVisiveisProximos2Meses = colecaoChuvasDeMeteoros.filter(
    (chuva)=> verificaChuvaVisivelProximos2Meses(chuva, dataAtual)
);

console.log('Chuva de meteoros');

if ( chuvasVisiveisHoje.length > 0 ) {
    console.log('CHUVAS QUE PODEM SER VISTAS HOJE');

    console.log(chuvasVisiveisHoje);

} else {
    console.log('\nNão há chuvas passando hoje');
}

console.log('CHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES');
console.log(chuvasVisiveisProximos2Meses);