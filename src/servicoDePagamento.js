export class ServicoDePagamento {
  pagamentos
  
  constructor(){
    this.pagamentos = []
  }
  
  pagar(codDeBarras, empresa, valor){

    let categoria
    if(valor <= 100){
        categoria = 'padrão'
    }else{
        categoria = 'cara'
    }

    this.pagamentos.push({
        codigoBarras: codDeBarras,
        empresa: empresa,
        valor: valor,
        categoria: categoria
    })

    return this.pagamentos
  }
  
  ultimoPagamento(){
    return this.pagamentos.at(-1)
  }
}