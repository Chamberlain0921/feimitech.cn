/*会员注册登录*/
$('#zhuce').click(function(){
	var username  = $('#username'),
		password  = $('#password'),
		rpassword = $('#rpassword'),
		tel       = $('#tel'),
		email     = $('#email');
	switch (true){
		case username.val().length < 6:
			alert("用户名不能少于6位字符！");
			username.focus();
			return false;
			break;
		case password.val().length < 4:
			alert("登录密码不能少于4位字符！");
			password.focus();
			return false;
			break;
		case password.val() != rpassword.val():
			alert("登录密码不一致！");
			rpassword.focus();
			return false;
			break;
		case tel.val() == '':
			alert("手机号码不能为空！");
			tel.focus();
			return false;
			break;
	}
	
	//电话号码验证
	if (!tel.val().match(/^(((1[0-9]{1})|159|153)+\d{9})$/)) { 
		alert("手机号码格式不正确！"); 
		tel.focus(); 
		return false; 
	} 
	if(email.val() != '') {
   		if(!email.match(/^[a-zA-Z0-9_-]+([-_.][a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+[-.])+([a-zA-Z0-9_-]{2,3}){1,2}$/))
        {
       		alert("邮箱格式不正确！请重新输入");
      		email.focus();
      		return false;
  		}
   }

})


$('#denglu').click(function(){
	var username  = $('#username'),
		password  = $('#password'),
		valicode  = $('#valicode');
	switch (true){
		case username.val() == '':
			alert("用户名不能为空！");
			username.focus();
			return false;
			break;
		case password.val() == '':
			alert("登录密码不能为空！");
			password.focus();
			return false;
			break;
		case valicode.val() == '':
			alert("验证码不能为空！");
			valicode.focus();
			return false;
			break;
	}
})

//修改我的个人信息
$('#personal-send').click(function(){
	var tel       = $('#tel'),
		email     = $('#email');
	if(tel.val() != '') {
		if (!tel.val().match(/^(((1[0-9]{1})|159|153)+\d{9})$/)) { 
			alert("手机号码格式不正确！"); 
			tel.focus(); 
			return false; 
		} 
	}
	if(email.val() != '') {
   		if(!email.val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
       		alert("邮箱格式不正确！请重新输入");
      		email.focus();
      		return false;
  		}
    }

})


/*修改密码*/
$('#password-send').click(function(){
	var password       = $('#password'),
		newpassword    = $('#newpassword'),
		repeatpassword = $('#repeatpassword');
	switch (true){
		case password.val() == '':
			alert("原密码不能为空！");
			password.focus();
			return false;
			break;
		case newpassword.val().length < 4:
			alert("新密码不能少于4位字符！");
			newpassword.focus();
			return false;
			break;
		case newpassword.val() != repeatpassword.val():
			alert("两次密码输入不一致！");
			repeatpassword.focus();
			return false;
			break;
	}
	
})

/*修改密码*/
$('#addressadd-send').click(function(){
	var name     = $('#address-name'),
		tel      = $('#address-tel'),
		prov     = $('#prov'),
		detailed = $('#address-detailed');
	switch (true){
		case name.val() == '':
			alert("收货人姓名不能为空！");
			name.focus();
			return false;
			break;
		case !tel.val().match(/^(((1[0-9]{1})|159|153)+\d{9})$/):
			alert("联系电话格式不正确！");
			tel.focus();
			return false;
			break;
		case prov.val() == '':
			alert("所在地区不能为空！");
			prov.focus();
			return false;
			break;
		case detailed.val() == '':
			alert("详细地址不能为空！");
			detailed.focus();
			return false;
			break;
	}	
})

$('.user-plist a.user-plist-remove').click(function(){
	var _this = $(this);
    var id = $(this).data('id');
    var url = home_url+'ajaxOrders.php?action=lists';
    var flag = confirm('确定删除此记录么？');
    if(flag){
    	$.post(url,{id:id}, function(data){
	    	if (data == 1) {
	    		_this.parent().remove();
	    	}
	    });
    }
})

$('.likes-list a.buy-like').click(function(){
	var _this = $(this);
    var id = $(this).data('id');
    var url = home_url+'ajaxOrders.php?action=like';
    var flag = confirm('确定不再收藏此商品么？');
    if(flag){
    	$.post(url,{id:id,loves:2}, function(data){
	    	if (data == 3) {
	    		_this.parent().remove();
	    	}
	    });
    }
})

$('.address-list li a.delete-a').click(function(){
	var _this = $(this);
    var id = $(this).data('id');
    var url = home_url + 'ajaxOrders.php?action=deleteAddress';
    var flag = confirm('确定删除此记录么？');
    if(flag){
    	$.post(url,{id:id}, function(data){
	    	if (data == 1) {
	    		_this.parents('li').remove();
	    	}
	    });
    }
})

function defaultAddress(id){
    var url = home_url + 'ajaxOrders.php?action=defaultAddress';
    $.post(url,{id:id}, function(data){
        if (data == 1) {
            window.location.reload();
        }
    });
}

function saveAddress(_this, id){
    var url = home_url + 'ajaxOrders.php?action=defaultAddress';
    $.post(url,{id:id}, function(data){
        if (data == 1) {
            $('.receipt-list li .txt').text('');
            _this.attr("checked");
            _this.siblings(".txt").text("（默认地址）");
        }
    });
}

$('.receipt a.more').click(function() {
    if ($('.receipt-list li:eq(3)').is(":hidden")) {
        $('.receipt-list li:gt(2)').stop().show();
        $('.receipt a.more').text('收起>');
    } else {
        $('.receipt-list li:gt(2)').stop().hide();
        $('.receipt a.more').text('更多收货地址>');
    } 
})

var wait = 60;
function get_code_time(){
    if(wait==0){
        $("#getmsgcode").removeAttr("disabled");//移除获取验证码按钮的disabled属性
        $("#getmsgcode").val("重新获取");
        wait = 60;
    }else{
        $("#getmsgcode").attr("disabled", true);//设置获取验证码按钮为不可触发
        $("#getmsgcode").val("(" + wait + "s)后重新获取");
        wait--;
        setTimeout("get_code_time()", 1000);
    }
}

$("#getmsgcode").click(function(){
    var tel     = $("#tel").val();
    var actionUrl=$('#forgetForm').attr('action');

    switch (true){
        case tel == '':
            alert("手机号码不能为空！");
            $("#tel").focus();
            return false;
            break;
    }
    //电话号码验证
    var pattern = new RegExp(/^[0-9-+]+$/);
    if(!pattern.test(tel))
    {
        alert('请输入有效的手机号码！');
        $("#tel").focus();
        return false;
    }
    $.ajax({
        type: "POST",
        url: actionUrl,
        data: {action:"getcode",tel:tel},
        dataType: "json",
        success: function(data){
            if(data == 1){
                get_code_time();
                alert('发送成功，请注意查收！');
            }else if(data == 0){
                alert('号码格式错误，请重新填写！'); 
            }else if(data == -1){
                alert('您填写的手机号码不是注册会员，请前往注册');
            }
        }
    });
    return false;
});

$("#resetSubmit").click(function(){
     var tel = $("#tel").val(),
         msg = $(".msg").val(),
         pwd = $("#password").val(),
         rpwd = $("#rpassword").val();
     switch(true){
         case tel == '':
            alert("手机号码不能为空！");
            $("#tel").focus();
            return false;
            break;
         case msg.length > 4:
            alert("短信验证码格式不对，请重新输入");
            $(".msg").focus();
            return false;
            break;    
         case msg == '':
            alert("请填写短信验证码");
            $(".msg").focus();
            return false;
            break; 
         case pwd == '':
            alert("请输入重置密码");
            $("#password").focus();
            return false;
            break;
         case pwd.length < 6:
            alert("重置密码不安全，请填写6位以上数字或字母");
            $("#password").focus();
            return false;
            break;    
         case rpwd == '':
            alert("请确认重置密码");
            $("#rpassword").focus();
            return false;
            break;
         case pwd != rpwd:
            alert("两次密码输入不一致！请重新输入");
            return false;
            break;
         default:
            break;            
     }    
})


//微信支付
function payWeChat(orderid) {
    if (orderid) {
        var url = home_url + 'wechat/example/native.php';
        $.post(url,{orderid:orderid}, function(data){
            if (data) {
                $('#weixin-pay-code').html(data);
                $('#weixin-modal').modal('show');
                timingCheck(orderid);
            }
        });
    }
}

function timingCheck(orderid) {
    setInterval(function() {
        weChatCheck(orderid);
    }, 4000);
}

function weChatCheck(orderid) {
    var url = home_url+"wechat/example/notify_orders.php";
    var param = {'out_trade_no':orderid};
    $.post(url, param, function(data) {
        if(data == 1){
            window.location.href = home_url+"person.php?action=bought";
        }
    });
}