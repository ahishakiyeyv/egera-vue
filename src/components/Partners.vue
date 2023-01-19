<template>
    <section>
        <div class="title">
                <h1 class="title1">Our Partners</h1>
            </div>
        <div class="container">
         <div class="cont1">
            <img src='../assets/freshStudio.png' alt="image non disponible" class="img1">
         </div>
         <div class="cont2">
            <img src='../assets/hogi.jpg' alt="image non disponible" class="img2">
         </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
section{
    min-height:60%;
}
.title1{
    text-align: center;
    font-size:2rem;
    color:#28A745;
}
.container{
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap:wrap;
}
.img1{
    height:auto;
    width:130px;
    cursor: pointer;
        filter: grayscale(100%);
    transition: all 0.3s
    
}
.img2{
     height:auto;
    width:130px;
    cursor: pointer;
        filter: grayscale(100%);
    transition: all 0.3s
}
.img1:hover{
    filter: grayscale(0%);
}
.img2:hover{
     filter: grayscale(0%);
}
</style>
