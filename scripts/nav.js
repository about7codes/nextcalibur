const toggle = document.getElementById('toggle');


// Update body styles func

function onChange(){
    if(toggle.checked){
        document.body.style.position = 'fixed'
    }else{
        document.body.style.position = 'static'
    }
}


// Event listeners

toggle.addEventListener('change', onChange);