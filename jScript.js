
        var arr = [];
        let i = null;
        let rowPicker=null;
        const lista = document.getElementById("lista");
        const form = document.getElementById("form")
        const inputName = document.getElementById("name");
        const inputLastName= document.getElementById("lastName");
        const inputEmail= document.getElementById("email");
        const inputTelefono= document.getElementById("telefono");
        const btnSubmit= document.getElementById("submit");
        const btnReset = document.getElementById("reset")


        


        
        
   
        function getData(){
            var row = localStorage.getItem("localData");
            if(row !== null){
            arr = JSON.parse(row)
            
        }
    }

        // function setOnTableData()
        // {
        //     arr.forEach(entrada => {
        //         var newRow = lista.insertRow(-1);
        //         newRow.setAttribute("class", "col")

        //             var insertName = newRow.insertCell(0);
        //             insertName.setAttribute("class", "cell")
        //             var insertLastName= newRow.insertCell(1);
        //             insertLastName.setAttribute("class", "cell")
        //             var insertEmail = newRow.insertCell(2);
        //             insertEmail.setAttribute("class", "cell")
        //             var insertTel = newRow.insertCell(3);
        //             insertTel.setAttribute("class", "cell")


        //                     //boton Eliminar
        //             var buttonDelete = document.createElement("button");
        //             buttonDelete.setAttribute("onclick", "deleteRow(this)")
        //             buttonDelete.setAttribute("class", "btn btn-danger")
        //             buttonDelete.innerHTML = "Eliminar"

        //             //boton Modificar
        //             var buttonEdit =  document.createElement("button");
        //             buttonEdit.setAttribute("onclick", "editRowValues(this)")
        //             buttonEdit.setAttribute("class", "btn btn-warning");
        //             buttonEdit.setAttribute("data-bs-toggle", "modal");
        //             buttonEdit.setAttribute("data-bs-target", "#staticBackdrop")
        //             buttonEdit.innerHTML= "Modificar"
        //             var insertButtons = newRow.insertCell(4)
        //             insertButtons.setAttribute("class", "cell")

        //             //pegar los botones en la celda
        //             insertButtons.append(buttonDelete, buttonEdit);


        //             //insertar la informacion en la celdas
        //                 insertName.innerHTML= entrada.name;
        //                 insertLastName.innerHTML=entrada.lastName;
        //                 insertEmail.innerHTML=entrada.email;
        //                 insertTel.innerHTML=entrada.tel;
                 
        //     });
            


        // }

        function addDataOnLocalStorage(){
            arr.push({
                id: arr.length,
                name:inputName.value,
                lastName:inputLastName.value,
                email:inputEmail.value,
                tel:inputTelefono.value
            })


            localStorage.setItem("localData", JSON.stringify(arr))
            resetTableValues()
            btnSubmit.setAttribute("value", "submit") 
        }
      
        // function addRow() {
           
        //     //crear la columna y introducir las celdas;
        //     var newRow = lista.insertRow(-1);
        //     newRow.setAttribute("class", "col")
        //     var insertName = newRow.insertCell(0);
        //     insertName.setAttribute("class", "cell")
        //     var insertLastName= newRow.insertCell(1);
        //     insertLastName.setAttribute("class", "cell")
        //     var insertEmail = newRow.insertCell(2);
        //     insertEmail.setAttribute("class", "cell")
        //     var insertTel = newRow.insertCell(3);
        //     insertTel.setAttribute("class", "cell")
            

        //     //crear los botones y asignarlos a una celda

        //     //boton Eliminar
        //     var buttonDelete = document.createElement("button");
        //     buttonDelete.setAttribute("onclick", "deleteRow(this)")
        //     buttonDelete.setAttribute("class", "buttonDelete")
        //     buttonDelete.innerHTML = "Eliminar"

        //     //boton Modificar
        //     var buttonEdit =  document.createElement("button");
        //     buttonEdit.setAttribute("onclick", "editRowValues(this)" )
        //     buttonEdit.setAttribute("class", "buttonEdit")
        //     buttonEdit.innerHTML= "Modificar"
        //     var insertButtons = newRow.insertCell(4)
        //     insertButtons.setAttribute("class", "cell")
        //     //pegar los botones en la celda
        //     insertButtons.append(buttonDelete, buttonEdit);
           

        //     //insertar la informacion en la celdas
            
        //     insertName.innerHTML= inputName.value;
        //     insertLastName.innerHTML=inputLastName.value;
        //     insertEmail.innerHTML=inputEmail.value;
        //     insertTel.innerHTML=inputTelefono.value;

        //     //Subir la data en local storage
        //     addDataOnLocalStorage()
           
        //     //
        //     resetTableValues()

        //     btnSubmit.setAttribute("value", "submit") 
        // }

        function resetTableValues(){
            
            inputName.value="";
            inputLastName.value="";
            inputEmail.value="";
            inputTelefono.value="";
        }

        function deleteRow(row) {
            var index = getRowIndex(row)
            var position = parseInt(index.cells[0].innerHTML)
            index.parentNode.removeChild(index)           
            arr.splice(position,1)
            localStorage.setItem("localData", JSON.stringify(arr))
        }

        
        function editRowValues(row){
            var index = getRowIndex(row)
            var position = parseInt(index.cells[0].innerHTML)
         

            i=position
            //Jala la informacion de LC
           
            var name = arr[position].name
            var lname = arr[position].lastName
            var email = arr[position].email
            var tel = arr[position].tel

            inputName.value=name;
            inputLastName.value=lname;
            inputEmail.value=email;
            inputTelefono.value=tel;

            //Cambia el valor del boton y cambiarle el onclick
            btnSubmit.setAttribute("value", "Guardar")
            form.setAttribute("onsubmit", "editRowOnLocal(i)")
            
            btnReset.setAttribute("value" , "Cancelar")  
        }   
 
        
        function editRowOnLocal(i){
            
           
            var newRow =`{"id":"${i}","name":"${inputName.value}", "lastName":"${inputLastName.value}", "email":"${inputEmail.value}", "tel":"${inputTelefono.value}"}`
            var objt = JSON.parse(newRow)
           
            
            arr.splice(i, 1, objt)   
            localStorage.setItem("localData", JSON.stringify(arr))   
            resetear();     
        }


        function resetear()
        {
            form.setAttribute("onsubmit", "addRow()")
            btnReset.setAttribute("value" , "Reset")
        }
        


        function getRowIndex(row){
            var index=row.parentNode.parentNode
            
            return index;
        }
    
