import { MigrationInterface, QueryRunner } from "typeorm";
import { God } from "../entity/God.entity";

export class Gods1718131114317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // false -> man
    // true -> woman
    const primordialGods = [
      {
        name: "Aether",
        gender: false,
        translation: "Ether (Bright upper-air)",
        personification: "Light",
        greekName: "Αιθηρ",
        romanName: "Aether",
      },
      {
        name: "Ananke",
        gender: true,
        translation: "Necessity",
        personification: "Goddess of necessity, compulsion and inevitability",
        greekName: "Αναγκη",
        romanName: "Necessitas",
      },
      {
        name: "Chaos",
        gender: true,
        translation: "Gap",
        personification: "Air",
        greekName: "Χαος",
        romanName: "Khaos",
      },
      {
        name: "Chronos",
        gender: false,
        translation: "Time",
        personification: "God of time",
        greekName: "Χρονος",
        romanName: "Chronos",
      },
      {
        name: "Erebos",
        gender: false,
        translation: "Darkness",
        personification: "Darkness",
        greekName: "Ερεβος",
        romanName: "Erebus",
      },
      {
        name: "Eros",
        gender: false,
        translation: "Sexual Desire",
        personification: "Desire",
        greekName: "Ερος",
        romanName: "Amor",
      },
      {
        name: "Gaea",
        gender: true,
        translation: "Earth",
        personification: "Earth",
        greekName: "Γαια",
        romanName: "Terra",
      },
      {
        name: "Hemera",
        gender: true,
        translation: "Day",
        personification: "Day",
        greekName: "Ἡμερα",
        romanName: "Dies",
      },
      {
        name: "Tartaros",
        gender: false,
        translation: null,
        personification: "the Pit",
        greekName: "Ταρταρος",
        romanName: "Tartarus",
      },

      {
        name: "Nyx",
        gender: true,
        translation: "Night",
        personification: "Night",
        greekName: "Νυξ",
        romanName: "Nox",
      },

      {
        name: "Ouranos",
        gender: false,
        translation: "Sky/Heaven",
        personification: "Sky",
        greekName: "Ουρανος",
        romanName: "Uranus",
      },
      {
        name: "Ourea",
        gender: false,
        translation: "Mountains",
        personification: "Mountains",
        greekName: "Ουρος",
        romanName: "Dies",
      },
      {
        name: "Pontus",
        gender: false,
        personification: "Sea",
        greekName: "Ποντος",
        romanName: "Pontus",
      },

      {
        name: "Thalassa",
        gender: true,
        translation: "Sea",
        personification: "Goddess of the sea",
        greekName: "Θαλασσα",
        romanName: "Mare",
      },

      // TITANS
      {
        name: "Iapetos",
        gender: false,
        personification: "Wound/Pierce",
        greekName: "Ιαπετος",
        romanName: "Mons",
      },
      {
        name: "Okeanos",
        gender: false,
        translation: "River Ocean",
        personification: "River Ocean",
        greekName: "Ωκεανος",
        romanName: "Oceanus",
      },
      {
        name: "Tethys",
        gender: false,
        translation: "Nurse/Grandmother",
        personification: "Fresh Water",
        greekName: "Τηθυς",
        romanName: "Tethys",
      },
      {
        name: "Hyperion",
        gender: false,
        translation: "He who Goes Above/Watches from Above",
        personification: "Heavenly Light",
        greekName: "Ὑπεριων",
        romanName: "Hyperion",
      },
      {
        name: "Theia",
        gender: true,
        translation: "Sight/Prophecy",
        personification: "Sight and the shining ether of the bright blue sky",
        greekName: "Θεια",
        romanName: "Theia",
      },
      {
        name: "Phoebe",
        gender: false,
        translation: "Bright/Prophetic",
        personification: "Bright intellect",
        greekName: "Φοιβη",
        romanName: "Phoebe",
      },
      {
        name: "Kronus",
        gender: false,
        translation: "Time",
        personification: "Time",
        greekName: "Κρονος",
        romanName: "Saturnus",
      },
      {
        name: "Rheia",
        gender: true,
        translation: "Flow/Ease",
        personification: "Female fertility, motherhood, and generation",
        greekName: "Ρεια/Ρεα",
        romanName: "Ops/Opis",
      },
      {
        name: "Themis",
        gender: true,
        translation: "Divine Law/Custom",
        personification: "Divine Law and order",
        greekName: "Θεμις",
        romanName: "Themis",
      },
      {
        name: "Mnemosyne",
        gender: true,
        translation: "Memory",
        personification: "Memory and remembrance",
        greekName: "Μνημοσυνη",
        romanName: "Mnemosyne",
      },
      {
        name: "Krios",
        gender: false,
        translation: "Ram/Ruler",
        personification: null,
        greekName: "Κριως",
        romanName: "Crius",
      },

      // #region CYCLOPS
      {
        name: "Brontes",
        gender: false,
        translation: "Thunder",
        personification: null,
        greekName: "Βροντης",
        romanName: "Brontes",
      },
      {
        name: "Sterops",
        gender: false,
        translation: "Lightning",
        personification: null,
        greekName: "Στεροπης",
        romanName: "Steropes",
      },
      {
        name: "Arges",
        gender: false,
        translation: "Flash",
        personification: null,
        greekName: "Αργης",
        romanName: "Arges",
      },
      // #endregion
      // #region HUNDRED-HANDERS
      {
        name: "Cottus",
        gender: false,
        translation: "Grudge/Rancour",
        personification: null,
        greekName: "Κοττος",
        romanName: "Cottus",
      },
      {
        name: "Bruareus",
        gender: false,
        translation: "Strong/Stout",
        personification: null,
        greekName: "Βριαρεως",
        romanName: "Briareus",
      },
      {
        name: "Gyges",
        gender: false,
        translation: "Of the Earth",
        personification: null,
        greekName: "Γυης",
        romanName: "Gyes",
      },
      // #endregion
      {
        name: "Aphrodite",
        gender: true,
        translation: "Risen from the foam",
        personification: "Love, beauty, pleasure and procreation",
        greekName: "Αφροδιτη",
        romanName: "Venus",
      },

      // INANIMATE
      {
        name: "Ouranos' Genitals",
        gender: false,
        personification: "",
        greekName: "",
        romanName: "",
      },

      // INANIMATE
      {
        //thing
        name: "Ouranos' Blood",
        gender: false,
        personification: "",
        greekName: "",
        romanName: "",
      },

      // GROUP
      // {
      //   name: "Meliae",
      //   gender: true,
      //   personification: "Ash Tree Nymphs",
      //   greekName: "",
      //   romanName: "",
      // },
      // GROUP
      // {
      //   name: "Giants",
      //   // gender: false,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // GROUP
      // {
      //   name: "Erinyes",
      //   // gender: true,
      //   personification: "Furies",
      //   greekName: "",
      //   romanName: "",
      // },

      {
        name: "Thanatos",
        gender: false,
        translation: "Death",
        personification: "Spirit of non-violent Death",
        greekName: "Θανατος",
        romanName: "Mors/Letum",
      },
      {
        name: "Moros",
        gender: false,
        translation: "Doom",
        personification: "Spirit of Doom",
        greekName: "Μορος",
        romanName: "Fatum",
      },
      {
        name: "Hypnos",
        gender: false,
        translation: "Sleep",
        personification: "Spirit of Sleep",
        greekName: "Ὑπνος",
        romanName: "Somnus/Sopor",
      },

      // GROUP
      // {
      //   name: "Oneiroi/Oneiros",
      //   gender: false,
      //   personification: "Dream",
      //   greekName: "ΟνειροςΟνειροι",
      //   romanName: "Somnium/Somnia",
      // },
      {
        name: "Momus",
        gender: false,
        translation: "Blame/Mockery",
        personification:
          "Spirit mockery, blame, ridicule, scorn, complaint and harsh criticism",
        greekName: "Μωμος",
        romanName: "Querella",
      },
      {
        name: "Oizys",
        gender: true,
        translation: "Misery/Woe",
        personification: "Spirit of misery and woe, distress and suffering",
        greekName: "Οιζυς",
        romanName: "Miseria",
      },
      // GROUP
      // {
      //   name: "The Hesperides",
      //   gender: true,
      //   personification: "Nymphs of the Evening",
      //   greekName: "Θανατος",
      //   romanName: "Fatum",
      // },
      {
        name: "Aigle",
        gender: true,
        translation: "Sunlight/Radiance",
        personification: "Radiant good health",
        greekName: "Αιγλη",
        romanName: "Aegle",
      },
      // PLACE?
      // {
      //   name: "Erythea",
      //   gender: true,
      //   personification: "Red ",
      //   greekName: "Red ",
      //   romanName: "Erythea",
      // },
      // NYMPH
      // {
      //   name: "Arethusa",
      //   gender: true,
      //   personification: "War-Swift",
      //   greekName: "Αρεθουσα",
      //   romanName: "Arethusa",
      // },
      // NYMPH
      // {
      //   name: "Hesperia",
      //   gender: true,
      //   personification: "Evening",
      //   greekName: "Ἑσπερις ",
      //   romanName: "Hesperia",
      // },

      // GROUP
      // {
      //   name: "Keres",
      //   gender: true,
      //   personification: "Violent Death/Destiny",
      //   greekName: "Θανατος",
      //   romanName: "Fatum",
      // },

      // #region THE MOIRAI (THE SISTERS OF FATE)
      {
        name: "Klotho",
        gender: true,
        translation: "Spinner of Life's Thread",
        personification: "Inescapable destiny of man",
        greekName: "Κλωθω",
        romanName: "Clotho",
      },
      {
        name: "Lacheises",
        gender: true,
        translation: "Dispense of Lots",
        personification: "Inescapable destiny of man",
        greekName: "Λαχεσις",
        romanName: "Lachesis",
      },
      {
        name: "Atropos",
        gender: true,
        translation: "The Unturnable One",
        personification: "Inescapable destiny of man",
        greekName: "Ατροπος",
        romanName: "Atropus",
      },
      // #endregion

      {
        name: "Nemesis",
        gender: true,
        translation: "Retribution",
        personification:
          "Indignation against, and retribution for, evil deeds and undeserved good fortune",
        greekName: "Νεμεσις",
        romanName: "Nemesis",
      },
      {
        name: "Apate",
        gender: true,
        translation: "Deceit",
        personification: "Spirit of deceit, deception, guile and fraud.",
        greekName: "Απατη",
        romanName: "Fraus",
      },
      {
        name: "Philotes",
        gender: true,
        translation: "Frendship/Affection",
        personification:
          "Spirit of friendship and affection / Spirit of sexual intercourse",
        greekName: "Φιλοτης",
        romanName: "Amicitia",
      },
      {
        name: "Geras",
        gender: false,
        translation: "Old Age",
        personification: "Spirit of old age",
        greekName: "Γηρας",
        romanName: "Senectus",
      },
      {
        name: "Eris",
        gender: true,
        translation: "Discord",
        personification: "Strife, discord, contention and rivalry",
        greekName: "Ερις",
        romanName: "Discordia",
      },

      //
      // ERIS
      //

      {
        name: "Ponos",
        gender: false,
        translation: "Toil",
        personification: "Spirit of hard labour and toil.",
        greekName: "Πονος",
        romanName: "Labor",
      },
      {
        name: "Lethe",
        gender: true,
        translation: "Forgetfulness",
        personification: "Spirit of forgetfulness and oblivion",
        greekName: "Ληθη",
        romanName: "Oblivio",
      },
      {
        name: "Limos",
        gender: true,
        translation: "Hunger/Famine",
        personification: "Spirit of hunger and starvation",
        greekName: "Λιμος",
        romanName: "Fames",
      },

      // GROUP THE ALGEA
      {
        name: "Lupa",
        gender: true,
        translation: "Pain/Grief",
        personification:
          "Spirit of pain and suffering body and mind, grief, sorrow and distress",
        greekName: "Λυπη",
        romanName: "Lupê",
      },
      {
        name: "Ania",
        gender: true,
        translation: "Pain/Grief",
        personification:
          "Spirit of pain and suffering body and mind, grief, sorrow and distress",
        greekName: "Ανια",
        romanName: "Ania",
      },
      {
        name: "Akhos",
        gender: true,
        trabksation: "Sorrow/Distress",
        personification:
          "Spirit of pain and suffering body and mind, grief, sorrow and distress",
        greekName: "Αχος",
        romanName: "Achos",
      },

      // GROUP
      // {
      //   name: "The Hysmani",
      //   // gender: true,
      //   personification: "Battle",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },

      // {
      //   name: "Makhai",
      //   // gender: true,
      //   personification: "War",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },
      // {
      //   name: "The Phonoi",
      //   // gender: true,
      //   personification: "Murder",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },
      // {
      //   name: "The Androktasiai",
      //   // gender: true,
      //   personification: "Manslaughter",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },
      // {
      //   name: "Neikea",
      //   // gender: true,
      //   personification: "Arguments",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },
      // {
      //   name: "Pseudea",
      //   // gender: true,
      //   personification: "Lies",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },
      // {
      //   name: "The Amphillogiai",
      //   // gender: true,
      //   personification: "Disputes",
      //   // greekName: "Ερις",
      //   // romanName: "Discordia",
      // },
      {
        name: "Dysnomia",
        gender: true,
        personification: "Lawlessness",
        greekName: "Δυσνομια",
        romanName: "Dysnomia",
      },
      {
        name: "Ate",
        gender: true,
        translation: "Delusion/Folly",
        personification:
          "Spirit of delusion, infatuation, blind folly, rash action and reckless impulse who led men down the path of ruin",
        greekName: "Ατη",
        romanName: "Ὁρκος",
      },
      {
        name: "Horkos/Horcus",
        gender: false,
        tranlsation: "Oath",
        personification: "Spirit of oaths who punished perjurers",
        greekName: "Ὁρκος",
        romanName: "Jusjurandum",
      },

      //
      // PONTUS
      //
      {
        name: "Nereus",
        gender: false,
        trasnlation: "Wet One",
        personification: "Sea's rich bounty of fish",
        greekName: "Νηρευς",
        romanName: "Nereus",
      },
      {
        name: "Thaumas",
        gender: false,
        translation: "Wonder",
        personification: "Wonders of the sea",
        greekName: "Θαυμας",
        romanName: "Thaumas",
      },
      {
        name: "Phorkys",
        gender: false,
        translation: "Of the Sea",
        personification: "Hidden dangers of the deep",
        greekName: "Φορκυς",
        romanName: "Phorcys",
      },
      {
        name: "Keto",
        gender: true,
        translation: "Sea Monster",
        personification: "Dangers of the sea ",
        greekName: "Κητω",
        romanName: "Ceto",
      },
      {
        name: "Eurybia",
        gender: true,
        translation: "Wide Force",
        personification: "Power over, and mastery of, the sea",
        greekName: "Ευρυβια",
        romanName: "Eurybia",
      },

      // GROUP
      // NEREIDS
      // {
      //   name: "Proto",
      //   gender: true,
      //   translation: "The Receiver",
      //   personification: "Nereid of the first or maiden voyage",
      //   greekName: "Πρωτὼ",
      //   romanName: "Proto",
      // },
      // {
      //   name: "Eukrate",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Sao",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Eudore",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Thetis",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Galene",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Glauke",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Kymothoe",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Speio",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Thoe",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Halia",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Pasithea",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Erato",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Eunike",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Melite",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Eulimene",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Agave",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Doto",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Pherousa",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Dynamene",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Nesaia",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Aktaia",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Doto",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Protomedeia",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Doris II",
      //   gender: true,
      //   translation: "",
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Panope",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Galateia",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Hipponoe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Kymodoke",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Kymatolege",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Amphitrite",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Kymo",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Eione",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Kymatolege",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Halimede",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Kymatolege",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Glaukonome",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Protoporeia",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Leiagora",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Euagora",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Laomeideia",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Poulynoe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Autonoe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Lysianassa",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Euarne",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Psamathe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Menippe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Neso",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Eupompoe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Themisto",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Pronoe",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Nemertes",
      //   gender: true,
      //   personification: "",
      //   greekName: "",
      //   romanName: "",
      // },

      // //
      // //
      // //

      // {
      //   name: "Aello",
      //   gender: true,
      //   personification: "Harpy ",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Okypete",
      //   gender: true,
      //   personification: "Amber ",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Iris",
      //   gender: true,
      //   personification: "Rainbows",
      //   greekName: "",
      //   romanName: "",
      // },

      // // The Old Women
      // {
      //   name: "Pamphredo",
      //   gender: true,
      //   personification: "Graeae",
      //   greekName: "",
      //   romanName: "",
      // },
      // {
      //   name: "Enyo",
      //   gender: true,
      //   personification: "Graeae",
      //   greekName: "",
      //   romanName: "",
      // },

      // {
      //   name: "Dino",
      //   gender: true,
      //   personification: "Graeae",
      //   greekName: "",
      //   romanName: "",
      // },
      // The Gorgons
      {
        name: "Stheno",
        gender: true,
        personification: "",
        greekName: "",
        romanName: "",
      },
      {
        name: "Euryale",
        gender: true,
        personification: "",
        greekName: "",
        romanName: "",
      },
      {
        name: "Medusa",
        gender: true,
        personification: "",
        greekName: "",
        romanName: "",
      },
      {
        name: "Echidna",
        gender: true,
        personification: "",
        greekName: "",
        romanName: "",
      },
      ///
      ///
      //
      {
        name: "Typhoeus",
        gender: false,
        personification: "",
        greekName: "",
        romanName: "",
      },
      {
        name: "Chrysaor",
        gender: false,
        personification: "Gold-blade",
        greekName: "Χρυσαωρ",
        romanName: "Chrysaor",
      },
      {
        name: "Pegasos",
        gender: false,
        personification: "Of the Spring",
        greekName: "Πηγασος",
        romanName: "Pegasus",
      },

      {
        name: "Geryon",
        gender: false,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },
      {
        name: "Orthus",
        gender: false,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },
      {
        name: "Cerberus",
        gender: false,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },
      {
        name: "Hydra",
        gender: true,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },
      {
        name: "Chimera",
        gender: true,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },

      {
        name: "Sphinx",
        gender: true,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },

      {
        name: "Nameian Lion",
        gender: true,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },

      {
        name: "Hesperian Dragon",
        gender: true,
        personification: "Dragon of the West",
        greekName: "Δρακων Ἑσπεριος",
        romanName: "Draco Hesperidum",
      },

      ///\
      ////
      // GROUP
      // The River Gods (3000 sons)
      // {
      //   name: "The Potamoi",
      //   // gender: true,
      //   personification: "River Gods",
      //   // greekName: "Artemis",
      //   // romanName: "Diana",
      // },
      // // The Ocean Gods (3000 daughters)
      // {
      //   name: "The Okeanids",
      //   // gender: true,
      //   personification: "Ocean Goddesses",
      //   // greekName: "Artemis",
      //   // romanName: "Diana",
      // },

      {
        name: "Idya",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Pleione",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Metis",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Eurynome",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Perseis",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Klymene",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Styx",
        gender: true,
        // personification: "Ocean Goddesses",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Electra",
        gender: true,
        personification: "Amber ",
        greekName: "Ηλεκτρη",
        romanName: "Electra",
      },
      {
        name: "Kallioroe",
        gender: true,
        // personification: "Of the Spring",
        // greekName: "Πηγασος",
        // romanName: "Pegasus",
      },
      {
        name: "Doris",
        gender: true,
        personification: "Gift",
        greekName: "Δωρις",
        romanName: "Doris",
      },

      //
      //
      //
      {
        name: "Helios",
        gender: false,
        personification: "Sun",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        name: "Selene",
        gender: true,
        personification: "Moon",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        name: "Eos",
        gender: true,
        personification: "Dawn",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      //
      //
      //
      {
        name: "Pallas",
        gender: false,
        personification: "Dawn",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        name: "Astraios",
        gender: false,
        personification: "Dusk",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        name: "Perses",
        gender: false,
        personification: "Dawn",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      //
      //
      // THE ANEMOI
      {
        name: "Zephyr",
        gender: false,
        personification: "West Wind",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        name: "Boreas",
        gender: false,
        personification: "North Wind",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        name: "Notos",
        gender: false,
        personification: "South Wind",
        // greekName: "Δωρις",
        // romanName: "Doris",
      },
      {
        // Not in hesoids theogony
        name: "Eurus",
        gender: false,
        personification: "East Wind",
        // greekName: "Δωρις",
        // romanName: "Eurus",
      },
      // THE ASTRA
      {
        name: "Phosphorus",
        gender: false,
        personification: "Morgning Star",
        greekName: "Φωσφορος",
        romanName: "Lucifer",
      },
      //
      //
      {
        name: "Zelos",
        gender: false,
        personification: "Zeal",
        // greekName: "Φωσφορος",
        // romanName: "Lucifer",
      },
      {
        name: "Nike",
        gender: true,
        personification: "Victory",
        // greekName: "Φωσφορος",
        // romanName: "Lucifer",
      },
      {
        name: "Bia",
        gender: true,
        personification: "Force",
        // greekName: "Φωσφορος",
        // romanName: "Lucifer",
      },
      {
        name: "Kratos",
        gender: false,
        personification: "Strength",
        // greekName: "Φωσφορος",
        // romanName: "Lucifer",
      },
      {
        name: "Leto",
        gender: true,
        // personification: "Strength",
        // greekName: "Φωσφορος",
        // romanName: "Lucifer",
      },
      {
        name: "Asterie",
        gender: true,
        // personification: "Strength",
        // greekName: "Φωσφορος",
        // romanName: "Lucifer",
      },
      {
        name: "Hekate",
        gender: true,
        personification: "Magic",
        greekName: "Ἑκατη",
        romanName: "Hecate",
      },

      ///
      //
      //
      {
        name: "Atlas",
        gender: false,
        personification: "Holder of the Sky",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Menoetius",
        gender: false,
        personification: "Rashness",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Prometheus",
        gender: false,
        personification: "Fore Sight",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Epimetheus",
        gender: false,
        personification: "Hind Sight",
        // greekName: "Artemis",
        // romanName: "Diana",
      },

      {
        name: "Pandora",
        gender: true,
        personification: "All Gifted",
        // greekName: "Artemis",
        // romanName: "Diana",
      },

      //
      //
      //
      // The Horae
      {
        name: "Eunomia",
        gender: true,
        personification: "Lawfulness",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Dike",
        gender: true,
        personification: "Justice",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Eirene",
        gender: true,
        personification: "Peace",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      //
      //The Charities
      {
        name: "Aglaia",
        gender: true,
        personification: "Beauty",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Euphosyne",
        gender: true,
        personification: "Joy",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Thalia",
        gender: true,
        personification: "Abundance",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Persephone",
        gender: true,
        personification: "Vegetation",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      //
      //
      // Nine Muses
      {
        name: "Clio",
        gender: true,
        personification: "Muse of History",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Euterpe",
        gender: true,
        personification: "Muse of Music",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Thaleia",
        gender: true,
        personification: "Muse of Comedy and Idylls",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Melpomene",
        gender: true,
        personification: "Muse of Tragedy",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Terpsichore",
        gender: true,
        personification: "Muse of Dance and Chorus",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Erato",
        gender: true,
        personification: "Muse of Love Poetry",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Polyhymia",
        gender: true,
        personification: "Muse of Sacred Poetry and Hymns",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Urania",
        gender: true,
        personification: "Muse of Astronomy",
        // greekName: "Artemis",
        // romanName: "Diana",
      },
      {
        name: "Calliope",
        gender: true,
        translation: "Beautiful-Voiced",
        personification: "Muse of Eloquence and Epic Poetry",
        greekName: "Καλλιοπη",
        romanName: "Calliope",
      },

      {
        name: "Apollo",
        gender: false,
        trasnlation: null,
        personification: "God of the sun, music, and prophecy",
        greekName: "Απολλων",
        romanName: "Apollo",
      },
      {
        name: "Artemis",
        gender: true,
        translation: null,
        personification: "Goddess of the hunt and moon",
        greekName: "Αρτεμις",
        romanName: "Diana",
      },
      {
        name: "Hebe",
        gender: true,
        translation: "Youth",
        personification: "Goddess of youth",
        greekName: "Ἡβη",
        romanName: "Juventas",
      },
      {
        name: "Ares",
        gender: false,
        translation: "Bane",
        personification: "God of war, battlelust, courage and civil order",
        greekName: "Αρης",
        romanName: "Mars",
      },
      {
        name: "Eileithyia",
        gender: true,
        translation: "Relieve",
        personification: "Goddess oddess of childbirth and labour pains",
        greekName: "Ειλειθυια",
        romanName: "Lucina",
      },
    ];
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // THE OLYMPIANS
    const gods = [
      {
        name: "Zeus",
        gender: false,
        translation: "Sky",
        personification:
          "God of the sky, weather, law and order, destiny and fate, and kingship",
        greekName: "Zeus",
        romanName: "Jupiter",
      },
      {
        name: "Hestia",
        gender: true,
        translation: "Hearth",
        personification: "Goddess of  hearth and home",
        greekName: "Ἑστια",
        romanName: "Vesta",
      },
      {
        name: "Demeter",
        gender: true,
        translation: "Mother Earth",
        personification: "Goddess of agriculture, grain and bread",
        greekName: "Δημητηρ",
        romanName: "Ceres",
      },
      {
        name: "Hera",
        gender: true,
        translation: "Mistress",
        personification: "Goddess of marriage and family",
        greekName: "Hera",
        romanName: "Juno",
      },
      {
        name: "Hades",
        gender: false,
        translation: "The Unseen",
        personification: "King of the underworld and God of the dead",
        greekName: "Ἁιδης",
        romanName: "Pluto",
      },
      {
        name: "Poseidon",
        gender: false,
        translation: "Lord of the Earth",
        personification: "Sea, earthquakes, floods, drought and horses",
        greekName: "Poseidon",
        romanName: "Neptune",
      },
      {
        name: "Athena",
        gender: true,
        traslation: "Athenai",
        personification: "Wisdom and War",
        greekName: "Athena",
        romanName: "Minerva",
      },
    ];

    for (const godData of primordialGods) {
      const god = queryRunner.manager.create(God, godData);
      await queryRunner.manager.save(god);
    }
    for (const godData of gods) {
      const god = queryRunner.manager.create(God, godData);
      await queryRunner.manager.save(god);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const godNames = [
      "Zeus",
      "Hera",
      "Poseidon",
      "Athena",
      "Apollo",
      "Artemis",
    ];
    for (const name of godNames) {
      await queryRunner.manager.delete(God, { name });
    }
  }
}
