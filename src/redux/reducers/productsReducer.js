import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Groundnut Oil",
    description: "Pure cold-pressed groundnut oil with rich, nutty flavor",
    longDescription:
      "Our premium groundnut oil is cold-pressed using traditional methods to preserve its natural nutrients and authentic taste. Perfect for everyday cooking, deep frying, and traditional recipes that call for a rich, nutty flavor profile.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    price: 29.99,
    category: "Cooking",
    benefits: [
      "Rich in antioxidants",
      "High smoke point",
      "Heart-healthy monounsaturated fats",
      "Preserves authentic flavor",
    ],
    quantity: 1,
  },
  {
    id: 2,
    name: "Virgin Coconut Oil",
    description: "Virgin cold-pressed coconut oil for cooking and beauty",
    longDescription:
      "Our virgin coconut oil is extracted from fresh coconuts using traditional cold-pressing techniques. This versatile oil is perfect for cooking, baking, and as a natural beauty product for skin and hair care.",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=800",
    price: 24.99,
    category: "Multi-purpose",
    benefits: [
      "Medium-chain fatty acids",
      "Natural moisturizer",
      "Antimicrobial properties",
      "Enhances nutrient absorption",
    ],
    quantity: 1,
  },
  {
    id: 3,
    name: "Mustard Oil",
    description: "Traditional cold-pressed mustard oil with intense aroma",
    longDescription:
      "Our mustard oil is cold-pressed to retain its distinctive pungent aroma and flavor. Popular in North Indian and Bengali cuisine, it adds a unique taste to your dishes while providing numerous health benefits.",
    image:
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    price: 19.99,
    category: "Cooking",
    benefits: [
      "Rich in omega-3 fatty acids",
      "Natural preservative properties",
      "Aids digestion",
      "Improves circulation",
    ],
    quantity: 1,
  },
  {
    id: 4,
    name: "Sesame Oil",
    description: "Premium cold-pressed sesame oil for authentic Asian cuisine",
    longDescription:
      "Our sesame oil is cold-pressed from premium quality sesame seeds to capture their rich, nutty flavor. Perfect for stir-fries, marinades, and as a finishing oil for Asian dishes.",
    image:
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    price: 27.99,
    category: "Cooking",
    benefits: [
      "High in antioxidants",
      "Contains sesamol and sesamin",
      "Promotes heart health",
      "Natural flavor enhancer",
    ],
    quantity: 1,
  },
  {
    id: 5,
    name: "Extra Virgin Olive Oil",
    description:
      "First cold-pressed olive oil from selected Mediterranean olives",
    longDescription:
      "Our extra virgin olive oil is first cold-pressed from carefully selected Mediterranean olives. With its fruity aroma and smooth taste, its perfect for salad dressings, dips, and light sautéing.",
    image:
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    price: 34.99,
    category: "Premium",
    benefits: [
      "Rich in oleic acid",
      "Contains polyphenols",
      "Anti-inflammatory properties",
      "Supports brain health",
    ],
    quantity: 1,
  },
  {
    id: 6,
    name: "Avocado Oil",
    description: "Cold-pressed avocado oil for high-heat cooking",
    longDescription:
      "Our avocado oil is cold-pressed from ripe avocados to create a versatile, neutral-flavored oil with a high smoke point. Perfect for high-heat cooking methods like grilling, roasting, and sautéing.",
    image:
      "https://images.unsplash.com/photo-1611071914696-5d01a171c534?auto=format&fit=crop&q=80&w=800",
    price: 39.99,
    category: "Premium",
    benefits: [
      "High smoke point (520°F)",
      "Rich in oleic acid",
      "Enhances nutrient absorption",
      "Neutral flavor profile",
    ],
    quantity: 1,
  },
  {
    id: 7,
    name: "Sunflower Oil",
    price: 22.99,
    description: "Light and healthy cold-pressed sunflower oil",
    image: "https://picsum.photos/seed/sunflower/400/400",
    longDescription:
      "Our cold-pressed sunflower oil is light, healthy, and versatile. It's perfect for everyday cooking and is rich in Vitamin E and heart-healthy fats.",
    category: "Premium",
    benefits: [
      "High smoke point (520°F)",
      "Rich in oleic acid",
      "Enhances nutrient absorption",
      "Neutral flavor profile",
    ],
    quantity: 1,
  },
  {
    id: 8,
    name: "Almond Oil",
    price: 39.99,
    description:
      "Luxurious cold-pressed almond oil for culinary and cosmetic use",
    image: "https://picsum.photos/seed/almond/400/400",
    longDescription:
      "Our cold-pressed almond oil is a luxurious, multipurpose oil. Use it in cooking for a subtle nutty flavor, or as a natural moisturizer for skin and hair.",
    category: "Premium",
    benefits: [
      "High smoke point (520°F)",
      "Rich in oleic acid",
      "Enhances nutrient absorption",
      "Neutral flavor profile",
    ],
    quantity: 1,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
