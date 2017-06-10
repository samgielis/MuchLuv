var MLGear = {
    left : [
        [
            "Logic Pro X"
        ],
        [
            "Mac Mini",
            "RME Fireface 800",
            "Ferrofish A16AE Converter",
            "Persons Faderport"
        ], [
            "Soundtracs MRX 24/8 analogue desk",
            "Soundcraft 200B analoguedesk",
            "SPL HDA 4 headphone amp"
        ], [
            "ART Pro Channel",
            "Focusrite ISA ONE Digital",
            "JOEMEEK THREEQ",
            "JOEMEEK VC1",
            "SPL GoldMike",
            "TL AUDIO Ebony A1"
        ], [
            "Alesis 3630 Compressor",
            "Boss RE-1000 Reverb",
            "DBX 160A Compressor",
            "Drawmer DL241 Compressor",
            "Etek X-CITER",
            "FMR RNC Compressor",
            "FMR RNLA Limiter",
            "Furman M-10 LX E Power Conditioner (x2)",
            "SPL Vitalizer MK2-T",
            "TC Electronic M300 Reverb",
            "Warm Audio WA76 1176 Compressor",
            "Yamaha SPX990 Multi Effect"
        ], [
            "SE ELECTRONICS Reflexion Filter"
        ], [
            "JBL 212",
            "YAMAHA HS50"
        ], [
            "Beyerdynamic DT770 Pro (x3)",
            "AKG K77",
            "Sennheiser HD205"
        ]
    ],
    center : [
        {
            brand : "AKG",
            items : [
                "D112",
                "D19 (x2)",
                "C430"
            ]
        }, {
            brand : "AUDIO TECHNICA",
            items : [
                "AT3060"
            ]
        }, {
            brand : "AUDIX",
            items : [
                "D2",
                "f14",
                "i5"
            ]
        }, {
            brand : "BEYERDYNAMIC",
            items : [
                "M88c"
            ]
        }, {
            brand : "GOLDEN AGE",
            items : [
                "R1 MK III"
            ]
        }, {
            brand : "OKTAVA",
            items : [
                "MK012 (x2)"
            ]
        }, {
            brand : "RODE",
            items : [
                "NT1A",
                "NT1000"
            ]
        }, {
            brand : "SE ELECTRONICS",
            items : [
                "SE1A",
                "TITAN"
            ]
        }, {
            brand : "SENNHEISER",
            items : [
                "E606",
                "E840",
                "MD421"
            ]
        }, {
            brand : "SHURE",
            items : [
                "BETA52",
                "PE15L",
                "SM48",
                "SM57 (x4)",
                "SM58 (x2)",
                "SM7b"
            ]
        }, {
            brand : "YAMAHA",
            items : [
                "MZ204"
            ]
        }],
    right: [
        {
            brand : "GUITAR",
            items : [
                "Faylon 2x12",
                "Fender Bassman 100",
                "Fender “Violence” (custom built amp)",
                "Hughes & Kettner Warp 7",
                "Hughes & Kettner super oversized 2x12",
                "Laney LC50 (1st gen)",
                "Marshall JCM900",
                "Marshall 1960A",
                "Marshall 50 Split Channel Reverb",
                "Marshall JMP-1 Preamp",
                "Orange OR200",
                "Orange PPC 212",
                "Peavey 50/50 Power Amp"
            ]
        },
        {
            brand : "BASS",
            items : [
                "Multiple amps & cabs are available Ampeg, Orange,….",
                "D19 (x2)",
                "C430"
            ]
        },
        {
            brand : "PEDALS",
            items : [
                "Boss CH1 Chorus",
                "Boss DS1 Distortion",
                "Boss DD7 Delay",
                "Boss GE7 EQ",
                "Boss MT2 Metal Zone",
                "Boss PSM 5 Power Supply/Master Switch",
                "Digitech Whammy IV",
                "Electro Harmonix Bass Synth",
                "Electro Harmonix Memory Toy",
                "Electro Harmonix Metal Muff w/ top boost",
                "Electro Harmonix Small Clone",
                "Electro Harmonix Small Stone",
                "Electro Harmonix Switchblade +",
                "Ibanez Tubescreamer TS9",
                "Jim Dunlop Original Crybaby",
                "Marshall BB-2 Blues Breaker",
                "Marshall GV-2 Guv'nor",
                "ProCo Rat",
                "Rocktron Rampage blue",
                "TC Dark Matter Distortion",
                "TC Polytune",
                "Tech 21 SansAmp Bass Driver",
                "Voodoo Lab Pedal Power 2 Plus",
                "Walrus Audio Descent",
                "Zoom 1010"
            ]
        },
        {
            brand : "SYNTHS ETC",
            items : [
                "Akai MPD18",
                "Akai Timbre Wolf",
                "Dreadbox Hades",
                "Korg MS20 Mini",
                "M-Audio Axiom 49",
                "Solton Project 100 analogue synth"
            ]
        }
    ]
};
function br(){
    return document.createElement('br');
}
function text(text) {
    return document.createTextNode(text);
}
function title(text) {
    var b = document.createElement('b');
    b.innerText = text;
    return b;
}

(function buildGearPlain () {
    var content = document.createElement('p');
    var dataSet = MLGear.left;

    for (var i = 0; i < dataSet.length; i++) {
        for (var j = 0; j < dataSet[i].length; j++) {
            var item = dataSet[i][j];
            content.appendChild(text(item));
            content.appendChild(br());
        }
        content.appendChild(br());
    }

    var parent = document.querySelector('#gear-left');
    parent.appendChild(content);
})();


function buildGearWithTitles (dataset, id) {
    var content = document.createElement('p');

    for (var i = 0; i < dataset.length; i++) {
        var section = dataset[i];
        content.appendChild(title(section.brand));
        content.appendChild(br());

        for (var j = 0; j < section.items.length; j++) {
            var item = section.items[j];
            content.appendChild(text(item));
            content.appendChild(br());
        }
        content.appendChild(br());
    }

    var parent = document.querySelector('#' + id);
    parent.appendChild(content);
}

buildGearWithTitles(MLGear.center, 'gear-center');
buildGearWithTitles(MLGear.right, 'gear-right');