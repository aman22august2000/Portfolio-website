console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='Inline'
        document.querySelector('.cross').style.display ='none'
    }
    else{
        document.querySelector('.ham').style.display ='none'
        document.querySelector('.cross').style.display ='Inline'               
    }
})