function passwordCharacter(event){
    let bar = document.getElementById('passwordCharacterBy')
    let length = event.target.value.length
        bar.class = ''

    if(length < 5){
        bar.classList.add('bad')
    } else if(length >= 5 && length < 10){
        bar.classList.add('good')
    } else if(length >= 10){
        bar.classList.add('perfect')
    }

}