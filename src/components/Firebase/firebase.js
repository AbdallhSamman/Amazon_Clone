import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3D7_m-G0kXaH_LIgb0ddQXMX9V99YJ6A',
  authDomain: 'fir-10e84.firebaseapp.com',
  projectId: 'fir-10e84',
  storageBucket: 'fir-10e84.appspot.com',
  messagingSenderId: '383499290795',
  appId: '1:383499290795:web:04184d59ecf975a4260fee',
  measurementId: 'G-XTSGKZBBSP',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

function generateItems() {
  db.collection('categories')
    .doc('Tools category')
    .set({
      category_id: 1,
      category_name: 'Tools category',
      category_image: 'https://picsum.photos/200',
      products: [
        {
          product_id: 11,
          product_description: `About this item
          ADVANCED ACCURACY: Professionally calibrated to always return an accurate reading within 1% of the exact pressure of your tire. No more guessing! Accurately measures in a range from 3-250 PSI (0.2-17.2 Bar; 0.21-1724 Kpa; 0.2-17.5 kg/cm^2). Gifts for Men
          INCREASED SAFETY: Properly inflated tires provide better performance in all weather conditions, decreasing the likelihood of flats, explosions, and crashes; Increase your MPG and save money on fuel costs and tire wear
          ALL-IN-ONE FEATURES: The LED backlit screen features measurements in PSI, KPA, Bar, and Kg/cm^2; Includes an inflator, straight locking chuck, gauge, hose, and bleed valve, all in one unit; Compatible with both ¼” and ½” NPT air compressors outputs
          SUPERIOR CONSTRUCTION: Built of high quality, heavy duty stainless steel and brass components that provide lasting performance; Handle the pressure of Cars, Trucks, Motorcycles, SUVs, off road vehicles, RVs, Trailers, and more thanks to a leak-proof close flow valve in the lock-on chuck`,
          product_name: `AstroAI Digital Tire Inflator with Pressure Gauge, 250 PSI Air Chuck and Compressor Accessories Heavy Duty with Rubber Hose and Quick Connect Coupler for 0...`,
          product_price: 26.05,
          product_rating: 10,
          product_users_rating: 2,
          product_category: 'Tools category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/71bY48eVGKL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81bw9zi0oRL._AC_SL1500_.jpg',
          ],
        },
        {
          product_id: 12,
          product_description: `DIY Home Tol Set：The kit includes Electric Screwdrivers, Claw Hammer, Spade Bits, Wrenches, Screwdrivers, Pliers and many other tools that allow you to create DIY manual ideas without any scruples，Tools are securely housed in a sturdy case that keeps them safe, clean, organized and easy to find.
          Lithium Power Drill Drivers：The1250mAh Rechargeable Ni-Cad battery charges (charger included) in 3 to 5 hours and is capable of a large number of charging and discharging cycles. it just takes you 60-min to be full charged and its cycle life is more than 250 times,This battery provides power for upto 8Nm of forward,Soft rubber handle gives you comfortable grip feeling and build-in bright LED light creates a better experience at dark areas.
          Advanced Alloy Tools : Tools are manufactured from high-grade steel alloy, chrome plated to resist corrosion .Precision screwdrivers are great for smaller fasteners on home appliances and electronics, All our products meet international standards of testing and are guaranteed against defects in design, material and workmanship.
          Power Tools Combo Kit With 16.8V Cordless Drill：18+1 Torque Setting，18 position adjustable torque clutch for screw driving and 1 position for drilling into wood，metal， plastic，etc. Max drilling capacity is 22mm(7/8"") for wood, 10mm(3/8"") for steel.Variable Speed Switch adjust speed by the amount of trigger depression; 2-Gear-option with max torque 247 in-lbs for high (0-1300rpm) or low (0-350rpm) speed drilling/driving speeds. 90-day warranty.
          1 Year Warranty，Quality Guarantee：1pcs 16.8V Cordless Drill，1pcs 16mm Spade Bits，5pcs drill bits, 10pcs driver bits, 3pcs Flat Head Precision Screwdrivers，3pcs Phillips Head Precision Screwdrivers，1pcs Tape measure，1pcs Needle Nose Plier，1pcs Flat Nose Plier, SAE Hex Keys，1pcs Multi-Bit Screwdriver Set，1pcs Saw，1pcs Insulation Tape，1pcs Digital Pen，1pcs Utility Knife，1pcs Wire Stripper，Our hand tools are forged for strength, chrome plated to withstand corrosion and lasts a lifetime in normal use`,
          product_name: `jar-owl Tool Kits 16.8V Cordless Drill Lithium Lon with 91 Piece Tool Set Combination Package and Plastic Toolbox Storage Case`,
          product_price: 59.49,
          product_rating: 10,
          product_users_rating: 2,
          product_category: 'Tools category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/71u-DUwMYCL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71LLHBWefvL._AC_SL1500_.jpg',
          ],
        },
        {
          product_id: 13,
          product_description: `About this item
          COMPACT MULTI TOOLS HATCHET: Contains 14 different tools including Axe, Hammer, Knife, Screwdrivers, Wrenchs. It's made of high-grade stainless steel and the tools are covered with durable black oxidation, this makes them rust-resistant, service life is extended perfectly. Definitely super cool dad presents and gadgets for men.
          A MUST-HAVE EDC: These tools for men are strong enough to Cut, Pry, Twist, ideal as fishing, hunting, camping gear and accessories. It's also great survival gear and car accessories, strong enough to break the window glass and cut the seat-belt in a dangerous escape, etc. It's lightweight enough, also suit for women who like outdoor explore.
          EASY TO CARRY: Solid nylon pouch holds the equipment well. An extra little nylon pouch secures the blade to avoid potential injury when using the hammer or any other tool except for the axe. Multiple tools in one design save your tool box space, gives you the convenience to take out. Super unusual outdoor gifts for men.
          UNIQUE TOP GIFTS FOR MEN: If you're looking for the best gifts for men who have everything, like your Father, Husband, Boyfriend, Grandpa, Brother, Uncle, Teen Boys, Friend, and Son on Christmas, Thanksgiving Day, Father’s Day, Birthday. Gifts for teenage boys
          Service: Quality and Customer Satisfaction are our top priorities. If man gifts doesn’t live up your expectations, contact us and we will solve it to make sure that you are happy with your purchase. USA PATENT PENDING.`,
          product_name: `Gifts for Men Dad Husband Valentines Day， Camping Accessories, Survival Gear and Equipment, Unique Hunting Fishing Gift Ideas for Him Boyfriend Husband...`,
          product_price: 18.99,
          product_rating: 10,
          product_users_rating: 2,
          product_category: 'Tools category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/71rjjsOjvuL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/815JASIIL0L._AC_SL1500_.jpg',
          ],
        },
        {
          product_id: 14,
          product_description: `【Ratchet Design】 The professional PVC cutter adopts self-locking ratchet design. The ratchet drive greatly enhances the bite force. When using it, you can save time and effort to complete the cutting task.
          【High Quality Craftsmanship】Our blades are made of Teflon material are not easily broken and not easy to rust. Durable pipe cutters are made of high-quality manganese steel with high hardness up, good toughness and durability.
          【Humanized Design】The ergonomically designed handle is wrapped in rubber, which not only increases the anti-slip and wear resistance of the handle, but also improves the comfort of use. you will not feel the soreness of the palm if you use it for a long time.
          【Wide Range of Applications】The Pipe Cutter blade for cutting most plastic (PVC, CPVC, PP, PEX, PE, rubber hose) and multilayer pipes. the cutting capacity up to 1-5 / 8 inches (42mm) outside diameter.
          【Safe Design】Plumbing tools pipe cutter ratchet design is set at the bottom of the blade, which can prevent the pipe cutter from accidentally springback when pressing down, and it will lock automatically when cutting. The buckle at the bottom of the knife body can lock the handle when it is not in use, which is convenient to carry and store.`,
          product_name: `BAiSHITE PVC Pipe Cutter, High Performance Teflon blade Made Ratchet-type Pipe Cutter, One-hand Fast Pipe Cutting Tool for PVC PPR PE PEX Pipe and Other...`,
          product_price: 10.1,
          product_rating: 5,
          product_users_rating: 10,
          product_category: 'Tools category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/717alcC63DL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71cxwYOO8YL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71shh7RwTqL._AC_SL1500_.jpg',
          ],
        },
        {
          product_id: 15,
          product_description: `About this item
          ELECTRIC MINI CIRCULAR SAW versatile, and easy-to-use perfect for any DIY home projects for men and women (installing wood floors, tiles, grout repair, fences, planters, herb gardens, signs, bird houses, doll houses, drywall repair, pipes, and much more)
          STRONGER MOTOR (500W / 4500 RPMs) than original Rotorazer (400W / 3400 RPMs) for advanced projects. 120 Vikt-60 Hz. Cuts 1" in a single pass (vs. 1/2" with Rotorazer Original). Adjustable thickness depth. NEW INCLUDED ATTACHMENTS, such as the Parallel Guide Rail ensures straight, precise cuts easily and quickly
          CUT ANY TYPE OF MATERIAL from PVC, drywall, carpet and hardwood to ceramic tile, plastic, marble, metal & steel. Circular Saw Kit comes with multiple multi saw blades (Tungsten Carbide, Diamond, Steel), Dust Collector, Saw Case. 85MM blades (vs 54.8MM original rotorazer blades).
          EASILY CUTS IN ANY DIRECTION - horizontally, vertically, straight lines, curved lines, corners, & even upside down. 7 DIFFERENT SAWS IN ONE. Rotorazer is combination of Jigsaw, Circular, Hand, Band, Tile, Hacksaw, and Miter saw.
          AUTHENTIC AS SEEN ON TV. TRUSTED BRAND Makes a great gift for Dad!`,
          product_name: `Rotorazer Platinum Compact Circular Saw Set - Extra Powerful - Deeper Cuts! DIY Projects - Cut Drywall, Tile, Grout, Metal, Pipes, PVC, Plastic, and Copper....`,
          product_price: 165.99,
          product_rating: 5,
          product_users_rating: 10,
          product_category: 'Tools category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/511u6Ug1o-L._AC_SL1000_.jpg',
            'https://m.media-amazon.com/images/I/61dp4mA7GoL._AC_SL1000_.jpg',
          ],
        },
        {
          product_id: 16,
          product_description: `About this item
          Versatile Fastening Tool - YEAHOME 4-in-1 Staple Gun accepts D-shaped, U-shaped, T-shaped, and Pin Staples. This kit comes with 1000pcs of each " D-Type, " T-Type, " U-Type , and " Pin Brad Nails for a wide variety of applications: general DIY repairs, crafting, decorating, upholstery projects, roofing, and more.
          Heavy-Duty Staple Gun - Features all chromed-steel construction and a chrome finish to provide strength and durability, and make the staple gun rust-proof. YEAHOME staple guns are assembled toughly so that it can handle the tough load and last as long as you need it!
          Power Adjustment - Change the pressure (between low to high) with the screw lever as per the requirement of your projects, to staple in soft as well as hard materials, make your projects easier.
          Easy to Use - Steel handle with over-molded grip to help provide comfortable usage and easy operation. Bottom load design and a steel magazine for quick and easy loading.
          GUARANTEE from YEAHOME: Comes with a user manual, if it can not resolve the problem you met, please contact with us, there is always someone available to help you around the clock. We offer 180 Days Money Back and Replacement Guarantee warranty and a full money-back and replacement guarantee.`,
          product_name: `Upholstery Staple Gun Heavy Duty, YEAHOME 4-in-1 Stapler Gun with 4000 Staples, Manual Brad Nailer Power Adjustment Stapler Gun for Wood, Crafts, Carpentry,...`,
          product_price: 14.44,
          product_rating: 5,
          product_users_rating: 10,
          product_category: 'Tools category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/719F0MJ+52L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71oUrM9by+L._AC_SL1500_.jpg',
          ],
        },
      ],
    })

  //----------------------------------------------
  db.collection('categories')
    .doc('home category')
    .set({
      category_id: 10,
      category_name: 'home category',
      category_image: 'https://picsum.photos/200',
      products: [
        {
          product_id: 602,
          product_description: `About this item
          ♨SMOOTH BURSTS OF STEAM: With up to 1600 watts of safe, thermostat-controlled steaming power reaching 302℉, it’s easy to soften, refresh, and de-wrinkle a wide range of fabrics including clothing, delicates, bedding, curtains, upholstered furniture, and more
          👔SHIFT TO IRONING IN THE MOMENT: Turn off the steam trigger lock, and you will immediately get a 130℃ constant temperature large area hot ceramic iron. Never fear of clothes getting burned again. You can easily switch the button on the top of the iron and go from steam to straight iron, let this clothes steamer be used More conveniently.
          💦INNOVATIVE TECHNOLOGY, NO WATER SPOTS LEFT BEHIND: Adopting advanced atomization technology, the steam is more delicate and will not cause water stains. Heating and atomization are carried out at the handle, Which avoids the water leakage in the garment steamer, and never meets the burns caused by the water pipe heating up and steam leaks when using KOTLIE fabric steamer
          💨💨 POWERFUL STEAMER WITH LARGE WATER TANK: With adjustment steam switch, KOTLIE garment steamer provide a powerful steam amount up to 30g/min, 2.4L large water tank will supports up to 110min continuous use time
          🧭Self-Cleaning Mode: Unlike other usual fabric clothing steamer, KOTLIE steamer come with a self-cleaning mode, which will reduce scale residue while using, provide a powerful continuous steam and longer service time`,
          product_name: `Steamer for Clothes Standing, KOTLIE 1600W 2 in 1 Professional Fabric Clothing Steamer and Iron, 4 Steam Level Fast Heat-up and Self-cleaning Garment Steamer w/ 2.4L Tank for 110 min Continuous Steam…`,
          product_price: 109.99,
          product_rating: 3,
          product_users_rating: 1,
          product_category: 'home category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/61pogFeI7PL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71HNCrPx4dL._AC_SL1500_.jpg',
          ],
        },
        {
          product_id: 701,
          product_description: `About this item
          Every Bissell purchase helps save pets. Bissell proudly supports Bissell pet foundation and its mission to help save homeless pets.
          Our most powerful portable spot and stain cleaner for carpets, stairs, upholstery, auto interiors, and more.
          Combines superior suction, scrubbing action and professional cleaning solution to remove stubborn pet stains, embedded dirt and more.
          Provides a deep clean that leaves you with professional-style results.
          Permanently removes tough pet stains with the power of OXY.
          Includes a stain trapper tool to catch the dirtiest pet messes. Also comes with a 3" tough stain tool and two trial-size pet pro oxy urine eliminator formulas.
          `,
          product_name: `BISSELL SpotClean Pet Pro Portable Carpet Cleaner`,
          product_price: 145.09,
          product_rating: 4,
          product_users_rating: 1,
          product_category: 'home category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/91VGmYYrzzL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/914-htizkTL._AC_SL1500_.jpg',
          ],
        },
      ],
    })
  db.collection('categories')
    .doc('Games category')
    .set({
      category_id: 999,
      category_name: 'Games category',
      category_image: 'https://picsum.photos/200',
      products: [
        {
          product_id: 602,
          product_description: `Reimagined gameplay creates advances across every mode in FIFA 22.
          Live out your dreams as you create and manage your custom club in career mode.
          Volta Football returns with more flair all over the pitch and new ways to express your style.
          Build your dream squad and compete in FIFA Ultimate Team.
          `,
          product_name: `FIFA 22 Standard - PC [Online Game Code]`,
          product_price: 24,
          product_rating: 1,
          product_users_rating: 1,
          product_category: 'Games category',
          product_comments: { user_comment: 'Trash Game', user_id: 1 },
          product_images: [
            'https://m.media-amazon.com/images/I/61pBodxv9vL._AC_SX792_SY594_.jpg',
            'https://m.media-amazon.com/images/I/71w13I3nt2S._AC_SX480_SY360_.jpg',
          ],
        },
        {
          product_id: 701,
          product_description: `Ships from and sold by Amazon.com Services LLC.
          Note: After purchase, you can access the item in Your Games Library.
          By placing your order, you agree to our Terms of Use.
          This product is non-returnable and non-refundable.
          Note: Currently, this item is available only to customers located in the United States.
          Platform For Display: PC Online Game Code - Origin`,
          product_name: `Mass Effect Legendary PC [Online Game Code]`,
          product_price: 29.99,
          product_rating: 4,
          product_users_rating: 1,
          product_category: 'Games category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/813sJmdG+7S._AC_SX960_SY720_.jpg',
            'https://m.media-amazon.com/images/I/71pfo-qCwpL._AC_SX480_SY360_.jpg',
          ],
        },
        {
          product_id: 7011,
          product_description: `Become the Inquisitor: Create your character and lead a team of unique heroes on a perilous journey through a beautiful, open world. Tough choices define your experience, and even one decision can change the course of what's to come.
          Jaws of Hakkon: Enter an overgrown wilderness filled with Avvar, fiercely independent hunters who settled in the southern mountains of Thedas. Uncover what happened to the last Inquisitor and the dragon he pursued. Face powerful foes and confront an ancient god of war bent on destroying the world.
          The Descent: Descend into the Deep Roads to battle monstrous darkspawn, bloodthirsty creatures that dwell beneath the surface of Thedas. Explore cavernous dungeons to find the cause of worsening earthquakes and solve one of Thedas’ greatest mysteries.
          Trespasser: After saving the world by closing the Breach, your next mission determines the future of the Inquisition itself. It's up to you to defeat a great evil that could devastate Thedas. Embark on a last adventure with your team to confront the one who started it all.
          Deluxe Upgrade, Spoils of the Avvar & Spoils of the Qunari: Customize your Inquisition with specialized gear, legendary weapons, diverse mounts, and unique Skyhold elements to personalize your home base.
          `,
          product_name: `Dragon Age: Inquisition - Game of the Year Edition - PC [Digital Code]`,
          product_price: 25.99,
          product_rating: 5,
          product_users_rating: 1,
          product_category: 'Games category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/91LjyPDhyCL._AC_SX960_SY720_.jpg',
            'https://m.media-amazon.com/images/I/81BfbuECefL._AC_SX480_SY360_.jpg',
            'https://m.media-amazon.com/images/I/81RQpDIFZYL._AC_SX480_SY360_.jpg',
          ],
        },
        {
          product_id: 7012,
          product_description: `Only in Battlefield can you experience Levolution, changing the landscape in real-time with interactive environments that react to your every move.
          Only in Battlefield will you find the awe-inspiring power of the next generation Frostbite 3 engine, whose unrivaled audio and visual fidelity make your game more dramatic, more believable, and more human.
          Only in Battlefield can you experience an unmatched level of all-out war that grants you the freedom to play to your strengths and carve your own path to victory.
          Only in Battlefield do you have the power to dominate land, air and sea with all-new, intense water-based vehicle combat.
          `,
          product_name: `Battlefield 4 [Online Game Code]`,
          product_price: 7.99,
          product_rating: 3,
          product_users_rating: 1,
          product_category: 'Games category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/91AFCdHkvoL._AC_SX960_SY720_.jpg',
            'https://m.media-amazon.com/images/I/81VXAsno2fL._AC_SX480_SY360_.jpg',
          ],
        },
        
        {
          product_id: 7017,
          product_description: `About this item
          A BRASH REBEL ASSASSIN: Become Edward Kenway, a charismatic yet brutal pirate captain, trained by Assassins. Edward can effortlessly switch between the Hidden Blade of the Assassin's Order and all new weaponry including four flintock pistols and dual cutlass swords
          EXPLORE AN OPEN WORLD FILLED WITH OPPORTUNITIES: Discover the most diverse Assassin's Creed world ever created. From Kingston to Nassau, explore 50 unique locations where you can live the life of a pirate
          BECOME THE MOST FEARED PIRATE IN THE CARIBBEAN: Command your ship, the Jackdaw, and strike fear in all who see her. Plunder and pillage to upgrade the Jackdaw with ammunition and equipment needed to fight off enemy ships
          EXPERIENCE THE GRITTY REALITY BEHIND THE PIRATE FANTASY: Stand amongst legendary names such as Blackbeard and Benjamin Hornigold, as you establish a lawless Republic in the Bahamas and relive the truly explosive events that defined the Golden Age of Pirates
          MULTIPLAYER EXPERIENCE: Play with your friends in the ruthless and critically acclaimed multiplayer experience. Choose from an eclectic cast of characters from the Golden Age of Pirates and fight to the death in exotic locations
          `,
          product_name: `Assassin's Creed IV Black Flag - PlayStation 4`,
          product_price: 15.99,
          product_rating: 5,
          product_users_rating: 1,
          product_category: 'Games category',
          product_comments: { user_comment: 'No comment', user_id: 0 },
          product_images: [
            'https://m.media-amazon.com/images/I/71bY48eVGKL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81bw9zi0oRL._AC_SL1500_.jpg',
          ],
        },
      ],
    })
}
// generateItems()

// generateItems();
// let products = [];
// db.collection("categories")
//   .get()
//   .then((querySnapshot) => {
//     console.log(querySnapshot.docs[0].Df.sn.proto.mapValue.fields.category_id.integerValue);
//     querySnapshot.forEach((doc) => {
//       products.push(doc.data());

//     });
//     console.log( products[0]);
//   })
//   .catch((error) => {
//     console.log("Error getting documents: ", error);
//   });

export { db, auth }
