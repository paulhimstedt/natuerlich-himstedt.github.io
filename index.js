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