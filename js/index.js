$(".btn").on("click", function(){
  var newTask = prompt("What is the next task?");
  console.log("newTask",newTask);

  var addedTask = "<li><span>" + newTask + "</pan<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></li></li>";
  // targeting "ul" with a id "task-lis" and appending the addedTask
  $("#task-list").append(addedTask);
});

// deleting the task:
// targeting "fa" class on the trash can
$(".fa").click(function(){
  //console.log("trash");
  //targeting the paren element of the "trash can" and applying .remove() method on it
  $(this).parent().remove();
});