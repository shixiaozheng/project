let a = 0
let xhr = XMLHttpRequest()
xhr.open()//请求方式  地址  是否异步
xhr.send()
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
}