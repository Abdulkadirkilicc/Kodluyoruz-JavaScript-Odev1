let ad = prompt("Lütfen adınızı girin: "); // İsim girmenizi isteyen prompt
let selamlama = document.querySelector("#myName"); // DOM öğemizi seçiyoruz
let govde = document.querySelector(".bg-dark"); // Eğer isim girilmezse düzenlemek istediğimiz DOM öğesini seçtik

// İsim girilmediği durumda görüntülenecek DOM öğesine stil veriyoruz
govde.style.color = "orange";
govde.style.textAlign = "center";
govde.style.fontSize = "20px";

selamlama.innerHTML = `${ad}`; // DOM öğesinin değerini prompt'a girilen değere eşitliyoruz.

if (!ad) {
    govde.innerHTML= "Lütfen isim kısmını boş bırakmayın"; // İsim girilmediği takdirde body öğesini bir uyarı yazısıyla değiştiriyoruz
}

function guncelSaat() { 
    // DOM öğesini seçiyoruz
    let saat = document.querySelector("#myClock"); 
    let bugun = new Date (); // Saati ayarlamak için
    // Varsayılan olarak günler sayı olarak geliyor, bu yüzden yeni bir dizi oluşturdum
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
    let gun = gunler[bugun.getDay()]; // Oluşturduğumuz diziden günü çekiyoruz
    let zaman = bugun.getHours() + ":" + bugun.getMinutes() + ":" + bugun.getSeconds() + ` ${gun}`; // Saat, dakika, saniye, gün şeklinde ayarlıyoruz

    let guncelZaman = `${zaman}`;
    saat.innerHTML = guncelZaman; // suAnkiZaman değerini HTML'e yazdırıyoruz

    // Dinamik saniye bilgisi için
    setTimeout(guncelSaat, 1000); 
}

    guncelSaat(); // Fonksiyonu çağırıyoruz


