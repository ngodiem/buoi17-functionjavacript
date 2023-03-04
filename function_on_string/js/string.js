// concat()
var str1 = "Lorem ipsum";
var str2 = "dolor sit amet";
// concat(str1, str2, str3, ....)
var str3 = str1.concat(str2);
console.log("====Hàm concat()====");
console.log(str3);

// Nối chuỗi dùng toán tử +
str3 = str1 + str2;
console.log("====Toán tử + ====");
console.log(str3);

// startWidth() kiểm tra đầu chuổi trả về giá trị true/false
var str6 = "Lorem ipsum dolor sit amet";
var result1 = str6.startsWith("Lorem1");
var result2 = str6.startsWith("Lorem");
console.log("====Hàm startWidth()====");
console.log(result1);
console.log(result2);

// kiểm tra cuối chuổi dùng endsWidth() trả về giá trị true/false (phân biệt chữ hoa/ thường)
var str6 = "Lorem ipsum dolor sit amet";
var result = str6.endsWith("amet");
console.log("====Hàm endsWidth()====");
console.log(result);

// includes() // hàm kiểm tra trong chuỗi có ipsum k trả về giá trị true/false(phân biệt chữ hoa thường)
var result = str6.includes("ipsum");
console.log("====Hàm includes()====");
console.log(result);


// toUpperCase() chữ hoa, đổi chữ thường sang chữ hoa
var str7 = str6.toUpperCase();
console.log("====Hàm toUpperCase()====");
console.log(str7);


// toLowerCase() chữ hoa, đổi chữ hoa sang chữ thường 
var str8 = str6.toLowerCase();
console.log("====Hàm toLowerCase()====");
console.log(str8);





// charAt() - character lấy ra kí tự ở vị trí thứ 6
var str11 = str6.charAt(4);
console.log("====Hàm charAt()====");
console.log(str11);

// split() (tách ra)
str6 = "Lorem ipsum dolor sit amet";
var arr = str6.split(" ");
console.log("====Hàm split()====");
console.log(arr);




// slice() start> end bắt đầu từ 0 dấu cách tính là 1 kí tự
// subtring() đổi được start và end 
// slice() không thay đổi được start và end
// substr dùng form và length để lấy kí tự
str6 = "Lorem ipsum dolor sit amet";
var start = 6;
var end = 11;
var str13 = str6.slice(start, end);
console.log("====Hàm slice()====");
console.log(str13);

// substring()
str6 = "Lorem ipsum dolor sit amet";
var start = 11;
var end = 6; // dừng lại ở end k lấy kí tự 11
var str9 = str6.substring(start, end);
console.log("====Hàm substring()====");
console.log(str9);

// substr()
var str4 = "Lorem ipsum dolor sit amet";
var from = 6;
var length = 5;
// Nếu không có tham số thứ 2 thì lấy hết chuỗi con từ vị trí from
var str5 = str4.substr(from, length);
console.log("====Hàm substr()====");
console.log(str5);
// Nếu không có tham số thứ 2 thì lấy hết chuỗi con từ vị trí from
var str4 = "Lorem ipsum dolor sit amet";
var from = 6;
var length = 5;
var str52 = str4.substr(from);
console.log("====Hàm substr()====");
console.log(str52);

//indexOf() hàm kiểm tra chỉ số đầu
str7 = "Lorem ipsum dolor sit amet ipsum";
var position = str7.indexOf("ipsum");
console.log("====Hàm indexOf()====");
console.log(position);


//lastIndexOf() kt chỉ só cuối
str8 = "Lorem ipsum dolor sit amet ipsum";
var position = str8.lastIndexOf("ipsum");
console.log("====Hàm lastIndexOf()====");
console.log(position);

//test() // kiểm tra mẫu đưa 1 mẫu vào kt có tồn tại k?
str9 = "Lorem ipsum dolor sit amet ipsum";
var pattern = /Ips.*Lor/i; // * đi từ o đến n . là kí tự
var result = pattern.test(str9);
console.log("====Hàm test()====");
console.log(result);

// replace() - thay thế
// g: global - thay thế hết
// i: case-insensitive: không phân biệt hoa thường
// case-sensitive là phân biệt hoa thường
str6 = "Lorem ipsum dolor sit amet";
var str12 = str6.replace(/Ipsum|sit/gi, "haha");
console.log("====Hàm replace()====");
console.log(str12);

