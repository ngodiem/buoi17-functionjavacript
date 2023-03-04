
// lấy nội dung trong thẻ html dùng ngôn ngữ javaScript;
// truy cập vào thẻ div có id là id1 gán cho biến divTag
// 
// var divTag = document.getElementById("id1");
// var content = divTag.innerHTML; // lấy nội dung của thẻ div có id là id1 
// alert(content);

// lấy nội dung trong thẻ html dùng ngôn ngữ jquery;
// var content = $("#id1").html();
// alert(content);


// $(function() {
// 	//code bên trong chỉ được chạy khi toàn bộ code html được load hết
// 	alert(1);
// });

// click vào id2 thì ẩn(hide()) nôi dụng của id1
$("#id2").click(function(event) {
	
	$("#id1").hide();
});

// click vào id2 thì hiển thị(show()) nội dung của id1
$("#id3").click(function(event) {
	
	$("#id1").show();
});

// click vào id2 thì ẩn/hiện(toggle) nội dung của id1
$("#id4").click(function(event) {
	$("#id1").toggle();		
});


// jquery khi click vào id5 thì hiển thị nội dung của id1
$("#id5").click(function(event) {
	var content = $("#id1").html();
	alert(content);
});

// // javaScript khi click vào id5 thì hiển thị nội dung của id1
// var buttonId5 = document.getElementById("id5");
// buttonId5.onclick = function(){
// 	var divTag = document.getElementById("id1");
// 	var content = divTag.innerHTML;
// 	alert(content);
// }



// khi click vào id6 thì id1 được cập nhật nội dung thành XYZ

$("#id6").click(function(event) {
	/* Act on the event */
	$("#id1").html("cập nhật XYZ");
});

$("#id8").click(function(event) {
	/* Act on the event */
	var content = $("#id7").text();
	alert(content);
});

// khi click vào id10 thì sẽ lấy ra giá trị của id9
$("#id10").click(function(event) {
	var value = $("#id9").val();
	alert(value);		
});



$("#id11").click(function(event) {
	 $("#id9").val(50);		
});

// chèn nội dung phước trước dùng hàm prepend()
$("#id12").click(function(event) {
	$("#id1").prepend('1');
});

// chèn nội dung phước sau dùng hàm append()
$("#id13").click(function(event) {
	$("#id1").append('2');
});

// xóa phần tử dùng hàm remove()
$("#id14").click(function(event) {
	$("#id1").remove(); // xóa luôn thẻ chứa id1
});

// xóa nội dung dùng hàm empty()
$("#id15").click(function(event) {
	$("#id1").empty(); // xóa nội dung của thẻ đó
	// $("#id1").html("");
});


// đèn giao thông
$("#id17").click(function(event) {
	$("#id16").removeAttr("class");
	$("#id16").addClass("class1");
});

$("#id18").click(function(event) {
	$("#id16").removeAttr("class");
	$("#id16").addClass("class2")
});

$("#id19").click(function(event) {
	$("#id16").removeAttr("class");
	$("#id16").addClass("class3");
});


$("#id21").click(function(event) {
	$("#id20").removeClass("class1");

});

$("#id22").click(function(event) {
	$("#id20").toggleClass("class1");
	
});

// cách style inline trực tiếp không thông qua css
$("#id24").click(function(event) {
	$("#id23").css("background-color", "red");
	$("#id23").css("font-size", "24px");	
});

// $("#id24").click(function(event) {
// 	$("#id23").css({"background-color": "red", "font-size": "24px"})
	
// });

// $("#id24").click(function(event) {
// 	$("#id23").css({
// 		"background-color": "yellow",
// 		"font-size": "34px"
// 	});
// });

// $("#id27").click(function(event) {
// 	$("#id26").parent().css("border", "1px solid orange");
	
// });

// $("#id27").click(function(event) {
// var parent = 	$("#id26").parent().css({
// 		"boder": "1px solid black",
// 		"background": "red"
// 	});
// alert(parent.length);
// });

$("#id27").click(function(event) {
	/* Act on the event */
	var parent = $("#id26").parent().css({
		"border": "5px solid black",
		"background-color": "yellow"	});
	alert(parent.length);
});


// length là đếm số phần tử(tìm có bao nhiêu tổ tiên)
$("#id28").click(function(event) {
	var parents = $("#id26").parents() // parents() tổ tiên
	alert(parents.length);
	
});


// $("#id29").click(function(event) {
//   $("#id26").siblings().css("border", "1px solid orange");
//   alert($("#id26").siblings().length);
		
// });

$("#id29").click(function(event) {
var siblings =	$("#id26").siblings().css({
		"background": "red",
		"border": "5px solid yellow"
	});
	alert(siblings.length);
});

$("#id30").click(function(event) {
  $("#id25").children().css("border", "1px solid orange");
  alert($("#id25").children().length);
		
});

$("#id31").click(function(event) {
  $("#id25").find("*").css("border", "1px solid orange");
  alert($("#id25").find("*").length);
		
});


$("#id32").click(function(event) {
  $("#id26").next().css("border", "1px solid orange");
  alert($("#id26").next().length);
		
});


$("#id33").click(function(event) {
  $("#id26").next().css("border", "1px solid orange");
  alert($("#id26").next().length);
		
});


$("#id34").click(function(event) {
  $("#id26").prev().css("border", "1px solid orange");
  alert($("#id26").prev().length);
		
});

$("#id35").click(function(event) {
  $("#id26").prev().css("border", "1px solid orange");
  alert($("#id26").prev().length);
		
});

// học về try xuất cập nhật kích thước phần tử(làm việc với boxmodel)
$("#id38").click(function(event) {
  alert($("#id37").width());
  alert($("#id37").innerWidth());
  alert($("#id37").outerWidth());
  alert($("#id37").outerWidth(true));
  alert($("#id37").offset().top);
  alert($("#id37").offset().left);
});

