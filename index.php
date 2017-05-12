<?php  $msg ="";
$link = new mysqli("localhost", "root", "", "aroomapp");


if(isset($_POST['username']) && isset($_POST['password']))
{
 
  $email =mysqli_real_escape_string($link, $_POST['username']);
  $password =mysqli_real_escape_string($link, $_POST['password']); 
  
  if(!empty($email)&&!empty($password)){
  $query ="select username, password from customers where username='$email' AND password='$password' ";
   $given =mysqli_query($link, $query);
   $count=mysqli_num_rows($given);
   if ($count==1){
    $get=mysqli_fetch_assoc($given);
    $name=$get['username'];
     header("location:home.html");
                } else{   $msg= 'Wrong login details.';}
  }else { $msg = "supply your login";}
  
  }
  ?>

<!DOCTYPE html>
<html lang="en-US">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Andela Room Services</title>
      <link rel="stylesheet" href="style.css"> 
             
         
   </head>
   
   <body class="size-1280">
      <header>
       <div class="line" style="height:44px;">
      <div class="w3-bar w3-topbar  w3-border-black w3-gray ">
      
      
      
</div>

</div>
                      </div>
         
      
         <div class="line">
            <div class="box">
               <div class="s-12"> 
               <h2 align="center">ANDELA ROOM MANAGEMENT SYSTEM</h2>
                  
               </div>
               
            </div>
         </div>
           
         <div class="line">
             <div class="line" style="height:44px;">
      <div class="w3-bar w3-topbar  w3-border-black w3-green ">
     
</div>
                      </div>
      </header>
      <style>
   .margin,.margin2x {display: block;}
.margin {margin:0 -0.625rem;}
.margin2x {margin:0 -1.25rem;}
.line {clear:left;}
.line .line {padding:0;}
.hide-l {display:none;}
.box {
  background:none repeat scroll 0 0 #fff;
  display:block;
  padding:1.25rem;
  width:100%;
}
   
   </style>
      <div class="line">
         <div class="box">
            <div class="margin2x">
            <h3><?php if (!empty($msg)){ echo $msg;}?></h3>
           <form   class="form1" enctype="multipart/form-data" method="post" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" >
 <input type="text" id="username" name="username"  required="required"  placeholder="enter username" title="username" /><br/>
    <input type="password"  placeholder="Enter Password" name="password"  required="required" title="password" /><br/>
  <input type="submit" value="Login">
</form>

              
               <section class="s-12 m-8 l-9 right">
                  <h4>About Us</h4>
                  <div class="margin">
                     <div class="s-12">
                        <p>
                        <h6>Room service or "in-room dining" is a hotel service enabling guests to choose menu items for delivery to their hotel room for consumption there, served by staff. Room service is organized as a subdivision within the Food & Beverage Department of high-end hotel and resort properties. It is uncommon for room service to be offered in hotels that are not high-end, or in motels.
A similar room service may be provided for guests onboard cruise ships.[1] Room service may be provided on a 24-hour basis or be late night service.</h6>
                        
          </p>
          <p><img src=an.jpg></p><br/>
                       
                   <h4> <strong>   Facilities and services</strong></h4>
At Imperial Hotel we guarantee check-in from 3.00 p.m., but if the room is ready upon your arrival, you are welcome to check-in before. If, on the other hand, the room is not ready when you arrive, you can store your luggage with us at no charge until the room is available.

Check-out from the room is at 12.00 p.m. at the latest, but if you need a late check-out, then contact our reception upon arrival, or during your stay, and we will do our best to accommodate your request. Similar to check-in, you have the option to store your luggage when checking out.  

If you're busy and can pay with a credit card, or your accommodation is already pre-paid, you can make use of our popular Express Check-out and avoid the waiting time. Our Express Check-out stands can be found in the lobby right next to the main entrance. The receipt for your stay will then be sent via e-mail on the same day. 
                     </div>
                     
                     
                     </div>
                     
                    
                     
                     
                     
                     
                  </div>
               </section>
             

           
               
            </div>
         </div>
      </div>
      
      
      
      <footer class="line">
         <div class="s-12">
            <p>Andela Room Service-2017</p>
         </div>
         
      </footer>     
   </body>
</html>