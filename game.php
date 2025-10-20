<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lección Interactiva 3D (Multinivel)</title>
    
    <script type="importmap">
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@0.140.0/build/three.module.js",
            "OrbitControls": "https://cdn.jsdelivr.net/npm/three@0.140.0/examples/jsm/controls/OrbitControls.js",
            "TWEEN": "https://unpkg.com/@tweenjs/tween.js@18.6.4/dist/tween.esm.js"
        }
    }
    </script>
    <link rel="stylesheet" href="css/style.css?v=1.0.9">
</head>
<body>
    <div id="loading-overlay" class="overlay">Cargando Escenario 3D...</div>

    <div id="mode-selection-overlay" class="overlay">
        <h2>Elige tu modo de juego</h2>
        <div class="feedback-buttons">
            <button id="mode-icons-btn" class="feedback-btn" style="width: 150px; height: 60px; font-size: 1.2rem;">Iconos</button>
            <button id="mode-text-btn" class="feedback-btn" style="width: 150px; height: 60px; font-size: 1.2rem;">Texto</button>
        </div>
    </div>

    <div id="sidebar-overlay"></div>
    <div id="sidebar">
        <button id="close-sidebar-btn">&times;</button>
        <div id="level-list"></div>
        <div id="mode-switcher">
            <button id="mode-switch-btn" class="feedback-btn">Cambiar de Modo</button>
        </div>
    </div>

    <div class="main-container">
        <div class="top-panel">
            <div id="stage">
                <button id="hamburger-btn">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <canvas id="stage-canvas"></canvas>
                <button id="run-button">Ejecutar Código</button>
                <div id="feedback-overlay" class="overlay">
                    <span id="feedback-message"></span>
                    <div class="feedback-buttons">
                        <button id="retry-button" class="feedback-btn">Volver a intentarlo</button>
                        <button id="next-level-button" class="feedback-btn" style="display:none;">Siguiente Nivel</button>
                    </div>
                </div>
            </div>
            <div id="code-area">
                <div id="user-info">
                    Hola, <b><?php echo htmlspecialchars($_SESSION["email"]); ?></b>. <a href="logout.php">Cerrar sesión</a>
                </div>
                <div id="level-hint-container">
                    <h3 id="level-hint-title">Objetivo de la Lección</h3>
                    <p id="level-hint-text"></p>
                </div>
                <div id="code-output-container">
                    <div id="code-output"></div>
                    <div id="code-output-icons"></div>
                </div>
            </div>
        </div>
        <div id="command-panel" class="bottom-panel"></div>
    </div>
    
    <script>
        // Inyectar el nivel de inicio desde PHP a una variable global
        window.startLevel = <?php echo isset($_SESSION['level']) ? $_SESSION['level'] : 0; ?>;
    </script>
    <script type="module" src="js/main.js?v=1.0.9"></script>
</body>
</html>

