// JavaScript source code
function retrieveStudent() {

    Xrm.WebApi.retrieveRecord("new_student", "E00EE086-3673-E911-A984-000D3A3AC0C2", "?$select=new_name,new_cumulativegpa").then(
        function success(result) {

            alert("Student:" + result.new_name + ",Cumulative GPA:" + result.new_cumulativegpa);
        },
        function (error) {
            console.log('error.mesage');
        }

    );
}