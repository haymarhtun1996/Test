<?php
      $query=$_POST['q'];

      $servername = "localhost";
      $username = "root";
      $password = "";
      $dbname = "sample_ornagai";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }

      $sql = "SELECT * FROM dblist WHERE Word LIKE '$query%'";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          // output data of each row
          while($row = $result->fetch_assoc()) {
              echo "Word :" .$row['Word']. "<br>" . " Def: " . $row['def']. "<br>";
          }
      } else {
          echo "0 results";
      }
      $conn->close();
      ?>
