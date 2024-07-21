function handleClicklogout(){
    let elConfirmLogOut = confirm("Do you want to log out")
    if(elConfirmLogOut){
        location.pathname = "/index.html"
        window.localStorage.clear()
    }
}


let elCreateForm = document.querySelector(".createstudent-form")
let elChangeAvatar = document.querySelector(".change-avatar")
let elUploadImg = document.querySelector(".upload-img")
let StudentsList = JSON.parse(window.localStorage.getItem("StudentsList")) || []


elChangeAvatar.addEventListener("change", function(e){
    elUploadImg.src =URL.createObjectURL(e.target.files[0])
})


elCreateForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data ={
        name:e.target.Name.value,
        email:e.target.Email.value,
        phone:e.target.Phone.value,
        enrollnumber:e.target.EnrollNumber.value,
        dataadmission:e.target.DateAdmission.value,
        imgURL: elUploadImg.src
    }
    StudentsList.push(data)
    window.localStorage.setItem("StudentsList",JSON.stringify(StudentsList))
    setTimeout(() =>{
           location.pathname = "./students.html"
    }),800
})