function bukaHalamanBaru(){
    window.open('aryaAdd.html','_blank');
}

const inputNama = document.querySelector('.inp-nama')
const inputSch = document.querySelector('.inp-sch')
const tanggal = document.querySelector("#tanggal")
const button = document.querySelector('.btn-click')
const nameTalentTxt = document.querySelector('.name-talent')
const jnsLayananTxt = document.querySelector('.jns-layanan')
const tglTxt = document.querySelector('.tgl')

button.addEventListener('click', () => {
    nameTalentTxt.textContent = inputNama.options[inputNama.selectedIndex].text;
    jnsLayananTxt.textContent = inputSch.options[inputSch.selectedIndex].text;
    tglTxt.textContent = tanggal.value;
});

function newtab(){
    window.open('index.html')
}
