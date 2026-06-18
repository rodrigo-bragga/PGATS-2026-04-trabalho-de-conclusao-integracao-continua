# PGATS-2026-04-trabalho-de-conclusao-integracao-continua

## Projeto

O projeto utilizado foi Trabalho de conclusão da disciplina anterior: 03 - Programação para Automação de Testes
O projeto consiste em uma pasta de testes que são executados com o framework Mocha.
A partir disso foi implementado a pipeline que executa os testes e gera um relatório com o reporter Mochawsome.

## Execuções

### - Execução por push
Na execução por push ficou definido que a pipeline irá rodar a cada push na branch main  

```bash
push:  
    branches:  
      - main
```
### - Execução manual
Na execução manual foi necessário acrescentar apenas o workflow_dispatch dentro do on
```bash
  workflow_dispatch:
```

### - Execução agendada (schedule).
Na execução agendada foi realizada um horário que roda todos os dias ás 18:36 no hoário de Brasília
```bash
  schedule:
    - cron: '36 21 * * *' # Executa às 21:36 UTC (18:36 no horário de Brasília)
```

## Relatório
Para gerar o relatório do testes foi utilizado o Reporter Mochawsome.  
A princípio a pipeline gera um arquivo .zip no qual é possível baixar o relatório.  
Para que o relatório fique disponível online foi utilizado o Github Pages. Segue o passo a passo: 

2. Assim que os testes terminam, o Mochawesome gera o relatório em uma pasta local (mochawesome-report) contendo um arquivo index.html.

3. A Action de deploy (JamesIves/github-pages-deploy-action) pega essa pasta HTML gerada e faz um "upload" (push) focado para uma branch exclusiva do repositório chamada gh-pages.

4. O GitHub Pages detecta que há arquivos novos nessa branch gh-pages, ativa  um servidor web gratuito para o repositório e publica o arquivo index.html diretamente na internet.

Com isso o link do repositório fica disponível online para ser analisado.
