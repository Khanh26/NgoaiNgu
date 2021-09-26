const courses = [
    {
        id : 1,
        name : "Khóa học TOEIC cấp tốc"
    },

    {
        id : 2,
        name : "Khóa học TOEIC 500+"
    },

    {
        id : 3,
        name : "Khóa học TOEIC 800+"
    },

    {
        id : 4,
        name : "Khóa học luyện đề TOEIC"
    },

    {
        id : 5,
        name : "Khóa học TOEIC 4 kỹ năng"
    },

    {
        id : 6,
        name : "Khóa học A1 cho người mới bắt đầu"
    },

    {
        id : 7,
        name : "Khóa học A1 nâng cao"
    },

    {
        id : 8,
        name : "Khóa học B1"
    }
];

const cities = [
    {   nameCity: "Cần Thơ",
        districts: [
            {
                nameDistrict: "Bình Thủy",
                wards: [
                    {
                        nameWard: "An Thới"
                    },
        
                    {
                        nameWard: "Bình Thủy"
                    },
        
                    {
                        nameWard: "Bùi Hữu Nghĩa"
                    },
        
                    {
                        nameWard: "Long Hòa"
                    },
        
                    {
                        nameWard: "Long Tuyền"
                    },
        
                    {
                        nameWard: "Thới An Đông"
                    },
        
                    {
                        nameWard: "Trà An"
                    },
        
                    {
                        nameWard: "Trà Nóc"
                    },
                ]
            },
        
            {
                nameDistrict: "Cái Răng",
                wards: [
                    {
                        nameWard: "Lê Bình"
                    },
        
                    {
                        nameWard: "Hưng Phú"
                    },
        
                    {
                        nameWard: "Hưng Thạnh"
                    },
        
                    {
                        nameWard: "Ba Láng"
                    },
        
                    {
                        nameWard: "Thường Thạnh"
                    },
        
                    {
                        nameWard: "Phú Thứ"
                    },
        
                    {
                        nameWard: "Tân Phú"
                    },
                ]
            },
        
            {
                nameDistrict: "Ninh Kiều",
                wards: [
                    {
                        nameWard: "Cái Khế"
                    },
        
                    {
                        nameWard: "An Hòa"
                    },
        
                    {
                        nameWard: "Thới Bình"
                    },
        
                    {
                        nameWard: "An Nghiệp"
                    },
        
                    {
                        nameWard: "An Cư"
                    },
        
                    {
                        nameWard: "Tân An"
                    },
        
                    {
                        nameWard: "An Phú"
                    },
        
                    {
                        nameWard: "Xuân Khánh"
                    },
        
                    {
                        nameWard: "Hưng Lợi"
                    },
        
                    {
                        nameWard: "An Khánh"
                    },
        
                    {
                        nameWard: "An Bình"
                    },
                ]
            },
        
            {
                nameDistrict: "Ô Môn",
                wards: [
                    {
                        nameWard: "Châu Văn Liêm"
                    },
        
                    {
                        nameWard: "Thới Hòa"
                    },
        
                    {
                        nameWard: "Thới Long"
                    },
        
                    {
                        nameWard: "Long Hưng"
                    },
        
                    {
                        nameWard: "Thới An"
                    },
        
                    {
                        nameWard: "Phước Thới"
                    },
        
                    {
                        nameWard: "Trường Lạc"
                    },
                ]
            },
        
            {
                nameDistrict: "Thốt Nốt",
                wards: [
                    {
                        nameWard: "Thốt Nốt"
                    },
        
                    {
                        nameWard: "Thới Thuận"
                    },
        
                    {
                        nameWard: "Thuận An"
                    },
        
                    {
                        nameWard: "Tân Lộc"
                    },
        
                    {
                        nameWard: "Trung Nhất"
                    },
        
                    {
                        nameWard: "Thạnh Hòa"
                    },
        
                    {
                        nameWard: "Trung Kiên"
                    },
        
                    {
                        nameWard: "Tân Hưng"
                    },
        
                    {
                        nameWard: "Thuận Hưng"
                    },
                ]
            },
        
            {
                nameDistrict: "Cờ Đỏ",
                wards: [
                    {
                        nameWard: "Thị trấn Cờ Đỏ"
                    },
        
                    {
                        nameWard: "Trung An"
                    },
        
                    {
                        nameWard: "Trung Thạnh"
                    },
        
                    {
                        nameWard: "Thạnh Phú"
                    },
        
                    {
                        nameWard: "Trung Hưng"
                    },
        
                    {
                        nameWard: "Thới Hưng"
                    },
        
                    {
                        nameWard: "Đông Hiệp"
                    },
        
                    {
                        nameWard: "Đông Thắng"
                    },
        
                    {
                        nameWard: "Thới Đông"
                    },
        
                    {
                        nameWard: "Thới Xuân"
                    },
                ]
            },
            
            {
                nameDistrict: "Phong Điền",
                wards: [
                    {
                        nameWard: "Thị trấn Phong Điền"
                    },
        
                    {
                        nameWard: "Nhơn Ái"
                    },
        
                    {
                        nameWard: "Giai Xuân"
                    },
        
                    {
                        nameWard: "Tân Thới"
                    },
        
                    {
                        nameWard: "Trường Long"
                    },
        
                    {
                        nameWard: "Mỹ Khánh"
                    },
        
                    {
                        nameWard: "Nhơn Nghĩa"
                    }
                ]
            },
        
            {
                nameDistrict: "Thới Lai",
                wards: [
                    {
                        nameWard: "Thị trấn Thới Lai"
                    },
        
                    {
                        nameWard: "Thới Thạnh"
                    },
        
                    {
                        nameWard: "Tân Thạnh"
                    },
        
                    {
                        nameWard: "Xuân Thắng"
                    },
        
                    {
                        nameWard: "Đông Bình"
                    },
        
                    {
                        nameWard: "Đông Thuận"
                    },
        
                    {
                        nameWard: "Thới Tân"
                    },
        
                    {
                        nameWard: "Trường Thắng"
                    },
        
                    {
                        nameWard: "Định Môn"
                    },
        
                    {
                        nameWard: "Trường Thành"
                    },
        
                    {
                        nameWard: "Trường Xuân"
                    },
        
                    {
                        nameWard: "Trường Xuân A"
                    },
        
                    {
                        nameWard: "Trường Xuân B"
                    }
                ]
            },
        
            {
                nameDistrict: "Vĩnh Thạnh",
                wards: [
                    {
                        nameWard: "Thị trấn Thanh An"
                    },
        
                    {
                        nameWard: "Thị trấn Vĩnh Thạnh"
                    },
        
                    {
                        nameWard: "Thạnh Mỹ"
                    },
        
                    {
                        nameWard: "Vĩnh Trinh"
                    },
        
                    {
                        nameWard: "Thạnh An"
                    },
        
                    {
                        nameWard: "Thạnh Tiến"
                    },
        
                    {
                        nameWard: "Thạnh Thắng"
                    },
        
                    {
                        nameWard: "Thạnh Lợi"
                    },
        
                    {
                        nameWard: "Thạnh Quới"
                    },
        
                    {
                        nameWard: "Thạnh Lộc"
                    }
                ]
            },
        ]
    },
]

// modal
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal-register');
const selectedCourses = document.querySelector('#selected-course');
const body = document.querySelector('body');
const notify = document.querySelector('.notify-register');
const modalForm = document.querySelector('.modal-main');
const btnNotify = document.querySelector('#btn-accept');
// Details course
const modalDetailsCourse = document.querySelector('.view-details-courses');
const closeDetailsCourse = document.querySelector('.view-courses-close');
const divCourses = document.querySelectorAll('.details-courses');

// get select
const formRegister = document.querySelector('.form-register');
const selectCity = document.querySelector('#cities');
const selectDistrict = document.querySelector('#district');
const selectWard = document.querySelector('#ward');

//////////////

// Get and add cities

// Get cities
function getCities() {
    return cities.map(function(city) {
        return city.nameCity;
    });
}

// Get districts
function getDistricts(nameCity) {
    let fitterDistricts = cities.find(function(city) {
        return city.nameCity == nameCity;
    });
    // map only array,fitterDistricts is object => [fitterDistricts]
    let getDistricts = [fitterDistricts].map(function(district) { 
        return district.districts;
    });
    return getDistricts[0];
}

// get ward
function getWard(nameDistrict, districts) {
    let fitterWards = districts.find(function(district) {
        return district.nameDistrict == nameDistrict;
    });
    let getWard = [fitterWards].map(function(ward) {
        return ward.wards;
    });
    return getWard[0];
}

function showDataCities() {
    // Add - type select
    const allCities = getCities();
    const showCities = allCities.map(function(city) {
        return `<option value="${city}">${city}</option>`
    })
    selectCity.innerHTML = '<option value="" selected>Chọn</option>'+showCities;

    // event select city
    selectCity.addEventListener("change", function() {
        let selectedCity = this.value;
        let districts = getDistricts(selectedCity);
        let showDistricts = districts.map(function(district) {
            return `<option value="${district.nameDistrict}">${district.nameDistrict}</option>`
        })
        selectDistrict.innerHTML = '<option value="" selected>Chọn</option>'+ showDistricts;
        selectDistrict.disabled = false;
    });

    // event select district
    selectDistrict.addEventListener("change", function() {
        let selectedCity = selectCity.value;
        let selectedDistrict = this.value;
        let districts = getDistricts(selectedCity);
        let wards = getWard(selectedDistrict, districts);
        let showWard = wards.map(function(ward) {
            return `<option value="${ward.nameWard}">${ward.nameWard}</option>`
        })
        selectWard.innerHTML = '<option value="" selected>Chọn</option>'+ showWard;
        selectWard.disabled = false;
    })
}


function showRegister(id) {
    modal.classList.add('open');
    body.style.overflow = "hidden";
    let nameCourse = courses.find(function(course,index) {
        return course.id == id;
    });
    selectedCourses.setAttribute("value",nameCourse.name);
    showDataCities();
    Validator({
        form: '.form-register',
        formGroupSelector: '.d-input',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#name','Vui lòng điền họ và tên'),
            Validator.isEmail('#email', 'Đây phải là email'),
            Validator.isBirthday('#birthday','Vui lòng điền đúng ngày sinh'),
            Validator.isRequired('#cities','Vui lòng chọn Tỉnh/Thành Phố'),
            Validator.isRequired('#district','Vui lòng chọn Quận/Huyện'),
            Validator.isRequired('#ward','Vui lòng chọn Phường/Xã'),
            Validator.isRequired('#address','Vui lòng điền địa chỉ'),
            Validator.isPhone('#phone','Vui lòng điền số điện thoại'),
        ],
        onSubmit: function(data) {
            notify.classList.add('open');
            btnNotify.addEventListener('click', function() {
                notify.classList.remove('open');
                hideRegister();
            });
        }
    })
}

function hideRegister() {
    formRegister.reset();
    // reset select
    selectDistrict.innerHTML = '<option value="" selected>Chọn</option>';
    selectWard.innerHTML = '<option value="" selected>Chọn</option>';
    selectDistrict.disabled = true;
    selectWard.disabled = true;
    // close modal
    modal.classList.remove('open');
    let inputItems = document.querySelectorAll('.d-input.invalid');
    inputItems.forEach(function(item,index){
        item.classList.remove('invalid');
    })
    body.style.overflow = "auto";
}

modalClose.addEventListener('click', hideRegister);

// details courses Có thời gian object cho tiện

function showDetailsCourse() {
    let getHeading = this.querySelector('.heading-detail-courses').textContent;
    document.querySelector('.view-courses-heading').textContent = getHeading;
    modalDetailsCourse.classList.add('open');
    body.style.overflow = "hidden";
}

function hideDetailsCourse() {
    modalDetailsCourse.classList.remove('open');
    body.style.overflow = "auto";
}

for (const divCourse of divCourses) {
    divCourse.addEventListener('click', showDetailsCourse);
}

closeDetailsCourse.addEventListener('click', hideDetailsCourse);
//  Sử lý không cho parent hiện lên
$(".btn-register").click(function (event) {
    event.stopPropagation();
});
