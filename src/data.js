const data = [
    {
        "city":"Pune",
        "resto_details": [
            {
                "name": "Shabree Restaurant",
                "city": "Pune",
                "description": "Traditional Maharashtrian cuisine served in a rustic setting with outdoor seating.",
                "rating": 4.3,
                "feedback": "The thali was delicious, and the ambiance was very homely. Great value for money.",
                "address": "1202/29, Shivaji Nagar, Jangali Maharaj Road, Pune",
                "opening_time": "11:00 AM",
                "closing_time": "11:00 PM"
            },
            {
                "name": "Dario's",
                "city": "Pune",
                "description": "Italian restaurant with a cozy, romantic atmosphere and a wide range of dishes.",
                "rating": 4.5,
                "feedback": "The pasta was cooked perfectly, and the tiramisu was to die for. Great service and atmosphere.",
                "address": "Lane 6, Off North Main Road, Koregaon Park, Pune",
                "opening_time": "12:00 PM",
                "closing_time": "11:30 PM"
            },
            {
                "name": "Paasha",
                "city": "Pune",
                "description": "Rooftop restaurant with views of the city serving Indian, Chinese, and Mediterranean cuisine.",
                "rating": 4.2,
                "feedback": "The kebabs were amazing, and the service was attentive. The view of the city skyline was a bonus.",
                "address": "The Marriott Suites, 81 Mundhwa Road, Koregaon Park Annexe, Pune",
                "opening_time": "7:00 PM",
                "closing_time": "12:00 AM"
            },
            {
                "name": "The Flour Works",
                "city": "Pune",
                "description": "Cafe and bakery serving breakfast, sandwiches, and salads in a cozy, casual atmosphere.",
                "rating": 4.4,
                "feedback": "The croissants were flaky and buttery, and the coffee was strong and flavorful. A great place to start your day.",
                "address": "Ground Floor, Kalaashree Building, Near Sai Baba Mandir, Lane 6, Koregaon Park, Pune",
                "opening_time": "8:00 AM",
                "closing_time": "11:00 PM"
            },
            {
                "name": "Terttulia",
                "city": "Pune",
                "description": "Casual cafe and bar with a European-inspired menu and a trendy, industrial vibe.",
                "rating": 4.1,
                "feedback": "The burgers were juicy and flavorful, and the cocktails were inventive and delicious. A great place to hang out with friends.",
                "address": "393, Sanas Corner, Lane 7, Off North Main Road, Koregaon Park, Pune",
                "opening_time": "12:00 PM",
                "closing_time": "11:00 PM"
            },
            {
                "name": "Baithak",
                "city": "Pune",
                "description": "Casual Indian restaurant with outdoor seating and a menu of traditional and fusion dishes.",
                "rating": 4.3,
                "feedback": "The thali was delicious, and the ambiance was very homely. Great value for money.",
                "address": "19/21, Serene Bay, Lane 6, Koregaon Park, Pune",
                "opening_time": "12:00 PM",
                "closing_time": "11:30 PM"
            },
            {
                "name": "Mamagoto",
                "city": "Pune",
                "description": "Fun, casual restaurant serving Pan-Asian cuisine in a lively, colorful atmosphere.",
                "rating": 4.1,
                "feedback": "The dumplings were amazing, and the pad Thai was spicy and flavorful. A great place for a fun night out with friends.",
                "address": "Shop No 2, Plot No 28/2, Lane 5, Off North Main Road, Koregaon Park, Pune",
                "opening_time": "12:00 PM",
                "closing_time": "11:30 PM"
            },
            {
                "name": "Arthur's Theme",
                "city": "Pune",
                "description": "Old-world English pub with a cozy atmosphere and a menu of classic pub grub.",
                "rating": 4.0,
                "feedback": "The fish and chips were delicious, and the beer selection was great. A cozy spot to escape the hustle and bustle of the city.",
                "address": "Survey No 143/144, Lane No 7, Koregaon Park, Pune",
                "opening_time": "12:00 PM",
                "closing_time": "11:00 PM"
            },
            {
                "name": "Rajdhani Thali Restaurant",
                "city": "Pune",
                "description": "Chain restaurant specializing in traditional Gujarati and Rajasthani thalis.",
                "rating": 4.2,
                "feedback": "The thali was very tasty and filling, and the service was prompt and courteous. A great place for a wholesome meal.",
                "address": "2nd Floor, Nitesh Hub, KP, Near HDFC Bank, North Main Road, Koregaon Park, Pune",
                "opening_time": "11:00 AM",
                "closing_time": "3:30 PM, 7:00 PM - 11:00 PM"
            },
            {
                "name": "Indigo Delicatessen",
                "city": "Pune",
                "description": "Casual, all-day restaurant serving a menu of international dishes and deli-style sandwiches.",
                "rating": 4.4,
                "feedback": "The sandwiches were delicious and the service was friendly and attentive. A great spot for a quick lunch or a leisurely brunch.",
                "address": "Ground Floor, Phoenix Marketcity, Viman Nagar, Pune",
                "opening_time": "9:00 AM",
                "closing_time": "11:00 PM"
            }
        ]
    },
    {
        "city":"Mumbai",

        "resto_details": [
            {
                "name": "Trishna",
                "city": "Mumbai",
                "description": "Seafood restaurant serving traditional Mangalorean dishes in a rustic, no-frills setting.",
                "rating": 4.4,
                "feedback": "The butter garlic crab was absolutely delicious, and the service was excellent. A must-visit for seafood lovers.",
                "address": "7, Sai Baba Marg, Near RBI, Fort, Mumbai",
                "opening_time": "12:30 PM",
                "closing_time": "3:30 PM, 7:00 PM - 11:00 PM"
            },
            {
                "name": "The Table",
                "city": "Mumbai",
                "description": "Contemporary European restaurant with an open kitchen and a menu of seasonal, locally sourced ingredients.",
                "rating": 4.3,
                "feedback": "The food was innovative and delicious, and the service was impeccable. A great spot for a special occasion.",
                "address": "Ground Floor, Kalapesi Trust Building, Opposite Dhanraj Mahal, Below Hotel Suba Palace, Apollo Bunder Marg, Colaba, Mumbai",
                "opening_time": "12:00 PM",
                "closing_time": "3:00 PM, 6:30 PM - 11:30 PM"
            },
            {
                "name": "Dishkiyaoon",
                "city": "Mumbai",
                "description": "Fun, vibrant restaurant serving global cuisine with an Indian twist and a range of creative cocktails.",
                "rating": 4.1,
                "feedback": "The prawns were cooked to perfection, and the cocktails were inventive and delicious. A great spot for a fun night out.",
                "address": "Ground Floor, The Capital Building, G Block, Opposite ICICI Bank, Bandra Kurla Complex, Mumbai",
                "opening_time": "12:00 PM",
                "closing_time": "1:00 AM"
            },
            {
                "name": "Sanchos",
                "city": "Mumbai",
                "description": "Lively Mexican restaurant and bar with colorful decor, serving classic dishes and margaritas.",
                "rating": 4.0,
                "feedback": "The nachos were loaded and delicious, and the margaritas were strong and flavorful. A great spot for a night out with friends.",
                "address": "Candies, Pali Hill, Bandra West, Mumbai",
                "opening_time": "12:00 PM",
                "closing_time": "1:30 AM"
            },
            {
                "name": "Café Zoe",
                "city": "Mumbai",
                "description": "Industrial-style cafe serving international cuisine, including wood-fired pizzas and all-day breakfast.",
                "rating": 4.2,
                "feedback": "The pizzas were delicious and the coffee was excellent. A great spot for a leisurely brunch or a quick bite.",
                "address": "Mathuradas Mills Compound, NM Joshi Marg, Lower Parel, Mumbai",
                "opening_time": "9:00 AM",
                "closing_time": "12:00 AM"
            },
            {
                "name": "Peshawri",
                "city": "Mumbai",
                "description": "Upscale North Indian restaurant serving tandoori specialties and biryanis in a traditional setting.",
                "rating": 4.5,
                "feedback": "The tandoori chicken and dal makhani were absolutely amazing, and the service was top-notch. A must-visit for North Indian food lovers.",
                "address": "ITC Maratha, Sahar Road, Opposite Chhatrapati Shivaji Airport, Andheri East, Mumbai",
                "opening_time": "12:30 PM",
                "closing_time": "2:45 PM, 7:30 PM - 11:45 PM"
            },
            {
                "name": "Gajalee",
                "city": "Mumbai",
                "description": "Popular seafood restaurant serving fresh catches of the day in a simple, unpretentious setting.",
                "rating": 4.4,
                "feedback": "The pomfret fry and prawn curry were both excellent, and the service was friendly and attentive. A must-visit for seafood lovers in Mumbai.",
                "address": "Hanuman Road, Vile Parle East, Mumbai",
                "opening_time": "11:30 AM",
                "closing_time": "3:30 PM, 7:30 PM - 11:30 PM"
            },
            {
                "name": "Bastian",
                "city": "Mumbai",
                "description": "Trendy seafood restaurant serving fresh catches of the day and inventive, Instagram-worthy dishes.",
                "rating": 4.3,
                "feedback": "The lobster thermidor was out of this world, and the crudo was delicious and beautifully presented. A great spot for a special occasion or a date night.",
                "address": "B/1, New Kamal Building, Opposite National College, Linking Road, Bandra West, Mumbai",
                "opening_time": "12:00 PM",
                "closing_time": "3:30 PM, 7:30 PM - 11:30 PM"
            },
            {
                "name": "The Bombay Canteen",
                "city": "Mumbai",
                "description": "Modern Indian restaurant serving elevated versions of classic dishes in a chic, colorful space.",
                "rating": 4.2,
                "feedback": "The vada pav was a standout, and the cocktails were creative and well-crafted. A great spot for a fun night out with friends.",
                "address": "Unit-1, Process House, S.B. Road, Kamala Mills, Near Radio Mirchi Office, Lower Parel, Mumbai",
                "opening_time": "12:00 PM",
                "closing_time": "3:30 PM, 7:00 PM - 12:30 AM"
            },
            {
                "name": "Indigo Delicatessen",
                "city": "Mumbai",
                "description": "Casual deli serving a range of international dishes, including sandwiches, pastas, and burgers.",
                "rating": 4.0,
                "feedback": "The pastrami sandwich was excellent, and the desserts were decadent and delicious. A great spot for a quick lunch or a casual dinner.",
                "address": "Clifton Trishul Building, Ground Floor, Hiranandani Business Park, Powai, Mumbai",
                "opening_time": "8:00 AM",
                "closing_time": "3:30 PM, 7:00 PM - 12:30 AM"
            }
        ]
    }
]

export default data;