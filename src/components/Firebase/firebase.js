import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3D7_m-G0kXaH_LIgb0ddQXMX9V99YJ6A",
  authDomain: "fir-10e84.firebaseapp.com",
  projectId: "fir-10e84",
  storageBucket: "fir-10e84.appspot.com",
  messagingSenderId: "383499290795",
  appId: "1:383499290795:web:04184d59ecf975a4260fee",
  measurementId: "G-XTSGKZBBSP"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


// db.collection('categories').doc('15').set({
//   category_id:1,
//   category_name:'Pizzza',
//   category_image:"no image",
//   products:{
//             'product_id':1,
//             'product_description':"This is a good product",
//             'product_name':"Pizza",
//             'product_price':999,
//             'product_rating':-50,
//             'product_users_rating':2,
//             'product_comments':{user_comment:"No comment",user_id:0},
//             'product_images':["no image","no image 2"]
//   },
// });
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
