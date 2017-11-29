// Your jQuery goes here
var userData={};
if(localStorage.getItem('userData')){
 userData = JSON.parse(localStorage.getItem('userData'));
 $(".question").hide();
 $("#"+userData.currentQuestion).show();
 $("#name").val(userData.name);
 $("#email").val(userData.email);


 if(userData.name!="" && userData.email!="")
 $("#q1nxt").prop("disabled",false);

  var l = $("#q2a input[name='likeHTML']");
  for(var i=0; i<userData.html.likes.length; i++){
    $(l[userData.html.likes[i]]).prop('checked', true);
  }
  var dl = $("#q2a input[name='dislikeHTML']");
  for(var i=0; i<userData.html.dislikes.length; i++){
    $(dl[userData.html.dislikes[i]]).prop('checked', true);
  }
  l = $("#q2b input[name='likeCSS']");
  for(var i=0; i<userData.css.likes.length; i++){
    $(l[userData.css.likes[i]]).prop('checked', true);
  }
  dl = $("#q2b input[name='dislikeCSS']");
  for(var i=0; i<userData.css.dislikes.length; i++){
    $(dl[userData.css.dislikes[i]]).prop('checked', true);
  }
  l = $("#q2c input[name='likeJS']");
  for(var i=0; i<userData.js.likes.length; i++){
    $(l[userData.js.likes[i]]).prop('checked', true);
  }
  dl = $("#q2c input[name='dislikeJS']");
  for(var i=0; i<userData.js.dislikes.length; i++){
    $(dl[userData.js.dislikes[i]]).prop('checked', true);
  }
  $("#htmlnxt, #cssnxt, #jsnxt").click(function(event){
    if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true)
    {
      $("#q2").hide();
      $("#q2a").hide();
      $("#q2b").hide();
      $("#q2c").hide();
      $("#q3").show();
    }
  });
  var radio = $("#q3 input[name='RadioOptionsHTML']");
  for(var i=0; i<radio.length; i++){
    if(i == userData.strengths.html)
      $(radio[i]).prop('checked', true);
  }
  var radio = $("#q3 input[name='RadioOptionsCSS']");
  for(var i=0; i<radio.length; i++){
    if(i == userData.strengths.css)
      $(radio[i]).prop('checked', true);
  }
  var radio = $("#q3 input[name='RadioOptionsJS']");
  for(var i=0; i<radio.length; i++){
    if(i == userData.strengths.js)
      $(radio[i]).prop('checked', true);
  }
  $("#q3nxt").click(function(event){
    if(userData.strengths.html!="" && userData.strengths.css!="" && userData.strengths.js!=""){
      $("#q3").hide();
      $("#thanks").show();
    }
  });

}else{
  userData = {
    name:"",
    email:"",
    html: {likes: [], dislikes: []},
    css: {likes: [], dislikes: []},
    js: {likes: [], dislikes: []},
    position: [false, false, false],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
  };
  localStorage.setItem('userData', JSON.stringify(userData));
}
$("#startbtn").click(function(event){
  $("#welcome").hide('blind');
  $("#q1").show('blind');
});

function validateName(name){
	var vn = /^[A-Za-z ]+$/;
	return vn.test(name);
}

function validateEmail(email){
	var ve = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return ve.test(email);
}

$("#name").change(function(event){
  if(!validateName($("#name").val()))
    alert("Please enter a valid name");
});

$("#email").change(function(event){
  if(!validateEmail($("#email").val()))
    alert("Please enter a valid email address");
 if(validateName($("#name").val()) && validateEmail($("#email").val()))
    $("#q1nxt").prop("disabled",false);

});
$("#q1nxt").click(function(event){
  userData.name = $("#name").val();
  userData.email = $("#email").val()
  userData.currentQuestion="q1";
  localStorage.setItem('userData', JSON.stringify(userData));
    $("#q1").hide('blind');
  $("#q2").show('blind');
});

$("#htmlQ").click(function(event){
  $("#q2").hide('blind');
  $("#q2a").show('blind');
});

$("#cssQ").click(function(event){
  $("#q2").hide('blind');
  $("#q2b").show('blind');
});

$("#jsQ").click(function(event){
  $("#q2").hide('blind');
  $("#q2c").show('blind');
});

$(".prevQ2").click(function(event){
  $(this).parent().parent().parent().hide('blind');
  $("#q2").show('blind');
});
$("#q2a input[name='likeHTML']").click(function(event){
			if (this.checked) {
        userData.position[0] = true;
        userData.html.likes.push($("input[name='likeHTML']").index(this));
				userData.currentQuestion = "q2a";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q2a input[name='dislikeHTML']").click(function(event){
			if (this.checked) {
        userData.position[0] = true;
        userData.html.dislikes.push($("input[name='dislikeHTML']").index(this));
				userData.currentQuestion = "q2a";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#htmlnxt").click(function(event){
		if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true)
		{
			$("#q2").hide('blind');
			$("#q2a").hide('blind');
			$("#q3").show('blind');
		}
    else{
      $("#q2a").hide('blind');
  		$("#q2").show('blind');
    }
});

$("#q2b input[name='likeCSS']").click(function(event){
			if (this.checked) {
        userData.position[1] = true;
        userData.css.likes.push($("input[name='likeCSS']").index(this));
				userData.currentQuestion = "q2b";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});

$("#q2b input[name='dislikeCSS']").click(function(event){
			if (this.checked) {
        userData.position[1] = true;
        userData.css.dislikes.push($("input[name='dislikeCSS']").index(this));
				userData.currentQuestion = "q2b";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});

$("#cssnxt").click(function(event){
		if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true)
		{
			$("#q2").hide('blind');
			$("#q2b").hide('blind');
			$("#q3").show('blind');
		}
    else{
      $("#q2b").hide('blind');
  		$("#q2").show('blind');
    }
});


$("#q2c input[name='likeJS']").click(function(event){
			if (this.checked) {
        userData.position[2] = true;
        userData.js.likes.push($("input[name='likeJS']").index(this));
				userData.currentQuestion = "q2c";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});
$("#q2c input[name='dislikeJS']").click(function(event){
			if (this.checked) {
        userData.position[2] = true;
        userData.js.dislikes.push($("input[name='dislikeJS']").index(this));
				userData.currentQuestion = "q2c";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});


$("#jsnxt").click(function(event){
		if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true)
		{
			$("#q2").hide('blind');
			$("#q2c").hide('blind');
			$("#q3").show('blind');
		}
    else{
      $("#q2c").hide('blind');
  		$("#q2").show('blind');
    }
});

var variable;

$("#q3 input[name='RadioOptionsHTML']").click(function(event){
			if (this.checked) {
        variable = $("input[name='RadioOptionsHTML']").index(this);
        console.log(variable);
        userData.strengths.html=variable;
				userData.currentQuestion = "q3";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q3 input[name='RadioOptionsCSS']").click(function(event){
			if (this.checked) {
        variable = $("input[name='RadioOptionsCSS']").index(this);
        console.log(variable);
        userData.strengths.css=variable;
				userData.currentQuestion = "q3";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q3 input[name='RadioOptionsJS']").click(function(event){
			if (this.checked) {
        variable = $("input[name='RadioOptionsJS']").index(this);
        console.log(variable);
        userData.strengths.js=variable;
				userData.currentQuestion = "q3";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q3nxt").click(function(event){
  if(userData.strengths.html!="" && userData.strengths.css!="" && userData.strengths.js!=""){
    $("#q3").hide('blind');
    $("#thanks").show('blind');
    userData.currentQuestion = "thanks";
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  else{
    alert("Please Check an Option for each");
  }
});

$("#q3prev").click(function(event){
  $("#q3").hide('blind');
  $("#q2").show('blind');
  userData.currentQuestion = "q2";
  localStorage.setItem('userData', JSON.stringify(userData));
});


$("#thanksnxt").click(function(event){
  $("#thanks").hide('blind');
  $("#answers").show('blind');
  userData.currentQuestion = "answers";
  localStorage.setItem('userData', JSON.stringify(userData));
  $("#answer_name").append(userData.name);
$("#answer_email").append(userData.email);


var variable1;
  $("#q2a input[name='likeHTML']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerHTMLlike").append(" | "+variable1+" | ");
   }
  });

  $("#q2a input[name='dislikeHTML']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerHTMLdislike").append(" | "+variable1+" | ");
   }
  });

  $("#q2b input[name='likeCSS']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerCSSlike").append(" | "+variable1+" | ");
   }
  });

  $("#q2b input[name='dislikeCSS']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerCSSdislike").append(" | "+variable1+" | ");
   }
  });

  $("#q2c input[name='likeJS']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerJSlike").append(" | "+variable1+" | ");
   }
  });

  $("#q2c input[name='dislikeJS']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerJSdislike").append(" | "+variable1+" | ");
   }
  });

  $("#q3 input[name='RadioOptionsHTML']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerHTMLstrength").append(variable1);
   }
  });

  $("#q3 input[name='RadioOptionsCSS']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerCSSstrength").append(variable1);
   }
  });

  $("#q3 input[name='RadioOptionsJS']").each(function() {
    if(this.checked){
     variable1 = this.value;
     $("#answerJSstrength").append(variable1);
   }
  });
});

$("#deleteanswers").click(function(event){
  $("#answers").hide('blind');
  $("#welcome").show('blind');
  delete userData;
  userData = {
    name:"",
    email:"",
    html: {likes: [], dislikes: []},
    css: {likes: [], dislikes: []},
    js: {likes: [], dislikes: []},
    position: [false, false, false],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  location.reload();

});
