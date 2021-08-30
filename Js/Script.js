var nt = "img/image 6.png", bat = "img/Bat.png", Cpp = "img/Cpp.png", Vs = "img/ribbon.png", Cmm = "img/C-Sharp.png",
    U = "img/unity.png", abc = "img/ABC.png", java = "img/Java.png", p = "img/python.png", pc = "img/PC.png", js = "img/JavaScript.png";
var listProg = [
    //Мои работы
    ["Hello World", "Первая программа",       "2018", "img/prog01.jpg",   nt,  bat],
    ["Password",    "Просто пароль",          "2018", "img/Parol.png",    nt,  bat],
    ["Square",      "Просто квадрат",         "2018", "img/prog041.png",  nt,  bat],
    ["Squarex2",    "Два квадрат",            "2018", "img/prog05.jpg",   nt,  bat],
    ["Матвей",      "КМН",                    "2018", "img/prog06.jpg",   nt,  bat],
    ["Hello World", "Hello World",            "2018", "img/prog07.jpg",   Cpp,  Vs],
    ["Аквариум",    "Аквариум",               "2019", "img/Aqvarium.png", Cpp,  Vs],
    ["KNB",         "Камень-Ножницы-Бумага",  "2018", "img/KNB.png",      nt,  bat],
    ["Myosu",       "Авторская версия OSUUU", "2018", "img/Myosu.png",    nt,  bat],
    ["Unity game",  "Игра юнити",             "2019", "img/image 8.png",  U,     U],
    ["ПАРАДОКС",    "ПАРАДООКС",              "2018", "img/Парадокс.png", Cpp,  Vs],
    ["Танчики",     "Tan4iki",                "2018", "img/Tank.png",     Cpp,  Vs],
    ["Змейка",      "Моя змейка",             "2019", "img/image 10.png", js,   nt],
    ["sort.p",      "Сортировка пузырьком",   "2018", "img/og01 1.png",   abc, abc],
    ["Домик",       "Домик",                  "2018", "img/prog01 2.png", abc, abc],
    ["Tetris",      "МОЙ Tetris",             "2019", "img/image 12.png", java, nt],
    ["WebInfo",     "Webinfo",                "2020", "img/prog001.png",  p,    pc],
    ["AuxProg",     "АВТОКЛИКЕР",             "2020", "img/image 14.png", p,    pc],
];
var listLang = [
    //Языки которые я знаю
    ["img/Bat.png",        "Batch-Почти язык",                        "Знания-Среднее"      ],
    ["img/JavaScript.png", "JavaScript-Мне нравится",                 "Знания-Повехностно"  ],
    ["img/Cpp.png",        "C++-Язык Языков",                         "Знания-Повехностно"  ],
    ["img/python.png",     "Python-Питон удобный",                    "Знания-Среднее"      ],
    ["img/C-Sharp.png",    "C#-удобный и лёгкий",                     "Знания-Среднее"      ],
    ["img/ABC.png",        "Pascal-Быстрый",                          "Знания-Ниже среднего"],
    ["img/Java.png",       "Java-Хороший",                            "Знания-Поверхностно" ],
    ["img/php.png",        "PHP-НЕ удобный",                          "Знания-Плохие"       ],
];

    
var listTool = [
    //Мой инструментарий
    ["img/figma.png",              "Figma-Удобно",           "Умения-На ней я делал это сайт"    ],
    ["img/unity.png",              "Unity3D-Нормально",      "Умения-Не особо"                   ],
    ["img/photoshop-128x1281.png", "PhotoShop-Нормально",    "Умения-Нормально"                  ],
    ["img/ABC.png",                "ABC-Очень Удобно",       "Умения-Нормально"                  ],
    ["img/ribbon.png",             "WisualStudio-Удобно ",   "Умения-Не особо"                   ],
    ["img/PC.png",                 "PyCharm-Удобно ",        "Умения-Нормально"                  ],
    ["img/image 6.png",            "Notepad++-Очень удобно", "Умения-Знаю лучше чем разработчики"],
    ["img/image 24.png",           "Cinema4D-Удобно ",       "Умения-Более-мение"                ],
];


var section = document.getElementById("programs");

for(let i of listProg){
    let block = document.createElement("article");
    block.className = "program";
    section.appendChild(block);

    let bgimg = document.createElement("img");
    bgimg.className = "pr-bgimg";
    bgimg.src = i[3];   
    block.appendChild(bgimg);

    let image = document.createElement("img");
    image.className = "pr-image";
    image.src = i[3];   
    block.appendChild(image);

    let year = document.createElement("div");
    year.className = "pr-year";
    year.textContent = i[2]; 
    block.appendChild(year);

    let leng = document.createElement("img");
    leng.className = "pr-leng logo";
    leng.src = i[4];
    block.appendChild(leng);

    let tool = document.createElement("img");
    tool.className = "pr-tool logo";
    tool.src = i[5];
    block.appendChild(tool);

    let text = document.createElement("div");
    text.className = "pr-text";
    text.textContent = i[1]; 
    block.appendChild(text);

    let name = document.createElement("div");
    name.className = "pr-name";
    name.textContent = i[0]; 
    block.appendChild(name);
};

var section2 = document.getElementById("languages");

for(let i of listLang){
    let block = document.createElement("article");
    block.className = "lang";
    section2.appendChild(block);

    let div = document.createElement("div");
    div.className = "image_block";
    block.appendChild(div);

    let image = document.createElement("img");
    image.className = "ln-image";
    image.src = i[0];   
    div.appendChild(image);

    let text = document.createElement("div");
    text.className = "ln-text";
    text.textContent = i[1]; 
    block.appendChild(text);

    let opinion = document.createElement("div");
    opinion.className = "ln-opinion";
    opinion.textContent = i[2]; 
    block.appendChild(opinion);
}

var section3 = document.getElementById("tools");

for(let i of listTool){
    let block = document.createElement("article");
    block.className = "lang";
    section3.appendChild(block);

    let div = document.createElement("div");
    div.className = "image_block";
    block.appendChild(div);

    let image = document.createElement("img");
    image.className = "ln-image";
    image.src = i[0];   
    div.appendChild(image);

    let text = document.createElement("div");
    text.className = "ln-text";
    text.textContent = i[1]; 
    block.appendChild(text);

    let opinion = document.createElement("div");
    opinion.className = "ln-opinion";
    opinion.textContent = i[2]; 
    block.appendChild(opinion);
}


var up = document.getElementById("up");
    up.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
    if (document.body.scrollTop > 512 || document.documentElement.scrollTop > 512)
        up.style.display = "block";
    else
        up.style.display = "none";
}