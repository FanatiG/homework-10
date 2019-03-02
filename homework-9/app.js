//document.getElementById("inputText").oninput =     function() {    console.log(document.getElementById("inputText").value);    }
    // var incText = document.getElementById("inputText").value;
    function textTransform() {
        //console.log("TEST" + typeof(document.getElementById("inputText").value));
        var outText = "https://ru.wikipedia.org/wiki/" + 
        document.getElementById("inputText").value.replace(/ /g,"_");
        console.log("TEST" + "  " + outText);
        window.open(outText,"_self");
        // let xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange=function() {
        // if (this.readyState == 4 && this.status == 200) {
        //   console.log("Hello, Wiki!");
        // } else {
        //     console.log("EROR");
        // }
        // };
        // xhttp.open("GET", "https://ru.wikipedia.org/wiki/" + incText, true);
        //xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf8');
        // xhttp.send();
        }
    
    
        // function textTransform() {
        // const incText = document.getElementById("inputText").value;
        // console.log( incText );
        // }











// document.getElementById("searchFor").onclick = 
// function textTransform(incText) {
// // outText = "https://ru.wikipedia.org/wiki/" + incText;
// outText = "https://ru.wikipedia.org/w/api.php?action=opensearch&search=" + incText + "&format=json&callback=?";
// window.open(outText,"_self");
// }

// function textTransform(incText) {
//     if (document.readyState == "complete" && window.XMLHttpRequest) {
//       var http = new XMLHttpRequest();
//       http.open("GET", "https://ru.wikipedia.org/w/api.php");
//       // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//       // http.onreadystatechange = function() {
//       //   if (http.readyState == 4 && http.status == 200) {
//       //     var outText = "https://ru.wikipedia.org/w/api.php?action=opensearch&search=" + incText + "&format=json&callback=?";
//       //     }
//       // }
//       var incText = document.getElementById(inputText).value;
//       var outText = "https://ru.wikipedia.org/wiki/" + incText;
//       // http.timeout = 60000; // прервать запрос через 1 минуту
//       console.log(outText);
//       http.send(outText);
//       // window.removeEventListener("scroll", list);
//     }
//   }

// var outText = "";
// outText = "https://ru.wikipedia.org/wiki/" + Array.incText.join("+");
// document.getElementById("searchFor").onclick = function textTransform(incText) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", outText, true);
//   xhttp.send();
//   if (xhr.status != 200) {
//     // обработать ошибку
//     console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
//   } else {
//     // вывести результат
//     console.log( xhr.responseText ); // responseText -- текст ответа.
//     window.open(outText,"_self");
//   }
// }





//                                                                  Пример (кривой)
// // Урлы
// const API =  "https://en.wikipedia.org/w/api.php";
// const shareTwitter = "https://twitter.com/intent/tweet?text=";
// // Массив с цветами
// const colorsArr = ["#14cc8d", "#1481cc", "#cc3114", "#bb14cc", "#14ccbb", "#5f14cc", "#cc8d14"];
// // выборка элементов по ID
// const article = document.getElementById('article');
// const newArticleButton = document.getElementById("new");
// const shareButton = document.getElementById('share');

// // Получаем рандомный цвет для фона
// function getRandomColor() {
//   return colorsArr[Math.round(Math.random()*(6 - 0) + 0)];
// }

// // напишем функцию getData
// function getData() {
//   // отправили запрос
//   axios.get(API).then(result => {
//     // рузультат к тексту
//     return result.data;
//   }).then(value => {
//     // получен формат JSONP то мы обрезаем строку с начала и до конца
//     // вернули json
//     return JSON.parse(value.slice(2, -1));
//   }).then(json => {
//     // производим операции с данными
//     document.body.style.background = getRandomColor();
//     article.innerHTML = `
//       <p id="text">${json.quoteText}</p>
//       ${json.quoteAuthor ? 
//         `<p id="author">${json.quoteAuthor}</p>`
//         : "" }
//     `;

//     // share actions
//     shareButton.setAttribute('href',
//       shareTwitter + json.quoteText
//     );
//   }).catch(err => {
//     throw err;
//   })
// }

// getData();

// newArticleButton.addEventListener('click', () => {
//   getData()
// })