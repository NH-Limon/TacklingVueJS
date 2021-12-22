const vm = new Vue({
  el: "#app",
  data: {
    name: "Nahid Hasan Limon",
    htmlContent: "<h2>This is a heading 2 tag</h2>",
    boldText: "<b>This is a bold text</b>",
    button: "<button>Click Me</button>",
    image: "<img style = 'border-radius: 50%; ' src = 'apple.jpg'>",
    imgsrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    textColor: "color: red;",
    title:
      "This is the title and the page is lastly refreshed on: " +
      new Date().toLocaleString(),
    text: "<h1>Hover On Me To See Something Interesting</h1>",
  },
});