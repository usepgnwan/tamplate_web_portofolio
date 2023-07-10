const CACHE_KEY = 'comentPortofolio';

function checkForStorage() {
    return typeof(Storage) !== "undefined"
}

function simpanHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data); // tambahkan komen
        if (historyData.length > 6) {
            historyData.pop(); //batasi
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
} //simpan 


function tampilkanHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
} //mendapatan data dari localstorega


function deleteCom() {
    const hapus = confirm('yakin hapus komenya?');
    if (hapus) {

        localStorage.removeItem(CACHE_KEY);
        renderHistory();
        alert('berhasil dihapus !');
    }
}
//Lalu yang terakhir, kita tambahkan fungsi untuk merender data riwayat kalkulasi pada tabel HTML. 
function renderHistory() {
    const historyData = tampilkanHistory();
    let historyList = document.querySelector(".item-coment");

    let cNama = document.querySelector('#nama');
    let cComments = document.querySelector('#pesan');
    cNama.value = '';
    cComments.value = '';

    // selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
    historyList.innerHTML = "";


    for (let history of historyData) {
        let row = document.createElement('p');
        row.innerHTML = " Nama: " + history.namaNya + "<br>" + "Komen: " + history.komeNnya + "<br> <a href='#' onclick='deleteCom()'> delete </a>";
        historyList.appendChild(row);
    }
}
renderHistory();

$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});