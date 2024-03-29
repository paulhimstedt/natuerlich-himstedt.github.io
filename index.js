var childs = document.getElementById('therapie_tab').children;
var therapie_childs = document.getElementById('therapie_container').children;
var nav_therapie_childs = document.getElementById('nav_therapien').children;;
var manuelleThearpien_0 = document.getElementById("manuelleThearpien_0")
var manuelleThearpien_1 = document.getElementById("manuelleThearpien_1")
var manuelleThearpien_2 = document.getElementById("manuelleThearpien_2")
var manuelleThearpien_3 = document.getElementById("manuelleThearpien_3")
for (var i = 0; childs[i]; i++) {
    childs[i].onclick = function() {
        switch (this.innerHTML) {
            case "Entgiftungsmassage":
                clear_active_tabs()
                manuelleThearpien_0.classList.remove("hidden")
                this.classList.add("tab-active")
                break;
            case "Dorn-Breuss-Therapie":
                clear_active_tabs()
                manuelleThearpien_1.classList.remove("hidden")
                this.classList.add("tab-active")
                break;
            case "Lymphdrainage":
                clear_active_tabs()
                manuelleThearpien_2.classList.remove("hidden")
                this.classList.add("tab-active")
                break;
            case "Bindegewebsmassage":
                clear_active_tabs()
                manuelleThearpien_3.classList.remove("hidden")
                this.classList.add("tab-active")
                break;
        }
    }
}

function therapien_topnav0() {
    clear_active_tabs()
    manuelleThearpien_0.classList.remove("hidden")
    childs[0].classList.add("tab-active")
}

function therapien_topnav1() {
    clear_active_tabs()
    manuelleThearpien_1.classList.remove("hidden")
    childs[1].classList.add("tab-active")
}

function therapien_topnav2() {
    clear_active_tabs()
    manuelleThearpien_2.classList.remove("hidden")
    childs[2].classList.add("tab-active")
}

function therapien_topnav3() {
    clear_active_tabs()
    manuelleThearpien_3.classList.remove("hidden")
    childs[3].classList.add("tab-active")
}

function clear_active_tabs() {
    for (var i = 0; childs[i]; i++) {
        childs[i].classList.remove("tab-active")
        therapie_childs[i].classList.add("hidden")
    }
}

var fadeIndicator = 0
const sections = document.querySelectorAll("section")
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {;
        if (entry.isIntersecting) {
            fadeIndicator++;
            if (fadeIndicator % 2 == 0) {
                entry.target.classList.add("fadeInLeft");
            } else {
                entry.target.classList.add("fadeInRight");

            }
        }
    });
});

console.log(sections)
sections.forEach(section => {
    observer2.observe(section);
});


function normal() {
    document.getElementById("section0").className = "hero bg-transparent min-h-screen"
    document.getElementById("schreibkurs-card").className = "card w-96 bg-base-100 shadow-xl image-full"
}

function mobile() {
    document.getElementById("section0").className = "hero bg-transparent"
    document.getElementById("schreibkurs-card").className = "card lg:card-side bg-base-100 shadow-xl image-full"
}

function fullscreenLandingPage() {
    if (window.innerWidth <= 1000) {
        mobile()
    } else {
        normal()
    }
}
window.onload = fullscreenLandingPage;
fullscreenLandingPage();

function section_one_more() {
    document.getElementById("moresection1_p").style.display = "flex";
    document.getElementById("moresection1").setAttribute('onclick', 'section_one_less()')
    document.getElementById("moresection1").innerHTML = "Einklappen";
}

function section_one_less() {
    document.getElementById("moresection1_p").style.display = "none"
    document.getElementById("moresection1").innerHTML = "Mehr";
    document.getElementById("moresection1").setAttribute('onclick', 'section_one_more()')
}

function section_two_more() {
    document.getElementById("moresection2_p").style.display = "flex";
    document.getElementById("moresection2").setAttribute('onclick', 'section_two_less()')
    document.getElementById("moresection2").innerHTML = "Einklappen";
}

function section_two_less() {
    document.getElementById("moresection2_p").style.display = "none"
    document.getElementById("moresection2").innerHTML = "Mehr";
    document.getElementById("moresection2").setAttribute('onclick', 'section_two_more()')
}

function section_three_more() {
    document.getElementById("moresection3_p").style.display = "flex"
    document.getElementById("moresection3").setAttribute('onclick', 'section_three_less()')
    document.getElementById("moresection3").innerHTML = "Einklappen";
}

function section_three_less() {
    document.getElementById("moresection3_p").style.display = "none"
    document.getElementById("moresection3").innerHTML = "Mehr";
    document.getElementById("moresection3").setAttribute('onclick', 'section_three_more()')
}

function section_four_more() {
    document.getElementById("moresection4_p").style.display = "flex"
    document.getElementById("moresection4").setAttribute('onclick', 'section_four_less()')
    document.getElementById("moresection4").innerHTML = "Einklappen";
}

function section_four_less() {
    document.getElementById("moresection4_p").style.display = "none"
    document.getElementById("moresection4").innerHTML = "Mehr";
    document.getElementById("moresection4").setAttribute('onclick', 'section_four_more()')
}

function section_five_more() {
    document.getElementById("moresection5_p").style.display = "flex"
    document.getElementById("moresection5").setAttribute('onclick', 'section_five_less()')
    document.getElementById("moresection5").innerHTML = "Einklappen";
}

function section_five_less() {
    document.getElementById("moresection5_p").style.display = "none"
    document.getElementById("moresection5").innerHTML = "Mehr";
    document.getElementById("moresection5").setAttribute('onclick', 'section_five_more()')
}

function section_six_more() {
    document.getElementById("moresection6_p").style.display = "flex"
    document.getElementById("moresection6").setAttribute('onclick', 'section_six_less()')
    document.getElementById("moresection6").innerHTML = "Einklappen";
}

function section_six_less() {
    document.getElementById("moresection6_p").style.display = "none"
    document.getElementById("moresection6").innerHTML = "Mehr";
    document.getElementById("moresection6").setAttribute('onclick', 'section_six_more()')
}