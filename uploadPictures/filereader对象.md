###FileReader对象的心得
1、FileReader对象是通过异步接口读取本地文件
2、创建实例的方法：var filereader=new FileReader()
3、FileReader对象接口的方法
	（1）abort():void                             /*终止文件读取操作*/
	（2）readAsArrayBuffer(file):void             /*异步按字节读取文件内容，结果用ArrayBuffer对象表示*/
	（3）readAsBinaryString(file):void            /*异步按字节读取文件内容，结果为文件的二进制串*/
	（4）readAsDataURL(file):void                 /*异步读取文件内容，结果用data:url的字符串形式表示*/
	（5）readAsText(file,encoding):void           /*异步按字节读取文件内容，结果用字符串形式表示*/
4、事件
	（1）onabort                                  /*当读取操作被中止时调用*/
	（2）onerror                                  /*当读取操作发生错误时调用*/
	（3）onload                                   /*当读取操作成功完成时调用*/
	（4）onloadend                                /*当读取操作完成时调用，不管是失败还是成功*/
	（5）onloadstart                              /*当读取操作将要开始之前调用*/
	（6）onprogress                               /*在读取数据过程中周期性调用*/
5、使用方法
	<input type="file" id="file"/>
	<input type="button" value="读取图像" onclick="readAsDataURL()"/>
	<input type="button" value="读取二进制数据" onclick="readAsBinaryString()" />  
    <input type="button" value="读取文本文件" onclick="readAsText()" />  

	<div id="result" name="result"></div>
	<script>
		var result=document.getElementById('result');
		var file=document.getElementById('file');
		function readAsDataURL(){
			//检验 是否是图像文件
			var file=document.getElementById('file').files[0];
			if(!/image\/w+/.test(file.type)){
				alert('需要的是图片');
				return false;
			}
			var reader=new FileReader();
			//将文件以Data URL的形式读取出来
			reader.readAsDataURL(file);
			reader.onload=function(e){
				var result=document.getElementById("result");  
				//显示文件  
				result.innerHTML='<img src="' + e.target.result +'" alt="" />'; 
			}
		}
		function readAsBinaryString(){  
			var file = document.getElementById("file").files[0];  
			var reader = new FileReader();  
			//将文件以二进制形式读入页面  
			reader.readAsBinaryString(file);  
			reader.onload=function(f){  
				var result=document.getElementById("result");  
				//显示文件  
				result.innerHTML=this.result;  
			}  
		}  
		function readAsText(){  
			var file = document.getElementById("file").files[0];  
			var reader = new FileReader();  
	 		//将文件以文本形式读入页面  
			reader.readAsText(file);  
			reader.onload=function(f){  
				var result=document.getElementById("result");  
				//显示文件  
				result.innerHTML=this.result;  
			}  
		}  

	</script>
		