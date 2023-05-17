<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tu página web personal</title>
</head>
<body>
    <header>
        <h1>Mi Página Personal</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#programa-php-1">Programa PHP 1</a></li>
            <li><a href="#programa-php-2">Programa PHP 2</a></li>
            <li><a href="#programa-php-3">Programa PHP 3</a></li>
            <li><a href="#programa-js-1">Programa JavaScript 1</a></li>
            <li><a href="#programa-js-2">Programa JavaScript 2</a></li>
            <li><a href="#programa-js-3">Programa JavaScript 3</a></li>
            <li><a href="#programa-mixto">Programa Mixto</a></li>
        </ul>
    </nav>

    <main>
        <section id="inicio">
            <h2>Bienvenido a mi página web personal</h2>
            <p>¡Hola! Esta es mi página web personal donde comparto información sobre mí y algunos programas que he desarrollado.</p>
        </section>

        <section id="programa-php-1">
            <h2>Programa PHP 1 - Verificación de número par o impar</h2>
            <form method="get" action="">
                <input type="number" name="num" placeholder="Ingrese un número" required>
                <input type="submit" value="Verificar">
            </form>
        
            <?php
            if (isset($_GET['num'])) {
                $number = $_GET['num'];
                if ($number % 2 == 0) {
                    echo "$number es un número par.";
                } else {
                    echo "$number es un número impar.";
                }
            }
            ?>
        </section>
        
        
        

        <section id="programa-php-2">
            <h2>Programa PHP 2 - Cálculo del factorial</h2>
            <form method="get" action="">
                <input type="number" name="number" placeholder="Ingrese un número" required>
                <input type="submit" value="Calcular">
            </form>

            <?php
            function factorial($n) {
                if ($n == 0) {
                    return 1;
                } else {
                    return $n * factorial($n - 1);
                }
            }

            if (isset($_GET['number'])) {
                $number = $_GET['number'];
                $result = factorial($number);
                echo "El factorial de $number es: $result";
            }
            ?>
        </section>

        <section id="programa-php-3">
            <h2>Programa PHP 3 - Generador de números aleatorios</h2>
            <form method="get" action="">
                <label for="min">Valor mínimo:</label>
                <input type="number" id="min" name="min" required>
                <label for="max">Valor máximo:</label>
                <input type="number" id="max" name="max" required>
                <input type="submit" value="Generar">
</form>

<?php
        if (isset($_GET['min']) && isset($_GET['max'])) {
            $min = $_GET['min'];
            $max = $_GET['max'];
            $randomNumber = rand($min, $max);
            echo "El número aleatorio generado es: $randomNumber";
        }
        ?>
    </section>

    <section id="programa-js-1">
        <h2>Programa JavaScript 1 - Verificación de número par o impar</h2>
        <script>
        function verificarNumero() {
            var number = document.getElementById("number").value;
            if (number % 2 === 0) {
                alert(number + " es un número par.");
            } else {
                alert(number + " es un número impar.");
            }
        }
        </script>

        <input type="number" id="number" placeholder="Ingrese un número" required>
        <button onclick="verificarNumero()">Verificar</button>
    </section>

    <section id="programa-js-2">
        <h2>Programa JavaScript 2 - Cálculo del factorial</h2>
        <script>
        function calcularFactorial() {
            var number = document.getElementById("number").value;
            var result = 1;
            for (var i = 2; i <= number; i++) {
                result *= i;
            }
            alert("El factorial de " + number + " es: " + result);
        }
        </script>

        <input type="number" id="number" placeholder="Ingrese un número" required>
        <button onclick="calcularFactorial()">Calcular</button>
    </section>

    <section id="programa-js-3">
        <h2>Programa JavaScript 3 - Generador de números aleatorios</h2>
        <script>
        function generarNumeroAleatorio() {
            var min = parseInt(document.getElementById("min").value);
            var max = parseInt(document.getElementById("max").value);
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            alert("El número aleatorio generado es: " + randomNumber);
        }
        </script>

        <label for="min">Valor mínimo:</label>
        <input type="number" id="min" required>
        <label for="max">Valor máximo:</label>
        <input type="number" id="max" required>
        <button onclick="generarNumeroAleatorio()">Generar</button>
    </section>

    <section id="programa-mixto">
        <h2>Programa Mixto - Verificación de número par o impar en PHP y JavaScript</h2>
        <form method="get" action="">
            <input type="number" name="number" placeholder="Ingrese un número" required>
            <input type="submit" value="Verificar">
        </form>

        <?php
        if (isset($_GET['number'])) {
            $number = $_GET['number'];
            if ($number % 2 == 0) {
                echo "$number es un número par.";
                echo "<script>alert('$number es un número par.');</script>";
            } else {
                echo "$number es un número impar.";
                echo "<script>alert('$number es un número impar.');</script>";
            }
        }
        ?>
    </section>
</main>

<footer>
    <p>© 2023 Tu Nombre. Todos los derechos reservados.</p>
</footer>
</body>
</html>
