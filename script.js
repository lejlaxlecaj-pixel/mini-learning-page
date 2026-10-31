function kontrolloPergjigjen() {
    let pergjigjja = document.querySelector('input[name="pergjigjja"]:checked');

    let rezultati = document.getElementById("rezultati");

    if (pergjigjja && pergjigjja.value === "a") {
        rezultati.textContent = "Saktë!";
    } else {
        rezultati.textContent = "Provo përsëri!";
    }
}