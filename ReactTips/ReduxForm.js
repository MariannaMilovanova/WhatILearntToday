//default values
const mapStateToProps = (state, ownProps) => {
  if (ownProps.currentRecipe) {
    return {
      initialValues: {
        title: ownProps.currentRecipe.title,
        description: ownProps.currentRecipe.description,
        ingredients: ownProps.currentRecipe.ingredients,
        directions: ownProps.currentRecipe.directions
      }
    }
  } else {
    return {}
  }
};

let RecipeForm = reduxForm({
  validate,
  form: "RecipeFormNew"
}, mapStateToProps)(RecipeFormNew);