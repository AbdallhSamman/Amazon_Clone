import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3D7_m-G0kXaH_LIgb0ddQXMX9V99YJ6A",
  authDomain: "fir-10e84.firebaseapp.com",
  projectId: "fir-10e84",
  storageBucket: "fir-10e84.appspot.com",
  messagingSenderId: "383499290795",
  appId: "1:383499290795:web:04184d59ecf975a4260fee",
  measurementId: "G-XTSGKZBBSP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

function generateItems() {
  const array = ["Cables", "HandMade", "PC", "ArtWork","Amazon"];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    for (let j = 0; j < 10; j++) {
      db.collection("categories")
        .doc(element)
        .set({
          category_id: index,
          category_name: element,
          category_image: "https://picsum.photos/200",
          products:[{
            product_id: j,
            product_description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
            product_name: "SignFord",
            product_price: Math.floor(Math.random() * 100),
            product_rating: Math.floor(Math.random() * 5),
            product_users_rating: Math.floor(Math.random() * 20),
            product_comments: { user_comment: "No comment", user_id: 0 },
            product_images: ["https://picsum.photos/200", "https://picsum.photos/200","https://picsum.photos/200", "https://picsum.photos/200"],
          },{
            product_id: j,
            product_description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
            product_name: "SignFord",
            product_price: Math.floor(Math.random() * 100),
            product_rating: Math.floor(Math.random() * 5),
            product_users_rating: Math.floor(Math.random() * 20),
            product_comments: { user_comment: "No comment", user_id: 0 },
            product_images: ["https://picsum.photos/200", "https://picsum.photos/200","https://picsum.photos/200", "https://picsum.photos/200"],
          }],
        });
    }
  }
}
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

export { db, auth };
