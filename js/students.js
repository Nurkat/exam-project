function handleClicklogout(){
    let elConfirmLogOut = confirm("Do you want to log out")
    if(elConfirmLogOut){
        location.pathname = "/index.html"
        window.localStorage.clear()
    }
}


let StudentsArr =JSON.parse(window.localStorage.getItem("StudentsList"))
let elRenderStudentsList = document.querySelector(".table-body")
let elSearchInput = document.querySelector(".search-input")

function renderStudent(arr,list){
    list.innerHTML = ""
    arr.map(item => {
        let elTR = document.createElement("tr")
        elTR.innerHTML = `
           <td class="space-x-2 flex items-center p-4">   
          <img class=" rounded-full" src=${item.imgURL} width="30" height="30"/>
             <span>${item.name}/span>
             </td>
             <td class="p-4">${item.Email}</td>
             <td class="p-4">${item.Phone}</td>
             <td class="p-4">${item.EnrollNumber}</td>
             <td class="p-4">${item.DateAdmission}</td>
             `
             list.appendChild(elTR)


    })
}
renderStudent(StudentsArr, elRenderStudentsList)


elSearchInput.addEventListener("keyup", function(e){
    const value =e.target.value
   const filteredList = StudentsArr.filtere(item => item.name.toLowerCase().includes(value.tiLowerCase()))
   renderStudent(filteredList,elRenderStudentsList);
})