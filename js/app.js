

document.getElementById("txtBtn").addEventListener('click', cargarTXT);


document.getElementById('jsonBtn').addEventListener('click', cargarJson);

//lee el archivo .txt
function cargarTXT(){
    fetch('datos.txt')
    //primer then encuentra los datos (para conectarce)
        .then(function(res){
            return res.text();
        })
        //el segundo then ya tiene los datos t los imprime (o lo q sea)
        .then(function(empleados){
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados;
        })
        //si no lee muestra el error con catch
        .catch(function(error){
            console.log(error);
        })
}

//leer JSon local

function cargarJson(){
    fetch('empleados.json')
    //leer el json (conectar)
        .then(function(res){
            return res.json();
        })
        //imprimir el json
        .then(function(data){
            console.log(data);
            let html = '';
            data.forEach(function(empleado){
                html += `
                    <li>${empleado.nombre} : ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML=html;
        })
}