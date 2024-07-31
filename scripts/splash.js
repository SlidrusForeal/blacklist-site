document.addEventListener('DOMContentLoaded', () => {
    const splashes = [
        "У нас нет defss_KPACABA!",
        "Kislota был добавлен ради пасхалки!",
        "Блин 1_AlexCot_1, 1_AlexPes_1, 1_AlexXep_1 тоже нет!",
        "Ой забаненых не чистим...",
        "Нас уже 345!",
        "Welcome to Sosmark!",
        "Краткий пересказ. Дистопия, ФСБ которые пришли с rezdne_wagner, СМЕХ, мёртвый город, комунисты с СП, Мунвиль, люди которые высказывались в чате про нас",
        "А у вашего города есть чекер чс?)",
        "3 самолёта против толпы людей в топках  — 16.06.2024",
        "Век соси - век пересасывай",
        "Нельзя сжечь то что хранится в шести копиях",
        "Надёжнее всего писать не город а НИК!",
        "Моджанг запретило мне автоматически менять ники!",
        "Чтобы изменить мир, нужна красивая ложь и море крови.",
        "Одна строчка в ЧС становится причиной ярости некого rezdne_wagner.",
        "Да мы титры из звёздных войн!",
        "Кто прочитает быстрее всех все ники в чс тот попадёт в рандомные надписи!",
        "Чтобы попасть в ЧС напишите сюда sosmarkblacklist@gmail.com (нет)",
        "Спросите у defss_KPACABA как он вышел из ЧС (если он помнит ещё..)",
        "Breda не очень жалко...",
        "Wolint правда хочешь остатся в истории здесь? напиши в чат дискорда спм или сосмарка устроим",
        "AVE SOS, DEUS OVA"
    ];

    function getRandomSplash(splashes) {
        const randomIndex = Math.floor(Math.random() * splashes.length);
        return splashes[randomIndex];
    }

    function displayRandomSplash() {
        const splashTextElement = document.getElementById('splashText');
        const randomSplash = getRandomSplash(splashes);
        splashTextElement.textContent = randomSplash;
    }

    displayRandomSplash();
});
