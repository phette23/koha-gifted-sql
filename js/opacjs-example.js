// in reality you'd want an `if` condition to only run on bib detail pages
// get biblionumber from URL
let id = new URLSearchParams(location.search).get("biblionumber")
$.get(`https://koha.library.org/cgi-bin/koha/svc/report?id=42&sql_params=${id}`, (data) => {
    if (data.length) $('.record').append(`<span class="results_summary"><span class="label">OCLC Holdings: </span> ${data[0][0]}</span>`)
})
