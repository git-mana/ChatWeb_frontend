// 1. pen tick svgs in profile popup profile_popup_box
// 2. opening closing popup box of profile
//3.profile image usage
// 4.fetching phone number from left border
// 5.clicking account to chat
//6.arrow appear by hover on chat listing
// 7. contact info box animation
// 8. right side footer svg animation

console.log("JS is working")

// 1.
let pen_toclick=document.querySelector(".pen_ticksvg");
let pen_individual=document.querySelector(".pensvg");
let tick_to_appear=document.querySelector(".ticksvg");
let pen_individual2  =document.querySelector(".pensvg2");
let tick_to_appear2   =document.querySelector(".ticksvg2");
let profile_input1=document.querySelector(".profile_input1");
let profile_input2=document.querySelector(".profile_input2");
//pen tick transition in profile popup box
function pen_tick_swap(){
    pen_individual.classList.toggle("hide_pen");
    console.log("event is running");
    tick_to_appear.classList.toggle("appear_tick");
}


// 1.
profile_input1.addEventListener("click",()=>{
    pen_individual.classList.add("hide_pen");
    tick_to_appear.classList.add("appear_tick");
})
profile_input2.addEventListener("click",()=>{
    pen_individual2.classList.add("hide_pen");
    tick_to_appear2.classList.add("appear_tick");
})
function pen_tick_swap2(){
    pen_individual2.classList.toggle("hide_pen");
    console.log("event is running");
    tick_to_appear2.classList.toggle("appear_tick");

}////pen tick transition in profile popup box
// 1.

// 2.popping out profile box
let to_open_profile=document.querySelector(".profilephoto_radius");
let profile_popup_box=document.querySelector(".profile_popup_box");

to_open_profile.addEventListener("click",()=>{
    profile_popup_box.classList.add("open_profile_popup");

})    
let to_close_profile=document.querySelector(".close_profile_box");
to_close_profile.addEventListener("click",()=>{
    profile_popup_box.classList.remove("open_profile_popup")

});////popping out profile box 
// 2.


// 3.
let profile_photo=document.images.profile_pic_overall.getAttribute("src");
document.querySelector(".profilephoto_radius").innerHTML=(`<img src="${profile_photo}" alt="not found">`)
document.querySelector(".photoradius").innerHTML=(`<img src="${profile_photo}" alt="not found">`)

let right_profile_photo=document.images.profile_pic_overall.getAttribute("src");
document.querySelector(".right_header_profilephoto").innerHTML=(`<img src="${right_profile_photo}" alt="not found">`)
document.querySelector(".photo_contact_info").innerHTML=(`<img src="${right_profile_photo}" alt="not found">`)





// 4.
let contact_number=document.querySelector(".first_row").firstElementChild.firstElementChild.innerHTML
document.querySelector(".phone_number").innerHTML=contact_number;
// 4.


// 5.
let chat_accounts=document.querySelectorAll(".photoradius")
Array.from(chat_accounts).forEach(list=>{
    list.addEventListener("click",(click_event)=>{
       
let right_header_img=click_event.target.getAttribute("src");
console.log("js is in loop for account clicking to chat")
document.querySelector(".photo_contact_info").innerHTML=(`<img src="${right_header_img}" alt="not found"> <span >Name</span>`)
document.querySelector(".right_header_profilephoto").innerHTML=(`<img src="${right_header_img}" alt="not found">`)

    })
})


// function click_account_list(event)
// {
//     let right_header_img=event.target.chidren[2].images.account_lists_toclick.getAttribute("src");
//    
//     document.querySelector(".right_header_profilephoto").innerHTML=(`<img src="${right_header_img}" alt="not found">`)


// for (let i = 0; i < chat_accounts.length; i++) {
    
//     console.log("js is in loop for account clicking to chat")
//         right_profile_photo=document.chat_accounts[i].images.account_lists_toclick.getAttribute("src");
//         document.querySelector(".right_header_profilephoto").innerHTML=(`<img src="${right_profile_photo}" alt="not found">`)
//     }
        // }

        // 6.
        document.querySelectorAll(".account1").forEach(e=>{
            e.addEventListener("mouseover",(event)=>
            {
            event.target.querySelector(".downarrow").innerHTML=(`<img src=https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-thin-chevron-bottom-icon.png" alt="">`)
        })   	
    })
    document.querySelectorAll(".account1").forEach(e=>{
        e.addEventListener("mouseout",(event)=>
        {
        event.target.querySelector(".downarrow").innerHTML=(``)
    })   	
})
        // 6.

        // 7. popping out contact info box
        let to_open_contact_info=document.querySelector(".right_header_profilephoto");
let contact_info_popup_box=document.querySelector(".contact_info")
to_open_contact_info.addEventListener("click",()=>{
    contact_info_popup_box.classList.add("open_contact_info");
})    
let to_close_contact_info=document.querySelector(".to_close_contact_info");
to_close_contact_info.addEventListener("click",()=>{
    contact_info_popup_box.classList.remove("open_contact_info")
});//7.

// 8.

let plus_svg=document.querySelector(".plus_svg");
let plus_popup=document.querySelector(".plus_popup");
plus_svg.addEventListener("click",()=>{
    plus_svg.classList.toggle("plus_animation");
    plus_popup.classList.toggle("appear_plus_popup");
})


// 8.