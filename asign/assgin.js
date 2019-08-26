var valid=/.{1,}/
var nameValid=/^[A-Z][A-Za-z]{3,9}$/;
var namy=document.getElementById("namy");
var url=document.getElementById("url");
var div =document.getElementById("div");
var products;
var items;
if(localStorage.getItem(items)==null)
    products=[];
else
    products=JSON.parse(localStorage.getItem(items));
displayBookmark();
var btn=document.getElementById("submit");
btn.onclick=function()
{
    if(valid.test(namy.value)==true&&valid.test(url.value)==true&&nameValid.test(namy.value)==true)
    {
        addBookmark();
        displayBookmark();
        clearForm();
    }
    else 
        alert("enter valid input");
}
function clearForm()
{
    namy.value="";
    url.value="";
}
function addBookmark()
{
    var product=
                {
                    namy:namy.value,
                    url:url.value
                }
            products.push(product);
    localStorage.setItem(items,JSON.stringify(products));
}
function displayBookmark()
{
    var cols="";
    for(var i=0;i<products.length;i++)
        {
            cols +=`<h3>`+products[i].namy+`</h3>
                <button class="btn btn-primary" id="visit"><a href="`+products[i].url+`" class="text-decoration-none text-white" >visit</a></button>
                <button onclick="deleteProduct(`+i+`)"  class="btn btn-danger" id="delete">delete</button>`;
        }
    div.innerHTML=cols;
}
function deleteProduct(ind)
{
    products.splice(ind,1); 
    localStorage.setItem(items,JSON.stringify(products));
    displayBookmark();
}
