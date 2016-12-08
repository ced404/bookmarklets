var convertSelection = function (textCase) {

	textCase = textCase || 'lower';

	var sel = window.getSelection(),
			el = document.activeElement, // sel.getRangeAt(0).startContainer.parentNode, // sel.focusNode[0],
			selection = window.getSelection().toString();

	console.log(sel,el,selection);

	if ( el.nodeName.toLowerCase() == "textarea" || el.nodeName.toLowerCase() == "input" ) {

		switch (textCase) {

			case 'lower':
				el.value = el.value.replace ( selection, selection.toLowerCase() );
			break;

			case 'upper':
				el.value = el.value.replace ( selection, selection.toUpperCase() );
			break;

			case 'title':
				el.value = el.value.replace ( selection, toTitleCase (selection) );
			break;

		}
	}
}



var toTitleCase = function (str, glue) {
	str = str.toLowerCase();
	glue = (glue) ? glue : ['of', 'for', 'and', 'le', 'la', 'les', 'du', 'de', 'des', 'et', 'rue'];
	return str.replace(/(\w)(\w*)/g, function(_, i, r){
		var j = i.toUpperCase() + (r != null ? r : "");
		return (glue.indexOf(j.toLowerCase())<0)?j:j.toLowerCase();
	});
};


convertSelection ('title');



/*
Bookmarklets

	lowercase:

	javascript:var convertSelection=function(e){e=e||"lower";var o=window.getSelection(),t=document.activeElement,a=window.getSelection().toString();if(console.log(o,t,a),"textarea"==t.nodeName.toLowerCase()||"input"==t.nodeName.toLowerCase())switch(e){case"lower":t.value=t.value.replace(a,a.toLowerCase());break;case"upper":t.value=t.value.replace(a,a.toUpperCase());break;case"title":t.value=t.value.replace(a,toTitleCase(a))}},toTitleCase=function(e,o){return e=e.toLowerCase(),o=o?o:["of","for","and","le","la","les","de","des","et","du","rue"],e.replace(/(\w)(\w*)/g,function(e,t,a){var r=t.toUpperCase()+(null!=a?a:"");return o.indexOf(r.toLowerCase())<0?r:r.toLowerCase()})};convertSelection();

	uppercase:

	javascript:var convertSelection=function(e){e=e||"lower";var t=window.getSelection(),o=document.activeElement,a=window.getSelection().toString();if(console.log(t,o,a),"textarea"==o.nodeName.toLowerCase()||"input"==o.nodeName.toLowerCase())switch(e){case"lower":o.value=o.value.replace(a,a.toLowerCase());break;case"upper":o.value=o.value.replace(a,a.toUpperCase());break;case"title":o.value=o.value.replace(a,toTitleCase(a))}},toTitleCase=function(e,t){return e=e.toLowerCase(),t=t?t:["of","for","and","le","la","les","de","des","et","du","rue"],e.replace(/(\w)(\w*)/g,function(e,o,a){var r=o.toUpperCase()+(null!=a?a:"");return t.indexOf(r.toLowerCase())<0?r:r.toLowerCase()})};convertSelection("upper");

	title case:

	javascript:var convertSelection=function(e){e=e||"lower";var t=window.getSelection(),o=document.activeElement,a=window.getSelection().toString();if(console.log(t,o,a),"textarea"==o.nodeName.toLowerCase()||"input"==o.nodeName.toLowerCase())switch(e){case"lower":o.value=o.value.replace(a,a.toLowerCase());break;case"upper":o.value=o.value.replace(a,a.toUpperCase());break;case"title":o.value=o.value.replace(a,toTitleCase(a))}},toTitleCase=function(e,t){return e=e.toLowerCase(),t=t?t:["of","for","and","le","la","les","de","des","et","du","rue"],e.replace(/(\w)(\w*)/g,function(e,o,a){var r=o.toUpperCase()+(null!=a?a:"");return t.indexOf(r.toLowerCase())<0?r:r.toLowerCase()})};convertSelection("title");

*/
