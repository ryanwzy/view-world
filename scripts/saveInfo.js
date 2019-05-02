(function() {
  var db = firebase.firestore();
  var storageRef = firebase.storage().ref();

  var canvas = document.getElementById("can");
  var submitBtn = document.getElementById("share");
  var name = document.getElementById("name");
  var story = document.getElementById("objStory");
  var maxNum = 0;
  db.collection("stories")
    .get()
    .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      var counterVal = doc.data().counter;
     
      if(counterVal>=maxNum)
        maxNum = counterVal;
        });
      });
     

  submitBtn.addEventListener("click", e => {
    e.preventDefault();
    var nameVal = name.value;
    var storyVal = story.value;
    if(nameVal==="")
       alert("The name is empty");
    else if(storyVal==="")
       alert("The story is empty");
    else{
//pull counter
        maxNum++;
        console.log(maxNum);

      db.collection("stories")
        .add({
          name: nameVal,
          story: storyVal,
          counter: maxNum
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          // console.log(maxNum);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });

        

      // console.log(maxNum);
      var fullName = nameVal + maxNum;
      // var fullName = nameVal + maxNum.toString();
      saveImage(fullName);
      // window.location.href = "gallery.html";
      alert("Submit successfully! You may want to explore other perspectives.");
      }

  });

  function saveImage(name) {

    console.log("save");

    canvas.toBlob(function(blob) {
      var image = new Image();
      image.src = blob;
      var metadata = {
        contentType: "image/png"
      };

      storageRef
        .child("images/" + name)
        .put(blob, metadata)
        .then(function(snapshot) {
          console.log("Uploaded", snapshot.totalBytes, "bytes.");
          //   window.location.href = "gallery.html";
        })
        .catch(function(error) {
          // [START onfailure]
          console.error("Upload failed:", error);
        });
    });
  }
})();
