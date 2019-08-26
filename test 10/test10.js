var valid=/^[A-Z][A-Za-z]{3,9}$/;
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCompany=document.getElementById("productCompany");
var productDisc=document.getElementById("productDisc");
var productRow=document.getElementById("productRow");
var productSearch=document.getElementById("search");
var products;
var items;
if(localStorage.getItem(items)==null)
    products=[];
else
    products=JSON.parse(localStorage.getItem(items));

displayProducts();
var btn=document.getElementById("btn");
btn.onclick=function()
{
    if(valid.test(productName.value)== true&&valid.test(productCompany.value)== true)
        {
            addProduct();
            displayProducts();
        }
    else 
        alert("enter valid input");
}
var btn2 =document.getElementById("btn2");
btn2.onclick=function()
{
    searchProduct(productSearch.value);
}
function searchProduct(name)
{
    var x=0;
    var y;
    for(var i=0;i<products.length;i++)
        if(products[i].name==name)
            y=i;
        else
            x++;
    if(x==products.length)
        alert("not found");
    else
        update(y);
    
}
function empty()
{
    productName.value="";
    productPrice.value="";
    productCompany.value="";
    productDisc.value="";
}
function addProduct()
{
    if(isNaN(Number(productPrice.value))==true)
        alert("enter a valid price");
    else
        {
            var product=
                {
                    name:productName.value,
                    price:productPrice.value,
                    company:productCompany.value,
                    disc:productDisc.value
                }
            products.push(product); 
        }

    localStorage.setItem(items,JSON.stringify(products));
}
function displayProducts()
{
    cols="";
    for(var i=0;i<products.length;i++)
        {
            cols +=`<div class="col-md-4" id="div`+i+`">
                    <p>`+products[i].name+`</p>
                    <h3>`+products[i].price+`</h3>
                    <p>`+products[i].company+`</p>
                    <p>`+products[i].disc+`</p>
                    <button onclick="deleteProduct(`+i+`)" class="btn btn-info">delete</button>
                    <button onclick="update(`+i+`);deleteProduct(`+i+`)" class="btn btn-danger">update</button>
                </div>`;
        }
    productRow.innerHTML=cols;
}
function deleteProduct(ind)
{
    products.splice(ind,1); 
    localStorage.setItem(items,JSON.stringify(products));
    displayProducts();
}
function update(ind)
{
    productName.value=products[ind].name;
    productPrice.value=products[ind].price;
    productCompany.value=products[ind].company;
    productDisc.value=products[ind].disc;
}
