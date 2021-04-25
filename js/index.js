const smoothCollapse = (id, image_id) => {
    let element = document.querySelector(id);
    let image = document.querySelector(image_id);

    element.style.height = element.scrollHeight + 'px';

    element.classList.toggle('open');
    image.classList.toggle('open');

    element.style.height = element.classList.contains('open') ? element.scrollHeight + 'px': 0;
}
 
// const closeSmoothCollapse = id => {
//     let element = document.querySelector(id);
//     element.classList.remove('open')
//     element.style.height = 0;
// }