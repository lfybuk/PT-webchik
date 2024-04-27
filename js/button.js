var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        // Сделаем новый элемент img
        var img = document.createElement("img");
        // источник
        img.src = "https://3dnews.ru/assets/external/illustrations/2023/02/05/1081436/sm.cybersecurity-predictions-2023-1.800.png";
        // добавим изображение в параграф
        document.getElementById("demo").appendChild(img);
    }
}