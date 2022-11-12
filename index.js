const urlApi = "https://api.memegen.link/templates/";

    try {
        const CargarApi = async () => {
            let lista = await fetch (urlApi);
            console.log("respuesta status: ",lista["status"]);
            if(lista.status === 200){
                const json = await lista.json();
                const drpdwn = document.getElementById("drpdwn");
                let textoA = "";
                json.forEach(element => {
                    console.log(element.blank);
                    textoA = `<a class="dropdown-item" src="${element.blank}" href="#">${element.name}</a>`;
                    console.log(textoA);
                    const A = document.createElement("a");
                    A.innerHTML = `<img width="40" height="40" src="${element.blank}">${element.name}`
                    A.setAttribute("class","dropdown-item");
                    A.setAttribute("href","#");
                    document.getElementById("drpdwn").appendChild(A);




                });
            }}
        CargarApi();
        }        
        catch (error) {
        console.log("error")};

        

        