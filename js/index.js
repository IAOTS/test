       var btn = document.getElementById("btn");
       btn.onclick = function() {
                  let name = prompt("Enter The Password"); // name won't be null, but it may be falsey, so here
        // we check if the name is falsey:
        if (name == "Hanan") {
            parent.location = 'index1.html';

        } else {
            parent.location = 'index.html';

        }

       }
       var note = document.getElementById("TestNotes");
       note.onclick = function() {
           document.getElementById("notes").style.display = "block";


       }
