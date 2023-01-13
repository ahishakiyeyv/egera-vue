<template>
    <section>
        <div class="cardItem">
            <h1 class="title">Portfolio</h1>
            <div class="cardBox">
                <div class="cardbox1">
                    <img src='../assets/freshstudio.jpg' alt="image non disponible" class="card-img">
                    <h2 class="card-name">ARCT</h2>
                </div>
                <div class="cardbox1">
                    <img src='../assets/greenpasturess.jpg' alt="image non disponible" class="card-img">
                    <h2 class="card-name">BGM Group</h2>
                </div>
                <div class="cardbox1">
                    <img src='../assets/freshstudio.jpg' alt="image non disponible" class="card-img">
                    <h2 class="card-name">Fresh Studio</h2>
                </div>
                <div class="cardbox1">
                    <img src='../assets/greenpasturess.jpg' alt="image non disponible" class="card-img">
                    <h2 class="card-name">Green Pastures</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
.cardItem{
    padding:3rem 1rem
}
.title{
    color:#28A745;
    text-align:center;
    font-size:2rem;
    font-weight:800;
}
.cardBox{
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap:0px;
grid-row-gap: 25px;
margin-top:2rem;
}
.cardbox1{
    border:1px solid #ededed;
    padding:1rem 4rem;
    width:400px;
    height:auto;
    margin-left:3rem;
    box-shadow: 0px 0px 20px -7px #000000;
}
.card-img{ 
    width:400px;
    height:auto;
}
.card-name{
    font-size:1.8rem;
    text-align:center;
}
</style>
