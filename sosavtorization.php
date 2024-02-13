$login = $_POST['login'];
$pas = $_POST['password'];
if ($login == 'alexr27' && $pas == cees)
  {
  session_start();
  $_SESSION['admin'] = true;
  $script = 'sosavtorization.php';
  }
else
$script = 'sosadd.html';
header("Location: $script");