var nt = "img/image 6.png", bat = "img/Bat.png", Cpp = "img/Cpp.png", Vs = "img/ribbon.png", Cmm = "img/C-Sharp.png",
    U = "img/unity.png", abc = "img/ABC.png", java = "img/Java.png", p = "img/python.png", pc = "img/PC.png", js = "img/JavaScript.png";
var listProg = [
    ["Hello World", "Первая программа", "2018", "img/prog01.jpg", nt, bat],
    ["Password", "Просто пароль", "2018", "img/Parol.png", nt, bat],
    ["Square", "Просто квадрат", "2018", "img/prog041.png", nt, bat],
    ["Squarex2", "Два квадрат", "2018", "img/prog05.jpg", nt, bat],
    ["Матвей", "КМН", "2018", "img/prog06.jpg", nt, bat],
    ["Hello World", "Hello World", "2018", "img/prog07.jpg", Cpp, Vs],
    ["Аквариум", "Аквариум", "2019", "img/Aqvarium.png", Cpp, Vs],
    ["KNB", "Камень-Ножницы-Бумага", "2018", "img/KNB.png", nt, bat],
    ["Myosu", "Авторская версия OSUUU", "2018", "img/Myosu.png", nt, bat],
    ["Unity game", "Игра юнити", "2018", "img/image 8.png", U, U],
    ["ПАРАДОКС", "ПАРАДООКС", "2018", "img/Парадокс.png", Cpp, Vs],
    ["Танчики", "Tan4iki", "2018", "img/Tank.png", Cpp, Vs],
    ["Змейка", "Моя змейка", "2018", "img/image 10.png", js, nt],
    ["sort.p", "Сортировка пузырьком", "2018", "img/og01 1.png", abc, abc],
    ["Домик", "Домик", "2018", "img/prog01 2.png", abc, abc],
    ["Tetris", "МОЙ Tetris", "2018", "img/image 12.png", java, nt],
    ["WebInfo", "Webinfo", "2018", "img/prog001.png", p, pc],
    ["AuxProg", "АВТОКЛИКЕР", "2018", "img/image 14.png", p, pc],
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