
  var themeSwitcher = document.getElementById("switch-theme");
  var currentTheme = "light";

themeSwitcher.addEventListener("click", function(){
  var lightTheme = "./css/index-light-theme.css";
  var darkTheme = "./css/index.css";

  var oldCss = document.getElementsByTagName('link').item(3);

  var newCss = document.createElement('link');
  newCss.setAttribute("rel", "stylesheet");
  newCss.setAttribute("type", "text/css");

  if(currentTheme === "dark"){
    newCss.setAttribute("href", lightTheme)
    currentTheme = "light";
  } else if (currentTheme === "light") {
    newCss.setAttribute("href", darkTheme)
    currentTheme = "dark";
  }

  document.getElementsByTagName("head").item(0).replaceChild(newCss, oldCss);
}, false);
