const loadDepartments =()=>{
    fetch ("https://be-api-for-hms.onrender.com/department/")
    .then (res=>res.json())
    .then(data=>displayDepartments(data))
}

const displayDepartments=(departments)=>{
    departments.forEach((department)=>{
    console.log(departments)
    const parent = document.getElementById("departments");
    const div = document.createElement("div");
    div.classList.add("department_card");
    div.innerHTML=`
        <img src="${department.
            icon_url
            }" alt="NOT FOUND" srcset="">
        <p class="dept_card">${department.name}</p>
        <p class ="dept_des">${department.description}</p>
    `;
    parent.appendChild(div)
   })
}
loadDepartments()