jQuery(document).ready(function() {
    let languageSetter = document.getElementById('language-setter');
    languageSetter.addEventListener('click', onLanguageButtonClick);
    setLanguageOfElements();
//    languageSetter.click();
//    languageSetter.te
//    let images = ['PoznanBackground.JPG','Poznan_Pastor.JPG']
//    let i = 0;
//    window.setInterval(function() {
//        let imageUrl = 'url("./css/' + images[i] + '")';
//        $('body').css('background-image', imageUrl);
//        i++;
//        i %= images.length;
//    }, 10000);
});
