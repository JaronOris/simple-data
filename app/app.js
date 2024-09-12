var navigation = [];
var students = [];
var parents = [];

function addStudentsAndParents() {
    $.each(students, (idx ,student) => {
        $(".student-holder").append(
            `<p>Name: ${student.name} Email: ${student.email} Grade: ${student.grade} Phone: ${student.phone}</p>`
        );
    })
    $.each(parents, (idx ,parent) => {
        $(".parent-holder").append(
            `<p>Name: ${parent.name} Email: ${parent.email} Phone: ${parent.phone}</p>`
        );
    });
}

function addNavBar() {
    let nav = `<nav>`;
    $.each(navigation, (idx, navName) => {
        nav += `<a href= "#${navName.url}">${navName.name}</a>`
    });
    nav += `</nav>`
    $("#nav-bar").html(nav);

    addStudentsAndParents();
}

function getData() {
    $.getJSON("data/data.json", function (data) {
      navigation = data.Navigation;
      students = data.Student;
      parents = data.Parent;
  
      addNavBar();
    //   $.each(data, function (idx, obj){
    //       console.log(obj)
    //   });
    }).fail(function() {
      console.log( error, `error ${error.statusText}`);
    })

  }

  function initListeners() {}

  $(document).ready(function () {
    getData();
  })