(function() {
  var db = firebase.firestore();
  var storageRef = firebase.storage().ref();
  var gallery = document.getElementById("gallery");
  db.collection("stories")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        var nameVal = doc.data().name;
        var story = doc.data().story;
        var counterVal = doc.data().counter;
        var full = nameVal + counterVal;

        var signlePerson = document.createElement("div");
        signlePerson.setAttribute("class", "col-3");
        var name = document.createElement("p");
        name.innerText = nameVal;
        var info = document.createElement("p");
        info.innerText = story;
        signlePerson.append(name);
        signlePerson.append(info);
        gallery.append(signlePerson);
        storageRef
          .child("images/" + full)
          .getDownloadURL()
          .then(function(url) {
            var img = document.createElement("img");
            img.src = url;
            img.setAttribute("class", "col-12")

            signlePerson.append(img);
          });
      });
    });
})();
