
const localStorageKey = "boards";

function get_form_data() {

    let boardtitle = document.getElementById("BoardTitle").value;
    // console.log(boardtitle);
    boards = JSON.parse(localStorage.getItem(localStorageKey))
    // console.log("checkkkkkkkkk",boards[i]);
    

    let all_title_list = boards.map((val)=>{
        return [val.title]
    })
    // console.log('all_title_list',all_title_list)       // givas all title list 

    for(i=0;i<all_title_list.length;i++){  
    // JSON.stringify(boards);
    // console.log('up',boards);
    boards=all_title_list[i];
    // console.log('down',boards);
    // console.log('down',boardtitle);
    if (boardtitle == boards[0]){
        re_enter_data()
        return;
        // console.log("its done",boardtitle)
    }
    }
    

    let boarddescriptions = document.getElementById("DescriptionsTextarea").value;
    
    let form_data = {
        title: boardtitle,
        descriptions: boarddescriptions,
    }


    let boardsarray = []
    if (localStorage.getItem(localStorageKey) != null) {

        boardsarray.push(form_data);
        boardsarray = [...JSON.parse(localStorage.getItem(localStorageKey)),form_data];
        // console.log(boardsarray);   
        localStorage.setItem(localStorageKey, JSON.stringify(boardsarray));
    }
    else{
        localStorage.setItem(localStorageKey, [])
        boardsarray.push(form_data);
        localStorage.setItem(localStorageKey, JSON.stringify(boardsarray));
        }
    
        $('#ModalPopup').modal('hide');
        card_to_display()
}
card_to_display()


function re_enter_data(){
    $('#ModalPopup').modal('hide');
    alert("we have same data ");
    return false;
}




function card_to_display(){
    boards = JSON.parse(localStorage.getItem(localStorageKey))
    // console.log('abcccccc',boards)
    output = " "
        for(i=0;i<boards.length;i++){           
            output += 
    `
    <!-- CUSTOM BLOCKQUOTE -->
    <div class="row row-cols-2 g-2">
  <div class="col">
  <div class="card">
  <div class="card-header">
  ${boards[i]['title']}
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">${boards[i]['descriptions']}</p>
    <button id="${[i]}" onclick="editFunction(this)">Edit</button>
  
</div>
</div>
</div>
</div>
</div>
<br>
`

        }
        $('#boards').html(output)
    }





function editFunction(element){
// console.log(element.id);                                                     // gives an id 
index = JSON.parse(element.id);                                                    // gives an id 
// console.log('indexxxxxxxxxx',typeof(index));
boards = JSON.parse(localStorage.getItem("boards"))
a = document.getElementById("BoardTitle").value = boards[index]['title']
// console.log(a)
b=document.getElementById("DescriptionsTextarea").value = boards[index]['descriptions']
// id=document.getElementById('id').value = index;
// console.log(id)
// console.log(b);

c = document.getElementById("idtoupdate").value = index
// console.log(c);
// checkingindex = boards.prototype.find(id)
// console.log(checkingindex);
$('#ModalPopup').modal('show');







// for(i=0;i<boards.length;i++){
//     if (boards[i].title == element.id ){

//     }
// }



// let update_value = boards.map((val)=>{
//     return [val.title ,val.descriptions] 
// })
// console.log(update_value)


}



// function prepare_boards() {
//     form_data = get_form_data()
//     let boardsarray = []
//     if (localStorage.getItem(localStorageKey) == null) {
//         boardsarray.push([form_data]);
//         localStorage.setItem(localStorageKey, JSON.stringify(boardsarray));
//     }
//     else{
//         let boardsarray = localStorage.getItem(localStorageKey);
//         Arrayboards = JSON.parse(String(boardsarray));
//         itemJsonArray.push([Arrayboards]);
//         localStorage.setItem(localStorageKey, JSON.stringify(itemJsonArray));
//         }
    

//     // localStorage.setItem('boards', JSON.stringify(form_data));
//     // boards.append(from_data)
//     console.log(boardsarray);
//     return boards
// }





// function savedata() {

//     let titleaskey = boardtitle
//     // console.log(titleaskey);




// }
// for (let i = 0; i < localStorage.length; i++) {
//     // console.log(i)
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     console.log(key, value);
//     abc= localStorage.getItem(key);
//     console.log(abc);
//     document.getElementById('carddescription').innerHTML = 
//     localStorage.getItem(key);

// }   













// boards = []

// boards.append(from_data)

// save in localStorage

// get items from localStorage

// display them on html




// <div class="card-deck">
// <div class="card" style="width: 18rem;">
// <div class="card-body">
//   <h5 class="card-title">${boards[i]['title']}</h5>
//   <p class="card-text">${boards[i]['descriptions']}.</p>

//  <button id="edit-button-${i}">Edit</button>    
// </div>
// </div>
// </div>


// <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded ">
// <div class="blockquote-custom-icon bg-info shadow-sm">
//     <i class="fa fa-quote-left text-white"></i>
// </div>
// <p class="mb-0 mt-2 font-italic" id="title1" style="width: 300px;"></p>
// <footer class="blockquote-footer pt-4 mt-4 border-top" id="descriptions" style="width: 300px;">

// </footer>

// </blockquote>
