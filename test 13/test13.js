
var row=document.getElementById("row");
var posts="";
var cato="general";
var y=document.getElementsByClassName("nav-link");

for(var i=0;i<y.length;i++)
    {
        y[i].addEventListener("click",function(e){
            
            console.log(e.target.innerHTML);
            cato=e.target.innerHTML;
            console.log(cato)
            getPosts(cato);
            
        }); 
       
    }
getPosts(cato);

function getPosts(cato)
{
    
    var req=new XMLHttpRequest();
    req.open("GET","https://newsapi.org/v2/top-headlines?country=us&category="+cato+"&apiKey=da08084377be478e8b532f527b2e5230");
    req.onreadystatechange =function()
    {
        if(req.readyState==4 && req.status==200)
            {
                posts=JSON.parse(req.response);
                posts=posts.articles;
                display();
            }
    }
    req.send();
}
function display()
{
    var x="";

    for(i=0;i<posts.length;i++)
        {
            x+=`<div class="col-md-4    ">
                    <div class="text-muted">
                        <img src=`+posts[i].urlToImage+` class="img-fluid"/>
                        <h3>`+posts[i].title+`</h3>
                        <p>`+posts[i].description+`</p>
                    </div>
                </div>`
        }
    row.innerHTML=x;
}
