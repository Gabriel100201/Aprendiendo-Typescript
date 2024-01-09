// template union types
type Personid = `${string}-${string}-${string}`;
type ColorHashed = `#${string}`;

const colorHero: ColorHashed = "#ff00ff";

// union types
type ColorPower = "red" | "black" | "green" | "yellow";
type Nota = number | string;
type Notaalumno = number | null | "N/A";

type PersonaBasicInfo = {
  readonly id: Personid;
};

type PersonaProperties = {
  nombre: string;
  edad: number;
  isActive?: boolean;
};

// intersection types
type Persona = PersonaBasicInfo & PersonaProperties;

const pato: Persona = {
  id: "as-dw3e2d-asca",
  nombre: "pato",
  edad: 22,
};

const ganso: Persona = {
  id: "das-da343-34",
  nombre: "ganso",
  edad: 3,
  isActive: true,
};

// id no se puede cambiar
/* ganso.nombre = "pato";
ganso.id = "asdas" */

// type Indexing

type PersonaProperties2 = {
  planet: string;
  address: {
    calle: string;
    piso: number;
  };
};

const gabiDireccion: PersonaProperties2["address"] = {
  calle: "aseda",
  piso: 23,
};

const animal = {
  edad: 23,
  nombre: "asda",
  hablar: () => {
    console.log("hola soy pato");
  },
};

type animalProperties = typeof animal;

const zebra: animalProperties = {
  edad: 20,
  nombre: "Martin",
  hablar: () => {
    console.log("mejs");
  },
};
