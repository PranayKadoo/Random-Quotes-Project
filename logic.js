function randomquote(){
    let quote=[
       " “By plucking her petals, you do not gather the beauty of the flower.” – Rabindranath Tagore",
        "“If you are wealthy, be humble. Plants bend when they bear fruit.” – Sai Baba",
        "“To keep your mind and nature cleansed of impurities, make a hut for your critics in your backyard and keep them close.” – Kabir",
        "“Devotion is that which generates knowledge; knowledge is that which fashions freedom.” – Tulsidas",
        "“Man needs his difficulties because they are necessary to enjoy success.” – A.P.J. Abdul Kalam"
    ];
    let index = Math.floor(Math.random() * quote.length);
    // let lines = document.getElementById("lines");
    // lines.value = quote[index];
    console.log(quote[index]);
//    quote[index] = document.querySelector("#lines").innerHTML;
    document.getElementById("lines").textContent = quote[index];
}