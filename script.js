var todolist= document.getElementsByTagName("LI");
var taskNumber= document.getElementById("no-of-task");
taskNumber.innerHTML=todolist.length + " Tasks" ;

var close= document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    var count=1;
    close[i].onclick= function(){
        var div= this.parentElement;
        div.style.display= "none";
        var todolist= document.getElementsByTagName("LI");
        var taskNumber= document.getElementById("no-of-task");
        taskNumber.innerHTML=todolist.length-count + " Tasks" ;
        count++;
    }
    
}
var todoListCount=todolist.length;
var input= document.getElementById("add-todo");
input.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
            event.preventDefault();

        var li= document.createElement("li");
        var inputValue= input.value;
        var temp= document.createTextNode(inputValue);
        var temp1= document.createElement("SPAN");
        var txt1=document.createTextNode("");
        temp1.className="far fa-circle icon checkbox";
        temp1.appendChild(txt1);
        li.appendChild(temp1);
        li.appendChild(temp);
        document.getElementById("task-list").appendChild(li);
        document.getElementById("add-todo").value="";

        var span= document.createElement("SPAN");
        var txt= document.createTextNode("");
        span.className= "close far fa-times-circle";
        span.appendChild(txt);
        li.appendChild(span);
        todoListCount++;
        var i;
        for(i=0;i<close.length;i++){
            
            close[i].onclick= function(){
                todoListCount--;
                var div = this.parentElement;
                div.style.display= "none";
                var taskNumber= document.getElementById("no-of-task");
                taskNumber.innerHTML=todoListCount + " Tasks" ;
                
            }
        }
        
        var taskNumber= document.getElementById("no-of-task");
        taskNumber.innerHTML=todoListCount+ " Tasks" ;
    }
});

//to make the checked diffrent from unchecked
var tagged= document.querySelector("ul");
tagged.addEventListener('click', function(event){
    if(event.target.tagName=== 'LI'){
        event.target.classList.toggle("checked");
    }
},false);



// this must delete the all the fields which are selected
var clear= document.getElementById("clear-complete");
clear.onclick= function(){
    console.log('click ho rha hai');
    var completeTask= document.querySelectorAll("li.checked");
    var i;
    for(i=0;i<completeTask.length;i++){
    completeTask[i].style.display="none";
    }
    
}
var all= document.getElementById("all");
all.onclick= function(event){
    event.preventDefault();
    console.log('click ho rha hai');
    var temp=document.getElementById('task-list');
    temp.style.display="default";

}
var incomplete= document.getElementById('incomplete');
incomplete.onclick= function(event){
    event.preventDefault();
    // var temp=document.querySelector("li:not([class])");
    // //this is to select those which does not have class
   var completeTask= document.querySelectorAll("li.checked");
   var i;
   for(i=0;i<completeTask.length;i++){
   completeTask[i].style.display="none";
   }
}
var complete= document.getElementById("complete");
console.log(complete);
complete.onclick= function(event){
    event.preventDefault();
    var incompleteTask= document.querySelectorAll("li:not([class])");
    console.log(incompleteTask);
    var i;
    for(i=0;i<incompleteTask.length;i++){
    incompleteTask[i].style.display="none";
    }
}