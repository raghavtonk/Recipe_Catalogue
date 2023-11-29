
const recipe_List = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];



let current_list = recipe_List;



function createCart(recipe) {
    const cart = document.createElement('div');
    cart.className = 'cart';

    const bimg = document.createElement('div');
    bimg.className = 'bimg';
    bimg.style.backgroundImage = `url(${recipe.imageSrc})`;

    const rType = document.createElement('div');
    rType.className = 'r_type';
    rType.innerHTML = `<p>${recipe.type}</p>`;

    const rName = document.createElement('div');
    rName.className = 'r_name';
    rName.innerHTML = `<p>${recipe.name}</p>
                      <span>
                          <img src="shared_folder/Star.svg" alt="Star icon">
                          <p>${recipe.rating}</p>
                      </span>`;

    const rTime = document.createElement('div');
    rTime.className = 'r_time';
    rTime.innerHTML = `<h3>${recipe.time}</h3>
                       <span>
                            <img src="shared_folder/like.svg" alt="like icon">
                            <img src="shared_folder/comments.svg" alt="comment icon">
                            </span>`;

    cart.appendChild(bimg);
    cart.appendChild(rType);
    cart.appendChild(rName);
    cart.appendChild(rTime);
   

    return cart;
}

function addCartsToSection() {
    const recipeSection = document.getElementById('recipe_section');
    current_list.forEach(recipe => {
        const cart = createCart(recipe);
        
        recipeSection.appendChild(cart);
    });
} 


let below_4 = null;
let above_4 = null;

let rating_above_4 = function(e){
    if (e.currentTarget.checked) {
        above_4= true;
        if(below_4 === true && above_4 === true){
            addCartsToSection();
            return;
        }

        const filteredRecipes = current_list.filter(function(e) {
       
            return  e["rating"] >= 4    ;
            
        });
        
        filteredRecipes.sort((a, b) => b.rating - a.rating);

        const recipeSection = document.getElementById('recipe_section');
        document.getElementById('recipe_section').innerHTML = "";
        filteredRecipes.forEach(recipe => {
            const cart = createCart(recipe);
            recipeSection.appendChild(cart);
        });
    }
    else{
        above_4= false;
        const recipeSection = document.getElementById('recipe_section');
        console.log('uncheck');
    document.getElementById('recipe_section').innerHTML = "";
    current_list.forEach(recipe => {
        
        const cart = createCart(recipe);
        recipeSection.appendChild(cart);
    });
    }
}


let rating_below_4 = function(e){

    if (e.currentTarget.checked) {
        below_4=true;

        if(below_4 === true && above_4 === true){
            addCartsToSection();
            return;
        }
        const filteredRecipes = current_list.filter(function(e) {
       
            return  e["rating"] < 4    ;
            
        });
       
        filteredRecipes.sort((a, b) => b.rating - a.rating);

        const recipeSection = document.getElementById('recipe_section');
        document.getElementById('recipe_section').innerHTML = "";
        filteredRecipes.forEach(recipe => {
            const cart = createCart(recipe);
            recipeSection.appendChild(cart);
        });
    }
    else{
        below_4=false;
        const recipeSection = document.getElementById('recipe_section');
        console.log('uncheck');
    document.getElementById('recipe_section').innerHTML = "";
    current_list.forEach(recipe => {
        
        const cart = createCart(recipe);
        recipeSection.appendChild(cart);
    });
    }
}

// Call the function to add carts to the section
addCartsToSection();


function sort_veg_type(){
    document.getElementById('recipe_section').innerHTML = "";
   
    const veg_sort_list = recipe_List.filter(function(e){
        return e["type"] === "veg";
    });
    
console.log("veg");
    const recipeSection = document.getElementById('recipe_section');
    veg_sort_list.forEach(recipe => {
        const cart = createCart(recipe);
        current_list = veg_sort_list;
        recipeSection.appendChild(cart);
    });
}
function sort_nonveg_type(){
    document.getElementById('recipe_section').innerHTML = "";
   
    const nonveg_sort_list = recipe_List.filter(function(e){
        return e["type"] === "non-veg";
    });
    
    current_list = nonveg_sort_list;
    const recipeSection = document.getElementById('recipe_section');
    nonveg_sort_list.forEach(recipe => {
        const cart = createCart(recipe);
        recipeSection.appendChild(cart);
    });
}



const all_Recipes = document.getElementById("all-Recipes");
all_Recipes.style.cursor ='pointer'
all_Recipes.onclick = function(){
    document.getElementById('recipe_section').innerHTML = "";
    addCartsToSection();
    current_list = recipe_List;
};

const veg_Recipes = document.getElementById("veg-Recipes");
veg_Recipes.style.cursor ='pointer'
veg_Recipes.onclick = function(){
    sort_veg_type();
};

const non_veg_Recipes =document.getElementById("non-Veg-Recipes");
non_veg_Recipes.style.cursor ='pointer'
non_veg_Recipes.onclick = function(){
    sort_nonveg_type();
};


// rating above 4 

let checkBox_above4=document.getElementById('four_above')
checkBox_above4.addEventListener('change',(e)=>{
    
        rating_above_4(e);
    
});


// rating below 4 


let checkBox_below4=document.getElementById('four_below')
checkBox_below4.addEventListener('change',(e)=>{

    rating_below_4(e);
    
});



// search bar code 
let text_input_function = function(){
console.log("input function");
    let currentText = document.getElementById("inputText").value;
    let textFilter_list = recipe_List.filter(function(e){
        let temp = e["name"];
        if(temp.toLowerCase().includes(currentText.toLowerCase()))
        return 1;
    });
    if(currentText !== ""){
        document.getElementById('recipe_section').innerHTML = "";
        const recipeSection = document.getElementById('recipe_section');
        textFilter_list.forEach(recipe => {
            const cart = createCart(recipe);
            recipeSection.appendChild(cart);
        });
    }
    else{
        document.getElementById('recipe_section').innerHTML = "";
        const recipeSection = document.getElementById('recipe_section');
        current_list.forEach(recipe => {
            const cart = createCart(recipe);
            recipeSection.appendChild(cart);
        });
    }
}

let input_text = document.getElementById("inputText");

input_text.addEventListener('change',(e)=>{
    text_input_function();
});

input_text.addEventListener('keypress',(e)=>{
    text_input_function();
});

input_text.addEventListener('focusout',(e)=>{
    text_input_function();
});

let inputTextBtn = document.getElementById('inputTextBtn');
inputTextBtn.addEventListener('click',(e)=>{
    text_input_function();
})