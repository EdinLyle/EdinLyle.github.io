function scan(){var t;var o,l=new Array;o=$("#ip_input").val();var r=/^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/;var e=/^[0-9a-zA-Z]+[0-9a-zA-Z\.-]*\.[a-zA-Z]{2,4}$/;if(r.test(o)||e.test(o)){var a=$("#port_input").val();var n=a.split(",");$.unique(n);var s=/^[1-9]\d*$/;for(var p=0;p<n.length;p++){var i=n[p];if(s.test(i)&&i<65536){l.push(i)}}if(l.length==0){showErrorBox(tool_port_alert_port);return}else{$("#showResult").empty();$("#scanBtn").attr("disabled",true);var p=0;var t=setInterval(function(){var r=l[p];var e=new Image;var a=false;if(p>=l.length&&t){clearInterval(t);$("#scanBtn").attr("disabled",false);return false}e.onerror=function(){if(a==false){var t="<tr><td>"+r+"</td><td>";t=t+'<span class="glyphicon glyphicon-ok" style="color: rgb(0, 255, 0);"> '+tool_port_open+"</span>";t=t+"</td></tr>";$("#showResult").append(t);a=true;e.onerror=null}};e.src="http://"+o+":"+r;console.log(e.src);setTimeout(function(){if(a==false){var t="<tr><td>"+r+"</td><td>";t=t+'<span class="glyphicon glyphicon-remove" style="color: rgb(255, 0, 0);"> '+tool_port_close+"</span>";t=t+"</td></tr>";$("#showResult").append(t);a=true}},1e3);p++},1100)}}else{showErrorBox(tool_port_alert_ip);return}}