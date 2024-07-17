let menuIcon = document.queryselector('#menu-icon');
let navbar = document.queryselector('.navbar');
let sections= document.queryselectorAll('section');
let navLinks= document.queryselectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        

        if(top>= offset && top<offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

