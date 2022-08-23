function dumb(){
    const elements = document.getElementsByClassName('nav-link');
    
    // ✅ Change color of all elements with class
    for (const element of elements) {
      element.style.color = 'white';
    } 
}