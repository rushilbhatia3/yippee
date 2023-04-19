<?php
    $password= $_POST["psw"];
    $conn = new mysqli("localhost","rbhatia", $password, "rbhatia");
    if($conn->connect_error){
        echo"<p>failed to conect</p>";
        
        die($conn->error);
    }
    else{
        $myQuery = "select * from eastern";
        $result= $conn->query($myQuery);
        if(!$result){
            echo"<p>empty db</p>";
            die($conn->error);
        }
        else{
            for($i=0;$i<$result->num_rows;$i++){
                $result->data_seek($i);
                $row=$result->fetch_array(MYSQLI_ASSOC);
                echo '<div id="right"><p>name: ', $row["name"], "</p>";
                echo "<img src= ", $row["fname"] , "></div>";
                   
                
            }
            //$obj = $result->fetch_object();
            
            //echo"<p>name: $obj->name</p>";
            //echo"<p>elevation: $obj->elevation</p>";
            //echo"<p>avg snow: $obj->avgSnow</p>";
            //echo"<p>id: $obj->idnum</p>";
        }
    }
    ?>
