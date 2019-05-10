// JavaScript source code
function showHideCourseEnrolledTab() {

    courseStatus = XRM.Page.getAttribute("statecode");
    if (courseStatus.getValue() != null) {

        if (courseStatus.getValue == 0) {
            XRM.Page.ui.tabs.get("student_tab").setVisible(false)
        }
        else {
            XRM.Page.ui.tabs.get("student_tab").setVisible(true)
        }

    }

}