

const datos = { opcion : '', cant: '1' };
const opcion = document.querySelector('#opcion');
const cant = document.querySelector('#cant');
const resum = document.querySelector('#resum');



opcion.addEventListener('input',function(e){
    datos.opcion = e.target.value;
});

cant.addEventListener('input',function(e){
    datos.cant = e.target.value;

});



function calcTotal(cantidad,opcion){
    if (opcion == 'Estudiante'){
        total = (200*cantidad);
    }
    else if (opcion == 'Trainee'){
        total = (100*cantidad);
    }
    else if (opcion == 'Junior'){
        total = (170*cantidad);
    }
    else if (opcion == 'General'){
        total = (200*cantidad);
    }
    else {
        total = 0;
    };
    return total
}


function verResumen(){
    console.log(datos.cant,datos.opcion)
    console.log(calcTotal(datos.cant,datos.opcion));
    resum.textContent = 'Resumen total: $' + calcTotal(datos.cant,datos.opcion);
    
}

function borrarDatos() {
    location.reload();
}