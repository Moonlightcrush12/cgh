function change() {
    user_name=document.getElementById("hello1").value
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html"
}