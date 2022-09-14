export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  phones: Phone[];
}

export interface Phone {
  id: string;
  number: string;
}
