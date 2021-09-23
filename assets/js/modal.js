const courses = [
    {
        id : 1,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 2,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 3,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 4,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 5,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 6,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 7,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 8,
        name : "Khóa học A1"
    }
];


const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal-register');
const selectedCourses = document.querySelector('.selected-courses');
const body = document.querySelector("body");
function showRegister(id) {
    modal.classList.add('open');
    body.style.overflow = "hidden";
    let nameCourse = courses.find(function(course,index) {
        return course.id == id;
    });
    selectedCourses.textContent = nameCourse.name

}

function hideBuyTickets() {
    modal.classList.remove('open');
    body.style.overflow = "auto";
}


modalClose.addEventListener('click', hideBuyTickets);