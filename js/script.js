const story = [
  {
    id: 1,
    location: "Detroit, Michigan, USA",
    background: "images/detroit_neighborhood_winter.jpg",
    text: "My name is Maya. I’m 16 years old, and I live on the east side of Detroit. Winter wraps around our house like an unpaid bill — cold, heavy, impossible to ignore. Mom says the heat must stay low this month. Poverty isn’t just about money. It’s like a shadow that stretches across the dinner table, even when the lights are on.",
    timeout: 6000,
    nextScene: 2
  },

  {
    id: 2,
    location: "Maya's Bedroom",
    background: "images/small_dark_bedroom.jpg",
    text: "At night, my thoughts are louder than the sirens outside. Anxiety is a buzzing mosquito in my ear — I can’t see it, but I feel it. My phone lights up with a reminder: 'School project due tomorrow.' My chest tightens.",
    buttons: [
      {
        text: "Try to sleep",
        color: "#4A90E2",
        nextScene: 3
      },
      {
        text: "Scroll through social media",
        color: "#E94E77",
        nextScene: 4
      }
    ]
  },

  {
    id: 3,
    location: "Bedroom - Late Night",
    background: "images/dark_room_window_light.jpg",
    text: "I close my eyes. My mind becomes a stormy ocean. Each worry is a wave crashing against a fragile boat. I tell myself: 'Breathe.' In. Out. The storm softens, but never fully leaves.",
    keyPress: {
      key: "Space",
      nextScene: 5
    }
  },

  {
    id: 4,
    location: "Bedroom - Phone Glow",
    background: "images/phone_glow_dark.jpg",
    text: "Everyone online seems brighter, happier, richer. Their lives sparkle like skyscrapers in New York City. Mine feels like a flickering streetlamp. I know social media is a mirror that lies — but I still stare into it.",
    timeout: 5000,
    nextScene: 5
  },

  {
    id: 5,
    location: "High School - Chicago (Field Trip Memory)",
    background: "images/chicago_school_trip.jpg",
    text: "Last year, we visited Chicago. The skyline rose like steel giants, fearless and shining. I wondered what it feels like to stand that tall inside your own mind. My teacher talked about mental health — how depression can feel like carrying invisible bricks in your backpack.",
    buttons: [
      {
        text: "Talk to the school counselor",
        color: "#7ED321",
        nextScene: 6
      },
      {
        text: "Keep everything inside",
        color: "#D0021B",
        nextScene: 7
      }
    ]
  },

  {
    id: 6,
    location: "School Counselor's Office",
    background: "images/counselor_office_warm.jpg",
    text: "The counselor’s office smells like tea and old books. I tell her how sometimes sadness sits on my chest like a concrete statue. She nods. 'Your feelings are real,' she says. Her words are small matches striking light in a dark cave.",
    timeout: 6000,
    nextScene: 8
  },

  {
    id: 7,
    location: "School Bathroom",
    background: "images/school_bathroom_empty.jpg",
    text: "I lock myself in a bathroom stall. Silence presses against me. Keeping emotions inside feels like shaking a soda can — eventually, something explodes. I stare at my reflection. Even mirrors can’t show invisible battles.",
    keyPress: {
      key: "Enter",
      nextScene: 8
    }
  },

  {
    id: 8,
    location: "Bus Ride Home",
    background: "images/city_bus_evening.jpg",
    text: "The bus moves through the city like a tired animal. Outside, abandoned houses stand like broken teeth. Poverty lives in these streets, but so does hope. I see kids playing basketball in an empty lot, laughter rising like birds into the gray sky.",
    buttons: [
      {
        text: "Start writing in journal",
        color: "#F5A623",
        nextScene: 9
      },
      {
        text: "Text best friend for support",
        color: "#50E3C2",
        nextScene: 10
      }
    ]
  },

  {
    id: 9,
    location: "Maya's Kitchen Table",
    background: "images/small_kitchen_evening.jpg",
    text: "I write: 'Depression is not weakness. It is a heavy coat in summer — exhausting and misunderstood.' The words don’t solve everything, but they build a bridge across my thoughts.",
    timeout: 5000,
    nextScene: 11
  },

  {
    id: 10,
    location: "Outside Apartment Building",
    background: "images/apartment_steps_evening.jpg",
    text: "My best friend replies: 'You’re not alone.' Those words feel like someone turning on a porch light. Maybe mental health isn’t a solo battle. Maybe it’s a team sport.",
    timeout: 5000,
    nextScene: 11
  },

  {
    id: 11,
    location: "Detroit Sunrise",
    background: "images/detroit_sunrise.jpg",
    text: "Morning stretches across Detroit in shades of gold. The sun rises even over cracked sidewalks. Poverty may shape my surroundings, but it does not define my horizon. My mind is still a work in progress — but even construction sites build something strong.",
    buttons: [
      {
        text: "End Story",
        color: "#9013FE",
        nextScene: null
      }
    ]
  }
];