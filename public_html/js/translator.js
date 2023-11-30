const DEFAULT_LANGUAGE = 'PL';
const SUPPROTED_LANGUAGES = ['EN', DEFAULT_LANGUAGE, 'UA', 'RU'];
const TRANSLATIONS = {
    EN: {
        John316: 'For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. (Evangelie John 3:16.)',
        'main-title': 'Poznan. Baptist Church',
        'church-title': 'Evangelic Christian Baptist (International Union of Churches)',
        'about-ref': 'About',
        'worship-services-ref': 'Worship Services',
        'events-ref': 'Events',
        'preaches-ref': 'Preaches',
        'contacts-ref': 'Contacts',
        'last-event': 'Outing to nature by the church on May 1, 2023',
        'about-title': 'Poznan. Baptist Church: About',
        'about-union': 'Evangelic Christian Baptist of International Union of Churches',
        'to-main': 'To Main Page',
        'worship-services-title': 'Poznan. Baptist Church: Worship Services',
        'worship-services-h1': 'Worship Services:',
        'worship-services-sunday': 'Sunday 10:00',
        'worship-services-friday': 'Friday 18:00',
        'worship-services-youth': 'Worship for youth: Saturday 18:00',
        'events-title': 'Poznan. Baptist Church: Events',
        'events-h1': 'Events',
        'events-christmas': 'Christmas Presents Preparation. December 18 2022',
        'preaches-title': 'Poznan. Baptist Church: Preaches',
        'preaches-h1': 'Preaches should be here',
        'contacts-title': 'Poznan. Baptist Church: Contacts',
        'contacts-h1': 'Contacts',
        'contacts-responsible1': 'Deacon: Yurij',
        'contacts-responsible2': 'Ilia'
    },
    PL: {
        John316: 'Bóg tak bardzo umiłował świat, że dał swego jednorodzonego Syna, Aby nikt, kto w niego wierzy, nie został zgładzony, lecz miał życie wieczne. (Jana 3:16)',
        'main-title': 'Poznań.  Kościół Baptystów.',
        'church-title': 'Ewangeliczni chrześcijańscy baptyści (Międzynarodowa Unia Kościołów)',
        'about-ref': 'O nas',
        'worship-services-ref': 'Nabożeństwa',
        'events-ref': 'Życie Kościoła',
        'preaches-ref': 'Kazania',
        'contacts-ref': 'Kontakty',
        'last-event': 'Wycieczka na łono natury przy kościele 1 maja 2023 r',
        'about-title': 'Poznań. Kościół Baptystów: O nas',
        'about-union': 'Ewangeliczni Chrześcijańscy Baptyści z Międzynarodowej Unii Kościołów',
        'to-main': 'Do strony głównej',
        'worship-services-title': 'Poznań. Kościół Baptystów: Nabożeństwa',
        'worship-services-h1': 'Nabożeństwa:',
        'worship-services-sunday': 'Niedziela 10:00',
        'worship-services-friday': 'Piątek 18:00',
        'worship-services-youth': 'Nabożeństwo dla młodzieży: sobota 18:00',
        'events-title': 'Poznań. Kościół Baptystów: Życie Kościoła',
        'events-h1': 'Życie Kościoła',
        'events-christmas': 'Przygotowanie prezentów na Narodzenie Jezusa Chrystusa. \r\n18 grudnia 2022 r',
        'preaches-title': 'Poznań. Kościół Baptystów: Kazania',
        'preaches-h1': 'Tu powinny być kazania',
        'contacts-title': 'Poznań. Kościół Baptystów: Kontakty',
        'contacts-h1': 'Kontakty',
        'contacts-responsible1': 'Diakon: Jurij',
        'contacts-responsible2': 'Ilia'
    },
    UA: {
        John316: 'Бо так Бог полюбив світ, що віддав Сина Свого Єдинородного, щоб кожен, хто вірує Нього, не загинув, а мав життя вічне. (Іванна 3:16)',
        'main-title': 'Познань. Церква баптистів.',
        'church-title': 'Євангельські християни-баптисти (Міжнародний союз церков)',
        'about-ref': 'Про нас',
        'worship-services-ref': 'Богослужіння',
        'events-ref': 'Життя церкви',
        'preaches-ref': 'Проповіді',
        'contacts-ref': 'Контакти',
        'last-event': 'Виїзд на природу церквою 1 травня 2023 р.',
        'about-title': 'Познань. Церква баптистів: Про нас.',
        'about-union': 'Євангельські християни-баптисти Міжнародного союзу церков',
        'to-main': 'На головну',
        'worship-services-title': 'Познань. Церква баптистів: богослужіння',
        'worship-services-h1': 'Богослужіння:',
        'worship-services-sunday': 'Неділя 10:00',
        'worship-services-friday': "П'ятниця 18:00",
        'worship-services-youth': 'Богослужіння для молоді: субота 18:00',
        'events-title': 'Познань. Церква баптистів: Життя церкви',
        'events-h1': 'Життя церкви',
        'events-christmas': 'Приготування подарунків до Різдва Ісуса Христа. 18 грудня 2022 р.',
        'preaches-title': 'Познань. Церква баптистів: Проповіді',
        'preaches-h1': 'Тут повинні бути проповіді',
        'contacts-title': 'Познань. Церква баптистів: Контакти',
        'contacts-h1': 'Контакти',
        'contacts-responsible1': 'Диякон: Юрій',
        'contacts-responsible2': 'Ілля'
    },
    RU: {
        "John316": "Ибо так возлюбил Бог мир, что отдал Сына Своего единородного, дабы всякий верующий в Него, не погиб, но имел жизнь вечную. (Евангелие от Иоанна 3:16)",
        'main-title': 'Познань. Церковь баптистов.',
        'church-title': 'Евангельские христианы-баптисты (Международный союз церквей)',
        'about-ref': 'О нас',
        'worship-services-ref': 'Богослужения',
        'events-ref': 'Жизнь церкви',
        'preaches-ref': 'Проповеди',
        'contacts-ref': 'Контакты',
        'last-event': 'Выезд на природу церковью 1 мая 2023 г.',
        'about-title': 'Познань. Церковь баптистов: О нас.',
        'about-union': 'Евангельские христиане-баптисты Международного союза церквей',
        'to-main': 'На главную',
        'worship-services-title': 'Познань. Церковь баптистов: богослужения',
        'worship-services-h1': 'Богослужения:',
        'worship-services-sunday': 'Воскресенье 10:00',
        'worship-services-friday': "Пятница 18:00",
        'worship-services-youth': 'Богослужения для молодёжи: суббота 18:00',
        'events-title': 'Познань. Церква баптистів: Жизнь церкви',
        'events-h1': 'Жизнь церкви',
        'events-christmas': 'Подготовка подарков к Рождеству Иисуса Христа. 18 декабря 2022 г.',
        'preaches-title': 'Познань. Церковь баптистов: Проповеди',
        'preaches-h1': 'Здесь должны быть проповеди',
        'contacts-title': 'Познань. Церковь баптистов: Контакты',
        'contacts-h1': 'Контакты',
        'contacts-responsible1': 'Дьякон: Юрий',
        'contacts-responsible2': 'Илья'
    }
};
function getNextLaguage(prevLanguage) {
    let prevIndex = SUPPROTED_LANGUAGES.indexOf(prevLanguage);
    let currentLanguageIndex = (prevIndex + 1) % SUPPROTED_LANGUAGES.length;
    let currentLanguage = SUPPROTED_LANGUAGES[currentLanguageIndex];
    console.log('prevLanguage ' + prevLanguage + ' currentLanguageIndex ' 
            + currentLanguageIndex + ' currentLanguage ' + currentLanguage);
    return currentLanguage;
}

function onLanguageButtonClick() {
    let language = getNextLaguage(localStorage.getItem("language") 
            || DEFAULT_LANGUAGE);
//    console.log('language ' + language);
    setLanguageOfElements(language);
    $('#language-setter').text(getNextLaguage(language));
}

function setLanguageOfElements(language) {
    language = language || DEFAULT_LANGUAGE; 
//    console.log("prevLanguage " + language);
    for (const [key, value] of Object.entries(TRANSLATIONS[language])) {
        $(`#${key}`).text(value);
    };
    localStorage.setItem("language", language);
}
