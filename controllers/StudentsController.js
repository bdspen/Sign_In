signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.signIn = function(student) {
    student.signedIn = true;
  };
  $scope.signOut = function(student) {
    student.signedIn = false;
  };
  $scope.StudentsFactory = StudentsFactory;
});
