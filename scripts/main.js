let myImage = document. querySelector ('img');

myImage.onclick = function()  {
    const mySrc = myImage.getAttribute ('src');
    if (mySrc ==='images/jagapokkuru.png') {
        myImage. setAttribute ('src','images/sanhouroku.png')
    } else {
           myImage. setAttribute('src','images/jagapokkuru.png');
    }
}

let myButton = document. querySelector ('button') ;
let myHeading = document.querySelector('h1') ;

function setUserName ( ) {
    let myName = prompt('あなたの名前を入力してください.');
    if (!myName) {
        setUserName ();
     } else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla is cool'+ myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName ();
} else {
    const storedName = localStorage.getItem('name');
    myHeading. innerHTML ='Mozilla is cool' + storedName;
}

myButton. onclick = function() {
    setUserName( );
}