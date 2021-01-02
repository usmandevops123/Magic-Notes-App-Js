// console.log('Welcome To Notes app'); 
showNotes();

// If user adds a note,add it to local storage  
var addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){ 
    var addTxt= document.getElementById('addTxt');
    var notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    } 
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value="";
    showNotes();

});

//Function to show elements from LocalStorage 
function showNotes(){  
    let notes =localStorage.getItem("notes");
    if(notes ==  null){
        notesObj=[];

    }
    else{
        notesObj= JSON.parse(notes);
    }  
    let html="";
    notesObj.forEach(function(element,index){
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">    
                <div class="card-body">
                  <h5 class="card-title">Note ${index+1} </h5>
                  <p class="card-text">${element}</p>
                  <a href="#" class="btn btn-primary">Delete Note</a>
                </div> 
    
    </div>;
    `
    });  
    var notesElm= document.getElementById("notes");
    if(notesObj.length !=0){
        notesElm.innerHTML= html;

    }
    else{
        notesElm.innerHTML='Nothing to show, add some items in the above notes '

    }

} 

//function to delete a note  
function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
    
var search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";

        } 
        else{
            element.style.display="none";
        }
        
    })
})

