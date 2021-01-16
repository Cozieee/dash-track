class vendorButton {
  constructor (v_name, isSelected, classes = "") {
    this.e = 
      $("<a/>", {
        class: `waves-effect ${classes}`,
        style: "border-radius: 5px; display: flex;",
        html: `<img class='vendor-img' src='../../images/${v_name}-logo.png'/>`
      })

    isSelected ? this.setSelected(this.e) : this.setNotSelected(this.e)
  }

  get() {
    return this.e
  }

  setSelected () {
    this.e.removeClass("hoverable unselected-vendor-btn").addClass("selected-vendor-btn")
  }

  setNotSelected () {
    this.e.removeClass("selected-vendor-btn").addClass("hoverable unselected-vendor-btn")
  }
}