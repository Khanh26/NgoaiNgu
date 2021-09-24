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
    
// open - close modal
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal-register');
const selectedCourses = document.querySelector('#selected-course');
const body = document.querySelector("body");
function showRegister(id) {
    modal.classList.add('open');
    body.style.overflow = "hidden";
    let nameCourse = courses.find(function(course,index) {
        return course.id == id;
    });
    selectedCourses.setAttribute("value",nameCourse.name);
}

function hideBuyTickets() {
    modal.classList.remove('open');
    body.style.overflow = "auto";
}

modalClose.addEventListener('click', hideBuyTickets);

// process select
const selectCity = document.querySelector("#cities");
const selectDistrict = document.querySelector("#district");
const selectWard = document.querySelector("#ward");
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

// Add - type select
const allCities = getCities();
const showCities = allCities.map(function(city) {
    return `<option value="${city}">${city}</option>`
})
selectCity.innerHTML += showCities;

// event select city
selectCity.addEventListener("change", function() {
    let selectedCity = this.value;
    let districts = getDistricts(selectedCity);
    let showDistricts = districts.map(function(district) {
        return `<option value="${district.nameDistrict}">${district.nameDistrict}</option>`
    })
    selectDistrict.innerHTML = showDistricts;
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
    selectWard.innerHTML = showWard;
    selectWard.disabled = false;
})
