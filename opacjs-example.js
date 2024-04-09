// run only on bib detail pages
if (window.location.pathname.match('/cgi-bin/koha/opac-detail.pl')) {
    // accompanies a report with this ID that returns the MARC 948 field for a given bib
    const reportId = 42
    // get biblionumber from URL
    const bib = new URLSearchParams(location.search).get("biblionumber")
    $.get(`https://koha.library.org/cgi-bin/koha/svc/report?id=${reportId}&sql_params=${bib}`, (data) => {
        // reports JSON is an array of arrays where child arrays are the query result rows
        if (data.length) {
            const html = `<span class="results_summary"><span class="label">OCLC Holdings: </span> ${data[ 0 ][ 0 ]}</span>`
            $('.record').append(html)
        }
    })
}
