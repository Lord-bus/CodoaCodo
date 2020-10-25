function validar(formulario)
{
let usuario = formulario.usuario.value;
let contraseña = formulario.password.value;
//defino la variable a buscar
let buscar = "@";
// guardo la posición si la encuentro
let posicion = usuario.indexOf(buscar);
// pregunto el @ está en alguna posición
if (posicion !== -1){
    alert("usuario correcto");
  }else{
      alert("Falta el @ en el Usuario");
      }
 return  true;
}
