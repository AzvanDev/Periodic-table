 const elements = [
            { number: 1, symbol: "H", name: "Hydrogen", mass: 1.008, type: "nonmetal", group: 1, period: 1, electrons: [1], position: { row: 1, col: 1 } },
            { number: 2, symbol: "He", name: "Helium", mass: 4.003, type: "noble-gas", group: 18, period: 1, electrons: [2], position: { row: 1, col: 18 } },
            { number: 3, symbol: "Li", name: "Lithium", mass: 6.941, type: "metal", group: 1, period: 2, electrons: [2, 1], position: { row: 2, col: 1 } },
            { number: 4, symbol: "Be", name: "Beryllium", mass: 9.012, type: "metal", group: 2, period: 2, electrons: [2, 2], position: { row: 2, col: 2 } },
            { number: 5, symbol: "B", name: "Boron", mass: 10.811, type: "metalloid", group: 13, period: 2, electrons: [2, 3], position: { row: 2, col: 13 } },
            { number: 6, symbol: "C", name: "Carbon", mass: 12.011, type: "nonmetal", group: 14, period: 2, electrons: [2, 4], position: { row: 2, col: 14 } },
            { number: 7, symbol: "N", name: "Nitrogen", mass: 14.007, type: "nonmetal", group: 15, period: 2, electrons: [2, 5], position: { row: 2, col: 15 } },
            { number: 8, symbol: "O", name: "Oxygen", mass: 15.999, type: "nonmetal", group: 16, period: 2, electrons: [2, 6], position: { row: 2, col: 16 } },
            { number: 9, symbol: "F", name: "Fluorine", mass: 18.998, type: "nonmetal", group: 17, period: 2, electrons: [2, 7], position: { row: 2, col: 17 } },
            { number: 10, symbol: "Ne", name: "Neon", mass: 20.180, type: "noble-gas", group: 18, period: 2, electrons: [2, 8], position: { row: 2, col: 18 } },
            { number: 11, symbol: "Na", name: "Sodium", mass: 22.990, type: "metal", group: 1, period: 3, electrons: [2, 8, 1], position: { row: 3, col: 1 } },
            { number: 12, symbol: "Mg", name: "Magnesium", mass: 24.305, type: "metal", group: 2, period: 3, electrons: [2, 8, 2], position: { row: 3, col: 2 } },
            { number: 13, symbol: "Al", name: "Aluminum", mass: 26.982, type: "metal", group: 13, period: 3, electrons: [2, 8, 3], position: { row: 3, col: 13 } },
            { number: 14, symbol: "Si", name: "Silicon", mass: 28.086, type: "metalloid", group: 14, period: 3, electrons: [2, 8, 4], position: { row: 3, col: 14 } },
            { number: 15, symbol: "P", name: "Phosphorus", mass: 30.974, type: "nonmetal", group: 15, period: 3, electrons: [2, 8, 5], position: { row: 3, col: 15 } },
            { number: 16, symbol: "S", name: "Sulfur", mass: 32.065, type: "nonmetal", group: 16, period: 3, electrons: [2, 8, 6], position: { row: 3, col: 16 } },
            { number: 17, symbol: "Cl", name: "Chlorine", mass: 35.453, type: "nonmetal", group: 17, period: 3, electrons: [2, 8, 7], position: { row: 3, col: 17 } },
            { number: 18, symbol: "Ar", name: "Argon", mass: 39.948, type: "noble-gas", group: 18, period: 3, electrons: [2, 8, 8], position: { row: 3, col: 18 } },
            { number: 19, symbol: "K", name: "Potassium", mass: 39.098, type: "metal", group: 1, period: 4, electrons: [2, 8, 8, 1], position: { row: 4, col: 1 } },
            { number: 20, symbol: "Ca", name: "Calcium", mass: 40.078, type: "metal", group: 2, period: 4, electrons: [2, 8, 8, 2], position: { row: 4, col: 2 } },
            { number: 21, symbol: "Sc", name: "Scandium", mass: 44.956, type: "metal", group: 3, period: 4, electrons: [2, 8, 9, 2], position: { row: 4, col: 3 } },
            { number: 22, symbol: "Ti", name: "Titanium", mass: 47.867, type: "metal", group: 4, period: 4, electrons: [2, 8, 10, 2], position: { row: 4, col: 4 } },
            { number: 23, symbol: "V", name: "Vanadium", mass: 50.942, type: "metal", group: 5, period: 4, electrons: [2, 8, 11, 2], position: { row: 4, col: 5 } },
            { number: 24, symbol: "Cr", name: "Chromium", mass: 51.996, type: "metal", group: 6, period: 4, electrons: [2, 8, 13, 1], position: { row: 4, col: 6 } },
            { number: 25, symbol: "Mn", name: "Manganese", mass: 54.938, type: "metal", group: 7, period: 4, electrons: [2, 8, 13, 2], position: { row: 4, col: 7 } },
            { number: 26, symbol: "Fe", name: "Iron", mass: 55.845, type: "metal", group: 8, period: 4, electrons: [2, 8, 14, 2], position: { row: 4, col: 8 } },
            { number: 27, symbol: "Co", name: "Cobalt", mass: 58.933, type: "metal", group: 9, period: 4, electrons: [2, 8, 15, 2], position: { row: 4, col: 9 } },
            { number: 28, symbol: "Ni", name: "Nickel", mass: 58.693, type: "metal", group: 10, period: 4, electrons: [2, 8, 16, 2], position: { row: 4, col: 10 } },
            { number: 29, symbol: "Cu", name: "Copper", mass: 63.546, type: "metal", group: 11, period: 4, electrons: [2, 8, 18, 1], position: { row: 4, col: 11 } },
            { number: 30, symbol: "Zn", name: "Zinc", mass: 65.38, type: "metal", group: 12, period: 4, electrons: [2, 8, 18, 2], position: { row: 4, col: 12 } },
            { number: 31, symbol: "Ga", name: "Gallium", mass: 69.723, type: "metal", group: 13, period: 4, electrons: [2, 8, 18, 3], position: { row: 4, col: 13 } },
            { number: 32, symbol: "Ge", name: "Germanium", mass: 72.64, type: "metalloid", group: 14, period: 4, electrons: [2, 8, 18, 4], position: { row: 4, col: 14 } },
            { number: 33, symbol: "As", name: "Arsenic", mass: 74.922, type: "metalloid", group: 15, period: 4, electrons: [2, 8, 18, 5], position: { row: 4, col: 15 } },
            { number: 34, symbol: "Se", name: "Selenium", mass: 78.96, type: "nonmetal", group: 16, period: 4, electrons: [2, 8, 18, 6], position: { row: 4, col: 16 } },
            { number: 35, symbol: "Br", name: "Bromine", mass: 79.904, type: "nonmetal", group: 17, period: 4, electrons: [2, 8, 18, 7], position: { row: 4, col: 17 } },
            { number: 36, symbol: "Kr", name: "Krypton", mass: 83.798, type: "noble-gas", group: 18, period: 4, electrons: [2, 8, 18, 8], position: { row: 4, col: 18 } },
            { number: 37, symbol: "Rb", name: "Rubidium", mass: 85.468, type: "metal", group: 1, period: 5, electrons: [2, 8, 18, 8, 1], position: { row: 5, col: 1 } },
            { number: 38, symbol: "Sr", name: "Strontium", mass: 87.62, type: "metal", group: 2, period: 5, electrons: [2, 8, 18, 8, 2], position: { row: 5, col: 2 } },
            { number: 39, symbol: "Y", name: "Yttrium", mass: 88.906, type: "metal", group: 3, period: 5, electrons: [2, 8, 18, 9, 2], position: { row: 5, col: 3 } },
            { number: 40, symbol: "Zr", name: "Zirconium", mass: 91.224, type: "metal", group: 4, period: 5, electrons: [2, 8, 18, 10, 2], position: { row: 5, col: 4 } },
            { number: 41, symbol: "Nb", name: "Niobium", mass: 92.906, type: "metal", group: 5, period: 5, electrons: [2, 8, 18, 12, 1], position: { row: 5, col: 5 } },
            { number: 42, symbol: "Mo", name: "Molybdenum", mass: 95.96, type: "metal", group: 6, period: 5, electrons: [2, 8, 18, 13, 1], position: { row: 5, col: 6 } },
            { number: 43, symbol: "Tc", name: "Technetium", mass: 98, type: "metal", group: 7, period: 5, electrons: [2, 8, 18, 13, 2], position: { row: 5, col: 7 } },
            { number: 44, symbol: "Ru", name: "Ruthenium", mass: 101.07, type: "metal", group: 8, period: 5, electrons: [2, 8, 18, 15, 1], position: { row: 5, col: 8 } },
            { number: 45, symbol: "Rh", name: "Rhodium", mass: 102.906, type: "metal", group: 9, period: 5, electrons: [2, 8, 18, 16, 1], position: { row: 5, col: 9 } },
            { number: 46, symbol: "Pd", name: "Palladium", mass: 106.42, type: "metal", group: 10, period: 5, electrons: [2, 8, 18, 18], position: { row: 5, col: 10 } },
            { number: 47, symbol: "Ag", name: "Silver", mass: 107.868, type: "metal", group: 11, period: 5, electrons: [2, 8, 18, 18, 1], position: { row: 5, col: 11 } },
            { number: 48, symbol: "Cd", name: "Cadmium", mass: 112.411, type: "metal", group: 12, period: 5, electrons: [2, 8, 18, 18, 2], position: { row: 5, col: 12 } },
            { number: 49, symbol: "In", name: "Indium", mass: 114.818, type: "metal", group: 13, period: 5, electrons: [2, 8, 18, 18, 3], position: { row: 5, col: 13 } },
            { number: 50, symbol: "Sn", name: "Tin", mass: 118.71, type: "metal", group: 14, period: 5, electrons: [2, 8, 18, 18, 4], position: { row: 5, col: 14 } },
            { number: 51, symbol: "Sb", name: "Antimony", mass: 121.76, type: "metalloid", group: 15, period: 5, electrons: [2, 8, 18, 18, 5], position: { row: 5, col: 15 } },
            { number: 52, symbol: "Te", name: "Tellurium", mass: 127.6, type: "metalloid", group: 16, period: 5, electrons: [2, 8, 18, 18, 6], position: { row: 5, col: 16 } },
            { number: 53, symbol: "I", name: "Iodine", mass: 126.904, type: "nonmetal", group: 17, period: 5, electrons: [2, 8, 18, 18, 7], position: { row: 5, col: 17 } },
            { number: 54, symbol: "Xe", name: "Xenon", mass: 131.293, type: "noble-gas", group: 18, period: 5, electrons: [2, 8, 18, 18, 8], position: { row: 5, col: 18 } },
            { number: 55, symbol: "Cs", name: "Cesium", mass: 132.905, type: "metal", group: 1, period: 6, electrons: [2, 8, 18, 18, 8, 1], position: { row: 6, col: 1 } },
            { number: 56, symbol: "Ba", name: "Barium", mass: 137.327, type: "metal", group: 2, period: 6, electrons: [2, 8, 18, 18, 8, 2], position: { row: 6, col: 2 } },
            { number: 57, symbol: "La", name: "Lanthanum", mass: 138.905, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 18, 9, 2], position: { row: 8, col: 3 } },
            { number: 58, symbol: "Ce", name: "Cerium", mass: 140.116, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 19, 9, 2], position: { row: 8, col: 4 } },
            { number: 59, symbol: "Pr", name: "Praseodymium", mass: 140.908, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 21, 8, 2], position: { row: 8, col: 5 } },
            { number: 60, symbol: "Nd", name: "Neodymium", mass: 144.242, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 22, 8, 2], position: { row: 8, col: 6 } },
            { number: 61, symbol: "Pm", name: "Promethium", mass: 145, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 23, 8, 2], position: { row: 8, col: 7 } },
            { number: 62, symbol: "Sm", name: "Samarium", mass: 150.36, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 24, 8, 2], position: { row: 8, col: 8 } },
            { number: 63, symbol: "Eu", name: "Europium", mass: 151.964, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 25, 8, 2], position: { row: 8, col: 9 } },
            { number: 64, symbol: "Gd", name: "Gadolinium", mass: 157.25, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 25, 9, 2], position: { row: 8, col: 10 } },
            { number: 65, symbol: "Tb", name: "Terbium", mass: 158.925, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 27, 8, 2], position: { row: 8, col: 11 } },
            { number: 66, symbol: "Dy", name: "Dysprosium", mass: 162.5, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 28, 8, 2], position: { row: 8, col: 12 } },
            { number: 67, symbol: "Ho", name: "Holmium", mass: 164.930, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 29, 8, 2], position: { row: 8, col: 13 } },
            { number: 68, symbol: "Er", name: "Erbium", mass: 167.259, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 30, 8, 2], position: { row: 8, col: 14 } },
            { number: 69, symbol: "Tm", name: "Thulium", mass: 168.934, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 31, 8, 2], position: { row: 8, col: 15 } },
            { number: 70, symbol: "Yb", name: "Ytterbium", mass: 173.054, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 32, 8, 2], position: { row: 8, col: 16 } },
            { number: 71, symbol: "Lu", name: "Lutetium", mass: 174.967, type: "metal", group: 3, period: 6, electrons: [2, 8, 18, 32, 9, 2], position: { row: 8, col: 17 } },
            { number: 72, symbol: "Hf", name: "Hafnium", mass: 178.49, type: "metal", group: 4, period: 6, electrons: [2, 8, 18, 32, 10, 2], position: { row: 6, col: 4 } },
            { number: 73, symbol: "Ta", name: "Tantalum", mass: 180.948, type: "metal", group: 5, period: 6, electrons: [2, 8, 18, 32, 11, 2], position: { row: 6, col: 5 } },
            { number: 74, symbol: "W", name: "Tungsten", mass: 183.84, type: "metal", group: 6, period: 6, electrons: [2, 8, 18, 32, 12, 2], position: { row: 6, col: 6 } },
            { number: 75, symbol: "Re", name: "Rhenium", mass: 186.207, type: "metal", group: 7, period: 6, electrons: [2, 8, 18, 32, 13, 2], position: { row: 6, col: 7 } },
            { number: 76, symbol: "Os", name: "Osmium", mass: 190.23, type: "metal", group: 8, period: 6, electrons: [2, 8, 18, 32, 14, 2], position: { row: 6, col: 8 } },
            { number: 77, symbol: "Ir", name: "Iridium", mass: 192.217, type: "metal", group: 9, period: 6, electrons: [2, 8, 18, 32, 15, 2], position: { row: 6, col: 9 } },
            { number: 78, symbol: "Pt", name: "Platinum", mass: 195.084, type: "metal", group: 10, period: 6, electrons: [2, 8, 18, 32, 17, 1], position: { row: 6, col: 10 } },
            { number: 79, symbol: "Au", name: "Gold", mass: 196.967, type: "metal", group: 11, period: 6, electrons: [2, 8, 18, 32, 18, 1], position: { row: 6, col: 11 } },
            { number: 80, symbol: "Hg", name: "Mercury", mass: 200.59, type: "metal", group: 12, period: 6, electrons: [2, 8, 18, 32, 18, 2], position: { row: 6, col: 12 } },
            { number: 81, symbol: "Tl", name: "Thallium", mass: 204.383, type: "metal", group: 13, period: 6, electrons: [2, 8, 18, 32, 18, 3], position: { row: 6, col: 13 } },
            { number: 82, symbol: "Pb", name: "Lead", mass: 207.2, type: "metal", group: 14, period: 6, electrons: [2, 8, 18, 32, 18, 4], position: { row: 6, col: 14 } },
            { number: 83, symbol: "Bi", name: "Bismuth", mass: 208.98, type: "metal", group: 15, period: 6, electrons: [2, 8, 18, 32, 18, 5], position: { row: 6, col: 15 } },
            { number: 84, symbol: "Po", name: "Polonium", mass: 209, type: "metal", group: 16, period: 6, electrons: [2, 8, 18, 32, 18, 6], position: { row: 6, col: 16 } },
            { number: 85, symbol: "At", name: "Astatine", mass: 210, type: "nonmetal", group: 17, period: 6, electrons: [2, 8, 18, 32, 18, 7], position: { row: 6, col: 17 } },
            { number: 86, symbol: "Rn", name: "Radon", mass: 222, type: "noble-gas", group: 18, period: 6, electrons: [2, 8, 18, 32, 18, 8], position: { row: 6, col: 18 } },
            { number: 87, symbol: "Fr", name: "Francium", mass: 223, type: "metal", group: 1, period: 7, electrons: [2, 8, 18, 32, 18, 8, 1], position: { row: 7, col: 1 } },
            { number: 88, symbol: "Ra", name: "Radium", mass: 226, type: "metal", group: 2, period: 7, electrons: [2, 8, 18, 32, 18, 8, 2], position: { row: 7, col: 2 } },
            { number: 89, symbol: "Ac", name: "Actinium", mass: 227, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 18, 9, 2], position: { row: 9, col: 3 } },
            { number: 90, symbol: "Th", name: "Thorium", mass: 232.038, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 18, 10, 2], position: { row: 9, col: 4 } },
            { number: 91, symbol: "Pa", name: "Protactinium", mass: 231.036, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 20, 9, 2], position: { row: 9, col: 5 } },
            { number: 92, symbol: "U", name: "Uranium", mass: 238.029, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 21, 9, 2], position: { row: 9, col: 6 } },
            { number: 93, symbol: "Np", name: "Neptunium", mass: 237, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 22, 9, 2], position: { row: 9, col: 7 } },
            { number: 94, symbol: "Pu", name: "Plutonium", mass: 244, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 24, 8, 2], position: { row: 9, col: 8 } },
            { number: 95, symbol: "Am", name: "Americium", mass: 243, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 25, 8, 2], position: { row: 9, col: 9 } },
            { number: 96, symbol: "Cm", name: "Curium", mass: 247, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 25, 9, 2], position: { row: 9, col: 10 } },
            { number: 97, symbol: "Bk", name: "Berkelium", mass: 247, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 27, 8, 2], position: { row: 9, col: 11 } },
            { number: 98, symbol: "Cf", name: "Californium", mass: 251, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 28, 8, 2], position: { row: 9, col: 12 } },
            { number: 99, symbol: "Es", name: "Einsteinium", mass: 252, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 29, 8, 2], position: { row: 9, col: 13 } },
            { number: 100, symbol: "Fm", name: "Fermium", mass: 257, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 30, 8, 2], position: { row: 9, col: 14 } },
            { number: 101, symbol: "Md", name: "Mendelevium", mass: 258, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 31, 8, 2], position: { row: 9, col: 15 } },
            { number: 102, symbol: "No", name: "Nobelium", mass: 259, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 32, 8, 2], position: { row: 9, col: 16 } },
            { number: 103, symbol: "Lr", name: "Lawrencium", mass: 262, type: "metal", group: 3, period: 7, electrons: [2, 8, 18, 32, 32, 8, 3], position: { row: 9, col: 17 } },
            { number: 104, symbol: "Rf", name: "Rutherfordium", mass: 267, type: "metal", group: 4, period: 7, electrons: [2, 8, 18, 32, 32, 10, 2], position: { row: 7, col: 4 } },
            { number: 105, symbol: "Db", name: "Dubnium", mass: 268, type: "metal", group: 5, period: 7, electrons: [2, 8, 18, 32, 32, 11, 2], position: { row: 7, col: 5 } },
            { number: 106, symbol: "Sg", name: "Seaborgium", mass: 271, type: "metal", group: 6, period: 7, electrons: [2, 8, 18, 32, 32, 12, 2], position: { row: 7, col: 6 } },
            { number: 107, symbol: "Bh", name: "Bohrium", mass: 270, type: "metal", group: 7, period: 7, electrons: [2, 8, 18, 32, 32, 13, 2], position: { row: 7, col: 7 } },
            { number: 108, symbol: "Hs", name: "Hassium", mass: 277, type: "metal", group: 8, period: 7, electrons: [2, 8, 18, 32, 32, 14, 2], position: { row: 7, col: 8 } },
            { number: 109, symbol: "Mt", name: "Meitnerium", mass: 276, type: "metal", group: 9, period: 7, electrons: [2, 8, 18, 32, 32, 15, 2], position: { row: 7, col: 9 } },
            { number: 110, symbol: "Ds", name: "Darmstadtium", mass: 281, type: "metal", group: 10, period: 7, electrons: [2, 8, 18, 32, 32, 16, 2], position: { row: 7, col: 10 } },
            { number: 111, symbol: "Rg", name: "Roentgenium", mass: 280, type: "metal", group: 11, period: 7, electrons: [2, 8, 18, 32, 32, 17, 2], position: { row: 7, col: 11 } },
            { number: 112, symbol: "Cn", name: "Copernicium", mass: 285, type: "metal", group: 12, period: 7, electrons: [2, 8, 18, 32, 32, 18, 2], position: { row: 7, col: 12 } },
            { number: 113, symbol: "Nh", name: "Nihonium", mass: 284, type: "metal", group: 13, period: 7, electrons: [2, 8, 18, 32, 32, 18, 3], position: { row: 7, col: 13 } },
            { number: 114, symbol: "Fl", name: "Flerovium", mass: 289, type: "metal", group: 14, period: 7, electrons: [2, 8, 18, 32, 32, 18, 4], position: { row: 7, col: 14 } },
            { number: 115, symbol: "Mc", name: "Moscovium", mass: 288, type: "metal", group: 15, period: 7, electrons: [2, 8, 18, 32, 32, 18, 5], position: { row: 7, col: 15 } },
            { number: 116, symbol: "Lv", name: "Livermorium", mass: 293, type: "metal", group: 16, period: 7, electrons: [2, 8, 18, 32, 32, 18, 6], position: { row: 7, col: 16 } },
            { number: 117, symbol: "Ts", name: "Tennessine", mass: 294, type: "nonmetal", group: 17, period: 7, electrons: [2, 8, 18, 32, 32, 18, 7], position: { row: 7, col: 17 } },
            { number: 118, symbol: "Og", name: "Oganesson", mass: 294, type: "noble-gas", group: 18, period: 7, electrons: [2, 8, 18, 32, 32, 18, 8], position: { row: 7, col: 18 } }
        ];

        let selectedElement = null;
        let filteredElements = elements;

        function createPeriodicTable() {
            const grid = document.getElementById('elementGrid');
            grid.innerHTML = '';
            
            for (let row = 1; row <= 9; row++) {
                for (let col = 1; col <= 18; col++) {
                    const element = elements.find(el => el.position.row === row && el.position.col === col);
                    const cell = document.createElement('div');
                    cell.className = 'element';
                    
                    if (element) {
                        cell.classList.add(element.type);
                        cell.innerHTML = `
                            <div class="element-number">${element.number}</div>
                            <div class="element-symbol">${element.symbol}</div>
                            <div class="element-name">${element.name}</div>
                        `;
                        cell.addEventListener('click', () => selectElement(element));
                        cell.dataset.element = element.number;
                    } else {
                        cell.style.visibility = 'hidden';
                    }
                    
                    grid.appendChild(cell);
                }
            }
        }

        function selectElement(element) {
            document.querySelectorAll('.element.selected').forEach(el => {
                el.classList.remove('selected');
            });
            
            document.querySelector(`[data-element="${element.number}"]`).classList.add('selected');
            
            selectedElement = element;
            displayElementInfo(element);
        }
        function displayElementInfo(element) {
            const infoPanel = document.getElementById('elementInfo');
            const electronConfig = getElectronConfiguration(element.electrons);
            
            infoPanel.innerHTML = `
                <h2>${element.name} (${element.symbol})</h2>
                
                <div class="info-section">
                    <h3>Atomic Structure</h3>
                    <div class="atom-structure">
                        <div class="atom-diagram">
                            <div class="nucleus">${element.number}</div>
                            ${createElectronShells(element.electrons)}
                        </div>
                        <p><strong>Nucleus:</strong> ${element.number} protons</p>
                        <p><strong>Electrons:</strong> ${element.electrons.reduce((a, b) => a + b, 0)} total</p>
                    </div>
                </div>
                
                <div class="info-section">
                    <h3>Basic Properties</h3>
                    <div class="property-grid">
                        <div class="property-item">
                            <div class="property-label">Atomic Number</div>
                            <div class="property-value">${element.number}</div>
                        </div>
                        <div class="property-item">
                            <div class="property-label">Atomic Mass</div>
                            <div class="property-value">${element.mass} u</div>
                        </div>
                        <div class="property-item">
                            <div class="property-label">Element Type</div>
                            <div class="property-value">${element.type.charAt(0).toUpperCase() + element.type.slice(1).replace('-', ' ')}</div>
                        </div>
                        <div class="property-item">
                            <div class="property-label">Group</div>
                            <div class="property-value">${element.group}</div>
                        </div>
                        <div class="property-item">
                            <div class="property-label">Period</div>
                            <div class="property-value">${element.period}</div>
                        </div>
                        <div class="property-item">
                            <div class="property-label">Electron Configuration</div>
                            <div class="property-value">${electronConfig}</div>
                        </div>
                    </div>
                </div>
                
                <div class="info-section">
                    <h3>Electron Shell Distribution</h3>
                    <div class="property-grid">
                        ${element.electrons.map((count, index) => `
                            <div class="property-item">
                                <div class="property-label">Shell ${index + 1}</div>
                                <div class="property-value">${count} electrons</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        function createElectronShells(electrons) {
            let html = '';
            electrons.forEach((count, index) => {
                const radius = 30 + (index * 25);
                html += `<div class="electron-shell" style="width: ${radius * 2}px; height: ${radius * 2}px; top: ${100 - radius}px; left: ${100 - radius}px;"></div>`;
                
                for (let i = 0; i < Math.min(count, 4); i++) {
                    const angle = (i * 90) + (index * 15);
                    html += `<div class="electron" style="animation-delay: ${i * 0.2}s; transform: rotate(${angle}deg) translateX(${radius}px);"></div>`;
                }
            });
            return html;
        }

        function getElectronConfiguration(electrons) {
            const shells = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
            return electrons.map((count, index) => `${shells[index]}${count}`).join(' ');
        }
        function setupSearch() {
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                filterElements(query);
            });
        }

        function filterElements(query) {
            filteredElements = elements.filter(element => {
                return element.name.toLowerCase().includes(query) ||
                       element.symbol.toLowerCase().includes(query) ||
                       element.number.toString().includes(query);
            });
            document.querySelectorAll('.element').forEach(el => {
                const elementNumber = el.dataset.element;
                if (elementNumber) {
                    const isVisible = filteredElements.some(element => element.number.toString() === elementNumber);
                    el.classList.toggle('hidden', !isVisible);
                }
            });
        }
        function init() {
            createPeriodicTable();
            setupSearch();
            
            selectElement(elements[0]);
        }
        init();