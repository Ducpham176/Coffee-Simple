const link = document.getElementById('all_topmenu');
const menu = document.querySelector('.topmenu');

link.addEventListener("click", ()=> {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
  }
});


// Xử lý nút show tất cả sản phẩm

const CheckPrice = document.getElementById("check_gio_hang");
const Container = document.getElementById("container_show_giohang");
const Item_Click = document.getElementById("item_h3");
let FindTrue = false;

CheckPrice.addEventListener("click", ()=> {
  if(FindTrue == true)
  {
  Container.classList.remove("active");
  Container.classList.add("show");
  FindTrue = false;
  }

  else {
    Container.classList.add("active");
    Container.classList.remove("show");
    FindTrue = true;
  }
});

Item_Click.addEventListener("click", ()=> {
    if(Container.classList.contains("show")){
    Container.classList.remove("show");
    }

    else {
      Container.classList.add("show");
    }
}) 