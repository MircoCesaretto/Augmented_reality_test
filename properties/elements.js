const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        visibility: true,
        type: "Noble gas"
    },
    {
        name: "Litium",
        symbol: "Li",
        atomicNumber: 3,
        visibility: true,
        type: "Alkali metal"
    },
    {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        visibility: true,
        type: "Alkaline earth metal"
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        name: "Boron",
        symbol: "B",
        atomicNumber: 5, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        name: "Fluorine",
        symbol: "F",
        atomicNumber: 9, 
        type: 'Halogen',     
        visibility: true
    },
    {
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10, 
        type: 'Noble gas',     
        visibility: true
    },
    {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11, 
        type: 'Alkali metal',     
        visibility: true
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12, 
        type: 'Alkaline earth metal',     
        visibility: true
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        name: "Aluminium",
        symbol: "Al",
        atomicNumber: 13, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17, 
        type: 'Halogen',     
        visibility: true
    },
    {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18, 
        type: 'Noble gas',     
        visibility: true
    },
    {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19, 
        type: 'Alkali metal',     
        visibility: true
    },
    {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20, 
        type: 'Alkaline earth metal',     
        visibility: true
    },
    {
        name: "Scandium",
        symbol: "Sc",
        atomicNumber: 21, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Titanium",
        symbol: "Ti",
        atomicNumber: 22, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Vanadium",
        symbol: "V",
        atomicNumber: 23, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Chromium",
        symbol: "Cr",
        atomicNumber: 24, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Manganese",
        symbol: "Mn",
        atomicNumber: 25, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Cobalt",
        symbol: "Co",
        atomicNumber: 27, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Nickel",
        symbol: "Ni",
        atomicNumber: 28, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Gallium",
        symbol: "Ga",
        atomicNumber: 31, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Germanium",
        symbol: "Ge",
        atomicNumber: 32, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Arsenic",
        symbol: "As",
        atomicNumber: 33, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Selenium",
        symbol: "Se",
        atomicNumber: 34, 
        type: 'Nonmetal',     
        visibility: true
    },
    {
        name: "Bromine",
        symbol: "Br",
        atomicNumber: 35, 
        type: 'Halogen',     
        visibility: true
    },
    {
        name: "Krypton",
        symbol: "Kr",
        atomicNumber: 36, 
        type: 'Noble gas',     
        visibility: true
    },
    {
        name: "Robidium",
        symbol: "Rb",
        atomicNumber: 37, 
        type: 'Alkali metal',     
        visibility: true
    },
    {
        name: "Strontium",
        symbol: "Sr",
        atomicNumber: 38, 
        type: 'Alkaline earth metal',     
        visibility: true
    },
    {
        name: "Yttrium",
        symbol: "Y",
        atomicNumber: 39, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Zincronium",
        symbol: "Zr",
        atomicNumber: 40, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Niobium",
        symbol: "Nb",
        atomicNumber: 41, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Molibdenum",
        symbol: "Mo",
        atomicNumber: 42, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Technetium",
        symbol: "Tc",
        atomicNumber: 43, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Ruthenum",
        symbol: "Ru",
        atomicNumber: 44, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        atomicNumber: 45, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Palladium",
        symbol: "Pd",
        atomicNumber: 46, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Candium",
        symbol: "Cd",
        atomicNumber: 48, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Indium",
        symbol: "In",
        atomicNumber: 49, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Tin",
        symbol: "Sn",
        atomicNumber: 50, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Antimony",
        symbol: "Sb",
        atomicNumber: 51, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Tellerium",
        symbol: "Te",
        atomicNumber: 52, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Iodine",
        symbol: "I",
        atomicNumber: 53, 
        type: 'Halogen',     
        visibility: true
    },
    {
        name: "Xenon",
        symbol: "Xe",
        atomicNumber: 54, 
        type: 'Noble gas',     
        visibility: true
    },
    {
        name: "Cesium",
        symbol: "Cs",
        atomicNumber: 55, 
        type: 'Alkali metal',     
        visibility: true
    },
    {
        name: "Barium",
        symbol: "Ba",
        atomicNumber: 56, 
        type: 'Alkaline earth metal',     
        visibility: true
    },
    {
        visibility: false
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        atomicNumber: 72, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        atomicNumber: 73, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Tungsten",
        symbol: "W",
        atomicNumber: 74, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Rhenum",
        symbol: "Re",
        atomicNumber: 75, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Osmium",
        symbol: "Os",
        atomicNumber: 76, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Iridium",
        symbol: "Ir",
        atomicNumber: 77, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Platinum",
        symbol: "Pt",
        atomicNumber: 78, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Thallium",
        symbol: "Tl",
        atomicNumber: 81, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        atomicNumber: 83, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Polonium",
        symbol: "Po",
        atomicNumber: 84, 
        type: 'Metalloid',     
        visibility: true
    },
    {
        name: "Astatine",
        symbol: "At",
        atomicNumber: 85, 
        type: 'Halogen',     
        visibility: true
    },
    {
        name: "Radon",
        symbol: "Rn",
        atomicNumber: 86, 
        type: 'Noble gas',     
        visibility: true
    },
    {
        name: "Francium",
        symbol: "Fr",
        atomicNumber: 87, 
        type: 'Alkali metal',     
        visibility: true
    },
    {
        name: "Radium",
        symbol: "Ra",
        atomicNumber: 88, 
        type: 'Alkaline earth metal',     
        visibility: true
    },
    {
        visibility: false
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        atomicNumber: 104, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Dubnium",
        symbol: "Db",
        atomicNumber: 105, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        atomicNumber: 106, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        atomicNumber: 107, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Hassium",
        symbol: "Hs",
        atomicNumber: 108, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        atomicNumber: 109, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        atomicNumber: 110, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        atomicNumber: 111, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        atomicNumber: 112, 
        type: 'Transition metal',     
        visibility: true
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        atomicNumber: 113, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        atomicNumber: 114, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Moscovium",
        symbol: "Mc",
        atomicNumber: 115, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        atomicNumber: 116, 
        type: 'Post-transition metal',     
        visibility: true
    },
    {
        name: "Tennessine",
        symbol: "Ts",
        atomicNumber: 117, 
        type: 'Halogen',     
        visibility: true
    },
    {
        name: "Oganesson",
        symbol: "Og",
        atomicNumber: 118, 
        type: 'Noble gas',     
        visibility: true
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        name: "Lanthanum",
        symbol: "La",
        atomicNumber: 57, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Cerium",
        symbol: "Ce",
        atomicNumber: 58, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        atomicNumber: 59, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        atomicNumber: 60, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Promethium",
        symbol: "Pm",
        atomicNumber: 61, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Samarium",
        symbol: "Sm",
        atomicNumber: 62, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Europium",
        symbol: "Eu",
        atomicNumber: 63, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        atomicNumber: 64, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Terbium",
        symbol: "Tb",
        atomicNumber: 65, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        atomicNumber: 66, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Holmium",
        symbol: "Ho",
        atomicNumber: 67, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Erbium",
        symbol: "Er",
        atomicNumber: 68, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Thulium",
        symbol: "Tm",
        atomicNumber: 69, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        atomicNumber: 70, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        atomicNumber: 71, 
        type: 'Lanthanide',     
        visibility: true
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        visibility: false
    },
    {
        name: "Actinium",
        symbol: "Ac",
        atomicNumber: 89, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Thorium",
        symbol: "Th",
        atomicNumber: 90, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        atomicNumber: 91, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Uranium",
        symbol: "U",
        atomicNumber: 92, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Neptunium",
        symbol: "Np",
        atomicNumber: 93, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        atomicNumber: 94, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Americium",
        symbol: "Am",
        atomicNumber: 95, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Curium",
        symbol: "Cm",
        atomicNumber: 96, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        atomicNumber: 97, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Californium",
        symbol: "Cf",
        atomicNumber: 98, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        atomicNumber: 99, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Fermium",
        symbol: "Fm",
        atomicNumber: 100, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        atomicNumber: 101, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Nobelium",
        symbol: "No",
        atomicNumber: 102, 
        type: 'Actinide',     
        visibility: true
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        atomicNumber: 103, 
        type: 'Actinide',     
        visibility: true
    },
]

export default elements;
