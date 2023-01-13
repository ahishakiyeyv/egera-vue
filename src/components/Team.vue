<template>
    <section>
        <div class="container">
            <h1 class="title">Our Team</h1>
            <div class="card">
                <div class="card1">
                    <img src='../assets/MUNYESHAKA_CEO.jpg' alt="image non disponible" class="imgCard">
                    <h1 class="name">Aimable MUNYESHAKA</h1>
                    <h3 class="job">CEO, Backend Developper</h3>
                    <div class="socio">
                        <a href="#">github</a>
                        <a href="#">instagram</a>
                    </div>
                </div>
                <div class="card1 card2">
                    <img src='../assets/MUCIRO_COO.jpg' alt="image non disponible" class="imgCard">
                    <h1 class="name">Jean Bernard Beni MUCIRO</h1>
                    <h3 class="job">COO, Software Enginner</h3>
                    <div class="socio">
                        <a href="#">github</a>
                        <a href="#">twitter</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
.title{
    text-align:center;
    color:#28A745;
    padding:1rem;
    font-size:2rem;
    font-weight:700;
}
.card{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    margin:.5rem;
}
.card1{
    border:1px solid #EDEDED;
    border-radius:.5rem;
    width:240px;
    height:auto;
    padding:1.3rem;
    box-shadow: 0px 0px 20px -7px #000000;
}
.card1.card2{
    margin-left:1.2rem;
}
.imgCard{
    width:240px;
    height:auto;
    border-radius:0px 80px 0px 80px;
}
.name{
    font-size:1.2rem;
    text-align:center;
    padding:.5rem;
}
.job{
    font-size:1rem;
    color:#000;
    font-weight:300;
    text-align:center;
}
.socio{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
}
.socio a{
    padding:.5rem;
}
</style>
