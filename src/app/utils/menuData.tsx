export interface MenuItem {
  name: string;
  details: string;
  priceSmall?: string;
  priceBig?: string;
  price?: string;
  isVegan?: boolean; // Add vegan flag
}

export const items: { id: number; title: string; description: MenuItem[] }[] = [
  {
    id: 1,
    title: "Soups",
    description: [
      {
        name: "KYIV CALLING",
        details:
          "Beef marrow broth, beetroots & vegetables. Served with sour cream.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "CHICKEN SOUP",
        details: "Homemade chicken broth with pasta & carrots.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "SOLYANKA",
        details: "A thick & sour soup, also called 'Settlers' Soup'.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "TRAKAI WEEKEND",
        details:
          "Assorted wild mushrooms, potatoes, carrots & onions. Served with sour cream.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "PEA SOUP",
        details: "Peas, carrots, potato, onion & chicken.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "Rassolnik",
        details:
          "Thick chicken soup with an intense reach sour taste & vegetable aroma.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "OKROSHKA",
        details: "Chicken, potato, egg, mineral water & sour cream.",
        priceSmall: "€9",
        priceBig: "€12",
      },
      {
        name: "COLD BORSCH (SALTIBARSCIAI)",
        details:
          "Lithuanian traditional cold soup made with beets, cucumbers & kefir. Served with boiled egg & potatoes.",
        priceSmall: "€7.50",
        priceBig: "€10.50",
      },
      {
        name: "VEGAN BORSCH",
        details: "Beets, carrots, cabbage. potatoes & beans.",
        priceSmall: "€8.50",
        priceBig: "€11.50",
      },
    ],
  },
  {
    id: 2,
    title: "Eastern European Dishes",
    description: [
      {
        name: "Kibinai",
        details: "Traditional mini pies stuffed with savory fillings.",
        price: "€7",
      },
      {
        name: "Cabbage Rolls",
        details:
          "Stuffed cabbage leaves with rice and minced meat, served with tomato sauce.",
        price: "€14",
      },
    ],
  },
  {
    id: 3,
    title: "Fresh & Local",
    description: [
      {
        name: "Grilled Salmon",
        details: "Responsibly caught salmon with seasonal vegetables.",
        price: "€18",
      },
      {
        name: "Local Veggie Plate",
        details:
          "A variety of fresh, seasonal, and locally sourced vegetables.",
        price: "€12",
      },
    ],
  },
  {
    id: 4,
    title: "Vegan Options",
    description: [
      {
        name: "Vegan Borscht",
        details: "A rich beetroot soup with potatoes, cabbage, and carrots.",
        price: "€10",
      },
      {
        name: "Vegetarian Dumplings",
        details:
          "Stuffed with mashed potatoes and mushrooms, served with vegan sour cream.",
        price: "€11",
      },
    ],
  },
];
