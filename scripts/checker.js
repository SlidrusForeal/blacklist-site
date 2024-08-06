document.addEventListener('DOMContentLoaded', () => {
    const splashes = [
        "У нас нет defss_KPACABA!",
        "Kislota был добавлен ради пасхалки!",
        "Блин 1_AlexCot_1, 1_AlexPes_1, 1_AlexXep_1 тоже нет!",
        "Ой забаненных не чистим...",
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
        "AVE SOS, DEUS OVA",
        "Наш бюджет 1500 АР!",
        "1984",
        "100% Сосский",
        "Помянем",
        "Tobey Maguire got bit by a spider, but see, me, it was a goat",
        "😈",
        "🥚🥚🥚"
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

const blacklist = [
    "Revmatist", "AllShab", "MrNabuy", "Comrade_Tokov", "Vocallolonik",
    "Pax_Andronika", "Comrade_Mikhail_", "Mironelix", "Retselv", "Efreiter",
    "Divan2000", "DiogEn_7", "Ksilexs", "Semionik", "AKPHAK", "avale1648",
    "AVTO_LuxShisik", "XYWINGS", "Kriss_Dark", "Lyudvig_94", "ZhuravlevX",
    "IgorMin", "Coconut5364", "brookdluffy", "Ya_pivas", "raymccartan",
    "Tinker_NOD", "Markowka_", "kwexi", "Xinoki", "levnemcev", "__ZibsiS__",
    "Genvey", "Gorynych", "MishaOv", "cakechalk", "Viktorovich_", "Gribosvet",
    "Jeleiaka", "Ralse1_Fan", "_pastich_", "Otto_Weiss", "Defenber", "FenyaII",
    "Meruniti", "RenChik_", "MaKenToshhh", "BJlADblKA_kv777", "SVshka", "NovaR1k",
    "_Kisel4ik_", "tr1color", "Alossser", "lyalya_Iz_AGMD", "utkanavt",
    "KILLIJlAK", "fybrfo", "Sokich", "mainhost", "arlek1ng",
    "Gnomik_Vasa", "SnrChuya", "Timonder007", "kriin_", "Alexr27", "r1zz3",
    "Tashimka", "__gabriella__", "notmorphin", "Yanva", "E6ALLIY_B_XJIAM", "Dava_Wasab",
    "NotSnaker_iz_322", "00ABGz", "00Daruma", "Semiraxd", "AsidSin", "Mayzito", "BIHGO",
    "Laever", "Zadudoderr", "l1n1ks", "masterskaya_", "Moksy44", "NotsuruSound",
    "kitekatura", "Ryrver", "spacekot", "SteamBuildier", "TebeNeSvetit",
    "egor__pomidor", "Fuyumiki", "CyberKpblsa", "Prynik71", "rezdne_wagner",
    "flaidy42", "Fristikon", "Assbecov_", "BoltozvakGaikoeb", "crazysecret",
    "deddda", "Dlesti", "1_gobnik", "flameach", "pqunkers_Iz_AGMD", "_ayanokouji",
    "xligenda", "LamyRka", "analspazm", "PaperPank", "Vampi_is_Me",
    "SFastikF", "slesar300", "solumus_maximus", "VesnaF", "vPups", "xiao8bet",
    "GYTU", "apelSINUS", "S1r1on", "Modjik", "alexpoint", "MegaByte2H",
    "Molldyn", "kolapro", "iwtdie", "_Ded_Perdet21_", "ZalaForesta", "_Hendel_",
    "UJIFERINA", "Xanchyyk", "Hvani_femboy", "Plazzy_Tw", "Pepsik69", "CEKT0P",
    "osel3000", "FruREN", "ValikWho", "Heronchek", "kaismais", "Nosicov",
    "0Sachalinec0", "HikaChino_2233", "Ramzey_", "lobav", "MaxLain",
    "Swino4ka", "Nordwain_", "00faceless00", "SleepWxlker", "MopSsiK_Lapo4ka",
    "Zabwenus", "Sibistel", "Kpaxmall", "Xiiaoooo", "HutagerBack",
    "DoctorHell666", "she2kopr9d", "Foxyan4ik42", "_Denisiel_", "CyberPelmeshik",
    "S1ark_", "Block_Peska", "forfii", "ZertinWard", "Mrketchup8841", "Pronew_2019",
    "Blarfik", "qweire", "SannttoLiLLLeann", "1NkShizo", "UnkVirus", "Korobka_1",
    "Kiryaaa", "Pengven228", "xyzrxl", "ky1nk1", "_boxee_", "8strontium8",
    "DimaFyodorov", "Irpen", "CAMOKAT_BETEPAHA", "AlexBruuh", "Kamandar", "mulltuk",
    "Ohlamon", "markosaft_", "Upolnomoch_Kifir", "Kissalin", "Oulls", "Galya_Fontan",
    "railxuy", "Mohovidniy", "Tsar_poketik", "Borsalss", "Difub", "_Gelzy", "monkey1447",
    "TO_MUCH", "YeLis64", "TPABOMAH_", "Ak1ra_Horny", "ligofff", "firro17",
    "70yo", "Tsuk1ii", "krytoinosok", "4epyx__", "Animun4ik", "_Venjam1n_",
    "AnderFan", "Barlisman", "ByR1lt1n", "shaizadinov", "Yashechka", "cpt_weedeye",
    "Differsion", "ellipsiso", "Foxeoio751", "_MrBee_", "kakashechka", "Kirnau17",
    "KutFat", "kvent1n", "kymoizi", "Lenyks", "lhijkb", "AugustNV", "Lopovski",
    "MamdiKek", "Mashukoo", "MrCkiland", "NaItvInG", "nessyyx", "NeverLoveSky",
    "00SunRay00", "opl69", "Oyasima", "poopirka", "QuartzWaw", "Samsami4ed",
    "Shakoraze", "ShooxFuzll", "_ReadTree_", "SoFi4Ka_", "SpeeDPuppy", "Sychie",
    "TimeSking", "Vebstors", "vlady_y", "WenyaFox", "Zannanel", "Brigella",
    "Hi_craft", "obebaa", "Zinino", "GEB0_", "over144000",
    "Xomkaaaaaa", "Gold1_", "Alex_Normalni", "korn4pl0d", "SillyFoxxo", "_Luk__",
    "KOPOlb_SARATOVA", "ignatick_nyashka", "loloipka", "Mo0nRay", "F1owering", "pgally",
    "kepckuk", "Sauhuk", "_Neo_Samurai_8_", "Terendefloc", "Starry_Blick",
    "SnakeRuslan", "bitvu", "cheharka", "EnoKast", "Gigiretu", "Foxyen", "Tamommy",
    "mistrMonstr", "TornPaint", "kekish_", "bergusha", "MerayFresh_", "janpol_",
    "LolKa255", "Alexr27", "DmitrySij", "layndner", "lesaf", "Paxd1_", "LekcaHDp",
    "ilyusha_1", "AJLeX57", "V00bz", "12NikitaVins", "r0mb_ek", "_LegaSyslik_",
    "_Tecxas", "Amadela_1", "BanananT", "biswec", "Keorvane", "clownya57",
    "dogi_bb", "kurumihere", "Forior", "Fupnew", "Heronchek", "HukoJlau_06",
    "KaRozik", "Kareux", "Lentasy", "Makrel3", "nurofenchik998", "PomeloS__",
    "prosto_anandy", "Tekletu", "Tigranitos", "DanyaNeyk", "Mazir0k", "srekko_f",
    "Wioaru", "Myatnaya", "lobster_dobrias", "__Risa", "Elae4ik", "Joosyaww",
    "Srastich", "Kislota", "Homura128", "prismerr", "DmitriyNagiev57", "ByHanko",
    "MitoBBN", "A9C3C6_iz_658", "s1ben", "miyalvoda", "Reamix_", "Enarioo", "Tefynder", "n_15", "IvTuSTAFF", "_ReadTree_", "VolodyaBroBY", "deloVVoy"
].map(name => name.toLowerCase());

function applyAnimation(element, animationName) {
    element.style.animation = `${animationName} 0.5s`;

    element.addEventListener('animationend', () => {
        element.style.animation = '';
    }, { once: true });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.visibility = 'visible';
    setTimeout(() => {
        notification.style.visibility = 'hidden';
    }, 3000);
}

function checkBlacklist() {
    const playerName = document.getElementById('playerName').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    showNotification("Запрос обрабатывается...");

    setTimeout(() => {
        if (playerName === "") {
            resultDiv.textContent = "Строка ввода пуста. Пожалуйста, введите никнейм.";
            resultDiv.style.color = 'orange';
            applyAnimation(resultDiv, 'shake');
        } else if (blacklist.includes(playerName)) {
            resultDiv.textContent = `${playerName}, поздравляем вы в ЧС!`;
            resultDiv.style.color = 'red';
            applyAnimation(resultDiv, 'shake');
        } else {
            resultDiv.textContent = `${playerName}, вы не в ЧС! Возможно вы сменили ник?`;
            resultDiv.style.color = 'green';
            applyAnimation(resultDiv, 'bounce');
        }
    }, 1000);
}

function updateSuggestions() {
    const input = document.getElementById('playerName').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    if (input.length > 0) {
        const matches = blacklist.filter(name => name.startsWith(input));
        matches.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            suggestions.appendChild(option);
        });
    }
}