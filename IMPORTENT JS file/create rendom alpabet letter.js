function genaretAutoMeal() {
    let letter = (Math.round(Math.random(2) * 10) + 10).toString(36);
    loadData(letter);
    console.log(letter);
}
