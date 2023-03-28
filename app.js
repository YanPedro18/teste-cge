const mainElement = document.querySelector('main');
let sistema;
        
// escreve coisa no servidor
fetch('./sistema.json')
    .then(response => response.json())
    
    .then(jsonBody => {
        sistema = jsonBody;
        jsonBody.forEach((system, indice) => { 
            const liElement = document.createElement("li");
           
            liElement.classList.add('spec-desc');
            mainElement.insertAdjacentElement("beforeend", liElement);
          
            liElement.insertAdjacentHTML('beforeend', `<h1>${system.name}</h1>`);
            liElement.insertAdjacentHTML('beforeend', `<h6>Especificações</h6>`);
            
            const divElement = document.createElement("div");
            
            system.shortDetails.forEach((shortDetails) => {   
                    const spanElement = document.createElement('span');

                    spanElement.insertAdjacentHTML('beforeend', `${shortDetails.key}`);
                    spanElement.insertAdjacentHTML('beforeend', `${shortDetails.value}`);

                    divElement.insertAdjacentElement("beforeend", spanElement);

            });

            liElement.insertAdjacentElement("beforeend", divElement);


            if (system.details != undefined) {

                liElement.insertAdjacentHTML('beforeend', `<a href="#" onclick="modal(${indice})">Detalhes🔽</a>`);   
            }
        });
    }); 

function modal(indice) {   
    const newModalElement = document.createElement('div');
    newModalElement.classList.add("modal");
    newModalElement.style.display = "block";  

    const close = document.createElement('a');
    close.classList.add("material-symbols-outlined");
    close.classList.add("close-position");
    close.textContent = 'close';

    close.addEventListener("click", function closeModal(indice) {
        if(newModalElement.style.display === "block") {
            newModalElement.remove();
            console.log(newModalElement);
        }else {
            newModalElement.style.display = "block";
        };
    });


    const h1TittleElement = document.createElement('h1');
    h1TittleElement.textContent = 'Servidor do Banco de Dados';


    const tableElement = document.createElement('table');
    tableElement.className = "table";

    mainElement.appendChild(newModalElement);
    newModalElement.appendChild(close)
    newModalElement.appendChild(h1TittleElement);
    newModalElement.appendChild(tableElement);
       

    //ERROR
    //sistema[indice] - estou acessando minha variavel que contem o JSON, dentro dele tem o meu array com os objetos do json 1*parametro sera o indice por conta dos itens, acessei ''details''
    sistema[indice].details.forEach(details => {
        const trElement = document.createElement('tr');

        trElement.insertAdjacentHTML('beforeend', `<td>${details.key}</td>`);
        trElement.insertAdjacentHTML('beforeend', `<td>${details.value}</td>`);

        tableElement.appendChild(trElement);
    });

    const h1TittleElement1 = document.createElement('h1');
    h1TittleElement1.textContent = 'Servidor da Aplicação';
    newModalElement.appendChild(h1TittleElement1)

    
    const tableElement1 = document.createElement('table');
    tableElement1.className = "table";

    newModalElement.appendChild(tableElement1)

    sistema[indice].detailserve.forEach(details => {
            
        const trElement = document.createElement('tr');

        trElement.insertAdjacentHTML('beforeend', `<td>${details.key}</td>`);
        trElement.insertAdjacentHTML('beforeend', `<td>${details.value}</td>`);

        tableElement1.appendChild(trElement);
    });

    const h1TittleElement2 = document.createElement('h1');
    h1TittleElement2.textContent = 'Banco de Dados';
    newModalElement.appendChild(h1TittleElement2)

    
    const tableElement2 = document.createElement('table');
    tableElement2.className = "table";

    newModalElement.appendChild(tableElement2)

    sistema[indice].bancodados.forEach(details => {
            
        const trElement = document.createElement('tr');

        trElement.insertAdjacentHTML('beforeend', `<td>${details.key}</td>`);
        trElement.insertAdjacentHTML('beforeend', `<td>${details.value}</td>`);

        tableElement2.appendChild(trElement);
    });
  

    const h1TittleElement3 = document.createElement('h1');
    h1TittleElement3.textContent = 'Aplicação';
    newModalElement.appendChild(h1TittleElement3)

    const tableElement3 = document.createElement('table');
    tableElement3.className = "table";

    newModalElement.appendChild(tableElement3)

    sistema[indice].application.forEach(details => {
            
        const trElement = document.createElement('tr');

        trElement.insertAdjacentHTML('beforeend', `<td>${details.key}</td>`);
        trElement.insertAdjacentHTML('beforeend', `<td>${details.value}</td>`);

        tableElement3.appendChild(trElement);
    });

    const h1TittleElement4 = document.createElement('h1');
    h1TittleElement4.textContent = 'Responsável';
    newModalElement.appendChild(h1TittleElement4)

    const tableElement4 = document.createElement('table');
    tableElement4.className = "table";

    newModalElement.appendChild(tableElement4)

    sistema[indice].responsaveis.forEach(details => {

        const trElement = document.createElement('tr');

        trElement.insertAdjacentHTML('beforeend', `<td>${details.key}</td>`);
        trElement.insertAdjacentHTML('beforeend', `<td>${details.value}</td>`);

        tableElement4.appendChild(trElement);
    });


    ////codigo novo a ser adicionado

   sistema.forEach( (system) => {
    system.forEach( () => {

    })

    })
}

const btnScrollToTop = document.getElementById("btnscrollToTop");

btnScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
function bottomBtnScroll() {
    if (window.scrollY === 0) {
        btnScrollToTop.style.display = 'none';
    }else {
        btnScrollToTop.style.display = 'block';
    }
}
window.addEventListener('scroll', bottomBtnScroll);





