const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
const introText = document.getElementById('intro-text')


function changeText(){
    if(tabs[0].classList.contains('select')){
        introText.innerHTML = 'Integration of information, design, and technology';
    }else if(tabs[1].classList.contains('select')){
        introText.innerHTML = 'High Performance Delivered';
    }else{
        introText.innerHTML = 'Our Passion is business efficiency';
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

