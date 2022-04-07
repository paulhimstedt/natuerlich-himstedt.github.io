function section_one_more() {
    document.getElementById("moresection1_p").innerHTML = "<p class='py-2 text-2xl'>addd itional info 1 natürlich“ tauchen im</p>";
    document.getElementById("moresection1").setAttribute('onclick', 'section_one_less()')
    document.getElementById("moresection1").innerHTML = "Einklappen";
}

function section_one_less() {
    document.getElementById("moresection1_p").innerHTML = "";
    document.getElementById("moresection1").innerHTML = "Mehr";
    document.getElementById("moresection1").setAttribute('onclick', 'section_one_more()')
}