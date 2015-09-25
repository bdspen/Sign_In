signIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};

  factory.students = [{ name: "Forrest", signedIn: true },
   { name: "Jenny", signedIn: false },
   { name: "Lieutenant Dan Taylor", signedIn: true },
   { name: "Bubba", signedIn: false }
  ];

  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, signedIn: false });
    factory.studentName = null;
  };
  return factory;
});
