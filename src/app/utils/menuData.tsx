export interface Side {
  title: string;
  list: string[];
}

export interface MenuItem {
  name: string;
  details?: string;
  priceSmall?: string;
  priceBig?: string;
  price?: string;
  isVegan?: boolean;
  isVegeterian?: boolean;
  extras?: string[];
  sides?: Side[];
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
        isVegan: true,
      },
    ],
  },
  {
    id: 2,
    title: "Salads",
    description: [
      {
        name: "OLIVJE (260GR)",
        details:
          "Traditional Eastern European salad made with potatoes, vegetables, eggs, meat & mayo.",
        price: "€5",
      },
      {
        name: "BLUSHING IBURG (400GR)",
        details: "Red beets, potato, carrot, egg on marinaded herring.",
        price: "€9.50",
      },
      {
        name: "CAESAR SALAD",
        details: "Classic Caesar salad made with homemade sauce.",
        price: "€14.50",
      },
      {
        name: "LIMA KISS",
        details:
          "Avocado, cucumbers, tomatoes, green leaves & lemon served with grilled chicken or salmon.",
        price: "€10",
      },
      {
        name: "VINAIGRETTE",
        details:
          "Red beets, carrot, potato, cabbage, beans, pickles & sunflower oil.",
        price: "€5",
        isVegan: true,
      },
      {
        name: "SNOWY BOROVETZ",
        details: "Mixed salad, paprika, tomato, cucumber & feta.",
        price: "€8.50",
        isVegeterian: true,
      },
      {
        name: "GREEK SALAD ",
        details: "Paprika, tomato, cucumber, onion, olives & feta.",
        price: "€11",
        isVegeterian: true,
      },
    ],
  },
  {
    id: 3,
    title: "Crepes",
    description: [
      {
        name: "CLASSIC CRÊPES",
        price: "€10.50",
        isVegeterian: true,
      },
      {
        name: "CREPES WITH MUSHROOMS",
        price: "€10,90",
        isVegeterian: true,
      },
      {
        name: "CRÊPES WITH HAM & CHEESE",
        price: "€10",
      },
      {
        name: "CRÊPES WITH BEEF FILLING",
        price: "€11,90",
      },
      {
        name: "CRÊPES WITH CHICKEN FILLING",
        price: "€11,90",
      },
      {
        name: "CRÊPES WITH SALMON & CAVIAR",
        price: "€13,50",
      },
      {
        name: "CRÊPES WITH COTTAGE CHEESE",
        price: "€11,90",
        isVegeterian: true,
      },
      {
        name: "CRÊPES WITH BANANA",
        price: "€10,50",
        isVegeterian: true,
      },
      {
        name: "COTTAGE CHEESE PANCAKES (SYRNIKI)",
        price: "€13,50",
        isVegeterian: true,
      },
    ],
  },
  {
    id: 4,
    title: "Vareniki",
    description: [
      {
        name: "FOUR CHEESES",
        price: "€16,50",
        isVegeterian: true,
      },
      {
        name: "CABBAGE",
        price: "€16,50",
        isVegeterian: true,
      },
      {
        name: "POTATO",
        price: "€16,50",
        isVegeterian: true,
      },
      {
        name: "POTATO & MUSHROOMS",
        price: "€16,50",
        isVegeterian: true,
      },
      {
        name: "CHERRY",
        price: "€16,50",
        isVegeterian: true,
      },
      {
        name: "COTTAGE CHEESE",
        price: "€16,50",
        isVegeterian: true,
      },
      {
        name: "MUSHROOMS",
        price: "€16,50",
        isVegeterian: true,
      },
    ],
  },
  {
    id: 5,
    title: "Pelmeny",
    description: [
      { name: "PORK", price: "€16,50" },
      { name: "BEEF", price: "€16,50" },
      { name: "CHICKEN & CHEESE", price: "€16,50" },
    ],
  },
  {
    id: 6,
    title: "Main Dishes",
    description: [
      {
        name: "CHICKEN KYIV",
        details:
          "Crumbed & fried chicken breast stuffed with melting garlic butter & herbs.",
        price: "€18",
      },
      {
        name: "CABBAGE ROLLS",
        details: "Cabbage Tilled with beer, chicken a nice. ",
        price: "€17,90",
      },
      {
        name: "BEEF STEW",
        details: "Premium beefsteak with mixed veggies.",
        price: "€18,50",
      },
      {
        name: "SCHNITZEL",
        details:
          "Chicken breast coated in bread crumbs & on top garlic cheese with mayonnaise.",
        price: "€18",
      },
      {
        name: "CHICKEN TAGINE",
        details: "Chicken marinated for eight hours in Moroccan spices.",
        price: "€17,80",
      },
      {
        name: "SALMON OVEN-BAKED",
        details:
          "Fresh salmon filet baked with lemon and homemade green sauce.",
        price: "€18,50",
      },
      {
        name: "KOTLETI",
        details: "Two delicious pork cutlets.",
        price: "€17",
      },
      {
        name: "LAMB KEBAB",
        details: "Lamb cooked on the grill with onion.",
        price: "€18",
      },
      {
        name: "VEGAN STEW",
        details:
          "Eggplant, zucchini, paprika, onion, tomato, garlic & olive oil.",
        price: "€16,50",
        isVegan: true,
      },
      {
        name: "ŽEMAIČIŲ BLYNAI",
        details:
          "Potato pancakes filled with minced pork or chicken. Served with mushroom sauce.",
        price: "€14,20",
        extras: ["EXTRA: MUSHROOM SAUCE - €2"],
      },
      {
        name: "*Choose your side dish & salad",
        sides: [
          {
            title: "SIDE DISHES",
            list: ["Oven-baked potato", "Mashed potato", "Buckwheat", "Rice"],
          },
          {
            title: "SALADS",
            list: ["Fresh salad", "Pickled cabbage"],
          },
        ],
      },
    ],
  },
];
