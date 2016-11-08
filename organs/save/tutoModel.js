function tutoModel () {
  tutoModel.super(this);

  this.add_attr({
    myNumber: 3
  });
}

spinalCore.extend(tutoModel, Model);
