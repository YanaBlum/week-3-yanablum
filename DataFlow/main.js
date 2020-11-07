const posts = [
  {name: "Mom", text:"happy birthday my love!!!"},
  {name: "Lior", text:"LETS PAAARTYYYY"},
  {name: "Tom", text:"im gonna get drunk. yay"},
]

const render = function(){
  for(let post of posts){
    $("#posts").append($(`<div class="post">${post.name}: ${post.text}</div>`))
  }
}

render()

$("button").on("click", function () {
  const $name = $("#name-input")
  const $text = $("#wish-input")

  const post = {name: $name.val(), text: $text.val()}

  posts.push(post)

  $("#posts").empty()
  render()

  $name.val("")
  $text.val("")
})

