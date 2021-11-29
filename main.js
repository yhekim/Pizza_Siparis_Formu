const btnHesapla = document.getElementById("btnHesapla");
var pizzaFiyati, checkbox, girilenKod, i, liste, secenek, eklenenler, malzeme;
const indirimKodu = "PROMO";



//console.log(btnHesapla);
document.addEventListener("change", () => pizzaHesapla());

const pizzaHesapla = () => {
    liste = document.getElementById("listePizza");
    secenek = liste.options[liste.selectedIndex].value;
    //console.log(secenek);
    pizzaFiyati = Number(secenek);
    checkbox = document.getElementsByName("grupEkMalzeme");
    document.querySelectorAll("#listeEkSecimler").forEach((option) => option.innerText = "")

    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            pizzaFiyati = pizzaFiyati + 2;
            malzeme = checkbox[i].value;

            eklenenler = document.createElement("option");
            document.getElementById("listeEkSecimler").options.add(eklenenler);
            eklenenler.innerText += malzeme;

        }


    }

    girilenIndirimKodu = document.getElementById("txtIndirimKodu").value.toLowerCase();

    if (document.getElementById("kodTrue").checked && indirimKodu !== "") {
        if (indirimKodu.toLocaleLowerCase() == girilenIndirimKodu) {
            pizzaFiyati = pizzaFiyati - 5;
            document.getElementById("txtIndirimKodu").value = "";

        } else if ((indirimKodu.toLocaleLowerCase() !== girilenIndirimKodu)) {

            document.getElementById("dogrulama").innerHTML = "Lütfen Geçerli Bir Kod Giriniz";


        }

    }



    document.getElementById("sonuc").innerHTML = "Ödenecek Tutar :" + pizzaFiyati;

}

var grupIndirim = document.getElementById("checkedIndirim")
console.log(grupIndirim)
grupIndirim.addEventListener("change", (e) => {
    if (e.target.value == "Aktif") {
        document.getElementById("txtIndirimKodu").disabled = false;

    } else {
        document.getElementById("txtIndirimKodu").value = "";
        document.getElementById("txtIndirimKodu").disabled = true;

    }
})