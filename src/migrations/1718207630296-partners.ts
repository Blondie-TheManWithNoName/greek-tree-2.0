import { MigrationInterface, QueryRunner } from "typeorm";
import { Partners } from "../entity/Partners.entity";
import { God } from "../entity/God.entity";

export class Partners1718207630296 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const partners = [
      {
        partner_1: "Chaos",
        partner_2: "Chaos", // id: 1
      },
      {
        partner_1: "Nyx",
        partner_2: "Erebos", // id: 2
      },
      {
        partner_1: "Gaea",
        partner_2: "Gaea", // id: 3
      },
      {
        partner_1: "Gaea",
        partner_2: "Ouranos", // id: 4
      },
      {
        partner_1: "Gaea",
        partner_2: "Ouranos' Blood", // id: 5
      },
      {
        partner_1: "Ouranos' Genitals",
        partner_2: "Ouranos' Genitals", // id: 6
      },
      {
        // Also Zeus and Themis
        partner_1: "Nyx",
        partner_2: "Nyx", // id: 7
      },
      {
        partner_1: "Eris",
        partner_2: "Eris", // id: 8
      },
      {
        partner_1: "Gaea",
        partner_2: "Pontus", // id: 9
      },
      {
        partner_1: "Nereus",
        partner_2: "Doris", // id: 10
      },

      {
        partner_1: "Thaumas",
        partner_2: "Electra", // id: 11
      },
      {
        partner_1: "Phorkys",
        partner_2: "Keto", // id: 12
      },
      {
        partner_1: "Medusa",
        partner_2: "Poseidon", // id: 13
      },
      {
        partner_1: "Chrysaor",
        partner_2: "Kallioroe", // id: 14
      },
      {
        partner_1: "Typhoeus",
        partner_2: "Echidna", // id: 15
      },
      {
        partner_1: "Hydra",
        partner_2: "Hydra", // id: 16
      },
      {
        partner_1: "Orthus",
        partner_2: "Chimera", // id: 17
      },
      {
        partner_1: "Okeanos",
        partner_2: "Tethys", // id: 18
      },
      {
        partner_1: "Hyperion",
        partner_2: "Theia", // id: 19
      },
      {
        partner_1: "Eurybia",
        partner_2: "Kreios", // id: 20
      },
      {
        partner_1: "Eos",
        partner_2: "Astraios", // id: 21
      },
      {
        partner_1: "Styx",
        partner_2: "Pallas", // id: 22
      },
      {
        partner_1: "Koios",
        partner_2: "Phoebe", // id: 23
      },
      {
        partner_1: "Perses",
        partner_2: "Asterie", // id: 24
      },
      {
        partner_1: "Krnous",
        partner_2: "Rheia", // id: 25
      },
      {
        partner_1: "Iapetos",
        partner_2: "Klymene", // id: 26
      },
      {
        partner_1: "Gaea",
        partner_2: "Tartaros", // id: 27
      },
      // ZEUS
      {
        partner_1: "Zeus",
        partner_2: "Metis", // id: 28
      },
      {
        partner_1: "Zeus",
        partner_2: "Themis", // id: 29
      },
      {
        partner_1: "Zeus",
        partner_2: "Eurynome", // id: 30
      },
      {
        partner_1: "Zeus",
        partner_2: "Demeter", // id: 31
      },
      {
        partner_1: "Zeus",
        partner_2: "Mnemosyne", // id: 32
      },
      {
        partner_1: "Zeus",
        partner_2: "Leto", // id: 33
      },
      {
        partner_1: "Zeus",
        partner_2: "Hera", // id: 34
      },
    ];
    for (const partner of partners) {
      const partner1 = await queryRunner.manager.findOne(God, {
        where: { name: partner.partner_1 },
      });
      const partner2 = await queryRunner.manager.findOne(God, {
        where: { name: partner.partner_2 },
      });

      if (partner1 && partner2) {
        const entity = queryRunner.manager.create(Partners, {
          partner_1: partner1,
          partner_2: partner2,
        });
        await queryRunner.manager.save(entity);
      } else {
        console.error(
          `God not found for pair: ${partner.partner_1} and ${partner.partner_2}`
        );
      }
    }
  }

  public async down(): Promise<void> {}
}
