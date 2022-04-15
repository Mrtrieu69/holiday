const tours = [
    {
        id: 53455,
        nameTour: "Madrid",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 10,
        rating: "6.0",
        oldPrice: 1500,
        price: 1100,
        local: "Madrid",
        grade: "Good",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41-1100x650.jpg"
    },
    {
        id: 34567,
        nameTour: "Champagne",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 12,
        rating: "8.0",
        price: 2130,
        local: "Wines",
        grade: "Superb",
        duration: 3,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-37-1100x650.jpg"
    },
    {
        id: 32313,
        nameTour: "Skiing In Alps",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.0",
        oldPrice: 650,
        price: 550,
        local: "Skiing",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-17.jpg"
    },
    {
        id: 74623,
        nameTour: "Berlin Avio",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.3",
        price: 1500,
        local: "NY",
        grade: "Good",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-25-1100x650.jpg"
    },
    {
        id: 23445,
        nameTour: "Active Winter",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "7.6",
        oldPrice: 4000,
        price: 2900,
        local: "Skiing",
        grade: "Superb",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-14.jpg"
    },
    {
        id: 97443,
        nameTour: "New Year On The Lake",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "8.2",
        oldPrice: 3600,
        price: 3200,
        local: "NY",
        grade: "Superb",
        duration: 3,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-28-1100x650.jpg"
    },
    {
        id: 43665,
        nameTour: "Beautiful Holland",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "7.0",
        oldPrice: 1550,
        price: 1330,
        local: "Popular",
        grade: "Superb",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-51-1100x650.jpg"
    },
    {
        id: 64567,
        nameTour: "China Avio",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.0",
        price: 2100,
        local: "China",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-27-1100x650.jpg"
    },
    {
        id: 12312,
        nameTour: "Sydney Opera",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "7.0",
        price: 650,
        local: "Popular",
        grade: "Superb",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/tour-featured-img-49-1100x650.jpg"
    },
    {
        id: 99456,
        nameTour: "The Best New Year",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.0",
        oldPrice: 2800,
        price: 2400,
        local: "NY",
        grade: "Good",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-24-1100x650.jpg"
    },
    {
        id: 65680,
        nameTour: "Monuments",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "5.0",
        price: 2455,
        local: "Latest",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-9-1100x650.jpg"
    },
    {
        id: 35845,
        nameTour: "Wine Tasting",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.3",
        price: 920,
        local: "Popular",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-34-1100x650.jpg"
    },
    {
        id: 76545,
        nameTour: "Harvest",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 12,
        rating: "6.0",
        price: 2600,
        local: "Wines",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-36-1100x650.jpg"
    },
    {
        id: 12350,
        nameTour: "Italy Bus",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "7.6",
        price: 1590,
        local: "Italy",
        grade: "Superb",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-21-1100x650.jpg"
    },
    {
        id: 34695,
        nameTour: "Hudson Sailing",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "9.2",
        price: 3500,
        local: "Latest",
        grade: "Superb",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-8-1100x650.jpg"
    },
    {
        id: 12348,
        nameTour: "Caving",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 20,
        rating: "7.7",
        price: 1550,
        local: "Popular",
        grade: "Superb",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-50-1100x650.jpg"
    },
    {
        id: 86571,
        nameTour: "Milan",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.0",
        oldPrice: 1200,
        price: 1100,
        local: "Europe",
        grade: "Good",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-5-1024x605.jpg"
    },

    {
        id: 53248,
        nameTour: "Australia Avio",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 18,
        rating: "6.0",
        price: 1300,
        local: "NY",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-23-1100x650.jpg"
    },
    {
        id: 90956,
        nameTour: "Seville",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "8.0",
        price: 2650,
        local: "Europe",
        grade: "Superb",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-10-1100x650.jpg"
    },
    {
        id: 67804,
        nameTour: "Holland Canals",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "9.3",
        price: 3000,
        local: "Popular",
        grade: "Superb",
        duration: 3,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-10-1100x650.jpg"
    },
    {
        id: 27064,
        nameTour: "Magic Of Italy",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 12,
        rating: "6.7",
        price: 1000,
        local: "Skiing",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-16-1024x605.jpg"
    },
    {
        id: 94681,
        nameTour: "Denpasar",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.7",
        oldPrice: 1299,
        price: 999,
        local: "NY",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48-1100x650.jpg"
    },
    {
        id: 98230,
        nameTour: "Tarragona",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "5.6",
        price: 1890,
        local: "Europe",
        grade: "Good",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-40-1100x650.jpg"
    },
    {
        id: 13463,
        nameTour: "Shopping Tour",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 15,
        rating: "8.2",
        price: 1500,
        local: "Latest",
        grade: "Superb",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-7-1100x650.jpg"
    },
    {
        id: 35385,
        nameTour: "Island Paradise",
        hot: false,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "7.7",
        price: 3000,
        local: "Popular",
        grade: "Superb",
        duration: 2,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-63-1100x650.jpg"
    },
    {
        id: 45643,
        nameTour: "Best New Year Ever",
        hot: true,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing el. Aenean commodo…",
        people: 13,
        rating: "6.0",
        price: 880,
        local: "NY",
        grade: "Good",
        duration: 1,
        image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-26-1100x650.jpg"
    },
]

export default tours