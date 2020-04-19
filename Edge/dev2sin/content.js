/* Written by Thamalu Maliththa Piyadigama */

var conv_temp;
var basetxt = document.body.innerHTML

function dev2sin() {
    var conv_temp = basetxt;

    //conv_temp = conv_temp.replace(/\u0921\u093c/g, "\u095c");

    //replace letters
    conv_temp = conv_temp.replace(/्/g, "්");
    conv_temp = conv_temp.replace(/अ/g, "අ");
    conv_temp = conv_temp.replace(/आ/g, "ආ");
    conv_temp = conv_temp.replace(/ा/g, "ා");
    conv_temp = conv_temp.replace(/इ/g, "ඉ");
    conv_temp = conv_temp.replace(/ि/g, "ි");
    conv_temp = conv_temp.replace(/ई/g, "ඊ");
    conv_temp = conv_temp.replace(/ी/g, "ී");
    conv_temp = conv_temp.replace(/उ/g, "උ");
    conv_temp = conv_temp.replace(/ु/g, "ු");
    conv_temp = conv_temp.replace(/ऊ/g, "ඌ");
    conv_temp = conv_temp.replace(/ू/g, "ූ");
    conv_temp = conv_temp.replace(/ऋ/g, "ඍ");
    conv_temp = conv_temp.replace(/ृ/g, "ෘ");
    conv_temp = conv_temp.replace(/ॠ/g, "ඎ");
    conv_temp = conv_temp.replace(/ॄ/g, "\u0df2");
    conv_temp = conv_temp.replace(/ऌ/g, "ඏ");
    conv_temp = conv_temp.replace(/ॢ/g, "ෟ");
    conv_temp = conv_temp.replace(/ॡ/g, "ඐ");
    conv_temp = conv_temp.replace(/ॣ/g, "ෟ");
    conv_temp = conv_temp.replace(/ए/g, "එ");
    conv_temp = conv_temp.replace(/े/g, "ෙ");
    conv_temp = conv_temp.replace(/ऐ/g, "ඓ");
    conv_temp = conv_temp.replace(/ै/g, "ෛ");
    conv_temp = conv_temp.replace(/ओ/g, "ඔ");
    conv_temp = conv_temp.replace(/ो/g, "ො");
    conv_temp = conv_temp.replace(/औ/g, "ඖ");
    conv_temp = conv_temp.replace(/ौ/g, "ෞ");
    conv_temp = conv_temp.replace(/ं/g, "ං");
    conv_temp = conv_temp.replace(/ँ/g, "\u0d81");
    conv_temp = conv_temp.replace(/ः/g, "ඃ");
    conv_temp = conv_temp.replace(/क/g, "ක");
    conv_temp = conv_temp.replace(/ख/g, "ඛ");
    conv_temp = conv_temp.replace(/ग/g, "ග");
    conv_temp = conv_temp.replace(/घ/g, "ඝ");
    conv_temp = conv_temp.replace(/ङ/g, "ඞ");
    conv_temp = conv_temp.replace(/च/g, "ච");
    conv_temp = conv_temp.replace(/छ/g, "ඡ");
    conv_temp = conv_temp.replace(/ज/g, "ජ");
    conv_temp = conv_temp.replace(/झ/g, "ඣ");
    conv_temp = conv_temp.replace(/ञ/g, "ඤ");
    conv_temp = conv_temp.replace(/ट/g, "ට");
    conv_temp = conv_temp.replace(/ठ/g, "ඨ");
    conv_temp = conv_temp.replace(/ड/g, "ඩ");
    conv_temp = conv_temp.replace(/ढ/g, "ඪ");
    conv_temp = conv_temp.replace(/ण/g, "ණ");
    conv_temp = conv_temp.replace(/त/g, "ත");
    conv_temp = conv_temp.replace(/थ/g, "ථ");
    conv_temp = conv_temp.replace(/द/g, "ද");
    conv_temp = conv_temp.replace(/ध/g, "ධ");
    conv_temp = conv_temp.replace(/न/g, "න");
    conv_temp = conv_temp.replace(/प/g, "ප");
    conv_temp = conv_temp.replace(/फ/g, "ඵ");
    conv_temp = conv_temp.replace(/ब/g, "බ");
    conv_temp = conv_temp.replace(/भ/g, "භ");
    conv_temp = conv_temp.replace(/म/g, "ම");
    conv_temp = conv_temp.replace(/य/g, "ය");
    conv_temp = conv_temp.replace(/र/g, "ර");
    conv_temp = conv_temp.replace(/ल/g, "ල");
    conv_temp = conv_temp.replace(/व/g, "ව");
    conv_temp = conv_temp.replace(/श/g, "ශ");
    conv_temp = conv_temp.replace(/ष/g, "ෂ");
    conv_temp = conv_temp.replace(/स/g, "ස");
    conv_temp = conv_temp.replace(/ह/g, "හ");
    conv_temp = conv_temp.replace(/ळ/g, "ළ");
    conv_temp = conv_temp.replace(/ॐ/g, "ඕම්");
    conv_temp = conv_temp.replace(/ऽ/g, "’");
    conv_temp = conv_temp.replace(/।/g, "|");
    conv_temp = conv_temp.replace(/॥/g, "||");

    //remove ligatures
    conv_temp = conv_temp.replace(/\u200d/g, "");

    //add Sinnhala ligatures
    conv_temp = conv_temp.replace(/ජ්ඤ/g, "ඥ");
    conv_temp = conv_temp.replace(/්ය/g, "්\u200dය");
    conv_temp = conv_temp.replace(/ර්‍ය/g, "ර්ය");
    conv_temp = conv_temp.replace(/්ර/g, "්\u200dර");


    //replace numerals
    conv_temp = conv_temp.replace(/०/g, "0");
    conv_temp = conv_temp.replace(/१/g, "1");
    conv_temp = conv_temp.replace(/२/g, "2");
    conv_temp = conv_temp.replace(/३/g, "3");
    conv_temp = conv_temp.replace(/४/g, "4");
    conv_temp = conv_temp.replace(/५/g, "5");
    conv_temp = conv_temp.replace(/६/g, "6");
    conv_temp = conv_temp.replace(/७/g, "7");
    conv_temp = conv_temp.replace(/८/g, "8");
    conv_temp = conv_temp.replace(/९/g, "9");

    //replace special signs
    conv_temp = conv_temp.replace(/॑/g, "̍");
    conv_temp = conv_temp.replace(/᳚/g, "̎");

    conv_temp = conv_temp.replace(/॓/g, "̀");
    conv_temp = conv_temp.replace(/॔/g, "́");
    conv_temp = conv_temp.replace(/॒/g, "̱");
    conv_temp = conv_temp.replace(/᳒/g, "̄");
    conv_temp = conv_temp.replace(/᳓/g, "̋");
    conv_temp = conv_temp.replace(/᳐/g, "̂");

    document.body.innerHTML = conv_temp;
}

function dev2rom() {
    var conv_temp = basetxt;

    //replace letters
    conv_temp = conv_temp.replace(/्/g, "\u200b");
    conv_temp = conv_temp.replace(/अ/g, "a");
    conv_temp = conv_temp.replace(/आ/g, "ā");
    conv_temp = conv_temp.replace(/ा/g, "ā");
    conv_temp = conv_temp.replace(/इ/g, "i");
    conv_temp = conv_temp.replace(/ि/g, "i");
    conv_temp = conv_temp.replace(/ई/g, "ī");
    conv_temp = conv_temp.replace(/ी/g, "ī");
    conv_temp = conv_temp.replace(/उ/g, "u");
    conv_temp = conv_temp.replace(/ु/g, "u");
    conv_temp = conv_temp.replace(/ऊ/g, "ū");
    conv_temp = conv_temp.replace(/ू/g, "ū");
    conv_temp = conv_temp.replace(/ऋ/g, "r̥");
    conv_temp = conv_temp.replace(/ृ/g, "r̥");
    conv_temp = conv_temp.replace(/ॠ/g, "r̥̄");
    conv_temp = conv_temp.replace(/ॄ/g, "r̥̄");
    conv_temp = conv_temp.replace(/ऌ/g, "l̥");
    conv_temp = conv_temp.replace(/ॢ/g, "l̥");
    conv_temp = conv_temp.replace(/ॡ/g, "l̥̄");
    conv_temp = conv_temp.replace(/ॣ/g, "l̥̄");
    conv_temp = conv_temp.replace(/ए/g, "ē");
    conv_temp = conv_temp.replace(/े/g, "ē");
    conv_temp = conv_temp.replace(/ऎ/g, "e");
    conv_temp = conv_temp.replace(/ऍ/g, "ê");
    conv_temp = conv_temp.replace(/ऒ/g, "o");
    conv_temp = conv_temp.replace(/ऑ/g, "ô");
    conv_temp = conv_temp.replace(/ऐ/g, "ai");
    conv_temp = conv_temp.replace(/ै/g, "ai");
    conv_temp = conv_temp.replace(/ओ/g, "ō");
    conv_temp = conv_temp.replace(/ो/g, "ō");
    conv_temp = conv_temp.replace(/औ/g, "au");
    conv_temp = conv_temp.replace(/ौ/g, "au");
    conv_temp = conv_temp.replace(/ं/g, "ṁ");
    conv_temp = conv_temp.replace(/ँ/g, "m̐");
    conv_temp = conv_temp.replace(/ः/g, "ḥ");
    conv_temp = conv_temp.replace(/क/g, "k෧");
    conv_temp = conv_temp.replace(/ख/g, "kh෧");
    conv_temp = conv_temp.replace(/ग/g, "g෧");
    conv_temp = conv_temp.replace(/घ/g, "gh෧");
    conv_temp = conv_temp.replace(/ङ/g, "ṅ෧");
    conv_temp = conv_temp.replace(/च/g, "c෧");
    conv_temp = conv_temp.replace(/छ/g, "ch෧");
    conv_temp = conv_temp.replace(/ज/g, "j෧");
    conv_temp = conv_temp.replace(/झ/g, "jh෧");
    conv_temp = conv_temp.replace(/ञ/g, "ñ෧");
    conv_temp = conv_temp.replace(/ट/g, "ṭ෧");
    conv_temp = conv_temp.replace(/ठ/g, "ṭh෧");
    conv_temp = conv_temp.replace(/ड/g, "ḍ෧");
    conv_temp = conv_temp.replace(/ढ/g, "ḍh෧");
    conv_temp = conv_temp.replace(/ण/g, "ṇ෧");
    conv_temp = conv_temp.replace(/त/g, "t෧");
    conv_temp = conv_temp.replace(/थ/g, "th෧");
    conv_temp = conv_temp.replace(/द/g, "d෧");
    conv_temp = conv_temp.replace(/ध/g, "dh෧");
    conv_temp = conv_temp.replace(/न/g, "n෧");
    conv_temp = conv_temp.replace(/प/g, "p෧");
    conv_temp = conv_temp.replace(/फ/g, "ph෧");
    conv_temp = conv_temp.replace(/ब/g, "b෧");
    conv_temp = conv_temp.replace(/भ/g, "bh෧");
    conv_temp = conv_temp.replace(/म/g, "m෧");
    conv_temp = conv_temp.replace(/य/g, "y෧");
    conv_temp = conv_temp.replace(/र/g, "r෧");
    conv_temp = conv_temp.replace(/ल/g, "l෧");
    conv_temp = conv_temp.replace(/व/g, "v෧");
    conv_temp = conv_temp.replace(/श/g, "ś෧");
    conv_temp = conv_temp.replace(/ष/g, "ṣ෧");
    conv_temp = conv_temp.replace(/स/g, "s෧");
    conv_temp = conv_temp.replace(/ह/g, "h෧");
    conv_temp = conv_temp.replace(/ळ/g, "ḻ෧");
    conv_temp = conv_temp.replace(/ॐ/g, "om̐");
    conv_temp = conv_temp.replace(/ऽ/g, "’");
    conv_temp = conv_temp.replace(/।/g, "|");
    conv_temp = conv_temp.replace(/॥/g, "||");

    //secondary replacements
    conv_temp = conv_temp.replace(/෧\u200b/g, "");
    conv_temp = conv_temp.replace(/෧ā/g, "ā");
    conv_temp = conv_temp.replace(/෧a/g, "a");
    conv_temp = conv_temp.replace(/෧i/g, "i");
    conv_temp = conv_temp.replace(/෧u/g, "u");
    conv_temp = conv_temp.replace(/෧e/g, "e");
    conv_temp = conv_temp.replace(/෧o/g, "o");
    conv_temp = conv_temp.replace(/෧ē/g, "ē");
    conv_temp = conv_temp.replace(/෧ō/g, "ō");
    conv_temp = conv_temp.replace(/෧ī/g, "ī");
    conv_temp = conv_temp.replace(/෧ū/g, "ū");
    conv_temp = conv_temp.replace(/෧r̥/g, "r̥");
    conv_temp = conv_temp.replace(/෧r̥̄/g, "r̥̄");
    conv_temp = conv_temp.replace(/෧l̥/g, "l̥");
    conv_temp = conv_temp.replace(/෧l̥̄/g, "l̥̄");
    conv_temp = conv_temp.replace(/෧/g, "a");

    conv_temp = conv_temp.replace(/०/g, "0");
    conv_temp = conv_temp.replace(/१/g, "1");
    conv_temp = conv_temp.replace(/२/g, "2");
    conv_temp = conv_temp.replace(/३/g, "3");
    conv_temp = conv_temp.replace(/४/g, "4");
    conv_temp = conv_temp.replace(/५/g, "5");
    conv_temp = conv_temp.replace(/६/g, "6");
    conv_temp = conv_temp.replace(/७/g, "7");
    conv_temp = conv_temp.replace(/८/g, "8");
    conv_temp = conv_temp.replace(/९/g, "9");

    conv_temp = conv_temp.replace(/॑/g, "̍");
    conv_temp = conv_temp.replace(/᳚/g, "̎");

    conv_temp = conv_temp.replace(/॓/g, "̀");
    conv_temp = conv_temp.replace(/॔/g, "́");
    conv_temp = conv_temp.replace(/॒/g, "̱");
    conv_temp = conv_temp.replace(/᳒/g, "̄");
    conv_temp = conv_temp.replace(/᳓/g, "̋");
    conv_temp = conv_temp.replace(/᳐/g, "̂");

    document.body.innerHTML = conv_temp;
}


function original() {
    document.body.innerHTML = basetxt;
}