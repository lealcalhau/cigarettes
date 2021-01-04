# Rio Organico - IONIC - Frontend

Frontend da aplicação para versão com IONIC

# Iniciar projeto

Para iniciar o servidor

=> ionic serve


# Construção do Projeto

1. Angular
    
    Desinstalar -> npm uninstall -g @angular/cli
    Limpar cache -> npm cache clean --force
    Instalar -> npm install -g @angular/cli

2. Ionic

    Instalar ionic
    Criar projeto -> ionic start cigarro blank

3. Subi projeto no git

    Alterar usuario git -> git config credential.username 'lealcalhau'
    Subir codigo -> git push -u origin master


4. Resumo

    Ionic ja criar uma estrutura com diretorio HOME

    No home.ts implementei os metodos
        marcarFumei()
        pegarHorario()

    Chamei no home.html um metodo marcarFumei() no botão (click)

5. Instalar angular-in-memory-web-api

    -> npm i web-in-memory-web-api

    Criar in-memory-web-api.ts file

    Realizar import do module HttpClientInMemoryWebApiModule.forRoot() no app.module.ts
    

6. Gerar novo component já com module

    -> ionic generate page list

    Adicionar rota no botão para carregar nova pagina
    <ion-button shape="round" color="danger" [routerLink]="['/list']" >Listar</ion-button>
