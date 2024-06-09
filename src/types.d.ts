export interface GodInterface {
  name: string;
  gender: boolean;
  description: string;
  greekName: string;
  romanName: string;
}

export interface PartnersInterface {
  partner_1: string;
  partner_2: string;
}

export interface ChildInterface {
  name: string;
  parents_id: number;
}
