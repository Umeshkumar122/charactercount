# charactercount

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>character counter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Real time char counter</h1>
    <textarea  id="textArea" class="textArea"
    placeholder="Enter your message here any things you want." maxlength="1000"></textarea>
    <div class="counter">
      <h2>
        total Character
      <span id="total-Char"
      class="total-Char"></span>
      </h2>
      <h2>
        reamining-char
      <span id="remaining-Char"
      class="remaining-Char"></span>
      </h2>
    </div>
    </div> 
    <script src="index.js"></script>
  
</body>
</html>
