  $(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var contacts = {
      "bk":"https://docs.google.com/forms/d/e/1FAIpQLSeTZcAKuPyUeaeaUWZpCE2FzipNmUFoj4ruT13BJnbPHUdJXg/viewform",
      "gb":"https://docs.google.com/forms/d/e/1FAIpQLSc4-J6x_kaOcmLGKQihvw8YvX0UcSsGvkDgggUvnW5Iil-7Ig/viewform",
      "nd": "https://docs.google.com/forms/d/e/1FAIpQLSfMMy3YSrYNrsAY8wuMKY6nSSMwC9uiZ9nfiu7teVAqpja1Rg/viewform",
      "ks": "https://docs.google.com/forms/d/e/1FAIpQLSd1_xpe8rfbC3DC3VQjO9MBeLyvdstQhucxYrmWdadJ0Z6L8w/viewform",
      "ma-i": "https://docs.google.com/forms/d/e/1FAIpQLScDEhFtzGdSlyqb146QMn5LsACDzvSGuhPzI6Mxx0NqiqllJQ/viewform",
      "sr-i":"https://docs.google.com/forms/d/e/1FAIpQLSdCH_2tPfkOIeNxpbwlaIaaRGodlUgzsAZ98WxmpEJf3by7Xg/viewform",
      "mb-i":"https://docs.google.com/forms/d/e/1FAIpQLSc7zEEZE4CRdaCzcMkRlVHeRQcONXZJFru4gl7KcO561JdHCw/viewform",
      "hr-i":"https://docs.google.com/forms/d/e/1FAIpQLScvOT133j1swe973Q_C30qFtz51SU-Ra7k66hqf1SUdVB0-zg/viewform",
      "lr-i":"https://docs.google.com/forms/d/e/1FAIpQLSdO8A3osEf_qJeS64lFMC8zVnXOYNoLdAyol0TXF6b-9uqZuA/viewform",
      "gc":"https://docs.google.com/forms/d/e/1FAIpQLScj3R-RLtE0WReWUcRSQtRNw_k7HIPo_fZ8nwDQCzaXH0Aoig/viewform"
    }

    for (i in contacts) {
      console.log(i);
      if (urlParams.has(i)) {
          console.log(urlParams.has(i));
          $(".button").attr("href", `${contacts[i]}`);
      } 
    }
  });