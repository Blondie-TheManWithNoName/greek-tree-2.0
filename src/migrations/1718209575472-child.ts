import { MigrationInterface, QueryRunner } from "typeorm";
import { God } from "../entity/God.entity";
import { Partners } from "../entity/Partners.entity";

export class Child1718209575472 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const children = [
      {
        name: "Nyx",
        parents_id: 1,
      },
      {
        name: "Erebos",
        parents_id: 1,
      },
      {
        name: "Aether",
        parents_id: 2,
      },
      {
        name: "Hemera",
        parents_id: 2,
      },
      {
        name: "Ouranos",
        parents_id: 3,
      },
      {
        name: "Oura",
        parents_id: 3,
      },
      {
        name: "Pontus",
        parents_id: 3,
      },

      // TITANS

      {
        name: "Iapetos",
        parents_id: 4,
      },

      {
        name: "Okeanos",
        parents_id: 4,
      },

      {
        name: "Tethys",
        parents_id: 4,
      },

      {
        name: "Hyperion",
        parents_id: 4,
      },

      {
        name: "Theia",
        parents_id: 4,
      },

      {
        name: "Phoebe",
        parents_id: 4,
      },

      {
        name: "Kronus",
        parents_id: 4,
      },

      {
        name: "Rheia",
        parents_id: 4,
      },

      {
        name: "Pontus",
        parents_id: 4,
      },

      {
        name: "Themis",
        parents_id: 4,
      },

      {
        name: "Mnemosyne",
        parents_id: 4,
      },

      {
        name: "Kreios",
        parents_id: 4,
      },

      // CYCLOPS

      {
        name: "Brontes",
        parents_id: 4,
      },
      {
        name: "Sterops",
        parents_id: 4,
      },
      {
        name: "Arges",
        parents_id: 4,
      },

      // HUNDRED HANDERS

      {
        name: "Cottus",
        parents_id: 4,
      },
      {
        name: "Bruareus",
        parents_id: 4,
      },
      {
        name: "Gyges",
        parents_id: 4,
      },

      // GROUP
      {
        name: "Meliae",
        parents_id: 5,
      },
      // GROUP
      {
        name: "Giants",
        parents_id: 5,
      },
      // GROUP
      {
        name: "Erinyes",
        parents_id: 5,
      },
      {
        name: "Aphrodite",
        parents_id: 6,
      },

      //
      //
      //
      {
        name: "Thanatos",
        parents_id: 7,
      },
      {
        name: "Moros",
        parents_id: 7,
      },
      {
        name: "Hypnos",
        parents_id: 7,
      },
      {
        name: "Oneiros",
        parents_id: 7,
      },
      {
        name: "Momus",
        parents_id: 7,
      },
      {
        name: "Oizys",
        parents_id: 7,
      },
      // GROUP
      {
        name: "The Hesperides",
        parents_id: 7,
      },
      {
        name: "Keres",
        parents_id: 7,
      },
      {
        name: "Klotho",
        parents_id: 7,
      },
      {
        name: "Lacheises",
        parents_id: 7,
      },
      {
        name: "Atropos",
        parents_id: 7,
      },
      {
        name: "Nemesis",
        parents_id: 7,
      },
      {
        name: "Apate",
        parents_id: 7,
      },
      {
        name: "Philotes",
        parents_id: 7,
      },
      {
        name: "Geras",
        parents_id: 7,
      },
      {
        name: "Eris",
        parents_id: 7,
      },

      // NYX
      {
        name: "Ponos",
        parents_id: 8,
      },
      {
        name: "Lethe",
        parents_id: 8,
      },
      {
        name: "Lemos",
        parents_id: 8,
      },
      {
        name: "Lupa",
        parents_id: 8,
      },
      {
        name: "Ania",
        parents_id: 8,
      },
      {
        name: "Akhos",
        parents_id: 8,
      },
      {
        name: "The Hysmani",
        parents_id: 8,
      },
      {
        name: "Makhai",
        parents_id: 8,
      },
      {
        name: "The Phonoi",
        parents_id: 8,
      },
      {
        name: "The Androktasiai",
        parents_id: 8,
      },
      {
        name: "Pseudea",
        parents_id: 8,
      },
      {
        name: "The Amphillogiai",
        parents_id: 8,
      },
      {
        name: "Dysnomia",
        parents_id: 8,
      },
      {
        name: "Ate",
        parents_id: 8,
      },
      {
        name: "Horkos",
        parents_id: 8,
      },

      //Pontus
      ///
      {
        name: "Nereus",
        parents_id: 9,
      },
      {
        name: "Thaumas",
        parents_id: 9,
      },
      {
        name: "Phorkys",
        parents_id: 9,
      },
      {
        name: "Keto",
        parents_id: 9,
      },
      {
        name: "Eurybia",
        parents_id: 9,
      },
      {
        name: "Doris",
        parents_id: 9,
      },

      // NEREIDS

      {
        name: "Eurybia",
        parents_id: 10,
      },

      {
        name: "Protho",
        parents_id: 10,
      },

      {
        name: "Eukrate",
        parents_id: 10,
      },

      {
        name: "Sao",
        parents_id: 10,
      },

      {
        name: "Eudore",
        parents_id: 10,
      },

      {
        name: "Thetis",
        parents_id: 10,
      },

      {
        name: "Galene",
        parents_id: 10,
      },

      {
        name: "Glauke",
        parents_id: 10,
      },

      {
        name: "Kymothoe",
        parents_id: 10,
      },

      {
        name: "Speio",
        parents_id: 10,
      },

      {
        name: "Thoe",
        parents_id: 10,
      },

      {
        name: "Halia",
        parents_id: 10,
      },

      {
        name: "Pasithea",
        parents_id: 10,
      },

      {
        name: "Erato",
        parents_id: 10,
      },

      {
        name: "Eunike",
        parents_id: 10,
      },

      {
        name: "Melite",
        parents_id: 10,
      },

      {
        name: "Eulimene",
        parents_id: 10,
      },

      {
        name: "Agave",
        parents_id: 10,
      },

      {
        name: "Doto",
        parents_id: 10,
      },

      {
        name: "Proto",
        parents_id: 10,
      },

      {
        name: "Pherousa",
        parents_id: 10,
      },

      {
        name: "Dynamene",
        parents_id: 10,
      },

      {
        name: "Nesaia",
        parents_id: 10,
      },

      {
        name: "Aktaia",
        parents_id: 10,
      },

      {
        name: "Doto",
        parents_id: 10,
      },

      {
        name: "Protomedeia",
        parents_id: 10,
      },

      {
        name: "Doris II",
        parents_id: 10,
      },

      {
        name: "Panope",
        parents_id: 10,
      },

      {
        name: "Galateia",
        parents_id: 10,
      },

      {
        name: "Hipponoe",
        parents_id: 10,
      },

      {
        name: "Kymodoke",
        parents_id: 10,
      },

      {
        name: "Kymatolege",
        parents_id: 10,
      },

      {
        name: "Amphitrite",
        parents_id: 10,
      },

      {
        name: "Kymo",
        parents_id: 10,
      },

      {
        name: "Eione",
        parents_id: 10,
      },

      {
        name: "Kymatolege",
        parents_id: 10,
      },

      {
        name: "Halimede",
        parents_id: 10,
      },

      {
        name: "Kymatolege",
        parents_id: 10,
      },

      {
        name: "Glaukonome",
        parents_id: 10,
      },

      {
        name: "Protoporeia",
        parents_id: 10,
      },

      {
        name: "Leiagora",
        parents_id: 10,
      },

      {
        name: "Euagora",
        parents_id: 10,
      },

      {
        name: "Laomeideia",
        parents_id: 10,
      },

      {
        name: "Poulynoe",
        parents_id: 10,
      },

      {
        name: "Autonoe",
        parents_id: 10,
      },

      {
        name: "Lysianassa",
        parents_id: 10,
      },

      {
        name: "Euarne",
        parents_id: 10,
      },
      {
        name: "Psamathe",
        parents_id: 10,
      },

      {
        name: "Menippe",
        parents_id: 10,
      },

      {
        name: "Neso",
        parents_id: 10,
      },

      {
        name: "Eupompoe",
        parents_id: 10,
      },

      {
        name: "Themisto",
        parents_id: 10,
      },

      {
        name: "Pronoe",
        parents_id: 10,
      },

      {
        name: "Nemertes",
        parents_id: 10,
      },

      ///
      ///
      {
        name: "Aello",
        parents_id: 11,
      },
      {
        name: "Okypete",
        parents_id: 11,
      },
      {
        name: "Iris",
        parents_id: 11,
      },
      ///
      ///
      //

      {
        name: "Pamphredo",
        parents_id: 12,
      },
      {
        name: "Enyo",
        parents_id: 12,
      },
      {
        name: "Dino",
        parents_id: 12,
      },
      {
        name: "Stheno",
        parents_id: 12,
      },
      {
        name: "Euryale",
        parents_id: 12,
      },
      {
        name: "Medusa",
        parents_id: 12,
      },
      {
        name: "Echidna",
        parents_id: 12,
      },
      //
      //
      //

      {
        name: "Chrysaor",
        parents_id: 13,
      },
      {
        name: "Pegasos",
        parents_id: 13,
      },
      {
        name: "Geryon",
        parents_id: 14,
      },

      {
        name: "Orthus",
        parents_id: 15,
      },
      {
        name: "Cerberus",
        parents_id: 15,
      },
      {
        name: "Hydra",
        parents_id: 15,
      },
      {
        name: "Chimera",
        parents_id: 16,
      },
      {
        name: "Sphinx",
        parents_id: 17,
      },
      {
        name: "Nameian Lion",
        parents_id: 17,
      },
      {
        name: "Hesperian Dragon",
        parents_id: 12,
      },

      {
        name: "Idya",
        parents_id: 18,
      },
      {
        name: "Pleione",
        parents_id: 18,
      },
      {
        name: "Metis",
        parents_id: 18,
      },
      {
        name: "Eurynome",
        parents_id: 18,
      },
      {
        name: "Perseis",
        parents_id: 18,
      },
      {
        name: "Klymene",
        parents_id: 18,
      },
      {
        name: "Styx",
        parents_id: 18,
      },
      {
        name: "Electra",
        parents_id: 18,
      },
      {
        name: "Kallioroe",
        parents_id: 18,
      },
      {
        name: "Doris",
        parents_id: 18,
      },
      {
        name: "Helios",
        parents_id: 19,
      },
      {
        name: "Selene",
        parents_id: 19,
      },
      {
        name: "Eos",
        parents_id: 19,
      },
      {
        name: "Pallas",
        parents_id: 20,
      },
      {
        name: "Astraios",
        parents_id: 20,
      },
      {
        name: "Perses",
        parents_id: 20,
      },

      {
        name: "Zephyr",
        parents_id: 21,
      },
      {
        name: "Boreas",
        parents_id: 21,
      },
      {
        name: "Notos",
        parents_id: 21,
      },
      {
        name: "Eurus",
        parents_id: 21,
      },
      {
        name: "Phosphorus",
        parents_id: 21,
      },
      {
        name: "Zelos",
        parents_id: 22,
      },
      {
        name: "Nike",
        parents_id: 22,
      },
      {
        name: "Bia",
        parents_id: 22,
      },
      {
        name: "Kratos",
        parents_id: 22,
      },
      {
        name: "Leto",
        parents_id: 23,
      },
      {
        name: "Asterie",
        parents_id: 23,
      },
      {
        name: "Hekate",
        parents_id: 24,
      },
      {
        name: "Hades",
        parents_id: 25,
      },
      {
        name: "Zeus",
        parents_id: 25,
      },
      {
        name: "Hestia",
        parents_id: 25,
      },
      {
        name: "Demeter",
        parents_id: 25,
      },
      {
        name: "Hera",
        parents_id: 25,
      },
      {
        name: "Poseidon",
        parents_id: 25,
      },
      {
        name: "Athena",
        parents_id: 25,
      },
      {
        name: "Apollo",
        parents_id: 25,
      },
      {
        name: "Artemis",
        parents_id: 25,
      },
      {
        name: "Atlas",
        parents_id: 26,
      },
      {
        name: "Menoetius",
        parents_id: 26,
      },
      {
        name: "Prometheus",
        parents_id: 26,
      },
      {
        name: "Epimetheus",
        parents_id: 26,
      },
      {
        name: "Typhoeus",
        parents_id: 27,
      },
      {
        name: "Eunomia",
        parents_id: 29,
      },
      {
        name: "Dike",
        parents_id: 29,
      },
      {
        name: "Eirene",
        parents_id: 29,
      },
      {
        name: "Aglaia",
        parents_id: 30,
      },
      {
        name: "Euphosyne",
        parents_id: 30,
      },
      {
        name: "Thalia",
        parents_id: 30,
      },
      {
        name: "Persephone",
        parents_id: 31,
      },
      //
      {
        name: "Clio",
        parents_id: 32,
      },
      {
        name: "Euterpe",
        parents_id: 32,
      },
      {
        name: "Thaleia",
        parents_id: 32,
      },
      {
        name: "Melpomene",
        parents_id: 32,
      },
      {
        name: "Terpsichore",
        parents_id: 32,
      },
      {
        name: "Erato",
        parents_id: 32,
      },
      {
        name: "Polyhymia",
        parents_id: 32,
      },
      {
        name: "Urania",
        parents_id: 32,
      },
      {
        name: "Calliope",
        parents_id: 32,
      },
      {
        name: "Apollo",
        parents_id: 33,
      },
      {
        name: "Artemis",
        parents_id: 33,
      },
      {
        name: "Hebe",
        parents_id: 34,
      },
      {
        name: "Ares",
        parents_id: 34,
      },
      {
        name: "Eileithyia",
        parents_id: 34,
      },
    ];

    for (const child of children) {
      let childGod = await queryRunner.manager.findOne(God, {
        where: { name: child.name },
      });
      let parents = await queryRunner.manager.findOne(Partners, {
        where: { id: child.parents_id },
      });

      if (childGod && parents)
        queryRunner.manager.update(
          God,
          { name: childGod.name },
          { parents: parents }
        );
      else {
        console.error(`Error with ${parents} and ${childGod}`);
      }
    }
  }
  public async down(): Promise<void> {}
}
