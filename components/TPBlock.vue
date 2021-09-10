<template>
  <div>
    <el-row type="flex" justify="center">
      <h1>Liste des Travaux pratiques</h1>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <a href="/download/TP0.pdf" download
          ><el-button type="primary"
            >Introduction: Exercices de découverte
            <i class="el-icon-download el-icon-right"></i></el-button
        ></a>
        <a href="/download/TP1.pdf" download
          ><el-button type="primary"
            >TP1: Manipulation de tableaux et de formulaires
            <i class="el-icon-download el-icon-right"></i></el-button
        ></a>
        <a href="/download/TP2.pdf" download
          ><el-button type="primary"
            >TP2: Fonctions en PHP
            <i class="el-icon-download el-icon-right"></i></el-button
        ></a>
      </el-col>
    </el-row>
    <el-row><p>Les travaux pratiques sont à rendre</p></el-row>
  </div>
</template>
