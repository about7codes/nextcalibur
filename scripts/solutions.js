const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
const introText = document.getElementById('intro-text')


function changeText(){
    if(tabs[0].classList.contains('select')){
        introText.innerHTML = 'Opening new doors for success';
    }else if(tabs[1].classList.contains('select')){
        introText.innerHTML = 'Simple Solutions for Complex Connections';
    }else{
        introText.innerHTML = 'Expanding Possibilities.';
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => tabContent.classList.remove('select'))
        tabs.forEach(tab => {
            tab.classList.remove('select')
        })
        tab.classList.add('select')
        target.classList.add('select')

        changeText();
    })


})

