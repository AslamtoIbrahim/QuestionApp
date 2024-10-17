function plusOne(index) {
    const img = document.getElementsByClassName('plmn')
    const answer = document.getElementsByClassName('hidden')

    // const currentStyle = window.getComputedStyle(answer[index]).display
    // const currentStyle = answer[index].style.display; // inline style display
     
    if (answer[index].classList.toggle('clicked')) {
        img[index].src = "assets/images/icon-minus.svg"
    } else {
        img[index].src = "assets/images/icon-plus.svg"
    }
    

}


 