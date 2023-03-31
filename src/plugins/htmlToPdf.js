// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    install(Vue) {
        Vue.prototype.getPdf = function() {
            const title = this.htmlTitle;
            const scale = 2;
            html2Canvas(document.querySelector('#pdfDom'), {
                width:500,
                height:500,
                allowTaint: true, // 开启跨域
                scale // 提升画面质量，但是会增加文件大小
            }).then(function(canvas) {
                console.log(canvas.width,'width')
                console.log(canvas.height,'height')
                const contentWidth = canvas.width / scale;
                const contentHeight = canvas.height / scale;
                const PDF = new JsPDF('', 'pt', [contentWidth, contentHeight]);
                const pageData = canvas.toDataURL('image/jpeg', 1.0);
                PDF.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight);
                PDF.save(title + '.pdf');
            })
        }
    }
}