signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  
  factory.students = [{ name: "Forrest", signedIn: false },
   { name: "Jenny", signedIn: false } ];

  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, signedIn: false });
    factory.studentName = null;
  };
  return factory;
});
