function suffixFunction(selectOption, place, inputCss, divTagS, innerDiv, selectId) {
    var divTag = document.getElementById(innerDiv);
    divTag.innerHTML = ('<h2>' + place + '</h2>');
    var selectTag = document.createElement('select');
    selectTag.id = selectId;
    selectTag.setAttribute("class", inputCss);
    var sopt = selectOption.value
    console.log(sopt);
    var soptName = selectOption.valueName;
    console.log(soptName);
    for (var i = 0; i < sopt.length; i++) {
        var sopts = sopt[i];
        var optionTag = document.createElement('option');
        optionTag.value = sopts;
        optionTag.appendChild(document.createTextNode(soptName[i]));
        selectTag.appendChild(optionTag);
        divTag.appendChild(selectTag);
    }
    document.getElementById(divTagS).appendChild(divTag);

}
