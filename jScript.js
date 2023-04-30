
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


        function addDataOnLocalStorage(){
         getData();
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
      
     

        function resetTableValues(){
            
            inputName.value="";
            inputLastName.value="";
            inputEmail.value="";
            inputTelefono.value="";
        }

        function deleteRow(row) {
            var index = getRowIndex(row)
            var position = locateById(row)
            index.parentNode.removeChild(index)           
            arr.splice(position,1)
            
            localStorage.setItem("localData", JSON.stringify(arr))
        }
        
        function locateById(row) {
            var index = getRowIndex(row)
            var id = parseInt(index.cells[0].innerHTML)
            var location

            for (let i = 0; i < arr.length; i++) {
               if(id== arr[i].id){
                location=i
                
               } 
                
            }
            return location
        }

        
        function editRowValues(row){
            var position = locateById(row)
         

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
            
            // btnReset.setAttribute("value" , "Cancelar")  
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
    
