const teamFilterInput = document.getElementById('team-filter');
const championFilterCheckbox = document.getElementById('champion-filter');
const leagueTable = document.querySelector('.league-table');

function filterByTeam() {
    let input = document.getElementById("team-filter");
    let word = input.value.toLowerCase();
    let rows = leagueTable.querySelectorAll("tbody tr");
    Filter(rows, 0, word); 
}

function filterByChampionship() {
    const showOnlyChampions = championFilterCheckbox.checked;
    const rows = leagueTable.querySelectorAll("tbody tr");
    for (let i = 0; i < rows.length; i++) {
        const championshipsCell = rows[i].getElementsByTagName("td")[1];
        const championships = parseInt(championshipsCell.innerText);
        if (showOnlyChampions && championships === 0) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}



function Filter(rows, column, word) {
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[column];
        let txtValue = td.innerText.toLowerCase();
        if (txtValue.indexOf(word) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
