// =====================================================
// DATA: Parties
// =====================================================

const parties = [
    {
        id: "glpvda",
        name: "GroenLinks-PvdA",
        shortName: "GL-PvdA",
        color: "#4CAF50",
        description: "Progressief, groen en sociaal"
    },
    {
        id: "d66",
        name: "D66",
        shortName: "D66",
        color: "#00A86B",
        description: "Progressief-liberaal, onderwijs en innovatie"
    },
    {
        id: "stadspartij",
        name: "Stadspartij Nijmegen",
        shortName: "Stadspartij",
        color: "#FF8C00",
        description: "Lokaal, pragmatisch, onafhankelijk"
    },
    {
        id: "vvd",
        name: "VVD",
        shortName: "VVD",
        color: "#FF6600",
        description: "Liberaal, vrij ondernemerschap"
    },
    {
        id: "sp",
        name: "SP",
        shortName: "SP",
        color: "#FF0000",
        description: "Socialistisch, sociale rechtvaardigheid"
    },
    {
        id: "cda",
        name: "CDA",
        shortName: "CDA",
        color: "#007B5F",
        description: "Christendemocratisch, gemeenschapszin"
    },
    {
        id: "pvdd",
        name: "Partij voor de Dieren",
        shortName: "PvdD",
        color: "#006B3F",
        description: "Dierenwelzijn, natuur en klimaat"
    },
    {
        id: "volt",
        name: "Volt",
        shortName: "Volt",
        color: "#502379",
        description: "Pro-Europees, progressief"
    },
    {
        id: "fvd",
        name: "Forum voor Democratie",
        shortName: "FvD",
        color: "#8B0000",
        description: "Conservatief, directe democratie"
    }
];

// =====================================================
// DATA: Questions with party positions and quotes
// =====================================================
// Position values: 1 = eens, 0 = neutraal, -1 = oneens
// Axis: "econ" (left-right economics) or "prog" (progressive-conservative)

const questions = [
    {
        id: 1,
        category: "Wonen",
        text: "Nijmegen moet minimaal 70% sociale en betaalbare huurwoningen bouwen bij nieuwbouwprojecten.",
        axis: "econ",
        direction: -1, // agree = more left
        positions: {
            glpvda: 1, d66: 0, stadspartij: 0, vvd: -1, sp: 1, cda: 0, pvdd: 1, volt: 0, fvd: -1
        },
        quotes: {
            glpvda: "Minimaal twee derde van alle nieuwbouwwoningen moet betaalbaar zijn: sociale huur, middenhuur of sociale koop.",
            d66: "Nijmegen heeft alle typen woningen nodig. Een starre quotering belemmert de bouwsnelheid die we juist zo hard nodig hebben.",
            stadspartij: "We willen meer betaalbare woningen, maar een vaste norm van 70% is te rigide en past niet bij elk project.",
            vvd: "De markt moet bepalen wat er gebouwd wordt. Gemeentelijke quota leiden tot minder bouwprojecten en hogere wachtlijsten.",
            sp: "Bouwen voor mensen, niet voor winst. Minimaal 70% sociale en betaalbare huur is een absolute ondergrens.",
            cda: "Betaalbare woningen zijn belangrijk, maar we moeten ook ruimte laten voor koopwoningen voor gezinnen en senioren.",
            pvdd: "Wonen is een recht. We steunen een hoog aandeel betaalbare huur, mits de woningen ook duurzaam en groen zijn.",
            volt: "Betaalbaar wonen vraagt om slimme regelgeving, niet alleen om percentages. We kijken naar de totale woonlasten.",
            fvd: "Gemeentelijke bemoeienis met de woningmarkt drijft de bouwkosten op. Laat de markt zijn werk doen."
        }
    },
    {
        id: 2,
        category: "Wonen",
        text: "Nijmeegse starters moeten voorrang krijgen op de woningmarkt boven mensen van buiten de stad.",
        axis: "prog",
        direction: 1, // agree = more conservative/local
        positions: {
            glpvda: 0, d66: -1, stadspartij: 1, vvd: 0, sp: 0, cda: 1, pvdd: -1, volt: -1, fvd: 1
        },
        quotes: {
            glpvda: "We willen lokale binding meewegen, maar geen strikte muren rond de stad. Iedereen verdient een eerlijke kans.",
            d66: "Voorrangsregels op basis van herkomst zijn juridisch kwetsbaar en werken averechts. Bouw meer, dan lost het zich op.",
            stadspartij: "Eigen Nijmegenaren eerst. Jongeren die hier zijn opgegroeid mogen niet verdrongen worden door instroom van elders.",
            vvd: "We zijn voor eerlijke regels, maar harde voorrangsposities op basis van woonplaats botsen met vrijheid van vestiging.",
            sp: "Het woningtekort oplossen helpt iedereen. Extra regels zonder extra bouw schieten hun doel voorbij.",
            cda: "Het is redelijk dat mensen die in Nijmegen geworteld zijn, een streepje voor krijgen bij sociale huurwoningen.",
            pvdd: "Woningtekort los je op door te bouwen, niet door grenzen te trekken. Wij zijn geen voorstander van uitsluitingsbeleid.",
            volt: "Vrijheid van vestiging is een Europees grondrecht. Lokale voorrangsregels zijn een symptoombestrijding.",
            fvd: "Nijmegenaren moeten voorrang krijgen in hun eigen stad. Dat is een kwestie van rechtvaardigheid."
        }
    },
    {
        id: 3,
        category: "Verkeer",
        text: "De maximumsnelheid in de hele stad moet worden verlaagd naar 30 km/u.",
        axis: "prog",
        direction: -1, // agree = more progressive
        positions: {
            glpvda: 1, d66: 0, stadspartij: -1, vvd: -1, sp: 0, cda: -1, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "30 km/u betekent minder ongelukken, meer ruimte voor fietsers, voetgangers en groen. Dit is al ingezet en moet worden doorgezet.",
            d66: "Op woonstraten is 30 km/u logisch, maar een stadsbrede verlaging zonder nuance verslechtert de doorstroming.",
            stadspartij: "Een stadsbrede 30 km/u maatregel maakt Nijmegen onbereikbaar. Bereikbaarheid is ook een sociale kwestie.",
            vvd: "Nijmegen moet bereikbaar blijven voor auto's. Een algehele 30 km/u limiet is niet proportioneel.",
            sp: "Op woonstraten zeker, maar niet overal. We willen maatwerk: veiligheid waar nodig, doorstroming waar dat kan.",
            cda: "Verkeersveiligheid is belangrijk, maar een stadsbrede maatregel schaadt ondernemers en de bereikbaarheid.",
            pvdd: "30 km/u in de hele bebouwde kom zorgt voor minder uitstoot, minder geluid en minder slachtoffers. Wij steunen dit volledig.",
            volt: "Lagere snelheden maken de stad veiliger en leefbaarder. Dit is een bewezen effectieve maatregel.",
            fvd: "Autorijders worden steeds verder beperkt in hun vrijheid. Wij zijn tegen dit soort betuttelende maatregelen."
        }
    },
    {
        id: 4,
        category: "Verkeer",
        text: "Fatbikes moeten worden geweerd uit voetgangersgebieden en drukke winkelstraten in de binnenstad.",
        axis: "prog",
        direction: 1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 1, vvd: 0, sp: 1, cda: 1, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "Fatbikes rijden veel te hard voor voetgangersgebieden. We willen duidelijke regels en handhaving voor de veiligheid.",
            d66: "De veiligheid van voetgangers en fietsers in de binnenstad staat voorop. Fatbikes horen niet thuis in drukke winkelgebieden.",
            stadspartij: "Veiligheid in onze binnenstad gaat voor. Fatbikes zijn prima als vervoermiddel, maar niet overal welkom.",
            vvd: "Handhaving moet proportioneel zijn. We zijn voor gerichte maatregelen, niet voor een algeheel verbod op fatbikes.",
            sp: "Gevaarlijke situaties in de binnenstad moeten worden aangepakt. Fatbikes zijn te snel voor voetgangersgebieden.",
            cda: "De veiligheid van ouderen, kinderen en voetgangers moet boven alles gaan. Fatbikes horen thuis op de rijbaan.",
            pvdd: "Fatbikes veroorzaken gevaarlijke situaties voor kwetsbare voetgangers. Duidelijke zones zijn noodzakelijk.",
            volt: "Slimme mobiliteitsregels betekenen de juiste vervoermiddelen op de juiste plekken. Fatbikes horen niet in voetgangersgebieden.",
            fvd: "Eerst handhaven op bestaande regels voordat we nieuwe verboden invoeren. Laat mensen zelf hun vervoer kiezen."
        }
    },
    {
        id: 5,
        category: "Verkeer",
        text: "Er moet een nieuwe parkeergarage komen onder het Wedrenplein om de binnenstad bereikbaar te houden voor auto's.",
        axis: "econ",
        direction: 1,
        positions: {
            glpvda: -1, d66: -1, stadspartij: 1, vvd: 1, sp: -1, cda: 1, pvdd: -1, volt: -1, fvd: 1
        },
        quotes: {
            glpvda: "Meer parkeerplekken leidt tot meer autoverkeer. We willen juist investeren in alternatieven: fiets, ov en P+R.",
            d66: "De toekomst van de binnenstad ligt bij levendige publieke ruimte, niet bij een nieuwe parkeergarage.",
            stadspartij: "De binnenstad moet bereikbaar blijven voor iedereen, ook voor mensen die niet kunnen fietsen of ov nemen.",
            vvd: "Onze ondernemers hebben klanten nodig die de stad goed kunnen bereiken. Een parkeergarage is daarvoor noodzakelijk.",
            sp: "Geld voor een parkeergarage gaat ten koste van betaalbaar ov voor mensen zonder auto. Andere prioriteiten.",
            cda: "Bereikbaarheid voor ondernemers, bezoekers en mensen met een beperking vraagt om voldoende parkeermogelijkheden.",
            pvdd: "Een nieuwe parkeergarage trekt méér auto's aan en schaadt de luchtkwaliteit. Dit geld moet naar groen en ov.",
            volt: "Investeer in slimme mobiliteit, niet in beton. P+R-faciliteiten aan de stadsrand zijn een betere oplossing.",
            fvd: "Autorijders betalen wegenbelasting en verdienen toegang tot de stad. Bouw die parkeergarage."
        }
    },
    {
        id: 6,
        category: "Milieu",
        text: "Nijmegen moet in 2045 volledig energieneutraal zijn, ook als dat hogere kosten voor bewoners betekent.",
        axis: "prog",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 0, vvd: -1, sp: 0, cda: 0, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "De klimaatcrisis wacht niet. Nijmegen moet koploper zijn in de energietransitie, ook als dat investeringen vraagt.",
            d66: "2045 als stip op de horizon is ambitieus maar haalbaar. Wel moeten de lasten eerlijk worden verdeeld.",
            stadspartij: "Duurzaamheid is belangrijk, maar niet ten koste van de koopkracht van gewone Nijmegenaren. Maak het betaalbaar.",
            vvd: "Klimaatdoelen moeten haalbaar en betaalbaar zijn. Extra kosten bovenop de hoge energierekening zijn niet acceptabel.",
            sp: "Verduurzaming moet voor iedereen betaalbaar zijn. Laat de rekening niet bij huurders en mensen met lage inkomens liggen.",
            cda: "We steunen duurzaamheid, maar de snelheid mag de burger niet overvragen. Realisme is geboden.",
            pvdd: "Energieneutraliteit in 2045 is niet ambitieus genoeg gezien de urgentie. Maar de kosten mogen niet op de gewone burger worden afgewenteld.",
            volt: "De energietransitie vergt investeringen nu om kosten later te besparen. Een klimaatneutrale stad is economisch verstandig.",
            fvd: "De energietransitie kost miljarden en levert nauwelijks klimaatwinst op mondiaal niveau. Stop de overdreven klimaathysterie."
        }
    },
    {
        id: 7,
        category: "Milieu",
        text: "Zonnepanelen moeten verplicht worden op alle nieuwe gebouwen in Nijmegen.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 0, vvd: -1, sp: 1, cda: 0, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "Zonnepanelen op nieuwe gebouwen zijn een no-brainer. Dit verlagen de energiekosten en vermindert de CO2-uitstoot.",
            d66: "Verplichte zonnepanelen bij nieuwbouw is een kosteneffectieve maatregel die we steunen.",
            stadspartij: "We willen duurzame nieuwbouw stimuleren, maar een verplichting moet gepaard gaan met voldoende subsidie.",
            vvd: "Stimuleer zonnepanelen met subsidies, maar maak het niet verplicht. Eigenaren moeten zelf kunnen beslissen.",
            sp: "Zonnepanelen op alle nieuwe gebouwen bespaart kosten voor bewoners en vermindert energiearmoede.",
            cda: "We zijn voor duurzame nieuwbouw, maar de uitvoerbaarheid en kosten voor kleinere projecten moeten meewegen.",
            pvdd: "Zonnepanelen op elk nieuw dak is een minimale eis voor een duurzame stad. Wij steunen een verplichting volledig.",
            volt: "Europa legt dit al op voor overheidsgebouwen. Uitbreiden naar alle nieuwbouw is een logische stap.",
            fvd: "Verplichte zonnepanelen zijn een aanslag op de eigendomsrechten en verhogen de bouwkosten onnodig."
        }
    },
    {
        id: 8,
        category: "Milieu",
        text: "Vervuilende auto's (oude diesels) en benzinebrommers moeten geweerd worden uit de binnenstad.",
        axis: "prog",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: -1, vvd: -1, sp: 0, cda: 0, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "Schone lucht in de binnenstad is een recht. Verouderde diesels en tweetaktbrommers horen daar niet thuis.",
            d66: "Luchtkwaliteit raakt de gezondheid van alle Nijmegenaren. Een milieuzones voor de binnenstad is een verstandige stap.",
            stadspartij: "Niet iedereen kan zich een nieuwe auto veroorloven. We zijn tegen maatregelen die lage inkomens straffen.",
            vvd: "Autorijders die al een oude auto hebben, mogen niet worden buitengesloten van de stad. Zorg eerst voor betaalbare alternatieven.",
            sp: "We willen schone lucht, maar de kosten van vervanging mogen niet bij de gewone arbeider worden gelegd. Compenseer mensen.",
            cda: "Luchtkwaliteit is belangrijk, maar uitstootregels moeten gepaard gaan met eerlijke compensatie voor automobilisten.",
            pvdd: "Luchtvervuiling veroorzaakt duizenden doden per jaar. Vervuilende voertuigen weren uit de binnenstad is een kwestie van volksgezondheid.",
            volt: "Milieuzones zijn effectief bewezen in andere Europese steden. Nijmegen moet hierin mee.",
            fvd: "De auto wordt steeds meer geweerd uit de stad. Dit is klassenpolitiek: mensen met nieuwe auto's welkom, mensen met een oude auto niet."
        }
    },
    {
        id: 9,
        category: "Economie",
        text: "De gemeente moet meer investeren in het aantrekken van startups en technologiebedrijven.",
        axis: "econ",
        direction: 1,
        positions: {
            glpvda: 0, d66: 1, stadspartij: 1, vvd: 1, sp: -1, cda: 1, pvdd: -1, volt: 1, fvd: 0
        },
        quotes: {
            glpvda: "Economische groei moet duurzaam en inclusief zijn. Tech is welkom, maar niet ten koste van betaalbare ruimte.",
            d66: "Nijmegen heeft een sterk kennis-ecosysteem met de Radboud Universiteit. We moeten dat benutten voor innovatieve bedrijvigheid.",
            stadspartij: "Startups en techbedrijven brengen werkgelegenheid. Wij steunen gerichte investeringen om Nijmegen aantrekkelijk te maken.",
            vvd: "Een sterk ondernemersklimaat begint bij het aantrekken van groeibedrijven. De gemeente moet hierin actief zijn.",
            sp: "Goedkope gemeentelijke ruimte voor techbedrijven gaat ten koste van betaalbare ateliers en kleine ondernemers.",
            cda: "Economische diversiteit is goed voor Nijmegen. Techbedrijven naast maakindustrie en zorg zorgt voor een gezonde economie.",
            pvdd: "We willen geen groei om de groei. Techbedrijven zijn welkom als ze bijdragen aan een duurzamere stad.",
            volt: "Innovatieve bedrijven zorgen voor hoogwaardige banen en versterken Nijmegen als kennisstad. Wij steunen dit.",
            fvd: "Overheidssteun voor specifieke bedrijfstakken verstoort de markt. Laat ondernemers zelf hun weg vinden."
        }
    },
    {
        id: 10,
        category: "Cultuur",
        text: "De gemeente moet de Vierdaagsefeesten meerjarig blijven subsidiëren en het evenement verder laten groeien.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 1, vvd: 0, sp: 0, cda: 1, pvdd: -1, volt: 1, fvd: 0
        },
        quotes: {
            glpvda: "De Vierdaagsefeesten is het kloppend hart van Nijmegen. Meerjarige subsidie geeft het festival de stabiliteit die het nodig heeft.",
            d66: "Het festival trekt miljoenen bezoekers en levert een economische impuls van tientallen miljoenen euro's op. Dat verdient steun.",
            stadspartij: "De Vierdaagsefeesten maakt ons trots op onze stad. Nijmegen zonder dit festival is ondenkbaar.",
            vvd: "Het festival is goed voor de economie, maar groei moet niet ten koste gaan van leefbaarheid voor omwonenden.",
            sp: "Het festival is geweldig, maar extra subsidie voor groei moet verantwoord worden. Toegankelijkheid voor alle Nijmegenaren is de prioriteit.",
            cda: "De Vierdaagsefeesten verbindt mensen en is een prachtig visitekaartje voor onze stad. Wij steunen meerjarige subsidie.",
            pvdd: "Een festival van deze omvang heeft grote milieu- en geluidsoverlast. Groei moet gepaard gaan met strengere duurzaamheidseisen.",
            volt: "Cultuursubsidies zijn investeringen in sociale cohesie. De Vierdaagsefeesten is een prachtig voorbeeld van een evenement dat mensen verbindt.",
            fvd: "Culturele evenementen moeten zichzelf kunnen bedruipen. De belastingbetaler hoeft niet te subsidieren wat commercieel rendabel is."
        }
    },
    {
        id: 11,
        category: "Sociaal",
        text: "De bezuinigingen op armoederegelingen en de Meedoenregeling moeten worden teruggedraaid.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 0, stadspartij: 1, vvd: -1, sp: 1, cda: 0, pvdd: 1, volt: 0, fvd: -1
        },
        quotes: {
            glpvda: "Bezuinigen op de armsten is een politieke keuze. Wij kiezen voor een andere prioritering: mensen boven begrotingsdiscipline.",
            d66: "We willen bezuinigingen terugdraaien waar ze het hardst raken, maar moeten dit financieel verantwoord doen.",
            stadspartij: "De Meedoenregeling laat mensen meedoen aan de samenleving. Dat terugdraaien treft de meest kwetsbare Nijmegenaren.",
            vvd: "De gemeente moet financieel verantwoordelijk handelen. We moeten eerlijk zijn over wat we kunnen betalen.",
            sp: "Bezuinigen op armoederegelingen is asociaal beleid. Dit geld moet er terug komen, desnoods door hogere ozb voor de rijksten.",
            cda: "Armoedebeleid is mensenwerk. We willen kijken naar de menselijke maat, ook als dat betekent dat bezuinigingen worden teruggedraaid.",
            pvdd: "Sociale zekerheid is een fundamenteel recht. Bezuinigingen op de armsten horen niet thuis in een beschaafd Nijmegen.",
            volt: "Een inclusieve samenleving vraagt om een sterk sociaal vangnet. Bezuinigingen hierop zijn kortzichtig.",
            fvd: "Sociale regelingen moeten effectief zijn en gericht op wie het echt nodig heeft, niet als algemene subsidie."
        }
    },
    {
        id: 12,
        category: "Sociaal",
        text: "De gemeente moet strenger controleren op bijstandsfraude.",
        axis: "prog",
        direction: 1,
        positions: {
            glpvda: -1, d66: 0, stadspartij: 0, vvd: 1, sp: -1, cda: 1, pvdd: -1, volt: -1, fvd: 1
        },
        quotes: {
            glpvda: "Fraudebestrijding mag niet leiden tot een cultuur van wantrouwen. De meeste bijstandsgerechtigden doen het goed.",
            d66: "Fraude aanpakken is terecht, maar het systeem moet menselijk blijven. We zijn tegen het criminaliserend benaderen van bijstandsgerechtigden.",
            stadspartij: "Rechtmatig gebruik van voorzieningen is vanzelfsprekend. Maar handhaving mag niet ontaarden in bureaucratisch intimideren.",
            vvd: "Wie fraudeert met belastinggeld moet worden aangepakt. Strengere controle beschermt ook mensen die terecht een uitkering ontvangen.",
            sp: "Fraude moet worden aangepakt, maar de focus op bijstandsfraude is disproportioneel. Zet handhavingscapaciteit in op belastingfraude.",
            cda: "Eerlijkheid en betrouwbaarheid gelden voor iedereen. Fraude met gemeenschapsgeld schaadt het draagvlak voor solidariteit.",
            pvdd: "Systemen moeten mensen helpen, niet controleren. Investeer in begeleiding in plaats van repressieve handhaving.",
            volt: "Handhaving is nodig, maar systematisch wantrouwen tegenover uitkeringsgerechtigden is niet de juiste aanpak.",
            fvd: "Belastinggeld is gemeenschapsgeld. Fraude hiermee moet keihard worden aangepakt."
        }
    },
    {
        id: 13,
        category: "Sociaal",
        text: "De Voedselbank moet worden omgevormd tot een 'sociale supermarkt' waar mensen met waardigheid boodschappen kunnen doen.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 0, stadspartij: 1, vvd: 0, sp: 1, cda: 0, pvdd: 1, volt: 0, fvd: -1
        },
        quotes: {
            glpvda: "Armoede moet geen schaamte zijn. Een sociale supermarkt geeft mensen keuze en waardigheid, dat is precies wat nodig is.",
            d66: "Het concept is interessant, maar de financiering en uitvoering verdienen zorgvuldige analyse voordat we dit toezeggen.",
            stadspartij: "Mensen die afhankelijk zijn van voedselbank verdienen meer dan een uitdeelpunt. Een sociale supermarkt is een waardig alternatief.",
            vvd: "Een sympathiek idee, maar de gemeente moet oppassen voor de kosten. Onderzoek eerst of dit uitvoerbaar is.",
            sp: "Niemand zou afhankelijk moeten zijn van een voedselbank. Maar zolang dat zo is, verdient iedereen een waardige manier om boodschappen te doen.",
            cda: "Menselijke waardigheid staat bij ons centraal. Een sociale supermarkt past bij een samenleving die naar elkaar omkijkt.",
            pvdd: "Een sociale supermarkt met focus op plantaardige, duurzame producten is zowel sociaal als milieuvriendelijk.",
            volt: "Innovatieve sociale voorzieningen als de sociale supermarkt verdienen een kans. Wij staan open voor pilots.",
            fvd: "De overheid moet armoede niet institutionaliseren. Zorg dat mensen meer verdienen in plaats van subsidieafhankelijkheid te vergroten."
        }
    },
    {
        id: 14,
        category: "Veiligheid",
        text: "Het aantal toezichthouders/handhavers (BOA's) in Nijmegen moet verdubbeld worden.",
        axis: "prog",
        direction: 1,
        positions: {
            glpvda: 0, d66: 0, stadspartij: 1, vvd: 1, sp: 0, cda: 1, pvdd: -1, volt: 0, fvd: 1
        },
        quotes: {
            glpvda: "Handhaving is soms nodig, maar de oorzaken van overlast aanpakken werkt beter dan meer blauw op straat.",
            d66: "We willen gerichte inzet van BOA's op plekken waar dat echt nodig is. Verdubbeling als doel op zich is te ongenuanceerd.",
            stadspartij: "Zichtbaarheid van handhaving maakt de stad veiliger. Meer BOA's in wijken met overlast is een concrete maatregel.",
            vvd: "Veiligheid begint bij zichtbare handhaving. Meer BOA's op straat stuurt gedrag bij en zorgt voor een prettigere stad.",
            sp: "BOA's zijn geen vervanging voor sociaal beleid. Investeer in buurtwerk en jongerenwerk naast handhaving.",
            cda: "Veiligheid is een basisrecht. Meer toezichthouders in wijken geeft mensen het gevoel dat er naar hen geluisterd wordt.",
            pvdd: "Meer handhaving lost onderliggende sociale problemen niet op. We willen investeren in preventie, niet in repressie.",
            volt: "Slimme handhaving is beter dan meer handhaving. Data-gedreven inzet van BOA's is efficiënter dan verdubbeling.",
            fvd: "Nijmegen heeft een veiligheidsprobleem dat om daadkrachtig optreden vraagt. Meer BOA's is een noodzakelijke stap."
        }
    },
    {
        id: 15,
        category: "Veiligheid",
        text: "Er moeten meer camera's in de openbare ruimte komen om de veiligheid te verbeteren.",
        axis: "prog",
        direction: 1,
        positions: {
            glpvda: -1, d66: -1, stadspartij: 0, vvd: 1, sp: -1, cda: 1, pvdd: -1, volt: -1, fvd: 1
        },
        quotes: {
            glpvda: "Massasurveillance tast de privacy van onschuldige burgers aan. We zijn terughoudend met uitbreiding van cameratoezicht.",
            d66: "Privacy is een grondrecht. Meer camera's zijn alleen acceptabel bij bewezen noodzaak, niet als algemene maatregel.",
            stadspartij: "Camera's kunnen helpen bij het oplossen van misdrijven. We willen een zorgvuldige afweging per locatie.",
            vvd: "Camera's werken preventief en helpen bij opsporing. Meer cameratoezicht is een concrete bijdrage aan een veiliger Nijmegen.",
            sp: "Cameratoezicht is kostbaar en raakt de privacy van alle burgers, niet alleen van criminelen. Gerichte inzet, niet massaal uitbreiden.",
            cda: "Veiligheid en privacy moeten in balans zijn. Op plekken met aantoonbare problemen kan cameratoezicht helpen.",
            pvdd: "Surveillance staat haaks op een vrije samenleving. Wij zijn principieel tegen uitbreiding van cameratoezicht in de openbare ruimte.",
            volt: "Proportioneel cameratoezicht met goede privacywaarborgen kan bijdragen aan veiligheid. Maar het mag geen doel op zich worden.",
            fvd: "Veiligheid op straat moet prioriteit hebben. Meer camera's in probleemgebieden is een effectief middel."
        }
    },
    {
        id: 16,
        category: "Democratie",
        text: "Bewoners moeten via een bindend referendum mee kunnen beslissen over grote gemeentelijke besluiten.",
        axis: "prog",
        direction: 0,
        positions: {
            glpvda: 0, d66: 1, stadspartij: 1, vvd: 0, sp: 1, cda: 0, pvdd: 1, volt: 1, fvd: 1
        },
        quotes: {
            glpvda: "Inspraak is belangrijk, maar bindende referenda kunnen leiden tot impasses bij complexe langetermijnvraagstukken.",
            d66: "Directe democratie versterkt de betrokkenheid van burgers bij hun stad. Een goed ingericht referendumrecht hoort daarbij.",
            stadspartij: "De Nijmegenaar verdient meer directe invloed. Bindende referenda zijn een aanvulling op de representatieve democratie.",
            vvd: "Volksraadpleging is waardevol, maar bestuur vraagt ook om daadkracht. Referenda zijn niet altijd het juiste instrument.",
            sp: "Democratie betekent dat mensen zelf mogen beslissen. Een bindend referendum geeft burgers echte macht.",
            cda: "We zijn terughoudend over bindende referenda, maar willen wel meer ruimte voor burgerparticipatie bij grote besluiten.",
            pvdd: "Betrokken burgers zijn de beste bescherming van de leefomgeving. Wij steunen uitbreiding van democratische instrumenten.",
            volt: "Participatieve democratie is de toekomst. Met goede spelregels zijn bindende referenda een verrijking.",
            fvd: "Directe democratie is de kern van ons programma. De burger, niet de politieke elite, moet de koers bepalen."
        }
    },
    {
        id: 17,
        category: "Cultuur",
        text: "Nijmegen moet meer investeren in culturele voorzieningen en festivals.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 1, vvd: 0, sp: 0, cda: 0, pvdd: 0, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "Cultuur is geen luxe maar een noodzaak. We willen cultuur toegankelijk maken voor alle Nijmegenaren, ook in de wijken.",
            d66: "Een levendige cultuurstad trekt talent, bedrijven en toeristen aan. Investeren in cultuur is investeren in de toekomst.",
            stadspartij: "Nijmegen is een rijke cultuurstad. We willen lokale initiatieven en kleinschalige culturele plekken versterken.",
            vvd: "Cultuur mag niet alleen van de overheid afhankelijk zijn. Private samenwerking en eigen inkomsten zijn ook belangrijk.",
            sp: "Cultuurinvesteringen zijn goed, maar mogen niet ten koste gaan van sociale voorzieningen. Prioriteer toegankelijkheid.",
            cda: "Cultuur verbindt mensen en versterkt de sociale cohesie. We ondersteunen investeringen in cultuur met aandacht voor traditie.",
            pvdd: "Cultuurinvesteringen zijn welkom als ze ook de natuur en dierenwelzijn integreren. Duurzame festivals zijn de toekomst.",
            volt: "Cultuur is de ziel van de stad. Meer investeren in festivals en voorzieningen maakt Nijmegen aantrekkelijker.",
            fvd: "Culturele instellingen moeten hun eigen broek ophouden. Minder subsidie dwingt tot innovatie en zelfredzaamheid."
        }
    },
    {
        id: 18,
        category: "Dierenwelzijn",
        text: "De gemeente moet kiezen voor volledig plantaardige catering bij alle gemeentelijke evenementen en kantines.",
        axis: "prog",
        direction: -1,
        positions: {
            glpvda: 0, d66: 0, stadspartij: -1, vvd: -1, sp: 0, cda: -1, pvdd: 1, volt: 0, fvd: -1
        },
        quotes: {
            glpvda: "We willen duurzame catering bevorderen, maar zijn terughoudend over een verplichting. Stimuleer en verleid in plaats van verbieden.",
            d66: "Duurzame keuzes in gemeentelijke catering zijn logisch, maar keuzevrijheid voor werknemers moet worden gerespecteerd.",
            stadspartij: "Voedselkeuze is privé. De gemeente heeft niets te zoeken in het bord van haar medewerkers of festivalbezoekers.",
            vvd: "Dit is betutteling van de ergste soort. Mensen mogen zelf weten wat ze eten. De gemeente moet hier buiten blijven.",
            sp: "Plantaardig eten moet een optie zijn, maar verplicht stellen is een brug te ver. Maak gezond en duurzaam eten betaalbaar voor iedereen.",
            cda: "Voedselkeuze is een persoonlijke en culturele zaak. De gemeente moet dit niet opleggen.",
            pvdd: "Gemeentelijke catering volledig plantaardig maken is een kleine stap met een grote impact op klimaat en dierenwelzijn.",
            volt: "Duurzame catering is een verantwoorde keuze. We kunnen hier een voortrekkersrol spelen zonder het anderen op te leggen.",
            fvd: "De gemeente moet stoppen met de ideologische agenda rondom vlees en voeding. Dit is een aanval op de Nederlandse eetcultuur."
        }
    },
    {
        id: 19,
        category: "Onderwijs",
        text: "De gemeente moet extra investeren in gelijke kansen in het onderwijs, ongeacht in welke wijk een kind opgroeit.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 1, vvd: 0, sp: 1, cda: 1, pvdd: 1, volt: 1, fvd: 0
        },
        quotes: {
            glpvda: "Je buurt mag je kansen niet bepalen. Extra investering in scholen in achterstandswijken is een prioriteit.",
            d66: "Gelijke kansen in het onderwijs is een kernwaarde van D66. We willen kansengelijkheid vanaf de vroegste leeftijd.",
            stadspartij: "Elk kind in Nijmegen verdient dezelfde kansen. Wijk-gebonden ongelijkheid in het onderwijs moet worden aangepakt.",
            vvd: "Goed onderwijs is belangrijk, maar de gemeente moet bewaak dat het geld effectief wordt besteed en niet verloren gaat aan bureaucratie.",
            sp: "Onderwijsongelijkheid is klassenongelijkheid. Extra investeringen in kansarme wijken zijn een kwestie van rechtvaardigheid.",
            cda: "Ieder kind verdient goed onderwijs, dicht bij huis. We steunen investering in buurtscho­len en maatschappelijke opvang.",
            pvdd: "Natuur- en milieueducatie hoort ook bij kansengelijkheid. We willen dat elk kind toegang heeft tot groen en buitenonderwijs.",
            volt: "Kansengelijkheid in het onderwijs is de basis van een eerlijke samenleving. Wij steunen gerichte investeringen.",
            fvd: "Onderwijs is primair een taak van scholen en ouders. Gemeentelijke bemoeienis moet beperkt blijven."
        }
    },
    {
        id: 20,
        category: "Integratie",
        text: "Nijmegen moet statushouders actief begeleiden bij inburgering en hen zo snel mogelijk laten meedoen aan de samenleving.",
        axis: "prog",
        direction: -1, // agree = more progressive
        positions: {
            glpvda: 1, d66: 1, stadspartij: 0, vvd: 0, sp: 1, cda: 0, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "Inburgering begint bij meedoen. De gemeente moet statushouders actief begeleiden naar taal, werk en school.",
            d66: "Snelle integratie is in ieders belang. Wij willen een actief gemeentelijk inburgeringsaanbod met taal en werktoeleiding.",
            stadspartij: "Inburgering is een wederzijdse verantwoordelijkheid. De gemeente kan ondersteunen, maar nieuwkomers moeten ook zelf de stap zetten.",
            vvd: "Inburgering is primair een eigen verantwoordelijkheid. Gemeentelijke middelen moeten gericht ingezet worden, niet als open einderegeling.",
            sp: "Iedereen die hier woont verdient een eerlijke kans. Goede begeleiding bij inburgering bespaart op termijn maatschappelijke kosten.",
            cda: "Integratie vraagt om wederzijdse inspanning. De gemeente kan helpen, maar verwacht ook dat nieuwkomers zich inzetten voor de Nijmeegse gemeenschap.",
            pvdd: "Een inclusieve stad verwelkomt iedereen. Actieve inburgering vergroot kansen en sociale cohesie.",
            volt: "Integratie is een Europese én lokale opgave. Wij steunen actief inburgeringsbeleid als investering in onze samenleving.",
            fvd: "De instroom van statushouders legt een te grote druk op Nijmeegse voorzieningen. Wij zijn tegen een actief spreidingsbeleid."
        }
    },
    {
        id: 21,
        category: "Leefbaarheid",
        text: "De binnenstad moet autoluw worden met meer ruimte voor voetgangers en fietsers.",
        axis: "prog",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 0, vvd: -1, sp: 0, cda: 0, pvdd: 1, volt: 1, fvd: -1
        },
        quotes: {
            glpvda: "Een autoluwe binnenstad is leefbaarder, schoner en aantrekkelijker voor ondernemers. Dit is de toekomst van het stadcentrum.",
            d66: "Meer ruimte voor voetgangers en fietsers maakt de binnenstad aantrekkelijker. Wij steunen een geleidelijke autoluwe transitie.",
            stadspartij: "Een aantrekkelijke binnenstad vraagt om bereikbaarheid voor iedereen: te voet, per fiets én per auto.",
            vvd: "De auto moet welkom blijven in de stad. Ondernemers zijn afhankelijk van klanten die makkelijk kunnen parkeren.",
            sp: "We willen meer ruimte voor mensen in de binnenstad. Minder auto's betekent meer terrassen, groen en ontmoeting.",
            cda: "Meer ruimte voor voetgangers is goed, maar we moeten oppassen dat de binnenstad niet onbereikbaar wordt voor minder mobielen.",
            pvdd: "Een autoluwe binnenstad is beter voor de luchtkwaliteit, het klimaat en de leefkwaliteit van mens en dier.",
            volt: "De meest leefbare Europese binnensteden zijn autoluw. Nijmegen moet deze richting opgaan.",
            fvd: "Autorijders worden systematisch buitengesloten van de binnenstad. Stop deze anti-auto politiek."
        }
    },
    {
        id: 22,
        category: "Zorg",
        text: "De gemeente moet de eigen bijdrage voor de aanvullende gemeentelijke zorgverzekering niet verhogen.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 1, d66: 0, stadspartij: 1, vvd: -1, sp: 1, cda: 0, pvdd: 1, volt: 0, fvd: 0
        },
        quotes: {
            glpvda: "Zorg moet betaalbaar zijn voor iedereen. De eigen bijdrage niet verhogen is een concrete daad voor mensen met een smalle beurs.",
            d66: "We willen zorg betaalbaar houden, maar moeten ook eerlijk zijn over de financiële haalbaarheid op lange termijn.",
            stadspartij: "De zorgkosten voor inwoners zijn al hoog genoeg. Wij zijn tegen een verhoging van de eigen bijdrage.",
            vvd: "Financiële duurzaamheid van de gemeentelijke zorgverzekering vraagt om eerlijke bijdragen van alle deelnemers.",
            sp: "Zorgkosten verhogen voor mensen die al moeite hebben met rondkomen is onacceptabel. Handen af van de eigen bijdrage.",
            cda: "Solidariteit in de zorg is een christendemocratische kernwaarde. De eigen bijdrage mag niet stijgen voor de kwetsbaarsten.",
            pvdd: "Zorg is geen markt. De gemeente moet inzetten op preventie en de eigen bijdrage voor lage inkomens verlagen.",
            volt: "Betaalbare zorg is een randvoorwaarde voor een inclusieve stad. Wij zijn terughoudend over verhogingen.",
            fvd: "Eerlijke bijdragen zijn gerechtvaardigd. De gemeente moet de kosten transparant in kaart brengen."
        }
    },
    {
        id: 23,
        category: "Economie",
        text: "De gemeente moet bij aanbestedingen en subsidies voorrang geven aan lokaal gevestigde Nijmeegse bedrijven.",
        axis: "econ",
        direction: 1, // agree = more right/protectionist
        positions: {
            glpvda: -1, d66: -1, stadspartij: 1, vvd: -1, sp: 0, cda: 0, pvdd: -1, volt: -1, fvd: 1
        },
        quotes: {
            glpvda: "Aanbestedingen moeten sociaal en duurzaam zijn, niet protectionistisch. Gunnen op herkomst verlaagt de kwaliteit.",
            d66: "Lokale voorkeur bij aanbestedingen is in strijd met Europese regelgeving en vrije concurrentie. Kwaliteit moet leidend zijn.",
            stadspartij: "Nijmeegs belastinggeld moet zoveel mogelijk terugvloeien naar Nijmeegse ondernemers. Dat is rechtvaardig.",
            vvd: "Eerlijke concurrentie levert de beste prijs en kwaliteit. Kunstmatige voorkeur voor lokale bedrijven schaadt de belastingbetaler.",
            sp: "We willen lokale economie versterken, maar formele voorkeursbehandeling is juridisch kwetsbaar en lost de echte problemen niet op.",
            cda: "Lokale verankering van bedrijven is waardevol. We willen zoeken naar manieren om Nijmeegse ondernemers een eerlijke kans te geven.",
            pvdd: "Aanbestedingen moeten duurzaamheid en dierenwelzijn als criteria meenemen, niet alleen herkomst.",
            volt: "Protectionisme op lokaal niveau ondermijnt de Europese interne markt. Innovatie en kwaliteit moeten de doorslag geven.",
            fvd: "Nijmeegs geld hoort in Nijmeegse handen. We moeten lokale ondernemers beschermen tegen concurrentie van buiten."
        }
    },
    {
        id: 24,
        category: "Economie",
        text: "Winkels in de binnenstad moeten ook op zondag open mogen zijn.",
        axis: "prog",
        direction: -1,
        positions: {
            glpvda: 1, d66: 1, stadspartij: 1, vvd: 1, sp: 0, cda: -1, pvdd: 0, volt: 1, fvd: 0
        },
        quotes: {
            glpvda: "Zondagopenstelling geeft ondernemers en consumenten meer vrijheid en is goed voor de levendigheid van de binnenstad.",
            d66: "Ondernemers moeten zelf kunnen bepalen wanneer ze open zijn. Wij zijn voor volledige vrijheid in openingstijden.",
            stadspartij: "Zondagopenstelling is goed voor de Nijmeegse binnenstad en trekt bezoekers. We steunen dit volledig.",
            vvd: "Vrijheid voor ondernemers betekent ook: zelf bepalen wanneer je open bent. Verplichte sluitingen horen niet in een liberale stad.",
            sp: "Zondagswerk moet goed worden beloond. We zijn niet principieel tegen, maar waken voor uitbuiting van winkelmedewerkers.",
            cda: "De zondag als rustdag heeft culturele en maatschappelijke waarde. We zijn terughoudend over volledige zondagsopenstelling.",
            pvdd: "We staan neutraal tegenover zondagsopenstelling, maar vragen wel aandacht voor dierenwelzijn rondom koopzondagen.",
            volt: "Koopzondagen stimuleren de economie en passen bij een moderne, Europese stad als Nijmegen.",
            fvd: "Ondernemers moeten zelf beslissen of ze op zondag open zijn. Geen overheidsdictatuur over openingstijden."
        }
    },
    {
        id: 25,
        category: "Verkeer",
        text: "Het openbaar vervoer in Nijmegen moet gratis worden voor alle inwoners.",
        axis: "econ",
        direction: -1,
        positions: {
            glpvda: 0, d66: -1, stadspartij: -1, vvd: -1, sp: 1, cda: -1, pvdd: 0, volt: 0, fvd: -1
        },
        quotes: {
            glpvda: "Gratis ov is een sympathiek idee maar onbetaalbaar. We willen het ov goedkoper maken voor mensen met lage inkomens.",
            d66: "Gratis ov klinkt aantrekkelijk maar is slecht voor de kwaliteit. Investeer liever in betere verbindingen en hogere frequenties.",
            stadspartij: "Gratis ov is een utopie die de gemeente niet kan betalen. Focus op betere verbindingen en bereikbaarheid.",
            vvd: "Gratis ov is niet gratis: iemand betaalt altijd. Laat de gebruiker een eerlijke bijdrage leveren.",
            sp: "Openbaar vervoer is een publieke voorziening die voor iedereen toegankelijk moet zijn. Gratis ov is onze ambitie.",
            cda: "Gratis ov is financieel onverantwoord. Investeer liever in betere routes en frequenties.",
            pvdd: "Gratis ov vermindert autogebruik en is goed voor het klimaat. We ondersteunen dit als langetermijndoel.",
            volt: "Betaalbaar ov is een prioriteit, maar gratis betekent dat de kwaliteit elders op de begroting onder druk komt.",
            fvd: "Gratis ov bestaat niet. De rekening wordt altijd doorgeschoven naar de belastingbetaler."
        }
    }
];

