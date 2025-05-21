// template_ckt4sz6
// service_61452yq
// 02mUGB3qLcR-1DAN-


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
     .sendForm(
        'service_61452yq',
        'template_ckt4sz6',
        event.target,
        '02mUGB3qLcR-1DAN-'
     
    ).then(() => {
        loading.classList.remove("modal__overlay--visible") 
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on iamnytla@gmail.com"
        )
    })
    setTimeout(() => {
        
    }, 1000)
}

let isModalOpen = false

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}