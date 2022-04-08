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

function section_two_more() {
    document.getElementById("moresection2_p").innerHTML = '<div class="overflow-x-auto"> <table class="table w-full"> <!-- head --> <thead> <tr> <th></th> <th>Wellnessmassagen</th> <th>30 min</th> <th>60 min</th> </tr> </thead> <tbody> <!-- row 1 --> <tr> <th>1</th> <td>Entspannungsmassage</td> <td>25 €</td> <td>50 €</td> </tr> <!-- row 2 --> <tr> <th>2</th> <td>Fußmassage</td> <td>22 €</td> <td>35 €</td> </tr> <!-- row 3 --> <tr> <th>3</th> <td>Ohrkerzen</td> <td>22 €</td> <td></td> </tr> <!-- row 4 --> <tr> <th>4</th> <td>Ganzkörpermassage</td> <td></td> <td>50 €</td> </tr> <!-- row 5 --> <tr> <th>5</th> <td>Hot Stone Massage</td> <td></td> <td>55 €</td> </tr> <!-- row 6 --> <tr> <th>6</th> <td>Aromaölmassage</td> <td></td> <td>55 €</td> </tr> <!-- row 7 --> <tr> <th>7</th> <td>Kräuterstempelmassage</td> <td></td> <td>60 €</td> </tr> </tbody> </table> <div>';
    document.getElementById("moresection2").setAttribute('onclick', 'section_two_less()')
    document.getElementById("moresection2").innerHTML = "Einklappen";
}

function section_two_less() {
    document.getElementById("moresection2_p").innerHTML = "";
    document.getElementById("moresection2").innerHTML = "Mehr";
    document.getElementById("moresection2").setAttribute('onclick', 'section_two_more()')
}

function section_three_more() {
    document.getElementById("moresection3_p").innerHTML = "<p class='py-2 text-2xl'>addd itional info 1 natürlich“ tauchen im</p>";
    document.getElementById("moresection3").setAttribute('onclick', 'section_three_less()')
    document.getElementById("moresection3").innerHTML = "Einklappen";
}

function section_three_less() {
    document.getElementById("moresection3_p").innerHTML = "";
    document.getElementById("moresection3").innerHTML = "Mehr";
    document.getElementById("moresection3").setAttribute('onclick', 'section_three_more()')
}

function section_four_more() {
    document.getElementById("moresection4_p").innerHTML = "<p class='py-2 text-2xl'>addd itional info 1 natürlich“ tauchen im</p>";
    document.getElementById("moresection4").setAttribute('onclick', 'section_four_less()')
    document.getElementById("moresection4").innerHTML = "Einklappen";
}

function section_four_less() {
    document.getElementById("moresection4_p").innerHTML = "";
    document.getElementById("moresection4").innerHTML = "Mehr";
    document.getElementById("moresection4").setAttribute('onclick', 'section_four_more()')
}

function section_five_more() {
    document.getElementById("moresection5_p").innerHTML = "<p class='py-2 text-2xl'>addd itional info 1 natürlich“ tauchen im</p>";
    document.getElementById("moresection5").setAttribute('onclick', 'section_five_less()')
    document.getElementById("moresection5").innerHTML = "Einklappen";
}

function section_five_less() {
    document.getElementById("moresection5_p").innerHTML = "";
    document.getElementById("moresection5").innerHTML = "Mehr";
    document.getElementById("moresection5").setAttribute('onclick', 'section_five_more()')
}

function section_six_more() {
    document.getElementById("moresection6_p").innerHTML = "<p class='py-2 text-2xl'>addd itional info 1 natürlich“ tauchen im</p>";
    document.getElementById("moresection6").setAttribute('onclick', 'section_six_less()')
    document.getElementById("moresection6").innerHTML = "Einklappen";
}

function section_six_less() {
    document.getElementById("moresection6_p").innerHTML = "";
    document.getElementById("moresection6").innerHTML = "Mehr";
    document.getElementById("moresection6").setAttribute('onclick', 'section_six_more()')
}