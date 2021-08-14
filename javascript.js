var nav__item = document.querySelectorAll('.nav__item');
console.log(nav__item);
let removeActive = () =>{
    nav__item.forEach((nav) =>{
        nav.classList.remove('active');
    })
}

nav__item.forEach(nav => {
    nav.addEventListener('click', () => {
        if(nav.classList.contains("active"))
            return;
        else
        {
            removeActive();
            nav.classList.add("active");
        }
    })
});

var CurrentCount = 0;
let body = document.querySelector('#body');
let checkbox = document.querySelector('#checkbox');
let favico_active = document.querySelector('#favico_active');
let toggle_text = document.querySelector('#toggle_text');
let imgage_1 = document.querySelector('#imgage_1');
let imgage_2 = document.querySelector('#imgage_2');
let imgage_3 = document.querySelector('#imgage_3');
let bar = document.querySelector('#bar');
let nav = document.querySelector('#nav');

var DarkAndLightTheme = (isDarkThem) =>{
    isDarkThem ? body.setAttribute('data-theme', 'dark') : body.setAttribute('data-theme', 'light');
    isDarkThem ? favico_active.setAttribute('class', 'fas fa-moon') :  favico_active.setAttribute('class', 'fas fa-sun'); 
    toggle_text.innerHTML = isDarkThem ? 'Dark Mode' : 'Light Mode';
    isDarkThem ? imgage_1.setAttribute('src', "undraw_Virtua_1_dark.svg") :  imgage_1.setAttribute('src', "undraw_Virtua_1.svg");
    isDarkThem ? imgage_2.setAttribute('src', "undraw_Virtua_2_dark.svg") : imgage_2.setAttribute('src', "undraw_Virtua_2.svg");
    isDarkThem ? imgage_3.setAttribute('src', "undraw_Virtua_3_dark.svg") : imgage_3.setAttribute('src', "undraw_Virtua_3.svg");
    isDarkThem ? checkbox.checked = true : checkbox.checked = false;
}

checkbox.addEventListener('change', () =>{
    if(checkbox.checked === true)
    {
        localStorage.setItem('theme', 'dark'); //  localStorage.setItem('key', 'value');
        DarkAndLightTheme(true);
    }
    else
    {
        localStorage.setItem('theme', 'light'); //  localStorage.setItem('key', 'value');
        DarkAndLightTheme(false);
    }
});

let KiemTraTheme = () =>{
    localStorage.getItem('theme') === 'dark' ? DarkAndLightTheme(true) : DarkAndLightTheme(false);
}

var CurrentCount_Bar = 0;
bar.addEventListener('click', () =>{
    if(CurrentCount_Bar == 0)
    {
        nav.setAttribute('style', 'display:block');
        CurrentCount_Bar = 1;
    }
    else
    {
        nav.setAttribute('style', 'display:none');
        CurrentCount_Bar = 0;
    }
})

KiemTraTheme();
