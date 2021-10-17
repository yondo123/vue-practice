<template>
    <div>
        <header class="header">
            <div class="logoArea">
                <img src="../assets/app_logo.png" class="logo"/>
                <a>WhatTodo <br> Sample Vue TodoList</a>
            </div>
            <nav class="menu-right">
                <a href="#">Home</a>
                <a href="#" class="select">Todo</a>
            </nav>
        </header>
    </div>
</template>
<style>
.header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
}

.header a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 16px;
    line-height: 25px;
    border-radius: 4px;
}

.header a:hover {
    background-color: #ddd;
    color: black;
}

.header a.select {
    background-color: #FF9933;
    color: white;
}

/* 로고 */
.header .logoArea {
    position: absolute;
    top: 10px;
    left: 32px;
}

.header .logoArea a {
    color: darkgrey;
    font-size: 24px;
    position: absolute;
    width: 500px;
    text-align: left;
}

.header .logo {
    width: 100px;
}

.menu-right {
    float: right;
}

/* 섹션 h3 */
section h3 {
    color: var(--accent-color);
    text-decoration: underline;
    text-decoration-color: #ddd;
    text-underline-position: under;
    text-align: left;
    margin-left: 1.2rem;
    line-height: 1.1rem;
}
</style>
