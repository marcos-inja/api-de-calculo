# API para cálculos simples!

## O que é?
**API** que retorna o resultado de uma operação matemática de acordo com os valores passados por parâmetro.

### Exemplo: 
```md
 http://localhost/subtracao/2/2
 ```
## Todos os parâmetros
|Operação|URL|
|-|-|
|Subtração|`http://localhost/subtracao/:n1/:n2`|
|Soma|`http://localhost/soma/:n1/:n2`|
|Multiplicação|`http://localhost/multiplicacao/:n1/:n2`|
|Divisão|`http://localhost/divisao/:n1/:n2`|
|Potência|`http://localhost/potencia/:n1/:n2`|
|Raiz quadrada|`http://localhost/raizquadrada/:n1`|
|Raiz cúbica|`http://localhost/raizcubica/:n1`|

 ## Depedências
 Use o comando abaixo para instalar todas as dependicias do projeto: 
    ```md
    npm install
    ```
 ## Para rodar

- Ter o [**node**](https://nodejs.org/en/) instalado
- Instalar as dependências
- Entrar na pasta do projeto via terminal e digitar o comando:
 ````md
 node index.js
 ````

## Como rodar os testes
Use:
```md
npm run test
```
 
 
