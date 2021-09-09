<template>
    <el-menu  mode="horizontal" router>
  <el-menu-item index="/">Accueil</el-menu-item>
   <!-- <el-submenu v-for="item in items" :key="item.index" :index="item.index">
        <template slot="title">{{item.title}}</template>
        <el-menu-item v-for="subitem in items.subitems" :key="subitem.index">{{subitem.title}}</el-menu-item>
    </el-submenu> -->
    <el-menu-item index="/php">Cours</el-menu-item>
    <el-menu-item index="/php/tp">TP</el-menu-item>
</el-menu>
</template>

<script>
export default {
    data(){
        const defaultSubitems=[{title:"Cours", index:'cours'}]
        return {
            items:[
                {index:"php", title:"PHP", subitems:defaultSubitems},
                {index:"javascript", title:"Javascript",subitems:defaultSubitems},
            ]
        }
    }
}
</script>