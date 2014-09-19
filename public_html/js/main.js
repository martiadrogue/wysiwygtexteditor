function iFrameOn() {
  wordProcessor.document.designMode = 'On';
  var form = document.getElementById("wordProcessor");
  var body = form.contentWindow.document.body;
  body.style.fontFamily = "Arial, \"Helvetica Neue\", Helvetica, sans-serif";
  body.style.fontSize="1.1rem";
  body.style.color="#222";
  body.style.lineHeight="150%";
  body.style.padding="8px";
  body.style.outline = 'none';


}
function iBold() {
  wordProcessor.document.execCommand('bold', false, null);
}
function iUnderline() {
  wordProcessor.document.execCommand('underline', false, null);
}
function iItalic() {
  wordProcessor.document.execCommand('italic', false, null);
}
function iFontSize() {
  var size = prompt('Enter a size 1 - 7', '');
  wordProcessor.document.execCommand('FontSize', false, size);

}
function iFontColor() {
  var color = prompt('Define a basic color or apply a hexadecimal color code for advence colors', '');
  wordProcessor.document.execCommand('ForeColor', false, color);
}
function iHorizontalRule() {
  wordProcessor.document.execCommand('inserthorizontalrule', false, null);
}
function iUnorderedList() {
  wordProcessor.document.execCommand('InsertOrderedList', false, "newOL");
}
function iOrderedList() {
  wordProcessor.document.execCommand('InsertUnorderedList', false, "newUL");
}
function iLink() {
  var linkUrl = prompt('Enter the URL fot this link: ', 'http://');
  wordProcessor.document.execCommand('CreateLink', false, linkUrl);
}
function iUnlink() {
  wordProcessor.document.execCommand('UnLink', false, null);
}
function iImage() {
  var imgSrc = prompt('Enter image location: ', '');
  if (imgSrc != null) {
    wordProcessor.document.execCommand('insertimage', false, imgSrc);
  }
}
function submit_form() {
  var form = document.getElementById('article');
  form.elements['body'].value = window.frames['wordProcessor'].document.body.innerHTML;
  form.submit();
}
wordProcessor.addEventListener("paste", function(e) {
    // cancel paste
    e.preventDefault();

    // get text representation of clipboard
    var text = e.clipboardData.getData("text/plain");

    // insert text manually
    document.execCommand("insertHTML", false, text);
});
