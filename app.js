var userName=prompt("Enter Your Name")
var FatherName=prompt("Enter Your Father Name")
var SURNAME=prompt("Enter Your Surname")
var INSTITUTE=prompt("Enter Your Institute Name")
var DISTRICT=prompt("Plz Enter Your District")

var englishMarks= +prompt("Enter English marks")
var urduMarks= +prompt("Enter Urdu marks")
var islamiyatMarks= +prompt("Enter Istamiyat marks")
var mathsMarks= +prompt("Enter Maths marks")
var physicsMarks= +prompt("Enter Physics marks")
var chemistryMarks= +prompt("Enter Chemistry marks")
var totalMarks =100;
var subTotal=600;
var obtainMarks= +englishMarks+urduMarks+islamiyatMarks+mathsMarks+physicsMarks+chemistryMarks;
var percantage= obtainMarks/subTotal*100

document.writeln(`
      <div10>
        <center>
      <h1>BOARD OF INTERMEDIATE & SECONDARY EDUCATION HYDERABAD SINDH </h1> 
    <h2>MARKS CERTIFICATE</h2> 

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklidogo9ya7h2M4KCjgiTpjEbv7IYIVLjZQ&s" width="150" height="150" style="float: right; margin: 50px;" alt="">
</center>
    &emsp; &emsp; &emsp; &emsp;<img src="./images-removebg-preview.png" alt="">
    
    <br>
    <br>
    <div>
    NAME: ${userName} <br>
    FATHER NAME:  ${FatherName} <br>
    SURNAME:${SURNAME} <br>
    INSTITUTE: ${INSTITUTE} <br>
    DISTRICT: ${DISTRICT} <br>
    <br> 
  </div> 
  <table border="1px"> 
     <tr>
        <th>SUBJECT</th>
        <th>MAX:MARKS</th>
        <th>MIN: MARKS</th>
        <th>OBTAINED MARKS</th>
        <th>REMAKRS</th>
        </tr>
    <tr>
      <td>English </td>
      <td>${totalMarks}</td>
      <td>-</td>
      <td>${englishMarks}</td>
      <td></td>
    </tr>
    <tr>
      <td>Urdu</td>
      <td>${totalMarks}</td>
      <td>-</td>
      <td>${urduMarks}</td>
      <td></td>
    </tr>
    <tr>
      <td>Maths</td>
      <td>${totalMarks}</td>
      <td>-</td>
      <td>${mathsMarks}</td>
      <td></td>
    </tr>
    <tr>
      <td>Islamiyat</td>
      <td>${totalMarks}</td>
      <td>-</td>
      <td>${islamiyatMarks}</td>
      <td></td>
    </tr>
    <tr>
      <td>Physics</td>
      <td>${totalMarks}</td>
      <td>-</td>
      <td>${physicsMarks}</td>
      <td></td>
    </tr>
    <tr>
      <td>Chemistry</td>
      <td>${totalMarks}</td>
      <td></td>
      <td>${chemistryMarks}</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="center">Total</td>
      <td colspan="2">${subTotal}</td>
      <td colspan="2">${obtainMarks}</td>
       </tr>
    </table>
      <h3>
        PERCENTAGE: ${percantage}%
        <br> <br> 
        ENROLMENT#: FDEP9202993491
      </h3>
      <br> <br>
     <img src="../New folder/Untitled-1.png" width="140px" height="90px" style="float: left; margin: 60px;" alt=""> &emsp; &emsp;&emsp;&emsp;&emsp; <img src="../New folder/Untitled-2.png" width="140px" height="90px"style="float: left; margin: 60px; margin-left:240px; alt="> <img src="../New folder/Untitled-3.png" width="140px" height="90px" style="margin-top: 70px;margin-left:160px;" alt="">  
    </div10>
    `)