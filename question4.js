let = helloMapping = {
    "en": "Hello World",
    "fr": "Bonjour Monde",
    "de": "Hallo Welt"
};

function helloWorld(languageCode) {
    languageCode = languageCode || "en";
    if (!(languageCode in helloMapping)) {
        languageCode = "en";
        console.log("Your language code is not currently supported, default is 'en'");
    }
    console.log(`${helloMapping[languageCode]}`);
}


