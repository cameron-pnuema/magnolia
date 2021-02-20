//Exterior
// - Shingles
// - Siding
// - Shutters
// - Doors
//Kitchen
// - Cabinets
// - Counters
// - Sinks
// - Islands
// - Backsplash
//Bath
// - Sinks
// - Shower/Tub
//Other
// - Flooring
// - Trim
// - Lighting

const customizationGroup = [
  {
    category: 1,
    active: true,
    name: "Exterior",
    underCategories: [
      {
        id: 1,
        name: "Roof Pitch",
        active: null,
        options: [
          { id: 1, name: '"4/12"', price: 0 },
          { id: 2, name: '"5/12"', price: 2000 },
          { id: 3, name: '"7/12"', price: 5000 },
        ],
      },
      {
        id: 2,
        name: "Shingles",
        active: null,
        options: [
          { id: 1, name: `Onxy Black`, price: 0 },
          { id: 2, name: `Estate Gray`, price: 0 },
          { id: 3, name: `Driftwood`, price: 0 },
        ],
      },
      {
        id: 3,
        name: "Siding",
        active: null,
        options: [
          { id: 1, name: `Cypress`, price: 0 },
          { id: 2, name: `Harvard Slate`, price: 0 },
          { id: 3, name: `Wicker`, price: 0 },
          { id: 4, name: `Pebble Clay`, price: 0 },
          { id: 5, name: `White`, price: 0 },
          { id: 6, name: `Marine Blue`, price: 2500 },
          { id: 7, name: `Graphite`, price: 2500 },
          { id: 8, name: `Redwood`, price: 2500 },
        ],
      },
      {
        id: 4,
        name: "Shutters",
        active: null,
        options: [
          { id: 5, name: `None`, price: 0 },
          { id: 1, name: `Berry`, price: 100 },
          { id: 2, name: `Royal`, price: 100 },
          { id: 3, name: `Black`, price: 100 },
          { id: 4, name: `Pine`, price: 100 },
        ],
      },
      {
        id: 5,
        name: "Doors",
        active: null,
        options: [
          { id: 1, name: `Regular White 34x82`, price: 0 },
          {
            id: 2,
            name: `52"x82" Round Top Etch Glass With / Sidelight`,
            price: 2000,
          },
          {
            id: 3,
            name: `66.5"x82" Round Top Etch Glass With / Double Sidelight`,
            price: 2500,
          },
          { id: 4, name: `Fire Rated Door`, price: 500 },
          { id: 5, name: `72"x80" Glass Slider`, price: 1100 },
          { id: 6, name: `75.5"x82" Swing French Doors`, price: 2500 },
        ],
      },
      // {
      //     id: 6,
      //     name: 'Windows',
      //     active: null,
      //     options: [
      //         { id: 1, name: `Arch Top *may require engineering fee`, price: 600 },
      //         { id: 2, name: `Additional 30"x60" window (per)`, price: 250 },
      //         { id: 3, name: `72"x14" transom`, price: 750 },
      //     ],
      // },
      {
        id: 7,
        name: "Outdoor Lighting",
        active: null,
        options: [
          { id: 1, name: `Rust Coach`, price: 175 },
          { id: 2, name: `Craftsman Coach`, price: 200 },
        ],
      },
    ],
  },
  {
    category: 2,
    active: false,
    name: "Kitchen",
    underCategories: [
      {
        id: 1,
        name: `Countertop`,
        active: null,
        options: [
          { id: 1, name: `Imperial Sand`, price: 0 },
          { id: 2, name: `Bernard Granite`, price: 0 },
          { id: 3, name: `Winter Carnival`, price: 0 },
          { id: 4, name: `Spring Carnival`, price: 0 },
          { id: 5, name: `Ebony Fusion`, price: 0 },
          { id: 6, name: `Azul Aran`, price: 900 },
          { id: 7, name: `Dolce Vita`, price: 900 },
          { id: 8, name: `Calcutta Marble`, price: 900 },
        ],
      },
      {
        id: 2,
        name: `Backsplash`,
        active: null,
        options: [
          { id: 1, name: `White (One Row)`, price: 500 },
          { id: 2, name: `Steel (One Row)`, price: 500 },
          { id: 3, name: `Graphite (One Row)`, price: 500 },
          { id: 4, name: `White (Full)`, price: 2000 },
          { id: 5, name: `Steel (Full)`, price: 2000 },
          { id: 6, name: `Graphite (Full)`, price: 2000 },
          { id: 7, name: `Contemporary Stack (Upgrade)`, price: 2500 },
          { id: 8, name: `Split Face Mosaic (Upgrade)`, price: 2500 },
          { id: 9, name: `Taberna Rye (Upgrade)`, price: 2500 },
        ],
      },
      {
        id: 3,
        name: `Cabinets`,
        active: null,
        options: [
          { id: 1, name: `Milan`, price: 0 },
          { id: 2, name: `Java`, price: 0 },
          { id: 3, name: `Rustic Shore`, price: 1000 },
          { id: 4, name: `Vintage Oak`, price: 1000 },
          { id: 5, name: `Stonehenge`, price: 1000 },
        ],
      },
      {
        id: 4,
        name: `Cabinets size`,
        active: null,
        options: [
          { id: 1, name: `30" Cabinets`, price: 0 },
          { id: 2, name: `40" Cabinets`, price: 2250 },
        ],
      },
      {
        id: 5,
        name: `Island`,
        active: null,
        options: [
          { id: 4, name: `None`, price: 0 },
          { id: 1, name: `38 x 59 CE-1374`, price: 500 },
          { id: 2, name: `36 x 96 CE-1277`, price: 800 },
          { id: 3, name: `28 x 40 CE 1248`, price: 300 },
        ],
      },
      {
        id: 6,
        name: `Kitchen Sink upgrade`,
        active: null,
        options: [
          { id: 1, name: `No Upgrade`, price: 0 },
          { id: 2, name: `Farm Sink With Moen Faucet`, price: 500 },
          { id: 3, name: `9" Deep Steel Sink`, price: 500 },
          { id: 4, name: `Moen Kitchen Faucet With Sprayer`, price: 500 },
        ],
      },
    ],
  },
  {
    category: 3,
    active: false,
    name: "Bath",
    underCategories: [
      {
        id: 1,
        name: `Master Bath: Shower/Tub`,
        active: null,
        options: [
          { id: 1, name: `1 Pc Tub With Shower`, price: 0 },
          { id: 2, name: `Bench Shower`, price: 1200 },
          { id: 3, name: `48" 2 Seat Shower`, price: 400 },
          { id: 4, name: `Corner Shower`, price: 250 },
          { id: 5, name: `Ceramic Tile Shower`, price: 3000 },
          { id: 6, name: `1 Pc Corner Tub`, price: 750 },
          { id: 7, name: `Whirlpool Tub`, price: 1000 },
          { id: 8, name: `Stand Alone Tub`, price: 350 },
        ],
      },
      {
        id: `guest-shower-tub`,
        name: `Guest Bathroom: Shower/Tub`,
        active: null,
        options: [
          { id: 1, name: `1 Pc Tub With Shower`, price: 0 },
          { id: 2, name: `Bench Shower`, price: 1200 },
          { id: 3, name: `48" 2 Seat Shower`, price: 400 },
          { id: 4, name: `Corner Shower`, price: 250 },
          { id: 6, name: `1 Pc Corner Tub`, price: 750 },
          { id: 8, name: `Stand Alone Tub`, price: 350 },
        ],
      },
    ],
  },
  {
    category: 5,
    active: false,
    name: "General",
    underCategories: [
      // {
      //     id: 1,
      //     name: `Flooring carpet`,
      //     active: null,
      //     options: [
      //         { id: 1, name: `Quarry cabinet 16 oz`, price: 0 },
      //         { id: 2, name: `Wood Smoke 18oz`, price: 600 },
      //         { id: 3, name: `Spanish Grey 18oz`, price: 600 },
      //         { id: 4, name: `Russet 18 oz`, price: 600 },
      //         { id: 5, name: `Baled Hay 18 0z`, price: 600 },
      //         { id: 6, name: `Sand Dollar 25 oz`, price: 1200 },
      //         { id: 7, name: `Mushroom Cap 25 oz`, price: 1200 },
      //         { id: 8, name: `Cloudburst 25 oz`, price: 1200 },
      //         { id: 9, name: `Truffle 25 oz`, price: 1200 },
      //         { id: 10, name: `Winter White 40oz`, price: 3000 },
      //         { id: 11, name: `Townhouse 40 oz`, price: 3000 },
      //         { id: 12, name: `Cold Water 40 oz`, price: 3000 },
      //         { id: 13, name: `Chamois 40 oz`, price: 3000 },
      //     ],
      // },
      // {
      //     id: 2,
      //     name: `Flooring vynal (per room)`,
      //     active: null,
      //     options: [
      //         { id: 1, name: `Rustic Adobe`, price: 300 },
      //         { id: 2, name: `Barnwood Greige`, price: 300 },
      //         { id: 3, name: `Cookies and Cream`, price: 300 },
      //     ],
      // },
      {
        id: 3,
        name: `Doors additional`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `36" 6 Panel White`, price: 150 },
          { id: 3, name: `White Sliding Barn Door`, price: 1500 },
        ],
      },
      {
        id: 4,
        name: `Appliances`,
        active: null,
        options: [
          { id: 1, name: `Black Standard`, price: 0 },
          { id: 2, name: `Black Upgraded`, price: 1800 },
          { id: 3, name: `Stainless Upgrade`, price: 1800 },
        ],
      },
      {
        id: 5,
        name: `Fireplace`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `Charleston Stack Full Stone Gas`, price: 1600 },
          { id: 3, name: `Charleston Stack Half Stone Gas`, price: 1200 },
          { id: 4, name: `Charleston Stack Full Stone Electric`, price: 1600 },
          { id: 5, name: `Charleston Stack Half Stone Electric`, price: 1200 },
        ],
      },
      {
        id: 6,
        name: `Home Entertainment System`,
        active: null,
        options: [
          { id: 5, name: `None`, price: 0 },
          { id: 1, name: `90" Floating FEC901616 (No Bookcase)`, price: 1200 },
          { id: 2, name: `90" Floating BC429418 With Bookcase`, price: 1700 },
          { id: 3, name: `48x42 CE - 2006`, price: 500 },
          { id: 4, name: `48" CE-2036`, price: 500 },
        ],
      },
      {
        id: 7,
        name: `Drop Zones`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `2 Hooks, Bench, Shoe Storage CG-355`, price: 500 },
          {
            id: 3,
            name: `3 Hooks, Bench, Overhead Cab And Shoe Storage CG-411`,
            price: 600,
          },
        ],
      },
      {
        id: 8,
        name: `Trim`,
        active: null,
        options: [
          { id: 1, name: `Interior Trim - Java Wrapped`, price: 0 },
          { id: 2, name: `Interior Trim - Ibis Wrapped`, price: 0 },
          { id: 3, name: `Interior Trim - Wrapped - White`, price: 0 },
        ],
      },
      {
        id: `4-washer-dryer`,
        name: `Washer/dryer`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `Include`, price: 1200 },
        ],
      },
      {
        id: `5-hot-water-heater`,
        name: `Hot Water Heater`,
        active: null,
        options: [
          { id: 1, name: `40 Gallon Gas`, price: 0 },
          { id: 2, name: `50 Gallon Gas`, price: 650 },
        ],
      },
      {
        id: `9-utility-sink`,
        name: `Utility Sink (Laundry Room)`,
        active: null,
        options: [
          { id: 5, name: `None`, price: 0 },
          { id: 1, name: `Deep Sink SB-30`, price: 1100 },
          { id: 2, name: `51" Deep Sink CB-790`, price: 1300 },
          { id: 3, name: `60" Deep Sink CB-772`, price: 1500 },
          { id: 4, name: `51" Deep Sink With Overhead Cab`, price: 1700 },
        ],
      },
    ],
  },
  // {
  //     category: 4,
  //     active: false,
  //     name: '',
  //     underCategories: [
  //         {
  //             id: 1,
  //             name: ``,
  //             active: null,
  //             options: [
  //                 { id: 1, name: ``, price: 0 },
  //                 { id: 2, name: ``, price: 0 },
  //                 { id: 3, name: ``, price: 0 },
  //                 { id: 4, name: ``, price: 0 },
  //                 { id: 5, name: ``, price: 0 },
  //                 { id: 6, name: ``, price: 0 },
  //                 { id: 7, name: ``, price: 0 },
  //                 { id: 8, name: ``, price: 0 },
  //             ],
  //         },

  //     ]
  // },

  {
    category: 5,
    active: false,
    name: "Flooring",
    underCategories: [
      {
        id: 1,
        name: `Flooring`,
        active: null,
        options: [
          {
            id: 1,
            name: `inputName`,
            price: 0,
            value: " ",
            active: 1,
          },
        ],
      },
    ],
  },
];

export default customizationGroup;
