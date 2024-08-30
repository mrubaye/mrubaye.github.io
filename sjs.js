  $(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var contacts = {
      "bk":"https://forms.gle/KRM2aEa9aGgZUeSK8",
      "gf":"https://forms.gle/muE4Q8Z8tYbFiKQS9",
      "nd": "https://forms.gle/LeNKZ8akKHfWsgeS9",
      "ks": "https://forms.gle/CGTKzqaofMVGX54QA",
      "ma": "https://forms.gle/BMkz5kv9p9gaUdn47",
      "sr":"https://forms.gle/y5WXDSfuo4pzwjTs5",
      "mb":"https://forms.gle/VGKujcjwehwd4aBR9",
      "hr":"https://forms.gle/emLg86PNJDs23HL56",
      "lr":"https://forms.gle/bYpSsWfXP47CmBis7",
      "gc":"https://forms.gle/TeQKB4Tc5rz1bavB6",
      "sc":"https://forms.gle/p2oUtuuoA96JRq6fA"
    }

    for (i in contacts) {
      console.log(i);
      if (urlParams.has(i)) {
          console.log(urlParams.has(i));
          $(".button").attr("href", `${contacts[i]}`);
      } 
    }
  });
