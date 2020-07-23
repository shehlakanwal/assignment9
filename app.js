// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a,b){
  
//    document.write(Math.pow(a,b)) 
// }

// power(2,3)


// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function leap_year(){

//     var year = document.getElementById("leap").value

//      if(year%100==0 && year%400==0 && year%4==0 || year%4==0 && year%100!=0){

//       alert("leap year")



//      }

//      else{

//         alert("not a leap year")
//      }

// }


// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

//    var a=2; b=3; c=4;
//   function cal_s(){
//      var s=a+b+c/2

//     //  alert(s)

//     return s
    
// } 

// cal_s(2,3,4)


// function cal_area(){

//     var S=cal_s()
//     var  area = S*(S-a)*(S-b)*(S-c)
//     alert(area)
// }

// cal_area()

// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
   
//   function mainfunc(){
    
//    alert( average(98,95,50)) 

//   alert(percentage(98,95,50)+"%") 

//   }

//   function average(math,phy,chem){
 
//     var avg=math+phy+chem/3

//     return avg
//   }


//   function percentage(math,phy,chem){


//     var per = (math+phy+chem)/300*100

//     return per


//   }

//   mainfunc()


// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.



// var a= "cendrella"

// function index(){

  
//     for(i=0;i<a.length;i++){
//     // var b =  a.split("")
//     if (a.charAt(i)==="l"){
// return i
//  }
    
// }
// }
// document.write(index())





// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.



    // var str = 'hello how are u?'

    // var res = str.replace(/a|e|i|o|u/g," ")

    // document.write(res)


//     Write a function with switch statement to count the number of
// occurrences of any two vowels 
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// var para="Pleases read this application and give me gratuity"
// function count(){
  

//     for(i=o;i<para.length;i++){
//     switch(para){
    
//         case "para[i]==":

//         alert(2)

//         case "ui":
//             alert(2)

//         case "ao":

//         alert(2)
//     }
// }
// }

// count()





// var str1 = "Pleases read this application and give me gratuity"
// function vowel_count()
// {
//   var vowel_list1 = 'aeAE';

//   var vowel_list2='ioIO'

//   var vowel_list3='uiUI'
//   var vcount = 0;




// var vowel_list1 = 'aeAE';

// var vowel_list2='ioIO'

// var vowel_list3='uiUI'

// var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list1.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
// }

// if (vowel_list2.indexOf(str1[x]) !== -1)
// {
//   vcount += 1;
// }
//     }
  

//     return vcount

// }

// console.log(vowel_count("Pleases read this application and give me gratuity"));


// function vowel_count(str1){

// // var str1 ="Pleases read this application and give me gratuity"
// for(x = 0; x < str1.length ; x++)
//     {
//     //   if (vowel_list1.indexOf(str1[x]) !== -1)
//     //   {
//     //     vcount += 1;

//     var vowel_list1 = 'aeAE';

//   var vowel_list2='ioIO'

//   var vowel_list3='uiUI'
//   var vcount = 0;


//   switch(str1){
    

  
//             case (vowel_list1.indexOf(str1[x]) !== -1):
    
//                return vcount += 1;

//                 // console.log(vcount);


//                 break;
    
           
//                 case (vowel_list2.indexOf(str1[x]) !== -1):
    
//                   return  vcount += 1;

//                     // console.log(vcount)
    
//                     break;
    
//                  case (vowel_list3.indexOf(str1[x]) !== -1):
    
//                     return   vcount += 1;

//                         // return   console.log(vcount)
        
//                         break;}
// }}// console.log(vowel_count("Pleases read this application and give me gratuity"));
// console.log(vowel_count("Pleases read this application and give me gratuity"));






// Consider you have following code snippet:
// (Copy it in your HTML file)

// 1.
// Get element of id “main-content” and assign them in a variable.
 
//  var a = document.getElementById('main-content')

//  console.log(a)


// Display all child elements of “main-content” element.

// var a = document.getElementById('main-content')
//     //  var b=a.childNodes[1].childNodes[0]

//     var b=a.childNodes[0]
//     console.log(b)
//     b=a.childNodes[1]
//     console.log(b)
//     b=a.childNodes[2]
//     console.log(b)
//     b=a.childNodes[3]
//     console.log(b)
//     b=a.childNodes[4]
//     console.log(b)
//     b=a.childNodes[5]
//     console.log(b)
//     b=a.childNodes[6]
//     console.log(b)
//     b=a.childNodes[7]
//     console.log(b)
//     b=a.childNodes[8]
//     console.log(b)
//     b=a.childNodes[9]
//     console.log(b)
//     b=a.childNodes[10]
//     console.log(b)
  

// Get all elements of class “render” and show their innerHTML
// in browser.

// var a = document.getElementsByClassName('render')
// // document.write(a[0].innerHTML)

// console.log(a)

// document.write(a[0].innerHTML)
// document.write(a[1].innerHTML)
// document.write(a[2].innerHTML)
// document.write(a[3].innerHTML)
// document.write(a[4].innerHTML)


// iv. Fill input value whose element id first-name using javascript.

// var a=document.getElementById('first-name')

// a.value = 'shehla '

// document.write(a.value)

// v. Repeat part iv for id ”last-name” and “email”.
// i.
// ii.
// iii.

// var a=document.getElementById('last-name')

// a.value = ' kanwal'

// document.write(a.value)


// var a=document.getElementById('email')

// a.value = ' shehlakanwal116@gmail.com'

// document.write(a.value)






// 2. use HTML code of question 1 and show the result on browser.
// i.
// ii.
// iii.
// iv.
// v.
// vi.
// What is node type of element having id “form-content”.
// Show node type of element having id “lastName” and its child node.
// Update child node of element having id “lastName”.
// Get First and last child of id “main-content”.
// Get next and previous siblings of id “lastName”.
// Get parent node and node type of element having id “email”


// var a = document.getElementById('form-content')


// var b= a.nodeType

//  document.write(b)



// var a = document.getElementById('lastName')


// // var b= a.nodeType

// // document.write(b)

// var c = a.childNodes[0]

// console.log(c)

// var a = document.getElementById('lastName')


//    var p= document.createElement("p")

//    var text = document.createTextNode("hello")

//    p.appendChild(text)

// //    console.log(p)

//   var update_node = a.childNodes

//    console.log(update_node)


//    var a = document.getElementById('main-content')

//    var b= a.childNodes[0]

//    console.log(b)

//    b= a.childNodes[10]

//    console.log(b)



// var a = document.getElementById('lastName')


// var b = a.nextSibling

// console.log(b)

//  b = a.previousSibling

// console.log(b)


// var a = document.getElementById('email')

// var b = a.parentNode

// console.log(b)

// b = a.nodeType
// console.log(b)



// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// var input = prompt('Enter any value')

// function convert_in_to_meter(){


//     var con =input/1000

//     document.write(con + "m"+"<br>")



// }


// function convert_in_to_feet(){


//     var con =input/3280.84

//     document.write(con + "ft" +"<br>")

// }


// function convert_in_to_inches(){


//     var con =input/39370.1

//     document.write(con + "inch"+"<br>")

// }

// function convert_in_to_centimeter(){


//     var con =input/100000

//     document.write(con + "cm"+"<br>")

// }

// convert_in_to_meter()

// convert_in_to_feet()

// convert_in_to_inches()

// convert_in_to_centimeter()



// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// var    paid_per_hour= 12.00


// var res = 12.00*40

// alert(res)


// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// var a ="Pleases read this application and give me gratuity"

// var b = a.split("")

// var count=0

// var arr=['ae','ei','io','ou','ui']

// for(i=0;i<a.length;i++){
//     for(x=0;x<arr.length;x++)
// {
//     if(a[i]+a[i+1]===arr[x]){
//         count++
//     }
// }}
// console.log(count)



// 1. Show an alert box on click on a link.
    
    //   function alr(){


    //     alert("hello")
    //   }



//     Display some Mobile images in browser. On click on an
// image Show the message in alert to user.




// function clic(){


//     alert('thanks for purchasing mobile from us')
// }


// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// function clic(){


//     var a = document.getElementById('img')

//     a.src="https://images.priceoye.pk/oppo-a9-2020-pakistan-priceoye-dwndm.jpg"
// }


// function cli(){


//     var a = document.getElementById('img')

//     a.src="https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiMi9-b.jpg"

    
// }


// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.


// function del1(){



//     var a= document.getElementById('btn1').remove()

//     var b =document.getElementById('td1')

//     b.innerHTML='0'

//     var c=document.getElementById('b1').remove()

//     // a.value
// }


// function del2(){



//     var a= document.getElementById('btn2').remove()

//     var b =document.getElementById('td2')

//     b.innerHTML='1'

//     var c=document.getElementById('b2').remove()

//     // a.value
// }


// function del3(){



//     var a= document.getElementById('btn3').remove()

//     var b =document.getElementById('td3')

//     b.innerHTML='2'

//     var c=document.getElementById('b3').remove()

//     // a.value
// }


// function del4(){



//     var a= document.getElementById('btn4').remove()

//     var b =document.getElementById('td4')

//     b.innerHTML='3'

//     var c=document.getElementById('b4').remove()

//     // a.value
// }

// function del5(){



//     var a= document.getElementById('btn5').remove()

//     var b =document.getElementById('td5')

//     b.innerHTML='4'

//     var c=document.getElementById('b5').remove()

//     // a.value
// }

// function del6(){



//     var a= document.getElementById('btn6').remove()

//     var b =document.getElementById('td6')

//     b.innerHTML='5'

//     var c=document.getElementById('b6').remove()

//     // a.value
// }

// function del7(){



//     var a= document.getElementById('btn7').remove()

//     var b =document.getElementById('td7')

//     b.innerHTML='6'

//     var c=document.getElementById('b7').remove()

//     // a.value
// }

// function del8(){



//     var a= document.getElementById('btn8').remove()

//     var b =document.getElementById('td8')

//     b.innerHTML='7'

//     var c=document.getElementById('b8').remove()

//     // a.value
// }


// function del9(){



//     var a= document.getElementById('btn9').remove()

//     var b =document.getElementById('td9')

//     b.innerHTML='8'

//     var c=document.getElementById('b9').remove()

//     // a.value
// }


// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// var count = 0;
// var a;
// function increase(){

//      a = document.getElementById('btn1')

//     count +=1

//     a.innerHTML="Increase:" + count

//     console.log(a)
// }
// function decrease(){

//    a = document.getElementById('btn2')

//     count -=1

//     a.innerHTML="Decrease:" + count

//    console.log(a)
// }


// Create a signup form and display form data in your web
// page on submission.


// function submitting(){
    
//     var a = document.getElementById('id1')
    

//     var p = document.createElement('p')
    
//     var text = document.createTextNode(id1.value)

//     p.appendChild(text)
  
//      var c=document.getElementById('submission')
    
//    var d= c.appendChild(p)

//    id1.value=""


//     a = document.getElementById('id2')
    

//     p = document.createElement('p')
   
//    text = document.createTextNode(id2.value)

//    p.appendChild(text)
 
//      c=document.getElementById('submission')
   
//    d= c.appendChild(p)

//    id2.value=""


//     a = document.getElementById('id3')
    

//     p = document.createElement('p')
   
//     text = document.createTextNode(id3.value)

//    p.appendChild(text)
 
//  c=document.getElementById('submission')
   
//    d= c.appendChild(p)




//    id3.value=""

//     // document.write(d)

//     // ee.value("")

//     id4.value=""

// }  


// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function getmore(){

//  var a = document.getElementById("para")

//  a.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat atque quisquam nesciunt voluptas a nemo ipsum quas expedita dolorem suscipit, unde architecto ipsam. Itaque illum officiis nam a sunt!"

// }


// . In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row




function del1(){


    var a= document.getElementById('btn1').remove()

   
}


function del2(){



    var c= document.getElementById('btn2').remove()
}


function del3(){
     var e= document.getElementById('btn3').remove()
}


function del4(){



    var g= document.getElementById('btn4').remove()

}

function edit1(){

    document.getElementById("btn1").contentEditable = "true";
}

function edit2(){

    document.getElementById("btn1").contentEditable = "true";
}

function edit3(){

    document.getElementById("btn1").contentEditable = "true";
}

function edit4(){

    document.getElementById("btn1").contentEditable = "true";
}