let form = document.querySelector('form');
let topText = document.querySelector('#topcomment');
let imageSubmit = document.querySelector('#imagesss');
let bottomText = document.querySelector('#bottomcomment');
let section = document.querySelector('.memeImage');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let begDiv = document.createElement('div');
    begDiv.classList.add('col-lg-3');
    document.body.append(begDiv);

    let secondDiv = document.createElement('div');
    secondDiv.classList.add('img-container');
    begDiv.append(secondDiv);

    let newText1 = document.createElement('div')
    newText1.classList.add('text11') //class positioning
    newText1.innerText = topText.value;
    secondDiv.appendChild(newText1);
    // newImage.insertAdjacentElement("afterend", newText1);

    let newText2 = document.createElement('div')
    newText2.classList.add('text22');
    newText2.innerText = bottomText.value;
    newText1.insertAdjacentElement("afterend", newText2);


    let newImage = document.createElement('img'); //<img> </img> 
    newImage.src = imageSubmit.value;
    newImage.classList.add('imagesCSS')
    newText2.insertAdjacentElement("afterend", newImage);

    let removeButton = document.createElement('button');
    removeButton.classList.add('button')
    removeButton.innerText = 'Remove';
    secondDiv.insertAdjacentElement("afterend", removeButton);

    removeButton.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    })

    topText.value = '';
    imageSubmit.value = '';
    bottomText.value = '';

});