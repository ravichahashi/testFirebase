document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db.collection("test00").doc("test00p");
  myPost.onSnapshot((doc) => {
    const data = doc.data();
    // document.write(data.title + `<br>`)
    // document.write(data.createdAt + `<br>`)
    console.log(data);
    document.querySelector("#title").innerHTML = data.title;
  });
});

function updatePost(e) {
  let doc = document.querySelector("#doc").value;
  console.log(doc)
  const db = firebase.firestore();
  // const myPost = db.collection("test00").doc("test00p");
  // myPost.update({ title: e.target.value });
  db.collection("test00").doc(doc).set({ title: e.target.value })

}
