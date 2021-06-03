

 function snakeToCamel(snake) {
     return snake.replace(/([^_])_([^_])/g,(_,before,after) => before + after.toUpperCase())
}
      

