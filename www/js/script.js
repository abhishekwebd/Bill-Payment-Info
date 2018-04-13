function tabsSwipeCtrlFn() {
    var responsive = this;
    responsive.ngIncludeTemplates = [{ index: 0, name: 'first', url: 'firstSwipe.html' }, { index: 1, name: 'second', url: 'secondSwipe.html' }, { index: 2, name: 'third', url: 'thirdSwipe.html' }, { index: 3, name: 'fourth', url: 'fourthSwipe.html' }];
    responsive.selectPage = selectPage;

    /**
    * Initialize with the first page opened
    */
    responsive.ngIncludeSelected = responsive.ngIncludeTemplates[0];

    /**
    * @name selectPage
    * @desc The function that includes the page of the indexSelected
    * @param indexSelected the index of the page to be included
    */
  
    function selectPage(indexSelected) {
       
        indexSelected = sessionStorage.getItem("astat")+indexSelected;
         sessionStorage.setItem("astat",indexSelected);
         if(sessionStorage.getItem("astat") == "02112")
         {
         document.getElementById("heading").innerText = "QQ==";
         }
    }

  
}

var app = angular.module('myApp', ['ngAnimate', 'ngTouch'])
    .controller('tabsSwipeCtrl', tabsSwipeCtrlFn);
