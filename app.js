const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const hesapla = document.querySelector(".btn");
let oran = 0;
let taksit = 0;

hesapla.addEventListener("click", (e) => {
    e.preventDefault();   //eventın default davranisini engeller. (form silmek ve submit etmek)
    if (select.value === "Konut Kredisi"){
        oran = 1.29;
    }else if (select.value === "İhtiyac Kredisi") {
        oran = 1.99;
    }else if (select.value === "Arac Kredisi") {
        oran = 1.79;
    }
    if (!select.value || !vade.value || !tutar.value){
        alert("Lütfen değerleri giriniz");    // vade ve tutarın boş bırakılmasını engellemek için
    }
    const faiz = oran / 100;
    taksit = tutar.value * (faiz * ( 1 + faiz)**vade.value) / ((1+faiz)**vade.value-1);
    console.log(taksit);
    sonuclariGoster();
});

const sonuclariGoster = () => {
  const kredi = document.querySelector(".kredi");
  const vade2 = document.querySelector(".vade2");
  const faiz2 = document.querySelector(".faiz2");
  const toplam = document.querySelector(".toplam");
  const krediTipi = document.querySelector(".krediTipi");
  const taksitTutari = document.querySelector(".taksitTutari");
  kredi.innerHTML += `${tutar.value}`;
  vade2.innerHTML += `${vade.value}`;
  faiz2.innerHTML += `${oran}`;
  toplam.innerHTML += `${(vade.value*taksit).toFixed(2)} ₺`;
  taksitTutari.innerHTML += `${(taksit).toFixed(2)} ₺`;
  krediTipi.innerHTML += `${select.value}`;
}