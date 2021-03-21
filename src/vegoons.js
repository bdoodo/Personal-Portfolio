const mealSelectorCourse = document.querySelector('#meal-selector__course')
const listChildren = document.querySelector('#meal-selector__course').children

//start on the 2nd iteration
let iterations = 1

//meal selector animation
const selectMeal = () => {
  const inc = 42 * iterations
  const slideUp = [{transform: `translateY(-${inc}px)`}]

  //slide animation
  mealSelectorCourse.animate(slideUp, {
    duration: 1000, 
    fill: 'forwards',
    easing: 'ease-out'
  })

  //scaling and color animation
  listChildren[iterations].animate(
    [
      {transform: `scale(1, 1)`, color: 'black'},
      {transform: `scale(1, 1)`, color: 'black', offset: 0.95},
      {transform: 'scale(.9, .9)'}
    ], 
    {
      duration: 3000,
      fill: 'backwards'
    }
  )

  iterations++
  //if the last child is reached, restart
  if (iterations === listChildren.length) iterations = 0
}
selectMeal()
inverval = setInterval(selectMeal, 3000)